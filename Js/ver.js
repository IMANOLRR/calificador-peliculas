document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedorPeliculas");
    const peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

    function mostrarPeliculas() {
        contenedor.innerHTML = "";

        if (peliculas.length === 0) {
            contenedor.innerHTML = `
                <div class="alert alert-info text-center">
                    No hay películas registradas.
                </div>`;
            return;
        }

        peliculas.forEach((p) => {
            contenedor.innerHTML += `
                <div class="card mb-3 bg-light text-dark">
                    <div class="card-body">
                        <h5 class="card-title">${p.titulo} (${p.anio})</h5>
                        <p class="card-text"><strong>Director:</strong> ${p.director}</p>
                        <p class="card-text"><strong>Calificación:</strong> ${'⭐'.repeat(p.calificacion)}</p>
                    </div>
                </div>
            `;
        });
    }

    mostrarPeliculas();
});
