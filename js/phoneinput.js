document.addEventListener("DOMContentLoaded", function () {
    let phoneInput = document.querySelectorAll('input[data-tel-input]');

    let getInputNumbers = function (input) {
        return input.value.replace(/\D/g, "")
    }

    let onPhoneInput = function (e) {
        let input = e.target,
            inputNumbersValue = getInputNumbers(input)
        formattedInputValue = "";
        selectionStart = input.selectionStart;


        if (!inputNumbersValue) {
            return input.value = "";
        }

        if(input.value.length != selectionStart){
            if(e.data && /\D/g.test(e.data)){
                input.value = inputNumbersValue
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue
            let firstsymbols = (inputNumbersValue[0] === "8" ? "8" : "+7");
            formattedInputValue = firstsymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = input.value = "+" + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }

    let onPhoneKeyDown = function (e) {
        console.log(e.keyCode, e.target.value)
        let input = e.target;
        if (e.keyCode == 8 && getInputNumbers(input).length == 1) {
            input.value = "";
        }
    }

    let onphonePaste = function(e){
        let pasted = e.clipboardData || window.clipboardData,
            input = e.target,
            inputNumbersValue = getInputNumbers(input)

        if(pasted){
            let pastedText = pasted.getData("Text");
            if (!/\D/g.test(pastedText)){
                input.value = inputNumbersValue
            }
        }
    }

    for (i = 0; i < phoneInput.length; i++) {
        let input = phoneInput[i];
        input.addEventListener("input", onPhoneInput)
        input.addEventListener('keydown', onPhoneKeyDown)
        input.addEventListener('paste', onphonePaste);
    }
})