
import { createStore } from 'redux'
import {  Calculate_F} from "../Calculations/Calculations";
const initialState = {
    gros:0,
    netto: 0 

};
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_gros':
            return {
                
                gros: action.salary,
                netto: Calculate_F(state.gros)
            };
        default:
            return state;
    }
};
export const store = createStore(Reducer)