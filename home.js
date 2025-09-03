console.log("f society");

document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    let availableBalance = parseFloat(document.getElementById("available-balance").innerText)
    let bank = document.getElementById("bank").value;
    let accountNumber = parseInt(document.getElementById("account-number").value);
    let addAmount = parseFloat(document.getElementById("add-amount").value);
    let addPin = parseInt(document.getElementById("add-pin").value);
    console.log(availableBalance);
    
    let totalNewBalance = availableBalance + addAmount;
    console.log(totalNewBalance);
    document.getElementById("available-balance").innerText = totalNewBalance;
})