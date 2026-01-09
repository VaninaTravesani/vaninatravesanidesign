// Función simple para cambiar pestañas
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // 1. Ocultar todo el contenido de las pestañas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // 2. Quitar la clase 'active' de todos los botones
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 3. Mostrar la pestaña actual y añadir 'active' al botón pulsado
    document.getElementById(tabName).style.display = "block";
    
    // Pequeño timeout para permitir que la animación CSS se ejecute
    setTimeout(() => {
        document.getElementById(tabName).classList.add("active");
    }, 10);
    
    evt.currentTarget.className += " active";
}

// Escuchar evento de scroll para efectos en el header (opcional)
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});