console.log("f society");

let validPin = 1234;

// function to get input values
function getInputValue(id) {
    let element = document.getElementById(id); 
    return element.value !== undefined ? element.value : element.innerText;
}
function getInputValueFloatNumber(id) {
    return parseFloat(getInputValue(id));
}
function getInputValueIntNumber(id) {
    return parseInt(getInputValue(id));
}

// function to set innerText 
function setInnerText(value) {
    let availableBalance = document.getElementById("available-balance");
    
    availableBalance.innerText = value;    
}

// function to toggle
function handleToggle(id) {
    let forms = document.getElementsByClassName("form");
    for (const form of forms) {
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

// add money feature
document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    let availableBalance = getInputValueFloatNumber("available-balance");
    let bank = getInputValue("bank");
    let accountNumber = getInputValue("account-number");
    let addAmount = getInputValueFloatNumber("add-amount");
    let addPin = getInputValueIntNumber("add-pin");

    if (accountNumber.length !== 11) {
        alert("please provide valid account number!");
        return;
    }

    if (validPin !== addPin) {
        alert("Please provide valid pin number!");
        return
    }

    let totalNewBalance = availableBalance + addAmount;

    setInnerText(totalNewBalance);
    document.getElementById("add-amount").value = "";
    document.getElementById("bank").selectedIndex = 0;
    document.getElementById("account-number").value = "";
    document.getElementById("add-pin").value = "";
    
})

// cash out feature
document.getElementById("withdraw-btn").addEventListener("click", function (event) {
    event.preventDefault();
    let availableBalance = getInputValueFloatNumber("available-balance");
    let amount = getInputValueFloatNumber("withdraw-amount");
    

    let accountNumber = getInputValue("agent-number");
    let pin = getInputValueIntNumber("pin");
    

    if (accountNumber.length !== 11) {
        alert("please provide valid account number!");
        return;
    }

    if (validPin !== pin) {
        alert("Please provide valid pin number!");
        return;
    }

    let currentBalance = availableBalance - amount;
    setInnerText(currentBalance);

    document.getElementById("agent-number").value = "";
    document.getElementById("withdraw-amount").value = "";
    document.getElementById("pin").value = "";
})

// toggling feature
document.getElementById("add-button").addEventListener("click", function () {
    handleToggle("add-money-parent");
})

document.getElementById("cash-out-button").addEventListener("click", function () {
    handleToggle("cash-out-parent");
})

document.getElementById("transfer-button").addEventListener("click", function () {
    handleToggle("transfer-money-parent");
})

document.getElementById("get-bonus-button").addEventListener("click", function () {
    handleToggle("get-bonus-parent");    
})