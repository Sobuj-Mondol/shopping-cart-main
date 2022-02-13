document.getElementById('case-plus').addEventListener('click', function(){
    let caseInput = document.getElementById('case-number');
    caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber)+1;
});
document.getElementById('case-mines').addEventListener('click', function(){
    let caseInput = document.getElementById('case-number');
    caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber)-1;

})