const formulario = document.querySelector(".form-create");
let cnt = 0;

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	const publicacion = document.querySelector("#publicacion").value;
	const contenedor = document.querySelector(".contenedor-publicaciones");
	contenedor.innerHTML += `<div class="publicacion" id="${cnt}">
			<p>Id: ${cnt}</p>
			<p>${publicacion}</p>
			<button>Editar</button>
			<button>Eliminar</button>
		</div>`;

});