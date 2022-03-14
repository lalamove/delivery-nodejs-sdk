export interface IError {
    id?: string;
    message?: string;
    detail?: string;
}

export default class APIError extends Error {
    public path: string;

    public method: string;

    public httpStatus: number;

    public errors?: IError | IError[];

    public date: Date;

    constructor(
        path: string,
        method: string,
        httpStatus: number,
        response: string,
        ...params: any
    ) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params);

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, APIError);
        }

        this.name = "APIError";
        // Custom debugging information
        this.path = path;
        this.method = method;
        this.httpStatus = httpStatus;

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

    private geTError

    mapErrorMessage(err: IError | IError[] | Error): string {
        const schemaValidationErrors = ["ERR_INVALID_FIELD", "ERR_MISSING_FIELD"];
        if (err instanceof APIError) {
            const e = err.getError();
            if (err.errors && e.id && schemaValidationErrors.includes(e.id)) {
                const what = e.detail?.replace("/data/", "");
                const why = e.message;
                this.message = new Error(`Problem with ${what} because of ${why}`).message;

                return this.message;
            }
            if (err.httpStatus === 404) {
                if (this.path.includes("drivers")) {
                    this.message = "Driver not found.";
                } else if (this.path.includes("orders")) {
                    this.message = "Order not found";
                
            } else if (err.httpStatus === 422 && e.id === "ERR_INVALID_QUOTATION_ID")
             else {
                this.message = new Error(`${e.id} : ${e.message}`).message;
            }

            return this.message;
        }
        const r = <Error>err;
        return r.message;
    }
}
