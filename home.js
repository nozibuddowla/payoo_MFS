console.log("f society");

let validPin = 1234;

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