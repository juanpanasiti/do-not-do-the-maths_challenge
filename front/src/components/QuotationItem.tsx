import { useContext } from 'react';
import { Quotation } from '../interfaces/dollar_interfaces';
import { DollarContext } from '../context/DollarContext';
import { ContextInt } from '../interfaces/context_interfaces';

interface Props {
    quotation: Quotation;
}
export const QuotationItem = ({ quotation }: Props) => {
    const { state, dispatch } = useContext(DollarContext) as ContextInt;
    const handleClick = () => {
        dispatch({
            type: 'SET_CURRENT_QUOTATION',
            payload: quotation,
        });
    };
    const isActive = state.currentQuotation.reference === quotation.reference
    const color = isActive ? 'light' : 'primary'

    return (
        <div className={`card ${isActive ? 'text-bg-success' : 'border-primary'} mb-3`} onClick={handleClick}>
            <div className={`card-header bg-transparent border-${color}`}>
                <h5 className={`text-${color}`}>
                    {quotation.reference}{' '}
                    <small className='text-dark'> - ARS {quotation.pesos}</small>{' '}
                </h5>
            </div>
        </div>
    );
};
