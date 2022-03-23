export interface PriceBreakdown {
    base?: string;
    extraMileage?: string;
    surcharge?: string;
    coupon?: string;
    specialRequests?: string;
    priorityFee?: string;
    priorityFeeVat?: string;
    specialVehicle?: string;
    minimumSurcharge?: string;
    discountCap?: string;
    insurance?: string;
    multiStopSurcharge?: string;
    surchargeDiscount?: string;
    vat?: string;
    customerSupportDiscretionary?: string;
    totalBeforeOptimization?: string;
    totalExcludePriorityFee?: string;
    total: string;
    currency: string;
}
