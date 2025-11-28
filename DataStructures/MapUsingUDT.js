var _a, _b;
//For you to explore
// Create a Map to store product stock (Product Name -> Stock Quantity)
var Product = /** @class */ (function () {
    function Product(pname, qty) {
        this.productname = "";
        this.qty = 0;
        this.productname = pname;
        this.qty = qty;
    }
    return Product;
}());
var p1 = new Product("iphone", 10);
var p2 = new Product("headset", 20);
var productStock = new Map();
// Adding products with initial stock
productStock.set("p001", p1);
productStock.set("p002", p2);
// Checking stock for a product
console.log("Stock for iphone: ".concat((_a = productStock.get("p001")) === null || _a === void 0 ? void 0 : _a.qty));
// Output: Stock for iphone: 10
// Updating stock after a purchase
function purchaseProduct(productKey, qty) {
    var _a;
    if (productStock.has(productKey)) {
        //check if that key is present in the object
        var currentProduct = productStock.get(productKey); //get the value for the particular key
        if (currentProduct.qty >= qty) {
            currentProduct.qty = currentProduct.qty - qty;
            productStock.set(productKey, currentProduct);
            console.log("\u2705 Purchased ".concat(qty, " ").concat(currentProduct.productname, "(s). Remaining stock: ").concat((_a = productStock.get(productKey)) === null || _a === void 0 ? void 0 : _a.qty));
        }
        else {
            console.log("\u274C Not enough stock for ".concat(currentProduct.productname, ". Only ").concat(currentProduct.qty, " left."));
        }
    }
    else {
        console.log("\u274C Product ".concat(productKey, " not found."));
    }
}
// Buying 2 iphones
purchaseProduct("p001", 2);
// Output: ✅ Purchased 2 iphone(s). Remaining stock: 8
// Trying to buy 6 headsets (Stock is 20)
purchaseProduct("p002", 6);
// Output: ✅ Purchased 6 headset(s). Remaining stock: 14
// Removing a product when out of stock
if (((_b = productStock.get("p001")) === null || _b === void 0 ? void 0 : _b.qty) === 0) {
    productStock.delete("p001");
}
