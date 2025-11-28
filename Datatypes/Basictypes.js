var accountNumber = 12345;
console.log(accountNumber);
var accountHolderName = "Naveen";
var isAccountActive = true;
//typescript superset of js
//js is the subset of ts
//whatever you write using js it is acceptable in ts also   //not vice-versa
//let transactionID:bigint =987565433456n;
var balance = 10000;
function makeTransaction(amount) {
    if (balance < amount) {
        return "Insufficient balance";
    }
    else
        balance = balance - amount;
    return balance;
}
console.log(makeTransaction(20000));
