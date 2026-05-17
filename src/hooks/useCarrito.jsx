import { useState } from "react";

export function useCarrito() {

const [carrito, setCarrito] = useState([]);

const agregarProducto = (producto) => setCarrito([...carrito, producto]);

return {
    carrito,
    agregarProducto
};
}
