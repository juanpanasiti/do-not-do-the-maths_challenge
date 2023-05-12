// import { TYPES } from '../reducers/actions/actions_dollar_quotation';
import { DollarValues, Quotation } from './dollar_interfaces';

interface FillDollarStatusAction {
    type: 'FILL_DOLLAR_VALUES',
    payload: DollarValues
}

interface AddQuotationAction {
    type: 'ADD_NEW_QUOTATION',
    payload: Quotation
}

interface SetCurrentQuotation {
    type: 'SET_CURRENT_QUOTATION',
    payload: Quotation,
}

export type Action = FillDollarStatusAction | AddQuotationAction | SetCurrentQuotation