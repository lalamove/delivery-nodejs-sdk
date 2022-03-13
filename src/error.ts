export interface IError {
    id?: string;
    message?: string;
    detail?: string;
}

export default class APIError extends Error {
    public httpStatus: number;

    public errors?: IError | IError[];

    public date: Date;

    constructor(httpStatus: number, response: string, ...params: any) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params);

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, APIError);
        }

        this.name = "APIError";
        // Custom debugging information
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

    getError(): string | undefined {
        if (this.errors === undefined) {
            return "unexpected error";
        }
        if (Array.isArray(this.errors)) {
            const e = <IError[]>this.errors;
            return e[0].message;
        }
        const e = <IError>this.errors;
        return e.message;
    }
}
