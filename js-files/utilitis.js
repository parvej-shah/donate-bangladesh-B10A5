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
    if(mainBalance>=0 && mainBalance>=value && value!=''){
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
    if(mainBalance>=donationAmount && mainBalance>=0){
        const newBalance = mainBalance - donationAmount;
    const newNeetDonation = neetDonation+donationAmount;
    neetDonationElement.innerText = newNeetDonation;
    setInnerTextById('main-balance',newBalance);
    /* history update */
    const historyContainer = document.getElementById('history-section');
    const newDiv = document.createElement('div');
    newDiv.classList.add(
        'space-y-3', 'p-4', 'rounded-2xl', 'lg:p-8' ,'border','border-text-primary-text/10'
    )
    /* header text */
    const p1 = document.createElement('h2');
    p1.classList.add(
        'font-bold', 'text-xl', 'text-primary-text'
    );
    p1.innerText = `${donationAmount} Taka is Donated for ${element.parentElement.firstElementChild.nextElementSibling.innerText}`;
    newDiv.appendChild(p1);
    /* paragraph text */
    const p = document.createElement('p');
    p.classList.add(
        'font-light', 'text-base', 'text-primary-text/70'
    )
    p.innerText = `Date: ${new Date}`
    newDiv.appendChild(p);
    console.log(historyContainer.children)
    historyContainer.insertBefore(newDiv,historyContainer.children[0])
    }else{
        alert("Your Balance is less Than your Donation")
    }
    
}
