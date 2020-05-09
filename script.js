const increasePhone = document.getElementById('increase-phone');
const decreasePhone = document.getElementById('decrease-phone');
const increaseCase = document.getElementById('increase-case');
const decreaseCase = document.getElementById('decrease-case');

let countPhone = parseInt(document.getElementById('quantity-phone').value);
let countCase = parseInt(document.getElementById('quantity-case').value);
const phonePrice = 1219;
const casePrice = 59;
let subtotal = parseInt(document.getElementById('subtotal').innerText);
const tax = parseInt(document.getElementById('tax').innerText);
let total = parseInt(document.getElementById('total').innerText);



increasePhone.addEventListener('click', () => {

    countPhone++;
    calculatePrice(countPhone, countCase);

})

decreasePhone.addEventListener('click', () => {

    if(countPhone > 0) countPhone--;
    calculatePrice(countPhone, countCase);

})

increaseCase.addEventListener('click', () => {

    countCase++;
    calculatePrice(countPhone, countCase);

})

decreaseCase.addEventListener('click', () => {

    if(countCase > 0) countCase--;
    calculatePrice(countPhone, countCase);

})

function calculatePrice(countPhone, countCase) {

    let totalPhonePrice = countPhone * phonePrice;
    let totalCasePrice = countCase * casePrice; 
    subtotal = totalPhonePrice + totalCasePrice;
    total = subtotal + tax;

    document.getElementById('quantity-phone').value = countPhone;
    document.getElementById('quantity-case').value = countCase;
    document.getElementById('phone-price').innerText = totalPhonePrice;
    document.getElementById('case-price').innerText = totalCasePrice;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;

}