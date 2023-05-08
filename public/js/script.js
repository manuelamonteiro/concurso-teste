const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const addressInput = document.querySelector("#address");
const roleInput = document.querySelector("#role");
const cpfInput = document.querySelector("#CPF");
const stateSelect = document.querySelector("#state");
const citySelect = document.querySelector("#city");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const address = addressInput.value;
    const role = roleInput.value;
    const cpf = cpfInput.value;
    const state = stateSelect.value;
    const city = citySelect.value;

    if (name === "" || address === "" || role === "" || cpf === "" || state === "" || city === "") {
        return alert("Por favor, preencha todos os campos!");
    }

    const nameArray = name.split(" ");
    if (name.length < 4 || nameArray.length < 2) {
        return alert("Por favor, preencha com o seu nome completo!");
    }

    if (!isNameValid(name)) {
        return alert("Por favor, verifique o seu nome!");
    }

    if (cpf.length !== 11 || !isCpfValid(cpf)) {
        alert("Por favor, preencha o seu CPF completo e sem símbolos!")
    }

    saveRegistration(name, address, cpf, role, state, city);
});

function isNameValid(name) {
    const nameRegex = new RegExp(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/
    );

    if (nameRegex.test(name)) {
        return true;
    }

    return false;
}

function isCpfValid(cpf) {
    const cpfRegex = new RegExp(
        /^[0-9]{11}$/
    );

    if (cpfRegex.test(cpf)) {
        return true;
    }

    return false;
}

// let stateName;
// let cityName;

// function getCity(id){
//     const promise = axios.get(`api/cidades/${id}`)

//     promise.then((res) => {
//         cityName = res.data.nome;
//     });
// }

// function getState(id){
//     const promise = axios.get(`api/estados/${id}`)

//     promise.then((res) => {
//         stateName =  res.data.nome;
//     })
// }

let isFirst;

async function isAFirstRegistration(cpf) {
    const promise = axios.get(`api/pessoa_fisica_by_cpf/${cpf}`);

    await promise.then((res) => {
        if (res.data === null) {
            isFirst = true;
        } else {
            isFirst = false;
        }
    })
}

let personId;

async function getPersonId(cpf) {
    const promise = axios.get(`api/pessoa_fisica_by_cpf/${cpf}`);

    await promise.then((res) => {
        personId = res.data.id;
    })
}

async function postRegistration(cpf, role) {
    await getPersonId(cpf);

    const registrationData = {
        pessoa_fisica_id: personId,
        cargo: role,
        situacao: "enviado"
    }
    const registrationPromise = axios.post("api/inscricao", registrationData);
    registrationPromise.then((res) => console.log("Inscrição realizada!"));
}

async function saveRegistration(name, address, cpf, role, state, city) {
    await isAFirstRegistration(cpf);

    if (isFirst) {
        const personData = {
            nome: name,
            cpf: cpf,
            endereco: address,
            cidade_id: state,
            estado_id: city
        }

        const personPromise = axios.post("api/pessoa_fisica", personData);
        personPromise.then((res) => {
            console.log("Inscrição realizada!");
            postRegistration(cpf, role);
        });
    } else {
        alert("Inscrição já realizada!");
    }
}

