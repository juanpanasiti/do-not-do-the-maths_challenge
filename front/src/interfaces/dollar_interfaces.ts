export interface Quotation {
    reference: string;
    pesos: number;
    officialDollar: number;
    blueDollar: number;
    cclDollar: number;
    mepDollar: number;
}

export interface DollarValues {
    officialDollar: DollarValue;
    blueDollar: DollarValue;
    cclDollar: DollarValue;
    mepDollar: DollarValue;
}

export interface DollarState {
    values: DollarValues;
    status: string;
    quotations: Quotation[];
    currentQuotation: Quotation;
}

export interface DollarApiResponse {
    official: DollarValue;
    blue: DollarValue;
    ccl: DollarValue;
    mep: DollarValue;
}

interface DollarValue {
    date: string;
    buy: number;
    sell: number;
}
