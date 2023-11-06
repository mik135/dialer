const buttons = document.querySelectorAll(".key");
const show = document.getElementById("show");
const call = document.querySelector("#call");
const backspace = document.querySelector("#backspace");

buttons.forEach(function(button) {
    button.addEventListener('click', () => {
        show.value += button.value;
    })
})

call.addEventListener('click', (e) => {
    e.preventDefault();
    if(show.value == "*310#") {
        alert("Main Bal: N0.1; Loan Bal: N1175.00; Talktime Bal: N0.00.\n Your balance is low. Dial *303# to borrow airtime and pay back later.");
    }else if(show.value == "*303#") {
        prompt("SaviNet Extra Credit\n0. Borrow Talk Time/Voice Bundle\n1. Eligibility and Help\n2. Borrow Credit\n3. Borrow data\n4. Repay Loan\nReply with your choice")
    }
     else {
        alert("Invalid USSD Code");
    }
})

backspace.addEventListener('click', (e) => {
    show.value = show.value.slice(0, -1);
})


