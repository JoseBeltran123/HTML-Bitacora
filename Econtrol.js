
function programa() {

    var bateador, corredor, lanzador, lanzamiento, tipo;
    corredor = 0;
    lanzamiento = 0;
    while (lanzamiento < 3) {
        lanzador = true;
        bateador = false;
        if (lanzador) {
            tipo = prompt("Ingresa el pitcheo (1 Recta, 2 Curva, 3 Slider)");
            switch (tipo) {
                case "1":
                    console.log("Recta");
                    break;
                case "2":
                    console.log("Curva");
                    break;
                case "3":
                    console.log("Slider");
                    break;
            };
        };
        for (i = 0; i < lanzamiento; i++) {
            var random = getRandomIntInclusive(1, 100);
            if (random > 50) {
                bateador = true;
                lanzador = false;
                corredor += 1;
            }
        }
        if (bateador) {
            console.log("Bateador gana");
        } else {
            console.log("Lanzador gana");
        }
        lanzamiento++;
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}