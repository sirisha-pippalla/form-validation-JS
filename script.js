

function submitForm() {
    let bankName = document.getElementById("bankName").value;
    let accountNumber = document.getElementById('accountNumber').value;
    let ifsc = document.getElementById('ifsc').value;
    let branch = document.getElementById('branch').value;
    let holderName = document.getElementById('holderName').value;


    let err1 = document.getElementById("err1");
    if (bankName.length == 0) {
        err1.innerHTML = "Bank Name can not be empty".fontcolor('red');
    } else if(!isAlphabet(bankName)){
        err1.innerHTML = "Name should be alphabet".fontcolor('red')
    }else {
        err1.innerHTML = 'Success'.fontcolor('green');
    }
    // //account Number
    let err2 = document.getElementById('err2');
    if (accountNumber.length == 0) {
        err2.innerHTML = 'Account Number is required'.fontcolor('red');
    } else if (accountNumber.length != 11) {
        err2.innerHTML = 'Invalid account number'.fontcolor('red');
    } else if (!accountNumber == /[^0-9]/g) {
        err2.innerHTML = 'Account Number should be numaric'.fontcolor('red');
    } else {
        err2.innerHTML = 'success'.fontcolor('green');
    }

    // ifsc
    let err3 = document.getElementById('err3');
    if (ifsc.length == 0) {
        err3.innerHTML = 'IFSC required'.fontcolor('red');
    } else if (!isAlphaNumeric(ifsc)) {
        err3.innerHTML = 'IFSC should be alphanumaric'.fontcolor('red');
    } else {
        err3.innerHTML = 'success'.fontcolor('green')
    }

    // branch
    let err4 = document.getElementById('err4');
    if (branch.length == 0) {
        err4.innerHTML = 'Branch can not be empty'.fontcolor('red');
    } else if (!isAlphabet(branch)) {
        err4.innerHTML = 'Branch name must be alphabet'.fontcolor('red')
    } else {
        err4.innerHTML = 'success'.fontcolor('green')
    }

    //Holder name
    let err5 = document.getElementById('err5');
    if (holderName.length == 0) {
        err5.innerHTML = 'Name can not be empty'.fontcolor('red')
    } else if (!isAlphabet(holderName)) {
        err5.innerHTML = 'Name should be alphabet'.fontcolor('red')
    } else {
        err5.innerHTML = 'success'.fontcolor('green')
    }
}

// alphanumaric function
function isAlphaNumeric(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) || // numeric (0-9)
            !(code > 64 && code < 91) || // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }
    return true;
};

// function for alphabet

function isAlphabet(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z))
            return false;
        }
    }
    return true;
}