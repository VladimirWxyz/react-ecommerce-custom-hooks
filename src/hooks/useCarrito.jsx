import { useState } from "react";

export function useCarrito() {

const [carrito, setCarrito] = useState([]);

const agregarProducto = (producto) => setCarrito(prevCarrito => [...prevCarrito, producto]);

const limpiarCarrito = () => setCarrito([]);

return {
    carrito,
    agregarProducto,
    limpiarCarrito
};
}
