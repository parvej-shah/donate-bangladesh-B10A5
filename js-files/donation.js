document.getElementById('history-toggle-btn').addEventListener('click',()=>{
    toggleButton('history-toggle-btn','donation-toggle-btn');
    showAndHideElementByID('history-section','donation-section');
})
document.getElementById('donation-toggle-btn').addEventListener('click',()=>{
    toggleButton('donation-toggle-btn','history-toggle-btn');
    showAndHideElementByID('donation-section','history-section');
})
const allInputFields = document.getElementsByClassName('donate-amount');
for(const inputField of allInputFields){
    inputField.addEventListener('keyup',()=>{
        let value = inputField.parentElement.firstElementChild.lastElementChild.firstElementChild.innerText;
        if(inputValidation(inputField)){
            inputField.nextElementSibling.removeAttribute('disabled','true')
            /* event listener for donate button */
            inputField.nextElementSibling.addEventListener('click',(event)=>{
                calculateAndUpdate(inputField);
                inputField.value='';
                inputField.nextElementSibling.setAttribute('disabled','true')
            })
        }
        else if(!inputValidation(inputField)){
            inputField.nextElementSibling.setAttribute('disabled','true')
        }
    })
}