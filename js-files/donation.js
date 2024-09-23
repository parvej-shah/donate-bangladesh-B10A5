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
    inputField.addEventListener('keyup',(event)=>{
        if(inputValidation(inputField)){
            inputField.nextElementSibling.removeAttribute('disabled','true')
        }
        else if(!inputValidation(inputField)){
            inputField.nextElementSibling.setAttribute('disabled','true')
        }
    })
}

const donateButtons = document.getElementsByClassName('donate-btn');
for(const button of donateButtons){
    /* event listener for donate button */
    button.addEventListener('click',()=>{
        calculateAndUpdate(button.previousElementSibling);
        button.previousElementSibling.value = '';
        button.setAttribute('disabled','true');
    })
}