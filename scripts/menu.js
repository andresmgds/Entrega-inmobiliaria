// Funcion que muestra u oculta el menu mobile
function toggleMobileMenu() {
    // Obtengo el elemento HTML correpondiente a las acciones del menu
    const desktopMenuActions = document.querySelector('.desktop-menu-actions')

    // Hacemos toggle de la clase opened
    desktopMenuActions.classList.toggle('opened')
}

