const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const addressInput = document.querySelector("#address");
const roleInput = document.querySelector("#role");
const cpfInput = document.querySelector("#CPF");
const stateSelect = document.querySelector("#state");
const citySelect = document.querySelector("#city");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === "" || addressInput.value === "" || roleInput.value === "" || cpfInput.value === "" || stateSelect.value === "" || citySelect.value === ""){
        return alert("Por favor, preencha todos os campos!");
    }

    if(nameInput.value.length < 4 && !isNameValid(nameInput.value)){
        return alert("Por favor, preencha com o seu nome completo!");
    }

    const nameArray = nameInput.value.split(" ");
    if(nameArray.length < 2){
        return alert("Por favor, preencha com o seu nome completo!");
    }

    if(cpfInput.value.length !== 11 || !isCpfValid(cpfInput.value)){
        alert("Por favor, preencha o seu CPF completo e sem símbolos!")
    }

    form.submit();
});

function isNameValid(name){
    const nameRegex = new RegExp(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/
    );

    if(nameRegex.test(name)){
        return true;
    }

    return false;
}

function isCpfValid(cpf){
    const cpfRegex = new RegExp(
        /^[0-9]{11}$/
    );

    if(cpfRegex.test(cpf)){
        return true;
    }

    return false;
}