document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formPelicula");
    const contenedor = document.getElementById("contenedorPeliculas");
    const peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

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
        localStorage.setItem("peliculas", JSON.stringify(peliculas));
        mostrarPeliculas();
        form.reset();
    });

    function mostrarPeliculas() {
        contenedor.innerHTML = "";

        if (peliculas.length === 0) {
            contenedor.innerHTML = `
                <div class="alert alert-info text-center">
                    Aún no se han agregado películas.
                </div>`;
            return;
        }

        peliculas.forEach((p) => {
            contenedor.innerHTML += `
                <div class="card mb-3 bg-light text-dark">
                    <div class="card-body">
                        <h5 class="card-title">${p.titulo} <span class="text-muted">(${p.anio})</span></h5>
                        <p class="card-text"><strong>Director:</strong> ${p.director}</p>
                        <p class="card-text"><strong>Calificación:</strong> ${'⭐'.repeat(p.calificacion)}</p>
                    </div>
                </div>
            `;
        });
    }

    mostrarPeliculas();
});
