import './CarritoModal.css'

export function CarritoModal({carrito, limpiarCarrito}) {
    return (
        <section>
            <h2>Tu Carrito de Compras 🛍️</h2>
            {carrito.length === 0 ? (
                <p>El carrito esta vacio. Ve a comprar algo!</p>              
            ) : (
                <div>
                    <ul>
                        {carrito.map((item, index) =>(
                            <li key={index}>
                                {item.imagen} <strong>{item.nombre}</strong> - ${item.precio}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={limpiarCarrito}                        
                    >
                        Vaciar Carrito 🗑️                       
                    </button>
                </div>
            )}
        </section>
    )
}