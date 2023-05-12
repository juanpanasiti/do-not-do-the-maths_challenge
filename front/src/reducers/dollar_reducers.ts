import { DollarState, Quotation } from '../interfaces/dollar_interfaces';
import { Action } from '../interfaces/action_interfaces';
export const dollarInitialState: DollarState = {
    values: {
        officialDollar: {
            buy: 0.0,
            sell: 0.0,
            date: '',
        },
        blueDollar: {
            buy: 0.0,
            sell: 0.0,
            date: '',
        },
        cclDollar: {
            buy: 0.0,
            sell: 0.0,
            date: '',
        },
        mepDollar: {
            buy: 0.0,
            sell: 0.0,
            date: '',
        },
    },
    status: 'empty',
    quotations: [],
    currentQuotation: {
        reference: '',
        pesos: 0,
        officialDollar: 0,
        blueDollar: 0,
        cclDollar: 0,
        mepDollar: 0,
    },
};

const updateQuotationList = (currentList: Quotation[], newQuotation: Quotation): Quotation[] => {
    const newList = [
        newQuotation,
        ...currentList.filter((quotation) => quotation.reference !== newQuotation.reference),
    ];

    return newList.slice(0, 10);
};

export function dollarReducer(state: DollarState, { type, payload }: Action): DollarState {
    switch (type) {
        case 'FILL_DOLLAR_VALUES':
            return {
                ...state,
                values: {
                    ...payload,
                },
            };
        case 'ADD_NEW_QUOTATION':
            return {
                ...state,
                quotations: [...updateQuotationList(state.quotations, payload)],
            };

        case 'SET_CURRENT_QUOTATION':
            return {
                ...state,
                currentQuotation: payload
            }

        default:
            return state;
    }
}
