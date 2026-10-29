let message = document.querySelector("#validate")
let email = "melissa@gmail.com"
let password = "mel123"

let form = document.querySelector("form");
let inputEmail = document.querySelector("#email")
let inputPassword = document.querySelector("#password")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = inputEmail.value;
    let password = inputPassword.value;
    console.log(email, password)
    if (verifyLogin(email, password)) {
        message.innerText = "Logado com sucesso"
    }
    else {
        console.log("erro")
    }

});
function verifyLogin(emailVerify, passwordVerify) {
    console.log(message)
    if (email === emailVerify && passwordVerify === password) {
        return true;
    }
    else if (emailVerify === undefined || emailVerify === undefined) {
        message.innerText = "Erro no email";
        return false;
    }
    else if (passwordVerify === undefined || passwordVerify === undefined) {
        message.innerText = "Erro na senha";
        return false;
    }
    else if (passwordVerify === "" || emailVerify === "") {
        message.innerText = "Envio em Branco"
        message.style.color = "red"
        return false
    }
}
