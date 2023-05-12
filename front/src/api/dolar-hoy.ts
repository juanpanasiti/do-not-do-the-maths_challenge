// import { api, test} from "./client";
import axios from 'axios';
import { DollarApiResponse } from '../interfaces/dollar_interfaces';

export const getDollarValues = async (): Promise<DollarApiResponse> => {
    try {
        const { data } = await axios.get<DollarApiResponse>(
            'http://0.0.0.0:8001/api/dollar/values'
        );
        return data;
    } catch (error) {
        throw new Error(`Error getting data: ${error}`);
    }
};
