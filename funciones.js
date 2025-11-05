var ejecutar = document.getElementById("ejecuta");

ejecutar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Llamaste la función mediante click en un botón");
    console.log(miFuncion(15, 20));
});

function miFuncion(a,b){
    return "La suma de " + a + "+" + b + " es: " + (a+b);
};