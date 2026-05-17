import './ProductCard.css';

const PRODUCTOS_MUESTRA = [
 { id: 1, nombre: "Mouse Gamer RGB", precio: 45, imagen: "🖱️" },
 { id: 2, nombre: "Teclado Mecánico", precio: 85, imagen: "⌨️" },
 { id: 3, nombre: "Monitor 144Hz", precio: 220, imagen: "🖥️" }
];

export function ProductCard() {

    return (
        <section>
            <h2>Catalogo de Producto</h2>
            {PRODUCTOS_MUESTRA.map(producto => (
                <div key={producto.id}>
                    <span>{producto.imagen}</span>
                    <h3>{producto.nombre}</h3>
                    <p>Precio: ${producto.precio}</p>
                    <button onClick={() => agregarProducto(producto)}>
                        Añadir al carrito 🛒
                    </button>
                </div>
            ))}
        </section>
    );

}