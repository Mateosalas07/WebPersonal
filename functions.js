let menuVisible = false;

// Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
       document.getElementById("nav").classList=""; 
       menuVisible = false;
    }
    else{
       document.getElementById("nav").classList="responsive"; 
       menuVisible = true;
    }
}
function seleccionar(){
    //ocultar el menu una vez que se selecciono una opcion
    document.getElementById("nav").classList= "";
    menuVisible = false;
}

// Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("cshard");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("net");
        habilidades[5].classList.add("aspnet");
        habilidades[6].classList.add("netcore");
        habilidades[7].classList.add("angular");
        habilidades[8].classList.add("sqlserver");
        habilidades[9].classList.add("plsql");
    }
}
// detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}
function mostrarTitulo(id, idConector){
    document.getElementById(id).style.display = 'block';
    document.getElementById(id).style.transition = '3s';
    document.getElementById(idConector).style.display = 'block';
    if(id == "uni"){
        document.getElementById("curso").style.display = 'none';
        document.getElementById("juego").style.display = 'none';
        document.getElementById("juegoC").style.display = 'none';
        document.getElementById("cursoC").style.display = 'none';
    }else if(id == "curso"){
        document.getElementById("uni").style.display = 'none';
        document.getElementById("juego").style.display = 'none';
        document.getElementById("uniC").style.display = 'none';
        document.getElementById("juegoC").style.display = 'none';
    }
    else{
        document.getElementById("uni").style.display = 'none';
        document.getElementById("curso").style.display = 'none';
        document.getElementById("uniC").style.display = 'none';
        document.getElementById("cursoC").style.display = 'none';
    }
    
    
}
function AbrirCV(){
    window.open('docs/Mateo Salas.pdf','_blanck', 'width=800,height=600');

}
function LinkedIn(){
    window.open('https://www.linkedin.com/in/mateo-roman-salas-2814b014b/');
}
function Copiar(){
    var texto = 'mateosalas0767@gmail.com';
                // Copiar el texto al portapapeles
    navigator.clipboard.writeText(texto)
        .then(function() {
            document.getElementById("copiar").style.display = 'none';            
            document.getElementById("copiado").style.transition = '5s';
            document.getElementById("copiado").style.display = 'inline';
        })
        .catch(function(error) {
            console.error('Error al copiar el texto: ', error);
            document.getElementById("copiar").style.display = 'block';
            document.getElementById("copiado").style.display = 'none';
        });
        mostrarMensajeCopiado();
        document.getElementById("copiar").style.display = 'block';
        document.getElementById("copiado").style.display = 'none';
}
function copiarMail() {
    // Seleccionar el texto a copiar
    var texto = 'mateosalas0767@gmail.com';
    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(texto)
    // Mostrar el mensaje de confirmación
    mostrarMensajeCopiado();
}
function mostrarMensajeCopiado(){
    var copiedMessage = document.getElementById("copiedMessage");
    copiedMessage.style.display = "block";
    setTimeout(function() {
        copiedMessage.style.display = "none";
    }, 2000);
}
function VerCertificado(id){
    if (id == 'juego')
    window.open('img/certificados/Certificado-videojuegos-Salas.png');
}
