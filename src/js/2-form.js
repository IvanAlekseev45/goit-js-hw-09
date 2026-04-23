const formData = {
  email: '',
  message: '',
};

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData.email = refs.form.elements.email.value.trim();
  formData.message = refs.form.elements.message.value.trim();

  const formDataInfo = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', formDataInfo);
}

const data = JSON.parse(localStorage.getItem('feedback-form-state'));
if (data) {
  refs.form.elements.email.value = data.email;
  refs.form.elements.message.value = data.message;
  formData.email = data.email;
  formData.message = data.message;
}

function onFormSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  refs.form.reset();
  formData.email = '';
  formData.message = '';
}
