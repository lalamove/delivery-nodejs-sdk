import { CallerModule } from "./http/util";

export interface IError {
    id?: string;
    message?: string;
    detail?: string;
}

export default class APIError extends Error {
    public httpStatus: number;

    public errors?: IError | IError[];

    public date: Date;

    public callerModule: CallerModule;

    constructor(cm: CallerModule, httpStatus: number, response: string, ...params: any) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params);

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, APIError);
        }

        this.name = "APIError";
        // Custom debugging information
        this.httpStatus = httpStatus;
        this.callerModule = cm;

        try {
            const r = JSON.parse(response);
            if (Array.isArray(r.errors)) {
                this.errors = <IError[]>r.errors;
            } else if (r.errors !== null && typeof r.errors === "object") {
                this.errors = <IError>r.errors;
            }
        } catch {
            const unknown: IError = {
                message: "Unknown error",
            };
            this.errors = unknown;
        }

        this.date = new Date();
    }

    mapErrorMessage(err: APIError | Error): string {
        if (!(err instanceof APIError)) {
            return err.message;
        }

        const schemaValidationErrors = ["ERR_INVALID_FIELD", "ERR_MISSING_FIELD"];
        const e = err.getError();
        if (err.errors && e.id && schemaValidationErrors.includes(e.id)) {
            const what = e.detail?.replace("/data/", "");
            const why = e.message;
            this.message = new Error(`Problem with ${what} because of ${why}`).message;

            return this.message;
        }

        if (err.httpStatus === 429) {
            return "You need to calm down. You hit the rate limit.";
        }

        if (err.callerModule === CallerModule.PostOrder) {
            if (err.httpStatus === 402) {
                return "Please check your wallet balance.";
            }
        }

        if (err.callerModule === CallerModule.ChangeDriver) {
            if (err.httpStatus === 404) {
                return "Driver not found.";
            }
        }

        if (err.callerModule === CallerModule.GetOrder) {
            if (err.httpStatus === 404) {
                return "Order not found.";
            }
        }

        if (e.message) {
            return e.message;
        }

        if (e.id) {
            return e.id;
        }

        return "Uknown error";
    }

    getError(): IError {
        if (this.errors === undefined) {
            return {};
        }
        if (Array.isArray(this.errors)) {
            const e = <IError[]>this.errors;
            return e[0];
        }
        return this.errors;
    }
}
