import { useContext } from 'react';
import { DollarContext } from '../context/DollarContext';
import { ContextInt } from '../interfaces/context_interfaces';
import { QuotationItem } from './QuotationItem';

export const QuotationHistory = () => {
    const {
        state: { quotations },
    } = useContext(DollarContext) as ContextInt;
    return (
        <>
            <div>QuotationHistory</div>
            {quotations.map((quotation) => (
                <QuotationItem key={quotation.reference} quotation={quotation} />
            ))}
        </>
    );
};
