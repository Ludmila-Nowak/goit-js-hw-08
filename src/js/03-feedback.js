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

// const saveLocal = e => {
//   const obj = {
//     email: e.currentTarget.elements.email.value,
//     message: form.elements.message.value,
//   };
//   const newObj = JSON.stringify(obj);
//   localStorage.setItem(LOCAL_KEY, newObj);
// };

// const throttledSaveFormState = throttle(saveFormState, 500);

// form.addEventListener('input', throttledSaveFormState);

// const getLocalData = () => {
//   const objLocal = localStorage.getItem(LOCAL_KEY);
//   if (objLocal) {
//     const { email, message } = JSON.parse(objLocal);
//     (form.elements.message.value = message),
//       (form.elements.email.value = email);
//   }
//   return objLocal;
// };
// getLocalData();

// const resetForm = e => {
//   e.preventDefault();
//   const obj = getLocalData();
//   console.log(obj);
//   form.reset();
//   localStorage.removeItem(LOCAL_KEY);
// };
// form.addEventListener('submit', resetForm);
