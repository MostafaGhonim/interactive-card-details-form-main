
let nameCorrect;
let numberCorrect;
let monthCorrect;
let yearCorrect;
let cvvCorrect;

let photo = document.querySelector('.desk');
//--------------------Photo-Main ------------------------//
window.onresize = function () {
    if (window.innerWidth < 768) {
        photo.setAttribute('src', './images/bg-main-mobile.png')
        photo.style.transform
    } else {
        photo.setAttribute('src','./images/bg-main-desktop.png')
    }
}
//------------------------Name-Input----------------------------//
let inputName = document.querySelector('#nameCard');
let nameOncard = document.querySelector('.namePerson');
let wrong = document.querySelector('.name')
inputName.oninput = function () {
    if (/\b[a-z]+/i.test(inputName.value)) {
        inputName.style.border = "1px solid green"
        wrong.style.display = 'none'
        nameCorrect = true;
    }
    else {
        inputName.style.border = "1px solid red"
        wrong.style.display = 'block'
        nameCorrect = false;
    }
    if (inputName.value != "") {
        nameOncard.innerHTML = inputName.value
    } else {
        nameOncard.innerHTML = "John Doo"
        inputName.style.border = "1px solid #ddd"
        wrong.style.display = 'none'
        nameCorrect = false;
    }
}
inputName.onblur = function () {
    if (inputName.value === "") {
        inputName.style.border = "1px solid red";
        wrong.style.display = 'block'
        nameCorrect = true;
    }
}

//------------------------Number-Input ----------------------------//
let inputNumber = document.querySelector('#numberCard');
let numberOnCard = document.querySelector('.numberCard');
let error = document.querySelector('.number');

inputNumber.oninput = function () {
    
    if ((/[^a-z!@#$%^&*()_]+/ig).test(inputNumber.value)) {
        inputNumber.style.border = "1px solid green"
        error.style.display = "none"
        numberCorrect = true;

    } else {
        inputNumber.style.border = "1px solid red"
        error.style.display = "block"
        numberCorrect = false;
    }
    if (inputNumber.value != "") {
        numberOnCard.innerHTML = inputNumber.value.match(/\d{1,4}/g).join("-");
        inputNumber.value = inputNumber.value.match(/\d{1,4}/g).join("-");
    }
}
inputNumber.onblur = function () {
    if (inputNumber.value.length < 19) {
        inputNumber.style.border = "1px solid red"
        error.style.display = "block"
        numberCorrect = false;

}   if(inputNumber.value === "") {
    inputNumber.style.border = "1px solid red"
    error.style.display = "block"
    numberOnCard.innerHTML = "0000-0000-0000-0000"
    numberCorrect = false;
}
}

//------------------------Date-Input ----------------------------//
let inputMonth = document.querySelector('.month');
let inputYear  = document.querySelector('.year');
let month = document.querySelector('.mm');
let year = document.querySelector('.yy');
//---------------------------------------------------------------//
let errorMonth = document.querySelector('.monthMg');
let errorYear = document.querySelector('.yearMg');
//------------------------Month-Input ----------------------------//
inputMonth.oninput = function () {
    if (inputMonth.value != "" && inputMonth.value >= 1) {
        if (inputMonth.value <= 9){
            month.innerHTML = "0" +inputMonth.value;
        } else {
            month.innerHTML = inputMonth.value;
        }
        inputMonth.style.border = "1px solid green";
        errorMonth.style.display = "none"
        monthCorrect = true;
    } else if (inputMonth.value === "0") {
        errorMonth.style.display = "block"
        inputMonth.style.border = "1px solid red";
        monthCorrect = false;
    }
}
inputMonth.onblur = function () {
    if (inputMonth.value === "") {
        inputMonth.style.border = "1px solid red";
        errorMonth.style.display = "block"
        monthCorrect = false;
    }
}
//------------------------End Month-Input ----------------------------//


//------------------------ Year-Input -------------------------------//

inputYear.oninput = function() {
    if (inputYear.value != "" && inputYear.value >= 1) {
        year.innerHTML = inputYear.value;
        inputYear.style.border = "1px solid green";
        errorYear.style.display = "none"
        yearCorrect = true;
    } else if (inputYear.value === "0") {
        errorYear.style.display = "block"
        inputYear.style.border = "1px solid red";
        yearCorrect = false;
    }
}

inputYear.onblur = function () {
    if (inputYear.value === "") {
        inputYear.style.border = "1px solid red";
        errorYear.style.display = "block"
        yearCorrect = false;
    }
    if (inputYear.value.length < 2) {
        inputYear.style.border = "1px solid red";
        errorYear.style.display = "block"
        yearCorrect = false;
    }
}
//------------------------Cvv-Input----------------------------//

let inputCvv = document.querySelector('.inpCvv');
let cvvOnCard = document.querySelector('.cardCvv');
let errorCvv = document.querySelector('.cvvMg');
inputCvv.oninput = function() {
        if (inputCvv.value != "") {
            cvvOnCard.innerHTML = inputCvv.value;
            inputCvv.style.border = "1px solid green";
            errorCvv.style.display = "none"
            cvvCorrect = true;
        }
        else {
            cvvOnCard.innerHTML = "000"
            inputCvv.style.border = "1px solid red";
            errorCvv.style.display = "block"
            cvvCorrect = false;
    }
}
inputCvv.onblur = function () {
    if (inputCvv.value === "") {
        inputCvv.style.border = "1px solid red";
        errorCvv.style.display = "block"
        cvvCorrect = false;
    }
    if (inputCvv.value.length < 3) {
        inputCvv.style.border = "1px solid red";
        errorCvv.style.display = "block"
        errorCvv.textContent = "the Cvv Number Must be 3 Numbers"
        cvvCorrect = false;
    }
}



//------------------------submit-------------------------------//
let inputForm = document.querySelector('.input')
let btn = document.querySelector('.btnSub');


//------------------------PopUp-------------------------------//

let popUp = document.createElement('div');
let icon = document.createElement('img');
let thanks = document.createElement('h2');
let addCard = document.createElement('span');
let button = document.createElement('button');

btn.onclick = function () {
    if (nameCorrect === true && numberCorrect === true && monthCorrect === true && yearCorrect === true && cvvCorrect === true) {
    inputForm.innerHTML = ""
//------------------------show PopUp-----------------------------//
    inputForm.append(popUp)
    popUp.className = "popUp"
    popUp.append(icon)
    icon.className = "Finsh";
    popUp.append(thanks)
    thanks.className = "thanks";
    popUp.append(addCard)
    addCard.className = "AddCard";
    popUp.append(button)
    button.className = "btnPupUp";
//------------------------Content PopUp-----------------------------//
    icon.setAttribute('src', "./images/icon-complete.png");
    thanks.textContent = "Thank You !";
    addCard.textContent = "We've added your card details";
    button.textContent = "Continue"
    }
}

button.addEventListener('click', function () {
    window.location.reload()
})