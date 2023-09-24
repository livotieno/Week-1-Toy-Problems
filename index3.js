function nssfDeductionsCalculator(grossPayInput){
    const nssfRates = 0.06;
    if (grossPayInput >= 18000){
        nsssfDeductions = 1080;
        return nssfDeductions
    }
    else{
        nssfDeductions =nssfRates * grossPayInput;
        return nssfDeductions;
    }

}
function nssfDeductionsCalculator(grossPayInput){
    switch (true){
        case grossPayInput <= 5999:
           return 150;
        case  grossPayInput <= 7999:
            return 300;
        case  grossPayInput <= 11999:
            return 400;
        case  grossPayInput <= 14999:
            return 500; 
        case  grossPayInput <= 19999:
            return 600;
        case  grossPayInput <= 24999:
            return 750;
        case  grossPayInput <= 29999:
            return 850;
        case  grossPayInput <= 34999:
             return 900;
        case  grossPayInput <= 39999:
            return 950;
        case  grossPayInput <= 44999:
            return 1000;
        case  grossPayInput <= 49999:
            return 1100;
        case  grossPayInput <= 59999:
            return 12000;
        case  grossPayInput <= 69999:
            return 13000;
        case  grossPayInput <= 79999:
            return 14000;
        case  grossPayInput <= 89999:
            return 15000;
        case  grossPayInput <= 99999:
            return 16000;
        case  grossPayInput >= 100000:
            return 1700;
            return;                          
  }
}
function payAsYouEarnCalculator(taxableIncomeInput){
    let tax =0
    let newTaxableAmount;
    if (taxableIncomeInput <= 24000) {
        tax;
    }
    else {
        newTaxableAmount = taxableIncomeInput - 24000;
        if (newTaxableAmount >= 8333){
            newTaxableAmount -= 8333;
            tax += 2083;
            if (newTaxableAmount <= 467667){
                tax += (0.3 * newTaxableAmount)
            }
            else if (newTaxableAmount > 467667){
                newTaxableAmount -= 467667;
                tax += 140300
                if (newTaxableAmount <=300000)
                tax += (0.325 * newTaxableAmount)
            }
            else if (newTaxableAmount > 300000){
                tax += 97500;
                newTaxableAmount -= 300000;

                if (newTaxableAmount >= 1)
                 tax += (newTaxableAmount * 0.35)
            }

        }
    }
         if (newTaxableAmount < 8333) {
            tax = 0.25 * newTaxableAmount;
            return Math.riond(tax);

    }

}
function netSalaryCalculator(grossPayInput){
    if (grossPayInput = number)
    retun `Please enter a number`
}

return{
    'Gross Income': grossIncome,
    'NSSF Deductions': nssfDeductions,
    'NHIF Deuctions' : nhifDeductions,
    'Taxable Income': taxableIncome,
    'PAYE': payAsYouEarnCalculator,
    'Net Salary': netSalary,
    
}
