// Función que lee el contenido de un archivo y lo inserta en un elemento // HTML. Esta función se usará para cargar el menú y el pie de página. 
function cargarFragmento(idElemento, archivo) { fetch(archivo) .then(respuesta => respuesta.text()) .then(contenido => {document.getElementById(idElemento).innerHTML = contenido; }) .catch(error => console.error(`Error cargando ${archivo}:`, error));}
// =============================
// Cargar fragmentos de HTML (menú y pie de página)
// =============================
function cargarFragmento(idElemento, archivo) {
    fetch(archivo)
        .then(respuesta => respuesta.text())
        .then(contenido => {
            document.getElementById(idElemento).innerHTML = contenido;
        })
        .catch(error => console.error(`Error cargando ${archivo}:`, error));
}

// =============================
// Carrito de compras
// =============================

// Actualiza el contador del carrito en el icono
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCountElement.textContent = cart.length;
    }
}

// Agregar un servicio al carrito
function addToCart(serviceCode) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Evitar duplicados
    if (!cart.includes(serviceCode)) {
        cart.push(serviceCode);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
}

// Vaciar carrito (lo podemos enlazar luego a un botón "Clear Cart")
function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
}

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});
