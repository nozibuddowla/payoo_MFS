console.log("f society");

let validPin = 1234;

// add money feature
document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    let availableBalance = parseFloat(document.getElementById("available-balance").innerText)
    let bank = document.getElementById("bank").value;
    let accountNumber = document.getElementById("account-number").value;
    let addAmount = parseFloat(document.getElementById("add-amount").value);
    let addPin = parseInt(document.getElementById("add-pin").value);

    if (accountNumber.length !== 11) {
        alert("please provide valid account number!");
        return;
    }

    if (validPin !== addPin) {
        alert("Please provide valid pin number!");
        return
    }

    let totalNewBalance = availableBalance + addAmount;
    document.getElementById("available-balance").innerText = totalNewBalance;
    document.getElementById("add-amount").value = "";
    document.getElementById("bank").value = "";
    document.getElementById("account-number").value = "";
    document.getElementById("add-pin").value = "";
    
})


// cash out feature
document.getElementById("withdraw-btn").addEventListener("click", function (event) {
    event.preventDefault();
    let availableBalance = parseFloat(document.getElementById("available-balance").innerText);
    let amount = parseFloat(document.getElementById("withdraw-amount").value);
    

    let accountNumber = document.getElementById("agent-number").value;
    let pin = parseInt(document.getElementById("pin").value);
    

    if (accountNumber.length !== 11) {
        alert("please provide valid account number!");
        return;
    }

    if (validPin !== pin) {
        alert("Please provide valid pin number!");
        return;
    }

    let currentBalance = availableBalance - amount;
    document.getElementById("available-balance").innerText = currentBalance;

})

// toggling feature
document.getElementById("add-button").addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
})

document.getElementById("cash-out-button").addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "block";
    document.getElementById("add-money-parent").style.display = "none";
})
