// Write your solution in this file!

// Declare a variable in global scope called customerName using the var keyword.
var customerName = 'bob';

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
customerName = customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
window.bestCustomer = 'not bob';
}

// Write a function that changes the bestCustomer variable.
function overwriteBestCustomer(newBestCustomer) {
window.bestCustomer = newBestCustomer;
}

// Declare a constant (using the const keyword) in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = 'Dom';

// Write a function that attempts to change the value of the constant.
function changeLeastFavoriteCustomer() {
leastFavoriteCustomer = 'Pat'; // This will throw an error: "Assignment to constant variable."
}