//Registration Screen

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const addressInput = document.querySelector("#address");
const roleInput = document.querySelector("#role");
const cpfInput = document.querySelector("#CPF");
const stateSelect = document.querySelector("#state");
const citySelect = document.querySelector("#city");

if (window.location.pathname === "/") {
    cpfInput.addEventListener('keypress', () => {
        let cpfInputLength = cpfInput.value.length;

        if (cpfInputLength === 3 || cpfInputLength === 7) {
            cpfInput.value += '.';
        } else if (cpfInputLength === 11) {
            cpfInput.value += '-';
        }
    });

    sessionStorage.removeItem("personId");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = nameInput.value;
        const address = addressInput.value;
        const role = roleInput.value;
        const cpf = cpfInput.value.replace(/[^\d]+/g, '');
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
            return alert("Por favor, preencha o seu CPF completo e sem símbolos!");
        }

        saveRegistration(name, address, cpf, role, state, city);
    });
}

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
    sessionStorage.setItem("personId", personId);

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
            cidade_id: city,
            estado_id: state
        }

        const personPromise = axios.post("api/pessoa_fisica", personData);
        await personPromise.then((res) => {
            console.log("Inscrição realizada!");
            postRegistration(cpf, role);
        });

        window.location.href = `http://127.0.0.1:8000/voucher`;
    } else {
        alert("Inscrição já realizada!");
    }
}


//Voucher Screen

const idInput = document.querySelector("#id-voucher");
const nameVoucherInput = document.querySelector("#name-voucher");
const addressVoucherInput = document.querySelector("#address-voucher");
const roleVoucherInput = document.querySelector("#role-voucher");
const cpfVoucherInput = document.querySelector("#CPF-voucher");
const stateVoucherSelect = document.querySelector("#state-voucher");
const cityVoucherSelect = document.querySelector("#city-voucher");
const situationInput = document.querySelector('#situation-voucher');
const dateVoucherInput = document.querySelector('#date-voucher');

let personDataForVoucher;
let registrationDataForVoucher;
let stateName;
let cityName;

async function getPersonData(id) {
    const promise = axios.get(`api/pessoa_fisica/${id}`);

    await promise.then((res) => {
        personDataForVoucher = res.data;
    });
}

async function getRegistrationData(pessoa_fisica_id) {
    const promise = axios.get(`api/inscricao/${pessoa_fisica_id}`);

    await promise.then((res) => {
        registrationDataForVoucher = res.data;
    });
}

async function getCity(id) {
    const promise = axios.get(`api/cidades/${id}`)

    await promise.then((res) => {
        cityName = res.data.nome;
    });
}

async function getState(id) {
    const promise = axios.get(`api/estados/${id}`);

    await promise.then((res) => {
        stateName = res.data.sigla;
    })
}

function fixDate(timestamp) {
    const date = timestamp.slice(0, 10);
    const newDate = date.split('-').reverse().join('/');
    const time = timestamp.slice(11, 19);
    const hour = String(Number(time.slice(0, 2)) - 3);
    const DateTime = newDate + " " + hour + time.slice(2);

    return DateTime;
};

function fixCpfZeros(cpf) {
    if (String(cpf).length === 11) {
        return cpf;
    } else if (String(cpf).length < 11) {
        let numberWithoutZero = String(cpf);
        let counter = numberWithoutZero.length;

        while (counter !== 11) {
            numberWithoutZero = "0" + numberWithoutZero;
            counter++;
        }

        return numberWithoutZero;
    }
}

function addMaskOnCpf(cpf) {
    const cpfValue = String(cpf)

    const cpfValueP1 = cpfValue.slice(0, 3)
    const cpfValueP2 = cpfValue.slice(3, 6)
    const cpfValueP3 = cpfValue.slice(6, 9)
    const cpfValueP4 = cpfValue.slice(9)

    return cpfValueP1 + "." + cpfValueP2 + "." + cpfValueP3 + "-" + cpfValueP4;
}

async function renderVoucher() {
    if (window.location.pathname === "/voucher") {
        personId = sessionStorage.getItem("personId");

        if (personId) {
            await getPersonData(personId);
            await getRegistrationData(personId);
            await getCity(personDataForVoucher.cidade_id);
            await getState(personDataForVoucher.estado_id);

            idInput.value = personId;
            nameVoucherInput.value = personDataForVoucher.nome;
            addressVoucherInput.value = personDataForVoucher.endereco;
            cpfVoucherInput.value = addMaskOnCpf(fixCpfZeros(personDataForVoucher.cpf));
            cityVoucherSelect.value = cityName;
            stateVoucherSelect.value = stateName;
            roleVoucherInput.value = registrationDataForVoucher.cargo;
            situationInput.value = registrationDataForVoucher.situacao;
            dateVoucherInput.value = fixDate(registrationDataForVoucher.created_at);
        } else {
            alert("Realize a inscrição antes!");
            window.location.href = `http://127.0.0.1:8000/`;
        }
    }
}

renderVoucher();


//Delete Voucher

async function deleteVoucher(event) {
    event.preventDefault();
    if (confirm("Você realmente deseja exluir o comprovante?")) {
        const id = personId;
        const pessoa_fisica_id = personId;

        const registrationPromise = axios.patch(`api/inscricao/${pessoa_fisica_id}`);
        await registrationPromise.then((res) => console.log("Deletou!"));

        const personPromise = axios.patch(`api/pessoa_fisica/${id}`);
        await personPromise.then((res) => console.log("Deletou!"));

        window.location.href = `http://127.0.0.1:8000/`
    }
}

