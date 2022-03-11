import Base from "./base";
import { default as QuotationResponse } from "./response/quotation";
import QuotationPayload from "./payload/quotationPayload";

export default class Quotation extends Base {
    create(market: string, quotationPayload: QuotationPayload): QuotationResponse {
        let makeQuotation = () => {
            return new QuotationResponse(
                "ID",
                new Date(),
                "MOTO",
                ["sp1", "sp2"],
                new Date(),
                { total: "12", currency: "HKD" },
                true,
                []
            );
        };

        return makeQuotation();
    }

    retrieve(market: string, id: string): QuotationResponse {
        let getQuotationById = (id: string) => {
            return new QuotationResponse(
                id,
                new Date(),
                "MOTO",
                ["sp1", "sp2"],
                new Date(),
                { total: "12", currency: "HKD" },
                true,
                []
            );
        };
        return getQuotationById(id);
    }

    isValid(market: string, id: string): boolean {
        let getQuotationById = (id: string) => {
            return new QuotationResponse(
                id,
                new Date(),
                "MOTO",
                ["sp1", "sp2"],
                new Date(),
                { total: "12", currency: "HKD" },
                true,
                []
            );
        };
        let quotation = getQuotationById(id);
        return quotation.expiresAt.getTime() < new Date().getTime();
    }
}
