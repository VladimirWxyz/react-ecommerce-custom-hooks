import './ProductCard.css';

export function ProductCard({productos, agregarProducto}) {

    return (
        <section>
            <h2>Catalogo de Producto</h2>
            {productos.map(producto => (
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