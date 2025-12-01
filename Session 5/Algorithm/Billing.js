function calculateFinalPrice(basePrice, discountPercent, taxPercent, shippingFee) {
    // Step 2: Calculate discount
    var discountAmount = (basePrice * discountPercent) / 100;
    var priceAfterDiscount = basePrice - discountAmount;
    // Step 4: Calculate tax
    var taxAmount = (priceAfterDiscount * taxPercent) / 100;
    var priceAfterTax = priceAfterDiscount + taxAmount;
    // Step 6: Add shipping fee
    var finalPrice = priceAfterTax + shippingFee;
    return parseFloat(finalPrice.toFixed(2)); // Round to 2 decimals
}
// Example Usage
var basePrice = 1000;
var discountPercent = 10; // 10% discount
var taxPercent = 18; // 18% GST
var shippingFee = 50;
console.log("Final Price:", calculateFinalPrice(basePrice, discountPercent, taxPercent, shippingFee));
//calculate - final amount to be paid
//input - base price, discount, tax, shipping charges
//output - finalamount to be paid
//processing-> calculate discounted amount = base price*discount%
//-> amount = base price -discountedamount
//finaltaxableamount = amount*tax%
//finalamount = finaltaxableamount+shippingfee
