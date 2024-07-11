/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


/*inicio nav mobile responsive display*/
document.addEventListener('DOMContentLoaded', function() {
    const sidebarButton = document.querySelector('.mobile-menu-icon');
    sidebarButton.addEventListener('click', showSidebar);
});

function showSidebar() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.classList.add('show'); // Añadir la clase para mostrar la barra lateral

    // Agregar el evento para cerrar la barra lateral
    const closeButton = sidebar.querySelector('.mobile-close-icon');
    closeButton.addEventListener('click', hideSidebar);
}

function hideSidebar() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.classList.remove('show'); // Remover la clase para ocultar la barra lateral
}
/*fin nav mobile responsive display*/


/*inicio formulario de inicio de sesion*/
const wrapper = document.querySelector('.wrapper');      /*definimos la variable asociada al wrapper*/
// Seleccionar todos los botones dentro de .bar y .side-bar
const btnPopups = document.querySelectorAll('.bar .btnLogin-popup, .side-bar .btnLogin-popup');  /*definimos la variable asociada al btnLogin-popup*/
const iconClose = document.querySelector('.icon-close');   /*definimos la variable asociada al boton de cerrar*/

// Agregar el evento de click a cada botón
btnPopups.forEach(btn => {                      /*Funcion para activar el wrapper*/
    btn.addEventListener('click', () => {
        wrapper.classList.add('active-Popup');
    });
});

iconClose.addEventListener('click', ()=> {     /*Funcion para desactivar el wrapper*/
    wrapper.classList.remove('active-Popup');
});
/*fin formulario de inicio de sesion*/