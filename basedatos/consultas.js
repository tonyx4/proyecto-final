// La variable 'Services_List' y 'Services' están definidas en datos.js.

// Funciones para obtener información de productos/servicios
function obtenerProductosServicios(categoria = "") {
    if (categoria === null || categoria === "") {
        return Services_List;
    } else {
        return Services_List.filter(servicio => servicio.codigo_categoria === categoria);
    }
}

function obtenerProductoServicioPorCodigo(codigo) {
    return Services_List.find(servicio => servicio.codigo === codigo);
}


// -------- NUEVAS FUNCIONES DE CARRITO BASADAS EN LOCALSTORAGE --------

/**
 * Obtiene el carrito del localStorage.
 * @returns {Array} Un array de objetos de servicios.
 */
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

/**
 * Vacía completamente el carrito en localStorage.
 */
function clearCart() {
    localStorage.setItem("cart", JSON.stringify([]));
    // Opcional: Llamar a una función de renderizado para actualizar la UI
    if (typeof renderCart === 'function') {
        renderCart();
    }
    if (typeof actualizarContadorCarritoGlobal === 'function') {
        actualizarContadorCarritoGlobal();
    }
}

/**
 * Función para agregar un servicio al carrito en localStorage.
 * @param {string} codigoServicio El código único del servicio a agregar.
 * @param {number} cantidad La cantidad a agregar (por defecto es 1).
 */
function agregarAlCarrito(codigoServicio, cantidad = 1) {
    const servicio = obtenerProductoServicioPorCodigo(codigoServicio);
    if (servicio) {
        let cart = getCart();
        for (let i = 0; i < cantidad; i++) {
            cart.push(servicio);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        // Opcional: Llamar a funciones de actualización de la UI si existen
        if (typeof actualizarContadorCarritoGlobal === 'function') {
            actualizarContadorCarritoGlobal();
        }
        if (typeof renderCart === 'function') {
            renderCart();
        }
        mostrarNotificacion("✅ Producto agregado al carrito");
    }
}

/**
 * Función para eliminar un servicio del carrito del localStorage.
 * @param {string} codigoServicio El código único del servicio a eliminar.
 */
function eliminarDelCarrito(codigoServicio) {
    let cart = getCart();
    const index = cart.findIndex(servicio => servicio.codigo === codigoServicio);
    if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        // Opcional: Llamar a funciones de actualización de la UI
        if (typeof actualizarContadorCarritoGlobal === 'function') {
            actualizarContadorCarritoGlobal();
        }
        if (typeof renderCart === 'function') {
            renderCart();
        }
        mostrarNotificacion("🗑️ Producto eliminado del carrito", "error");
    }
}

/**
 * Función para mostrar el carrito en la página shop.html.
 * **Esta función debe ser llamada desde shop.html.**
 */
function renderCart() {
    let etiqueta_carrito = document.getElementById("cart-list");
    if (!etiqueta_carrito) {
        return;
    }
    etiqueta_carrito.innerHTML = "";
    
    let cart = getCart();
    let total = 0;

    cart.forEach((elemento, index) => {
        total++;
        let div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <span>${elemento.nombre}</span>
            <button class="btn btn-sm btn-danger" onclick="eliminarDelCarritoYActualizar(${index})">
                <i class="fa fa-times"></i>
            </button>
        `;
        etiqueta_carrito.appendChild(div);
    });

    const cartTotalElement = document.getElementById("cart-total");
    if (cartTotalElement) {
        cartTotalElement.textContent = total;
    }
}

/**
 * Función auxiliar para eliminar y actualizar la UI en la misma llamada.
 * Se usa en los botones de "eliminar" del carrito en shop.html.
 */
function eliminarDelCarritoYActualizar(index) {
    let cart = getCart();
    if (index > -1 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
        actualizarContadorCarritoGlobal();
        mostrarNotificacion("🗑️ Producto eliminado del carrito", "error");
    }
}

/**
 * Función para actualizar el número de servicios en el contador del carrito.
 * **Esta función debe ser llamada desde shop.html y shop-single.html.**
 */
function actualizarContadorCarritoGlobal() {
    const contadorElemento = document.getElementById("cart-count");
    if (contadorElemento) {
        let cart = getCart();
        contadorElemento.textContent = cart.length;
    }
}



/* ============================================================= */
/* NUEVO BLOQUE: OPTIMIZACIÓN VISUAL Y NOTIFICACIONES */
/* ============================================================= */

/**
 * Muestra una notificación flotante (tipo toast) en la esquina inferior derecha.
 * @param {string} mensaje - Texto a mostrar.
 * @param {string} tipo - "success" o "error".
 */
function mostrarNotificacion(mensaje, tipo = "success") {
    const notificacion = document.createElement("div");
    notificacion.textContent = mensaje;
    notificacion.style.position = "fixed";
    notificacion.style.bottom = "20px";
    notificacion.style.right = "20px";
    notificacion.style.background = tipo === "success" ? "#198754" : "#dc3545";
    notificacion.style.color = "white";
    notificacion.style.padding = "10px 20px";
    notificacion.style.borderRadius = "8px";
    notificacion.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    notificacion.style.zIndex = "9999";
    notificacion.style.fontSize = "1rem";
    notificacion.style.opacity = "0";
    notificacion.style.transition = "opacity 0.5s ease-in-out";

    document.body.appendChild(notificacion);
    setTimeout(() => { notificacion.style.opacity = "1"; }, 50);
    setTimeout(() => { notificacion.style.opacity = "0"; }, 2500);
    setTimeout(() => { notificacion.remove(); }, 3000);
}

/**
 * Ejecuta funciones iniciales al cargar el documento.
 */
document.addEventListener("DOMContentLoaded", () => {
    try {
        if (typeof actualizarContadorCarritoGlobal === 'function') {
            actualizarContadorCarritoGlobal();
        }
        if (typeof renderCart === 'function') {
            renderCart();
        }
    } catch (error) {
        console.warn("Error al iniciar el carrito:", error);
    }
});
