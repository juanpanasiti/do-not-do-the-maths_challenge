import { useContext, useEffect, useState } from 'react';
import { Quotation } from '../interfaces/dollar_interfaces';
import { ContextInt } from '../interfaces/context_interfaces';
import { DollarContext } from '../context/DollarContext';

export const QuoteForm = () => {
    const { state, dispatch } = useContext(DollarContext) as ContextInt;
    const [form, setForm] = useState<Quotation>(state.currentQuotation);
    const { values } = state;

    useEffect(() => {
        setForm(state.currentQuotation);
    }, [state.currentQuotation]);

    const calculateQuotation = (): Quotation => {
        const officialDollar = Number((form.pesos / values.officialDollar.sell).toFixed(2));
        const blueDollar = Number((form.pesos / values.blueDollar.sell).toFixed(2));
        const cclDollar = Number((form.pesos / values.cclDollar.sell).toFixed(2));
        const mepDollar = Number((form.pesos / values.mepDollar.sell).toFixed(2));

        const quotation: Quotation = {
            ...form,
            officialDollar,
            blueDollar,
            cclDollar,
            mepDollar,
        };

        return quotation;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const quotation = calculateQuotation();
        setForm(quotation);
        dispatch({
            type: 'ADD_NEW_QUOTATION',
            payload: quotation,
        });

        dispatch({
            type: 'SET_CURRENT_QUOTATION',
            payload: quotation,
        });
    };

    const handleFormChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        if (target.name === 'reference') {
            setForm({ ...form, reference: target.value });
        } else if (target.name === 'pesos') {
            setForm({ ...form, pesos: parseFloat(target.value) });
        }
    };

    const handleCalc = () => {
        const quotation = calculateQuotation();
        setForm(quotation);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='reference' className='form-label'>
                        Referencia
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='reference'
                        name='reference'
                        value={form?.reference}
                        onChange={handleFormChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='amount' className='form-label'>
                        Monto en Pesos
                    </label>
                    <input
                        type='number'
                        className='form-control'
                        id='amount'
                        name='pesos'
                        value={form?.pesos}
                        onChange={handleFormChange}
                        step='0.01'
                        min='0'
                    />
                </div>
                <button type='submit' className='btn btn-success ml-3'>
                    Calcular + Guardar
                </button>
                <a onClick={handleCalc} className='btn btn-info'>
                    Solo Calcular
                </a>
                {/* <pre>{JSON.stringify(form, null, 3)}</pre> */}
                {/* <pre style={{color:'red'}} >{JSON.stringify(state.currentQuotation, null, 3)}</pre> */}
            </form>
            <hr />
            <ul className='list-group'>
                <li className='list-group-item'><strong>Equivalencia en dólares (USD)</strong></li>
                <li className='list-group-item'><strong>Oficial: </strong> {form.officialDollar}</li>
                <li className='list-group-item'><strong>Blue: </strong> {form.blueDollar}</li>
                <li className='list-group-item'><strong>CCL: </strong> {form.cclDollar}</li>
                <li className='list-group-item'><strong>MEP: </strong> {form.mepDollar}</li>
            </ul>
        </>
    );
};
