import { Calculate_F } from "../Calculations/Calculations";


export const  reducer=(state={
    salary:0,
    netto:0
},action,InputValue)=>{
switch (action.type) {
    case 'inc':
        state.salary = InputValue
        state.netto = Calculate_F(state.salary)
        break;
    case 'dec':
        state.salary = InputValue
        state.netto = Calculate_F(state.salary)
        break;

    default:
        break;
}
}