var customerName = 'bob' //customer name in the global scope
const leastFavoriteCustomer = 'sally'

function upperCaseCustomerName(){
customerName = customerName.toUpperCase() 
}


//Set Best Customer

function setBestCustomer(){
    bestCustomer = 'not bob'
}

//Overwrite Best Customer
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

//Least Favorite Customer
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Jackie'
}
