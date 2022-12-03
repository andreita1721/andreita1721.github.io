let app = document.getElementById( 'typewriter');

let typerwriter = new Typerwiriter(app, {
    loop: true, // bucle de eventos
    delay: 75, //tiempo que toma el caracterpara aparecer en el DOM
 });

 typerwriter
 .pauseFor(2500) //Agrega eventos de pausa a la cola por milisegundo
 .typeString('Desarollo sitios web y escribo articulos  sobre programacion')
 .pauseFor(200)
 .deleteChars(10) //borra los caracteres de la cola de la cadena
 .start(); //inicia el bucle de eventos