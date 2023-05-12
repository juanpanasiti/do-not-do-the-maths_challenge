import { DollarState } from './dollar_interfaces';
import { Action } from "./action_interfaces";

export interface ContextInt{
    state: DollarState;
    dispatch: React.Dispatch<Action>
}