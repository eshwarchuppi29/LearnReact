export function ConvertToIndianRupees(amount: number): string {
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
    });
    return formatter.format(amount);
}

export function ConverToUSDolor(amount: number): string {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });
    return formatter.format(amount);
}

export function ProductParamsToQueryString(productParams: object)
{
    const removeEmptyParams = Object.fromEntries(Object.entries(productParams)
    .filter(([,value])=>value!=="" && value!==null 
        && value!==undefined 
        && !(Array.isArray(value) 
        && value.length===0)));
    return removeEmptyParams;
}