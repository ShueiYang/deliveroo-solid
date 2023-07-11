
export function convertToNumber (price: string) {
    return Number(price.replace(/[^0-9,-]+/g,"").replace(",","."));
}