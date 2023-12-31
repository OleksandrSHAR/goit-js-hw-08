import throttle from 'lodash.throttle';
const KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(e) {
  dataForm[e.target.name] = e.target.value;
  localStorage.setItem(KEY, JSON.stringify(dataForm));
}

 function reloadPage() {
   if (dataForm) {
     email.value = dataForm.email || '';
    message.value = dataForm.message || '';
   }
 }

function onFormSubmit(e) {
  e.preventDefault();
  console.log({email:email.value,message:message.value});

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(KEY);
  e.currentTarget.reset();
  dataForm = {};
}