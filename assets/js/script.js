document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('senha');
    const eyeIcon = this.querySelector('i');


    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }
});

const senhaInput = document.getElementById("senha");
const lengthItem = document.getElementById("length");
const uppercaseItem = document.getElementById("uppercase");
const specialItem = document.getElementById("special");
const numberItem = document.getElementById("number");

senhaInput.addEventListener("input", function () {
    const senha = senhaInput.value;

    // 1 Verifica comprimento
    if (senha.length >= 8) {
        lengthItem.classList.add("valid");
        lengthItem.classList.remove("invalid");
    } else {
        lengthItem.classList.add("invalid");
        lengthItem.classList.remove("valid");
    }

    // 2 Verifica letra maiúscula
    if (/[A-Z]/.test(senha)) {
        uppercaseItem.classList.add("valid");
        uppercaseItem.classList.remove("invalid");
    } else {
        uppercaseItem.classList.add("invalid");
        uppercaseItem.classList.remove("valid");
    }

    // 3 Verifica caractere especial
    if (/[!@#$%]/.test(senha)) {
        specialItem.classList.add("valid");
        specialItem.classList.remove("invalid");
    } else {
        specialItem.classList.add("invalid");
        specialItem.classList.remove("valid");
    }
    // 4 Verifica números
    if (/[0-9]/.test(senha)) {
        numberItem.classList.add("valid");
        numberItem.classList.remove("invalid");
    } else {
        numberItem.classList.add("invalid");
        numberItem.classList.remove("valid");
    }
});
