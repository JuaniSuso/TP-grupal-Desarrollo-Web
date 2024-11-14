function verMasProducto(nombre, imagen, precio, descripcion) {
    const producto = { nombre: nombre, imagen: imagen, precio: precio, descripcion: descripcion };
    localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
    window.location.href = "producto.html";
}