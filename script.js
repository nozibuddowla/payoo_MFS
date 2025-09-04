console.log("f society");

// login button functionality
document.getElementById("loginButton").addEventListener("click", function (event) {
    event.preventDefault();
    let mobileNumber = 1922438860;
    let pinNumber = 1234;

    let mobileNumberValue = parseInt(document.getElementById("mobile-number").value);

    let pinNumberValue = parseInt(document.getElementById("pin-number").value);

    if (mobileNumber === mobileNumberValue && pinNumber === pinNumberValue) {
        window.location.href="./home.html";
    } else {
        alert(`invalid credentials`);
    }
})