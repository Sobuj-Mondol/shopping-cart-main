// functional mathod----------caseing
function updateCaseNumber(isIncreasing){
    let caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    
    if (isIncreasing == true){
        caseNumber = parseInt(caseNumber)+1;
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber)-1;
    }
    caseInput.value = caseNumber;
    //update case total
    let caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
    //pudate subTotal
    calculateTotal();
};
// functional mathod----------phone
function updatePhoneNumber(isIncreasing){
    let phoneInput = document.getElementById('phone-number');
    let phoneNumber = phoneInput.value;
    if(isIncreasing == true){
        phoneNumber = parseInt(phoneNumber)+1;
    }
    else if(phoneNumber > 0){
        phoneNumber = parseInt(phoneNumber)-1;
    }
    phoneInput.value = phoneNumber;
    //update phone total
    let phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNumber * 1219;
    //pudate subTotal
    calculateTotal();
};
// total price calculate
function getInputValue(product){
    let productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    let phoneTotal = getInputValue('phone')*1219;
    let caseTotal = getInputValue('case')*59;
    let subTotal = phoneTotal + caseTotal;
    let text = subTotal / 10;
    let totaPrice = subTotal + text;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('text-amount').innerText = text;
    document.getElementById('total-price').innerText = totaPrice;
}
// phone increase decrease events
// functional chara mathod-----------
document.getElementById('phone-plus').addEventListener('click',function(){
    /* let caseInput = document.getElementById('phone-number');
    caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber)+1; */
    updatePhoneNumber(true);
});
document.getElementById('phone-minus').addEventListener('click',function(){
    /* let caseInput = document.getElementById('phone-number');
    caseNumber = caseInput.value;
     */
    updatePhoneNumber(false);
});
// handel caseing increase decrease events
// functional chara mathod-----------
document.getElementById('case-plus').addEventListener('click', function(){
    /* let caseInput = document.getElementById('case-number');
    caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber)+1; */
    updateCaseNumber(true);
});
document.getElementById('case-minus').addEventListener('click', function(){
   /*  let caseInput = document.getElementById('case-number');
    caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber)-1; */
    updateCaseNumber(false);
});