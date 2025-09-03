console.log("f society");

// login button functionality
document.getElementById("loginButton").addEventListener("click", function (event) {
    event.preventDefault();
    let mobileNumber = 1922438860;
    let pinNumber = 1234;

    let mobileNumberValue = document.getElementById("mobile-number").value;
    let mobileNumberValueInt = parseInt(mobileNumberValue);

    let pinNumberValue = document.getElementById("pin-number").value;
    let pinNumberValueInt = parseInt(pinNumberValue);

    if (mobileNumber === mobileNumberValueInt && pinNumber === pinNumberValueInt) {
        window.location.href="./home.html"
    } else {
        alert(`invalid credentials`);
        
    }
})