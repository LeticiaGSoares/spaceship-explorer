const btnLogin = document.querySelector('#btnLogin')
const btnCreateAcc = document.querySelector('#btnCreateAcc')

let accounts = []

btnLogin.addEventListener('click', () => {
    debugger
    let email = document.querySelector('#emailLogin').value
    let password = document.querySelector('#passLogin').value

    if (formValidation(email, password)) {
        let found = false;

        accounts.forEach((account) => {
            if (account.email === email && account.password === password) {
                found = true
            }
        })
        window.location.href= '../../pages/home.html'

        if (!found) {
            alert('Account does not exist or typing error. Try again.')
        }
    }
})


btnCreateAcc.addEventListener('click', () => {
    let email = document.querySelector('#emailCreate').value
    let password = document.querySelector('#passCreate').value

    if (formValidation(email, password)) {
        let newAccount = {
            "email": email,
            "password": password
        }

        accounts.push(newAccount)

        alert('Your account has been created successfully!')
    }

    console.log(accounts)
})

function formValidation(email, password) {
    let isValid = false
    const emailPattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

    if (email == "" || password == "") {
        alert('Fields cannot be empty')
    } else if (password.length <= 5 || password.length > 10) {
        alert("Your password must contain a minimum of 6 characters and a maximum of 10")
    } else if (!emailPattern.test(email)) {
        alert('Enter a valid email')
    } else {
        isValid = true
    }

    return isValid
}