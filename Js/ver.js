document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedorPeliculas");
  let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

  function mostrarPeliculas() {
    contenedor.innerHTML = "";

    if (peliculas.length === 0) {
      contenedor.innerHTML = `<div class="alert alert-info text-center">No hay películas registradas.</div>`;
      return;
    }

    peliculas.forEach((p, index) => {
      contenedor.innerHTML += `
        <div class="card mb-3 bg-light text-dark">
          <div class="card-body">
            <form onsubmit="return false;" id="form-${index}">
              <div class="mb-2">
                <label><strong>Título</strong></label>
                <input type="text" class="form-control" value="${p.titulo}" id="titulo-${index}">
              </div>
              <div class="mb-2">
                <label><strong>Director</strong></label>
                <input type="text" class="form-control" value="${p.director}" id="director-${index}">
              </div>
              <div class="mb-2">
                <label><strong>Año</strong></label>
                <input type="number" class="form-control" value="${p.anio}" id="anio-${index}">
              </div>
              <div class="mb-2">
                <label><strong>Calificación</strong></label>
                <input type="number" class="form-control" value="${p.calificacion}" min="1" max="5" id="calificacion-${index}">
              </div>
              <button class="btn btn-sm btn-success me-2" onclick="editarPelicula(${index})">Guardar</button>
              <a href="ver.html" class="btn btn-sm btn-secondary">Cancelar</a>
            </form>
          </div>
        </div>
      `;
    });
  }

  window.editarPelicula = (index) => {
    const titulo = document.getElementById(`titulo-${index}`).value.trim();
    const director = document.getElementById(`director-${index}`).value.trim();
    const anio = parseInt(document.getElementById(`anio-${index}`).value);
    const calificacion = parseInt(document.getElementById(`calificacion-${index}`).value);

    if (!titulo || !director || isNaN(anio) || isNaN(calificacion) || calificacion < 1 || calificacion > 5) {
      alert("Todos los campos deben ser válidos.");
      return;
    }

    peliculas[index] = { titulo, director, anio, calificacion };
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
    alert("Película actualizada.");
    mostrarPeliculas();
  };

  mostrarPeliculas();
});
