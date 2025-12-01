function calculateFinalPrice(
  basePrice: number,
  discountPercent: number,
  taxPercent: number,
  shippingFee: number
): number {
  // Step 2: Calculate discount
  const discountAmount = (basePrice * discountPercent) / 100;
  const priceAfterDiscount = basePrice - discountAmount;

  // Step 4: Calculate tax
  const taxAmount = (priceAfterDiscount * taxPercent) / 100;
  const priceAfterTax = priceAfterDiscount + taxAmount;

  // Step 6: Add shipping fee
  const finalPrice = priceAfterTax + shippingFee;

  return parseFloat(finalPrice.toFixed(2)); // Round to 2 decimals
}

// Example Usage
const basePrice = 1000;
const discountPercent = 10; // 10% discount
const taxPercent = 18; // 18% GST
const shippingFee = 50;

console.log(
  "Final Price:",
  calculateFinalPrice(basePrice, discountPercent, taxPercent, shippingFee)
);

//calculate - final amount to be paid
//input - base price, discount, tax, shipping charges
//output - finalamount to be paid
//processing-> calculate discounted amount = base price*discount%
//-> amount = base price -discountedamount
//finaltaxableamount = amount*tax%
//finalamount = finaltaxableamount+shippingfee
