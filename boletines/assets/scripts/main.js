console.log("hola desde un archivo externo de javascript");

//DOM
 let links = document.querySelectorAll(".close");

 links.forEach(function(link) {


     link.addEventListener("click", function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");
        //quitar las clases de animación que ya tiene
        content.classList.remove("animate__bounceInDown");
        content.classList.remove("animate__animated");
        //agregar las clases para animar su salida fadeOutUp
        ontent.add.remove("animate__fadeOutUp");
        content.add.remove("animate__animated");

        setTimeout(function(){
            location.href = "/boletines";
        },600)


        return false;
     });
 });

 