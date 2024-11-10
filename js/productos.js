
function verMasProducto(nombre, imagen, precio) {
    const producto = { nombre: nombre, imagen: imagen, precio: precio };
    localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
    window.location.href = "producto.html";
}
