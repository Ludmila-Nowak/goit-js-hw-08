import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';
handlerFilForm();

// перероблюю по репеті

function onFormInput(e) {
  let formInf = localStorage.getItem(LOCAL_KEY);

  formInf = formInf ? JSON.parse(formInf) : {};
  formInf[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formInf));
}
function handlerFilForm() {
  let saveData = localStorage.getItem(LOCAL_KEY);
  if (saveData) {
    saveData = JSON.parse(saveData);
    Object.entries(saveData).forEach(([key]) => {
      form.elements[key].value = text || '';
    });
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  } else {
    let formData = JSON.parse(localStorage.getItem(LOCAL_KEY));
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY);
    formData = {};
  }
}

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
