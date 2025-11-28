let accountHolderInfo:any = {
    accountNo: 12345,
    accountHolderName: "John Doe",
    typeofAccount:"elite",
    isActive:true,
}
let CustomerDetails: any = [
    {
        accountNo: 12346,
        accountHolderName: "JohNaveenn Doe",
        typeofAccount:"SB",
        isActive:true,
    },
    {
        accountNo: 12347,
        accountHolderName: "JohNaveenn Doe",
        typeofAccount:"SB",
        isActive:true,
    },
];
let accountHolderName: any = "Navee";
let customerData: any = {
    accountNo: 12347,
    accountHolderName: "JohNaveenn Doe",
    typeofAccount:"SB",
    isActive:true,
    address: {State: "TN", City: "Madurai"},
    
};
console.log(customerData)
type customerType = { [key: string]: string | boolean | number };

let customer1: customerType = {
  accountNo: 1003,
  accHolderName: "Yashwanth",
  typeofAcc: "SB",
  IsActive: true,
  balance: 90000,
};
let customer2: customerType = {
  accountNo: 1004,
  accHolderName: "Sudha",
  typeofAcc: "Elite",
  IsActive: true,
  address: "chennai",
};

console.log(customer1);
console.log(customer2);
type customerDataType = {
  accountNo: number;
  accHolderName: string;
  typeofAcc: string;
  IsActive: boolean;
};

let customer3: customerDataType = {
  accountNo: 1004,
  accHolderName: "Sudha",
  typeofAcc: "Elite",
  IsActive: true,
  //address: "chennai", //restricted
};

interface ICustomerDataType  {
  accountNo: number;
  accHolderName: string;
  typeofAcc: string;
  IsActive: boolean;
};

let customer4: ICustomerDataType = {
  accountNo: 1004,
  accHolderName: "Sudha",
  typeofAcc: "Elite",
  IsActive: true,
  //address: "chennai", //restricted
};
console.log(customer4)