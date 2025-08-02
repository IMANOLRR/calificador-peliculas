document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formPelicula");
  const contenedor = document.getElementById("contenedorPeliculas");
  const peliculas = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();
    const director = document.getElementById("director").value.trim();
    const anio = parseInt(document.getElementById("anio").value);
    const calificacion = parseInt(document.getElementById("calificacion").value);

    if (!titulo || !director || !anio || isNaN(calificacion) || calificacion < 1 || calificacion > 5) {
      alert("Por favor completa todos los campos correctamente.");
      return;
    }

    const pelicula = { titulo, director, anio, calificacion };
    peliculas.push(pelicula);
    mostrarPeliculas();
    form.reset();
  });

  function mostrarPeliculas() {
    contenedor.innerHTML = "";
    peliculas.forEach((p, index) => {
      contenedor.innerHTML += `
        <div class="card mb-2">
          <div class="card-body bg-light">
            <h5>${p.titulo} (${p.anio})</h5>
            <p><strong>Director:</strong> ${p.director}</p>
            <p><strong>Calificación:</strong> ${p.calificacion} ⭐</p>
          </div>
        </div>
      `;
    });
  }
});
