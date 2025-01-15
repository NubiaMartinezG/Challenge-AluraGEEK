document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = e.target[0].value;
    const precio = e.target[1].value;
    const imagen = e.target[2].value;

    const productosGrid = document.querySelector('.productos-grid');
    const card = document.createElement('div');
    card.classList.add('producto-card');
    card.innerHTML = `
        <img src="${imagen}" alt="${nombre}">
        <h3>${nombre}</h3>
        <p>$${precio}</p>
        <button class="borrar-btn">🗑</button>
    `;
    productosGrid.appendChild(card);

    // Borrar producto
    card.querySelector('.borrar-btn').addEventListener('click', () => card.remove());
});
