const btnLogin = document.querySelector('#btnLogin')
const btnCreateAcc = document.querySelector('#btnCreateAcc')

let accounts = []

btnLogin.addEventListener('click', () => {
    let email = document.querySelector('#emailLogin').value
    let password = document.querySelector('#passLogin').value

    if (formValidation(email, password)) {
        let found = false;

        accounts.forEach((account) => {
            if (account.email === email && account.password === password) {
                found = true
            }
        })

        if (found) {
            window.location.href= '../../pages/home.html'
        } else {
            alert('Conta não existe ou erro de digitação. Tente novamente.')
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

        alert('Sua conta foi criada com sucesso! (Teste logar com os dados preenchidos)')
    }

    console.log(accounts)
})

function formValidation(email, password) {
    let isValid = false
    const emailPattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

    if (email == "" || password == "") {
        alert('Os campos não podem estar vazios')
    } else if (password.length <= 5 || password.length > 10) {
        alert("Sua senha deve conter um mínimo de 6 caracteres e 10 no máximo")
    } else if (!emailPattern.test(email)) {
        alert('Insira um email válido')
    } else {
        isValid = true
    }

    return isValid
}