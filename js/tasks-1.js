function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(10, 2));


function getShippingMessage (country, price, deliveryFee){
    let totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`
}

console.log(getShippingMessage("Australia", 120, 50));

function getElementWidth (content, padding, border){
    const contentWidth = parseInt(content);
    const paddingWidth = parseInt(padding);
    const borderWidth = parseInt(border);

 
let totalWidth = contentWidth + paddingWidth * 2  +  borderWidth * 2;

return totalWidth;

}
console.log(getElementWidth("50px", "8px", "4px"));