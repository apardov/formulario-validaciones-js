const submitFunction = (event) => {

	event.preventDefault(); // prevee que se envie el formulario
	(formValidation()) ? event.target.reset() : formValidation();
}
document.getElementById('formulario').addEventListener('submit', submitFunction); // Escucha el envio del formulario

const formValidation = () => {
	// Obtencion input text
	const textFields = document.querySelectorAll('input[type="text"]');
	let validationSuccess = true;
	// Validacion input text
	textFields.forEach(text => {
		let errorInputText = document.getElementById('error' + text.id.charAt(0).toUpperCase() + text.id.slice(1));
		if (text.value.length === 0) {
			showError(errorInputText, 'Este campo es requerido!');
			validationSuccess = false;
		} else if (text.value.length > 0 && text.value.length < 3) {
			showError(errorInputText, 'Este campo debe tener al menos 3 caracteres!');
			validationSuccess = false;
		} else {
			hiddenError(errorInputText);
		}
	})

	const email = document.getElementById('email');
	let errorEmail = document.getElementById('errorEmail');

	// Validación de correo con expresión regular
	if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { // Valida que el formato del mail sea válido
		hiddenError(errorEmail)
	} else {
		showError(errorEmail, 'Ingrese un correo electronico valido');
		validationSuccess = false;
	}

	// Validación de edad que sea mayor a 18
	const age = document.getElementById('edad');
	let ageError = document.getElementById('errorEdad');

	if (age.value >= 18 && age.value <= 100) {
		hiddenError(ageError);
	} else if (age.value.length === 0) {
		showError(ageError, 'Debe ingresar un valor, es requerido')
		validationSuccess = false;
	} else {
		showError(ageError, 'Debe ser mayor de 18 años para poder registrarse')
		validationSuccess = false;
	}

	const activity = document.getElementById('actividad');
	let activityError = document.getElementById('errorActividad');

	if (activity.value === '') {
		showError(activityError, 'Debe seleccionar una categoria de actividad');
		validationSuccess = false;
	} else {
		hiddenError(activityError);
	}

	const educationLevel = document.getElementById('nivelEstudio');
	let educationLevelError = document.getElementById('errorNivelEstudio');

	if (educationLevel.value === '') {
		showError(educationLevelError, 'Debe seleccionar una categoria de nivel de estudios');
		validationSuccess = false;
	} else {
		hiddenError(educationLevelError);
	}

	const termsAndConditions = document.getElementById('aceptoTerminos');
	let termsAndConditionsError = document.getElementById('errorAceptoTerminos');

	console.log(termsAndConditions.value);
	if (termsAndConditions.checked) {
		hiddenError(termsAndConditionsError);
	} else {
		showError(termsAndConditionsError, 'Debes aceptar los terminos y condiciones');
		validationSuccess = false
	}

	// retorno validacion de errores
	return validationSuccess;
}

const showError = (errorField, errorMessage) => {
	errorField.textContent = errorMessage;
	errorField.style.display = 'block';
}

const hiddenError = (errorField) => {
	errorField.textContent = '';
	errorField.style.display = 'none';
}
