//function to avoid letters on the calculator input
function isInputNumber(evt) {
    //let userInput = String.fromCharCode(evt.which);
    let userInput = evt.key;
    
    if((/[a-z]/.test(userInput))) {
        evt.preventDefault();
    }
}

//concart everything on the input text field to be evaluated
function calcNumbers(result){
    form.userInput.value=form.userInput.value+result;    
}

//display a squared number
function display(input) {
    document.getElementById('userInput').value += input;
    document.getElementById('userInput').focus();
}

//calculate percentage
function percent(val) {
    let x = document.getElementById('userInput').value;
    let a = eval(x);
    let y = a*100;
    document.getElementById('displayResult').value = y + '%';
}

//footer date
let date = new Date();
let yearPos = document.getElementById("getYear");
let currYear = date.getFullYear();
yearPos.innerHTML = currYear;