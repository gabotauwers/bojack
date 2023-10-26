if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../sw.js")
}

const nombre = document.getElementById('nombre');
const personaje = document.getElementById('personajes');
const informacion = document.getElementById('informacion');
const imagen = document.getElementById('imagen');
const temporada = document.getElementById('temporadas');
const enlace = document.getElementById('enlace');

function actualizar(valor, nombre){
    var opcion = document.createElement("option");
    opcion.text = nombre;
    opcion.value = valor;
    personaje.add(opcion);
    console.log(opcion);
    if(nombre == 'Seleccione'){
        opcion.disabled = true;
        opcion.selected = true;
    }
    // enlace.href = enlace;
}

temporada.addEventListener(
    "change",
    function(){
        personaje.innerHTML = '';
        imagen.src = "img/bojack1.png";
        nombre.innerHTML = '';
        // informacion.innerHTML = ''; 
        switch(this.value){
            case "1":
                actualizar('', 'Seleccione','');
                actualizar('bojack', 'BoJack Horseman');
                actualizar('charlotte', 'Charlotte Carson');
                actualizar('diane', 'Diane Nguyen');
                actualizar('herb', 'Herb Kazzaz');
                break;
            case "2":
                actualizar('', 'Seleccione');
                actualizar('mr', 'Mr. Peanutbutter');
                actualizar('todd', 'Todd Chavez');
                actualizar('sarah', 'Sarah Lynn');
                actualizar('wanda', 'Wanda Pierce');
                break;
            case "3":
                actualizar('', 'Seleccione');
                actualizar('princess', 'Princess Carolyn');
                actualizar('secretariat', 'Secretariat');
                actualizar('mr', 'Mr. Peanutbutter');
                actualizar('charlotte', 'Charlotte Carson');
                break;
            case "4":
                actualizar('', 'Seleccione');
                actualizar('diane', 'Diane Nguyen');
                actualizar('todd', 'Todd Chavez');
                actualizar('princess', 'Princess Carolyn');
                actualizar('sarah', 'Sarah Lynn');
                break;
            case "5":
                actualizar('', 'Seleccione');
                actualizar('secretariat', 'Secretariat');
                actualizar('mr', 'Mr. Peanutbutter');
                actualizar('todd', 'Todd Chavez');
                actualizar('princess', 'Princess Carolyn');
                break;
            case "6":
                actualizar('', 'Seleccione');
                actualizar('bojack', 'BoJack Horseman');
                actualizar('diane', 'Diane Nguyen');
                actualizar('todd', 'Todd Chavez');
                actualizar('princess', 'Princess Carolyn');
                break;
            default:
                actualizar('', 'Seleccione');
                break;
        }
    }
)

personaje.addEventListener(
    "change",
    function () {
        switch (this.value) {
            case "bojack":
                imagen.src = "img/bojack.jpg";
                nombre.innerHTML = 'BoJack Horseman';
                imagen.addEventListener("click",function(){
                    window.location.href = ("bojack.html");
                });
                informacion.innerHTML = 'BoJack Horseman es un personaje ficticio de la serie de animación homónima. Es un caballo antropomórfico y ex actor de televisión. La serie sigue su vida decadente en Hollywood mientras lucha con la fama pasada y problemas personales. La trama explora temas de depresión y relaciones disfuncionales de manera satírica y conmovedora.';
                break;
            case "charlotte":
                imagen.src = "img/charlotte.jpg";
                nombre.innerHTML = 'Charlotte Carson';
                imagen.addEventListener("click",function(){
                    window.location.href = ("charlotte.html");
                });
                informacion.innerHTML = 'Charlotte Carson es un personaje ficticio de la serie de animación BoJack Horseman. Es una cierva antropomórfica que vive en New Mexico. Es la esposa de Kyle Carson y madre de Penny Carson. Es una mujer amable y cariñosa, que se preocupa por su familia y amigos.';
                break;
            case "diane":
                imagen.src = "img/diane.png";
                nombre.innerHTML = 'Diane Nguyen';
                imagen.addEventListener("click",function(){
                    window.location.href = ("diane.html");
                });
                informacion.innerHTML = 'Diane Nguyen es un personaje ficticio de la serie de animación BoJack Horseman. Es una humana y escritora de libros. Es la esposa de Mr. Peanutbutter. Es una mujer inteligente, sarcástica y con un gran sentido de la justicia.';
                break;
            case "herb":
                imagen.src = "img/herb.jpg";
                nombre.innerHTML = 'Herb Kazzaz';
                imagen.addEventListener("click",function(){
                    window.location.href = ("herb.html");
                });
                informacion.innerHTML = 'Herb Kazzaz es un personaje ficticio de la serie de animación BoJack Horseman. Es un humano y ex escritor de televisión. Es el mejor amigo de BoJack Horseman. Es un hombre amable, inteligente y con un gran sentido del humor.';
                break;
            case "mr":
                imagen.src = "img/mr.png";
                nombre.innerHTML = 'Mr. Peanutbutter';
                imagen.addEventListener("click",function(){
                    window.location.href = ("mr.html");
                });
                informacion.innerHTML = 'Mr. Peanutbutter es un personaje ficticio de la serie de animación BoJack Horseman. Es un perro antropomórfico y actor de televisión. Es el esposo de Diane Nguyen. Es un hombre amable, optimista y con un gran sentido del humor.';
                break;
            case "princess":
                imagen.src = "img/princess.jpg";
                nombre.innerHTML = 'Princess Carolyn';
                imagen.addEventListener("click",function(){
                    window.location.href = ("princess.html");
                });
                informacion.innerHTML = 'Princess Carolyn es un personaje ficticio de la serie de animación BoJack Horseman. Es un gato antropomórfico y agente de talentos. Es la ex novia de BoJack Horseman. Es una mujer inteligente, trabajadora y con un gran sentido del humor.';
                break;
            case "sarah":
                imagen.src = "img/sarah.webp";
                nombre.innerHTML = 'Sarah Lynn';
                imagen.addEventListener("click",function(){
                    window.location.href = ("sarah.html");
                });
                informacion.innerHTML = 'Sarah Lynn es un personaje ficticio de la serie de animación BoJack Horseman. Es un humano y actriz de televisión. Es la ex co-protagonista de Horsin\' Around. Es una mujer amable, inteligente y con un gran sentido del humor.';
                break;
            case "secretariat":
                imagen.src = "img/secretariat.jpg";
                nombre.innerHTML = 'Secretariat';
                imagen.addEventListener("click",function(){
                    window.location.href = ("secretariat.html");
                });
                informacion.innerHTML = 'Secretariat es un personaje ficticio de la serie de animación BoJack Horseman. Es un caballo antropomórfico y actor de cine. Es el ídolo de BoJack Horseman. Es un hombre amable, inteligente y con un gran sentido del humor.';
                break;
            case "todd":
                imagen.src = "img/todd.jpg";
                nombre.innerHTML = 'Todd Chavez';
                imagen.addEventListener("click",function(){
                    window.location.href = ("todd.html");
                });
                informacion.innerHTML = 'Todd Chavez es un personaje ficticio de la serie de animación BoJack Horseman. Es un humano y mejor amigo de BoJack Horseman. Es un hombre amable, inteligente y con un gran sentido del humor.';
                break;
            case "wanda":
                imagen.src = "img/wanda.webp";
                nombre.innerHTML = 'Wanda Pierce';
                imagen.addEventListener("click",function(){
                    window.location.href = ("wanda.html");
                });
                informacion.innerHTML = 'Wanda Pierce es un personaje ficticio de la serie "BoJack Horseman". Es una mujer humana que entra en la vida de BoJack en la temporada 2. Wanda es conocida por su actitud positiva y su sentido del humor, y desafía la visión cínica de BoJack sobre la vida.';
                break;
            default:
                imagen.src = "img/bojack1.png";
                nombre.innerHTML = '';
                informacion.innerHTML = '';
                break;
        }
    },
    false
);