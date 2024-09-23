const accountId= 1453
let accountEmail="avni17@gmail.com"
var accountPassword="123456" //scope issue
accountCity="Banglore"
let accountState //undefined value
//accountId=1234 //not allowed


accountEmail="jain13@gmail.com"
accountPassword="3478899"
accountCity="Pune"  //not a right way but this is also one of the possibility


console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountEmail,accountId,accountPassword,accountCity]) //to print in tabular form
console.log(accountState);
/*
Prefer not to use var because of issue in block and functional issue
*/