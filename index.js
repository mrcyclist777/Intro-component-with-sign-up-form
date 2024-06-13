const panel = document.getElementById('panel');

panel.addEventListener('submit', e => {
    e.preventDefault();
    const firstName = panel['first-name'].value;
    const lastName = panel['last-name'].value;
    const email = panel['email'].value;
    const password = panel['password'].value;

    if(firstName === '') {
        addError('first-name', 'First Name is required');
    } else {
        removeError('first-name');
    }

    if(lastName === '') {
        addError('last-name', 'Last Name is required');
    } else {
        removeError('last-name');
    }
    if(email === '') {
        addError('email', 'Email Address is required');
    } else if (!isValid(email)) {
        addError('email', 'Email is not valid');
    } else {
        removeError('email');
    }
    if(password === '') {
        addError('password', 'Password is required');
    } else {
        removeError('password');
    }

});

function addError(field, message) {
    const panelControl = panel[field].parentNode;
    panelControl.classList.add('error');

    const small = panel[field].parentNode.
    querySelector('small');
    small.innerHTML = message;
}

function removeError(field, message) {
    const panelControl = panel[field].parentNode;
    panelControl.classList.remove('error');
}

function isValid(email) {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  return re.test(String(email).toLowerCase());
}