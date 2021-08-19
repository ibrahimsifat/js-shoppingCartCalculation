//seelection 
let phonePlus = document.getElementById('phone-plus')
let phoneMinus = document.getElementById('phone-minus')
let phoneNumber = document.getElementById('phone-number')
let phoneTotal = document.getElementById('phone-total"')
    // case selection
let casePlus = document.getElementById('case-plus')
let caseMinus = document.getElementById('case-minus')
let caseNumber = document.getElementById('case-number')
let caseTotal = document.getElementById('case-total"')
    //total 
let subTotal = document.getElementById('sub-total')
let taxAmount = document.getElementById('tax-amount')
let totalPrice = document.getElementById('total-price')


function getPlusMinus(product, price, isAdd) {
    let productNumber = document.getElementById(product + '-number')
    let productInput = parseInt(productNumber.value)
        // let productString = parseInt(productInput)

    // let productamount = parseInt(productInput)
    if (isAdd) {
        productInput = productInput + 1
    } else if (productInput > 0) {
        productInput = productInput - 1
    }
    productNumber.value = productInput
        //productNumber.value = productInput
    const phoneTotal = document.getElementById(product + '-total')

    phoneTotal.innerText = productInput * price
        //call calculateTotal
    calculateTotal()
}



function getInputValue(product) {
    let productTotal = document.getElementById(product + '-number')
    let productTotalNumber = parseInt(productTotal.value)
    return productTotalNumber
}

function calculateTotal() {
    let totalPhonePrice = getInputValue('phone') * 1219
    let totalCasePrice = getInputValue('case') * 59
    subTotal.innerText = totalPhonePrice + totalCasePrice
    taxAmount.innerText = subTotal.innerText / 10
        // total price
    totalPrice.innerText = parseInt(subTotal.innerText) + parseInt(taxAmount.innerText)


}






// phone plus
phonePlus.addEventListener('click', function() {
        getPlusMinus('phone', 1219, true)
    })
    // phone plus
phoneMinus.addEventListener('click', function() {
        getPlusMinus('phone', 1219, false)
    })
    // case plus
casePlus.addEventListener('click', function() {
        getPlusMinus('case', 59, true)
    })
    // case plus
caseMinus.addEventListener('click', function() {
    getPlusMinus('case', 59, false)
})