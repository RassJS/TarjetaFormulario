const tarjeta = document.querySelector('#tarjeta'),
	  botonLista = document.querySelector('#btn-abrir-formulario'),
	  formulario = document.querySelector('#formulario-tarjeta'),
	  numeroTarjeta = document.querySelector('#tarjeta .numero'),
	  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	  logoMarca = document.querySelector('#logo-marca'),
	  firma = document.querySelector('#tarjeta .firma p'),
	  mesExpiracion = document.querySelector('#tarjeta .mes')
	  yearExpiracion = document.querySelector('#tarjeta .year')
	  ccv = document.querySelector('#tarjeta .ccv');



// Voltear la tarjeta para que el usuario vea el frente si pulsa alguno de los inputs que corresponden a la parte
	// delantera
	
	const mostrarFrente = () => {
		if (tarjeta.classList.contains('active')) {
			tarjeta.classList.remove('active');
		}
	}


// Rotacion de la tarjeta

tarjeta.addEventListener("click", () => {
	tarjeta.classList.toggle('active');
});

// Boton de abrir formulario
botonLista.addEventListener("click", () => {
	botonLista.classList.toggle('active');
	formulario.classList.toggle('active');
})

//* Select del mes generado dinamicamente

for (let i = 1; i<= 12; i++) {
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText= i;
	formulario.selectMes.appendChild(opcion);
};

//* Select del año generado dinamicamente

const yearActual = new Date().getFullYear();

for (let i = yearActual; i<= yearActual + 8; i++) {
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText= i;
	formulario.selectYear.appendChild(opcion);
};

//* Input numero de tarjeta 


formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput.
	// Eliminamos espacios en blanco
	replace(/\s/g, '')

	// Eliminar las letras
	.replace(/\D/g, '')

	// Ponemos espacio cada 4 numeros
	.replace(/([0-9]{4})/g, '$1 ')
	//Elimina el ultimo espaciado
	.trim();

	numeroTarjeta.textContent = valorInput;

	if (valorInput =='') {
		numeroTarjeta.textContent = '#### #### #### ####';
		logoMarca.innerHTML = '';
	};

	if (valorInput == 4) {
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'visa.png';
		logoMarca.appendChild(imagen);
	} else if (valorInput[0] == 5) {
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'mastercard.png';
		logoMarca.appendChild(imagen);
			}

// Usamos la funcion que definimos atras para que cuando se de click se voltee la tarjeta
	mostrarFrente();
	
});



//* Input nombre de tarjeta


formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if (valorInput == '') {
		nombreTarjeta.textContent = 'John Doe';
	};

	mostrarFrente();
})


//* Select del mes

formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
})

//* Select del año

formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();
})

//* Codigo ccv


formulario.inputCCV.addEventListener('keyup', () => {
	if (!tarjeta.classList.contains('active')) {
		tarjeta.classList.toggle('active');

	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')

	// Eliminar las letras
	.replace(/\D/g, '')

	ccv.textContent = formulario.inputCCV.value;
});

















