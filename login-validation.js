const form = document.querySelector('form[action="user-interface.html"]');
form.addEventListener("submit", (event) => {
  const femail = form.elements["femail"].value;
  const password = form.elements["password"].value;

  if (!femail || !password) {
    event.preventDefault();
    alert("Por favor, complete los campos requeridos");
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo valido");
  }
});
function validateEmail(femail) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]+$/;
  return re.test(String(femail).toLowerCase());
}
