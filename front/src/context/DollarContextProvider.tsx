import { useReducer, ReactNode } from 'react';
import { DollarContext } from './DollarContext';
import { dollarInitialState, dollarReducer } from '../reducers/dollar_reducers';

interface Props {
    children: ReactNode;
}

export const DollarContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(dollarReducer, dollarInitialState);
    return <DollarContext.Provider value={{ state, dispatch }}>{children}</DollarContext.Provider>;
};
