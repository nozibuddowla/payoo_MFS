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

function handleButtonToggle(id) {
    let formBtns = document.querySelectorAll(".form-btn");
    for (const btn of formBtns) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-[#0808081a]");
    }
    let activeBtn = document.getElementById(id);
    activeBtn.classList.remove("border-[#0808081a]");
    activeBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
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

// transfer money features
document.getElementById("send-btn").addEventListener("click", function (event) {
    event.preventDefault();
    let availableBalance = getInputValueFloatNumber("available-balance");
    let transferAccountNumber = getInputValue("transfer-account-number");
    let transferAmount = getInputValueFloatNumber("transfer-amount");
    let transferPinNumber = getInputValueIntNumber("transfer-pin");

    if (transferAccountNumber.length !== 11) {
        alert("please provide valid account number!");
        return;
    }

    if (validPin !== transferPinNumber) {
        alert("Please provide valid pin number!");
        return;
    }

    let currentBalance = availableBalance - transferAmount;
    setInnerText(currentBalance);
    document.getElementById("transfer-account-number").value = "";
    document.getElementById("transfer-amount").value = "";
    document.getElementById("transfer-pin").value = "";
}) 

// Pay Bill features
document.getElementById("pay-btn").addEventListener("click", function (event) {
    event.preventDefault();

    let availableBalance = getInputValueFloatNumber("available-balance");

    let bank = getInputValue("pay-bank");
    let billerAccountNumber = getInputValue("biller-account-number");
    let payAmount = getInputValueFloatNumber("pay-amount");
    let payPin = getInputValueIntNumber("pay-pin");

    if (billerAccountNumber.length !== 11) {
        alert("please provide valid account number!");
        return;
    }

    if (validPin !== payPin) {
        alert("Please provide valid pin number!");
        return;
    }

    let currentBalance = availableBalance - payAmount;
    setInnerText(currentBalance);
    document.getElementById("biller-account-number").value = "";
    document.getElementById("pay-amount").value = "";
    document.getElementById("pay-pin").value = "";
})

// toggling feature
document.getElementById("add-button").addEventListener("click", function () {
    handleToggle("add-money-parent");
    handleButtonToggle("add-button");
})

document.getElementById("cash-out-button").addEventListener("click", function () {
    handleToggle("cash-out-parent");
    handleButtonToggle("cash-out-button");

})

document.getElementById("transfer-button").addEventListener("click", function () {
    handleToggle("transfer-money-parent");
    handleButtonToggle("transfer-button");

})

document.getElementById("get-bonus-button").addEventListener("click", function () {
    handleToggle("get-bonus-parent"); 
    handleButtonToggle("get-bonus-button");

})

document.getElementById("pay-bill-button").addEventListener("click", function () {
    handleToggle("pay-bill-parent"); 
    handleButtonToggle("pay-bill-button");

})