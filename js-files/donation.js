/* event listener for history page */
document.getElementById('history-toggle-btn').addEventListener('click',()=>{
    toggleButton('history-toggle-btn','donation-toggle-btn');
    showAndHideElementByID('history-section','donation-section');
})
/* event listener for donation page */
document.getElementById('donation-toggle-btn').addEventListener('click',()=>{
    toggleButton('donation-toggle-btn','history-toggle-btn');
    showAndHideElementByID('donation-section','history-section');
})

/* event listener for donate button */
const donateButtons = document.getElementsByClassName('donate-btn');
for(const button of donateButtons){
    button.addEventListener('click',()=>{
        if(inputValidation(button.previousElementSibling)){
            calculateAndUpdate(button.previousElementSibling);
            button.previousElementSibling.value = '';
        }
        
    })
}

document.getElementById('blog-btn').addEventListener('click',()=>{
    location.href = './blog.html'
})