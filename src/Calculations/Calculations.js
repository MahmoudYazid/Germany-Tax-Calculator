export const Calculate_F=(GrossIncome)=>{
    const ChargeTax= .8;
    var Income_tax = 0;
    
    if (GrossIncome <=9408){
        Income_tax=0
    }
    if (GrossIncome >= 9408 && GrossIncome <= 55000) {
        Income_tax= .15
    }
    if (GrossIncome >= 56000 && GrossIncome <= 270000) {
        Income_tax = .42
    }
    if (GrossIncome >= 270000 ) {
        Income_tax = .45
    }
    return ChargeTax*Income_tax*GrossIncome
}