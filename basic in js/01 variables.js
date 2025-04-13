const accountId = 9400 //cont is a keyword. we can not use it as a variable name and we want to change the value of accountId, so we can not change it.
let accountEmail = "abhi@gmail.com" //let is a keyword. we can use it as a variable name and we want to change the value of accountName, so we can change it.
var accountPassword = "123456" //var is a keyword. we can use it as a variable name and we want to change the value of accountPassword, so we can change it.
accountCity = "Delhi" //const is a keyword. we can use it as a variable name and we want to change the value of accountCity, so we can not change it.
   Phone: // In the case of java script this is a undefined value.
/*

Perfer not use var keyword 
because of issue in block scope funcational scope. write like old in <<(var = accountPassword)>>then use in new use accountCity.
*/
// accountID = 1234 //we can not change the value of accountId, so we can not change it.


accountEmail = "ayush@gmail.com"
accountPassword = "654321" 
accountCity = "Surat" // we can change it because it let and var are used to declare the variable and we can change the value of the variable.
//console.log(accountId) // this is the print for accountId
// but can use this method and this method is say table meathod we can enter only the variable name and then print.
console.table([accountId, accountEmail, accountPassword, accountCity]) // we can see the output is [ 9400, 'ayush@gmail.com', '654321', 'Surat' ] this is update or change the value of the variable//
console.log("acconutId")