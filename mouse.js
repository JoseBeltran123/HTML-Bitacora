const elementos = document.querySelectorAll('.act');

elementos.forEach(elemento => {
    elemento.addEventListener('mousemove', (event) => {
        const rect = elemento.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        elemento.style.transformOrigin = `${x}% ${y}%`;
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const carga = document.getElementById("onload");
    var op = 1;
    window.setInterval(function(){
      carga.style.opacity = op;
      if(carga.style.opacity <= "0"){
        carga.style.visibility = "hidden";
      }
      if(carga.style.opacity > 0){
        op= op -0.1;
      }
    },80);
  const botonConfirmar = document.querySelector(".boton-confirm");
  const ventanaCookies = document.querySelector(".header-principal");
 
  
  const aceptoCookies = localStorage.getItem("cookiesAceptadas");
 
  if (aceptoCookies === "false") {
    ventanaCookies.style.display = "none";
  }
 
  botonConfirmar.addEventListener("click", (e) => {
 
    e.preventDefault(); 
    ventanaCookies.style.display = "none"; 
    localStorage.setItem("cookiesAceptadas", "true"); 
  });
 
});
