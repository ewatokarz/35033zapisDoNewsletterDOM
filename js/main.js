console.log('check');

let newsletterForm = document.getElementById(`newsletter-form`);

let allAgreeChx = document.getElementById('all-agree');

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    // Formularz jest czyszczony dzieki temu i nie pojawia sie error multiple times jak nie wpiszemy danych
    errors.innerHTML = '';

    // warunek do imienia i nazwiska
    if (txtName.value.trim() ==='') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Imie i Nazwisko';
        // console.log(liError);
        errors.appendChild(liError);

    }

    // warunek do adresu e-mail
    if (txtEmail.value.trim() ==='') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail';
        // console.log(liError);
        errors.appendChild(liError);

    }

    // warunek do znaku @ w e-mail, ! txtEmail jest po to, zeby zanegowac warunek, jesli nie jest zaznaczony
    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres e-mail musi zawierac @';
        errors.appendChild(liError);

    }

    // warunek do zgody marketingowej, ! jest po to, zeby zanegowac warunek, jesli nie jest zaznaczony
    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Zaznacz pole, wyrazam zgode 1';
        // console.log(liError);
        errors.appendChild(liError);

    }

    // jesli w naszej ul'ce sa bledy to wtedy formularz nam sie nie wysylam, jesli nie ma bledow to wysyla, bledy to dzieci, musza byc zero, zeby sie wyslal, wieksze od zera nie wysyla sie 
    
    console.log(errors.children.length);
    if (errors.children.length > 0) {
        event.preventDefault();
    }
    
    
    // console.log(errors);
}

const allAgree = (event) => {

    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;

    // console.log(event.target.checked);
}

newsletterForm.addEventListener('submit', validate);

allAgreeChx.addEventListener('change', allAgree);

// console.log(allAgreeChx);

