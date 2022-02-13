// functional mathod----------
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
};
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
})