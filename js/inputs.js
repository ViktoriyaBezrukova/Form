function validation(form) {
    function removeError(input) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {
            parent.querySelector('.error__label').remove()
            parent.classList.remove('error')
        }
    }


    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('p')
        errorLabel.classList.add('error__label')
        errorLabel.textContent = text
        parent.classList.add('error')
        parent.append(errorLabel)
    }


    let result = true;

    let checkboxAgree = document.querySelector('.custom-checkbox')
    let btnAgree = document.querySelector('.sign__in')
    checkboxAgree.addEventListener('change', function () {
        if (checkboxAgree.checked) {
            btnAgree.removeAttribute("disabled");
        } else {
            btnAgree.setAttribute("disabled", true);
        }
    })



    form.querySelectorAll('.validation').forEach(input => {
        removeError(input)
        if (input.value == "") {
            createError(input, 'Поле не заполненно или заполненно не корректно');
            result = false;
        }
        let password = document.querySelector('.password');
        let confirmPass = document.querySelector('.confirm-password');

        if (password.value != confirmPass.value) {
            removeError(password)
            removeError(confirmPass)
            createError(password, 'Пароли не совпадают! Проверьте правильность ввода');
            createError(confirmPass, 'Пароли не совпадают! Проверьте правильность ввода');
            result = false
        } else {
        }

        let clearBtn = document.querySelector('.clear');

        clearBtn.addEventListener('click', function () {
            document.querySelectorAll('input').forEach(function (input) {
                input.value = "";

            })
            let radio = document.querySelectorAll('.radiobuttons__item');
            radio.forEach(function (elem) {
                elem.classList.remove('active')
            })
            removeError(input)
        });
    });


    return result
}



document.querySelector('.first__form').addEventListener('submit', function (event) {
    event.preventDefault()

    if (validation(this) == true) {
        alert('Форма проверена успешно!')
        let regSection = document.querySelector('.registration')
        let enterSec = document.querySelector('.signing')
        regSection.classList.add('none')
        enterSec.classList.remove('none')
    } else { }
    let test = document.querySelectorAll('.test')
    test.forEach(function (elem) {
        let length = elem.value.length
        if (length < 2) {
            const parent = elem.parentNode;
            if (parent.classList.contains('error')) {
                parent.querySelector('.error__label').remove()
                parent.classList.remove('error')
            }
            const errorLabel = document.createElement('p')
            errorLabel.classList.add('error__label')
            errorLabel.textContent = "Введите как минимум 2 символа!"
            parent.classList.add('error')
            parent.append(errorLabel)
        } else {
            const parent = elem.parentNode;
            if (parent.classList.contains('error')) {
                parent.querySelector('.error__label').remove()
                parent.classList.remove('error')
            }
        }
    });
})

let btnPass = document.querySelectorAll('.js-btn-password');
inputPass = document.querySelector('.js-password__inpit');

btnPass.onclick = function (e) {
    e.preventDefault()
}

btnPass.forEach(function (btn) {
    btn.onclick = function () {
        let target = this.getAttribute('data-target'),
            inputPass = document.querySelector(target);

        if (inputPass.getAttribute('type') === 'password') {
            inputPass.setAttribute('type', 'text');
            btn.classList.add('active')
        } else {
            inputPass.setAttribute('type', 'password')
            btn.classList.remove('active')
        }
    }
})


let formData = {}

const form = document.querySelector('form')
const LS = localStorage;
form.addEventListener('input', function (event) {
    formData[event.target.name] = event.target.value;
    LS.setItem('formData', JSON.stringify(formData));
});

let signBtn = document.querySelector('.signing-btn');






signBtn.addEventListener('click', function () {
    function removeError(input) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {
            parent.querySelector('.error__label').remove()
            parent.classList.remove('error')
        }
    }
    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('p')
        errorLabel.classList.add('error__label')
        errorLabel.textContent = text
        parent.classList.add('error')
        parent.append(errorLabel)
    }

    if (LS.getItem('formData')) {
        formData = JSON.parse(LS.getItem('formData'))
        let emailInput = document.querySelector('.signing-email'),
            passInput = document.querySelector('.signing-pass');
        let passName = passInput.getAttribute('name')
        let emailName = emailInput.getAttribute('name')

        for (elem in formData) {
            if (elem == emailName) {
                if (formData[elem] === emailInput.value) {
                    removeError(emailInput)
                    res = true
                } else {
                    removeError(emailInput)
                    createError(emailInput, 'Поле не заполненно или заполненно не корректно');
                    res = false
                }

            }
            if (elem == passName) {
                if (formData[elem] === passInput.value) {
                    removeError(passInput)
                    res = true
                } else {
                    removeError(passInput)
                    createError(passInput, 'Поле не заполненно или заполненно не корректно');
                    res = false
                }
            }
        }
        if (res == false) {
            alert('Проверьте правильность заполнения полей и заполнены ли они')
        } else {
            alert('vse ok')
        }
    }
})






