export function convertStringPriceToNumber(price:string): number {
    let priceAsText = price.substring(1);
    let priceAsNumber = Number(priceAsText);
    return priceAsNumber;
}