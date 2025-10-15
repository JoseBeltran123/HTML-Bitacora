const elementos = document.querySelectorAll('.act');

elementos.forEach(elemento => {
    elemento.addEventListener('mousemove', (event) => {
        const rect = elemento.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        elemento.style.transformOrigin = `${x}% ${y}%`;
    });
});