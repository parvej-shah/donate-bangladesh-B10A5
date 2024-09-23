function toggleButton(id1,id2){
    document.getElementById(id1).classList.add(
        'text-primary-text',
        'bg-primary-bg'
    );
    document.getElementById(id1).classList.remove(
        'text-primary-text/70',
        'border',
        'border-primary-text/30'
    );
    document.getElementById(id2).classList.remove(
        'text-primary-text',
        'bg-primary-bg'
    );
    document.getElementById(id2).classList.add(
        'text-primary-text/70',
        'border',
        'border-primary-text/30'
    );
}
function showAndHideElementByID(id1,id2){
    document.getElementById(id1).classList.remove('hidden');
    document.getElementById(id2).classList.add('hidden');
}
function getInputValueById(id){
    return document.getElementById(id).value;
}
function getInnerTextById(id){
    return document.getElementById(id).innerText;
}
function setInnerTextById(id,value){
    document.getElementById(id).innerText = value;
}
function inputValidation(element){
    let value = Number(element.value);
    const mainBalance = Number(getInnerTextById('main-balance'));
    if(mainBalance>=0 && mainBalance>value && value!=''){
        return true;
    }
    else{
        if(mainBalance<value){
            alert("You dont have enough balance")
        }
        else{
            alert('Your Input is not Valid')
        }
        return false;
    }
}
function calculateAndUpdate(element){
    let donationAmount = Number(element.value);
    let mainBalance = Number(getInnerTextById('main-balance'));
    const neetDonationElement = element.parentElement.firstElementChild.lastElementChild.firstElementChild;
    let neetDonation = Number(neetDonationElement.innerText)
    const newBalance = mainBalance - donationAmount;
    const newNeetDonation = neetDonation+donationAmount;
    neetDonationElement.innerText = newNeetDonation;
    setInnerTextById('main-balance',newBalance);
}
