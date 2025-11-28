//For you to explore
// Create a Map to store product stock (Product Name -> Stock Quantity)
class Product{
    productname:string=""
    qty:number=0
    constructor(pname:string,qty:number){
        this.productname = pname
        this.qty = qty
    }

}
let p1 = new Product("iphone",10)
let p2 = new Product("headset", 20);
let productStock = new Map<string, Product>();

// Adding products with initial stock
productStock.set("p001",p1);
productStock.set("p002", p2);


// Checking stock for a product
console.log(`Stock for iphone: ${productStock.get("p001")?.qty}`);
// Output: Stock for iphone: 10

// Updating stock after a purchase
function purchaseProduct(productKey:string, qty:number): void {
  if (productStock.has(productKey)) {
    //check if that key is present in the object
    let currentProduct = productStock.get(productKey)!; //get the value for the particular key
    if (currentProduct.qty >= qty) {
      currentProduct.qty = currentProduct.qty - qty;
      productStock.set(productKey, currentProduct);
      console.log(
        `✅ Purchased ${
          qty
        } ${currentProduct.productname}(s). Remaining stock: ${productStock.get(productKey)?.qty}`
      );
    } else {
      console.log(
        `❌ Not enough stock for ${currentProduct.productname}. Only ${currentProduct.qty} left.`
      );
    }
  } else {
    console.log(`❌ Product ${productKey} not found.`);
  }
}

// Buying 2 iphones
purchaseProduct("p001", 2);
// Output: ✅ Purchased 2 iphone(s). Remaining stock: 8

// Trying to buy 6 headsets (Stock is 20)
purchaseProduct("p002", 6);
// Output: ✅ Purchased 6 headset(s). Remaining stock: 14

// Removing a product when out of stock
if (productStock.get("p001")?.qty === 0) {
  productStock.delete("p001");
}
