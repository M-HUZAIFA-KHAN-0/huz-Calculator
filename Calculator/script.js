let result = "";

let digitsDisplay = document.querySelector(".digits-display")
let digitBTN = document.querySelectorAll(".digit-btn")
let backSpace = document.querySelector("#backSpace")

digitBTN.forEach(digits => {

    digits.addEventListener("click", () => {

        if (digits.textContent == "=") {
            try {
                result = result.replace("%", "/100");
                result = result.replace("÷", "/");
                result = result.replace("x", "*");
                result = eval(result)
                digitsDisplay.innerText = result
            } catch (error) {
                digitsDisplay.innerText = "Error"
            }
        } else if (digits.textContent == "C") {
            result = ""
            digitsDisplay.innerText = ""
        } else if (digits.textContent == "⌫") {
            result = result.slice(0, -1);
            digitsDisplay.innerText = result;
        } else {
            result += digits.textContent
            digitsDisplay.innerText = result
        }

    });

});




