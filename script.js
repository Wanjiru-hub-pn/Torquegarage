 function checkAvailability() {
            let reg = document.getElementById("carReg").value.trim().toUpperCase();

            if (reg === "KDA126A") {
                document.getElementById("result").innerHTML =
                    "This car registration number exists.";
            } else {
                document.getElementById("result").innerHTML =
                 " Registration number is available.";
            }
        }
        function bookService() {
    alert("Your booking request has been submitted!");
}
