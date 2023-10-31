const carrito = [];

let total = 0;


function agregarProducto() {
    const nombre = document.getElementById("producto").value;
    const precio = parseFloat(document.getElementById("precio").value);

    if (nombre && !isNaN(precio)) {
        const producto = { nombre, precio };
        carrito.push(producto);

        
        total += precio;

        actualizarCarrito();
        document.getElementById("producto").value = "";
        document.getElementById("precio").value = "";

        
        document.getElementById("total").textContent = "Total: $" + total;
    }
}


function actualizarCarrito() {
    const listaProductos = document.getElementById("listaProductos");
    listaProductos.innerHTML = "";

    carrito.forEach(function(producto, index) {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaProductos.appendChild(li);
    });
}

function buscarProducto() {
    const nombreProducto = document.getElementById("buscarProducto").value;
    const resultados = carrito.filter(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());

  
    const resultadoTexto = resultados.length > 0 ? "Producto encontrado en el carrito." : "Producto no encontrado en el carrito.";
    alert(resultadoTexto);
}


document.getElementById("agregarProducto").addEventListener("click", agregarProducto);
document.getElementById("buscar").addEventListener("click", buscarProducto);


