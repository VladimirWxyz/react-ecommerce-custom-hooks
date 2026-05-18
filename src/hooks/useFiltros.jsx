import { useState } from "react";

export function useFiltros() {

    const [filtros, cambiarFiltros]= useState({
        categoria: 'all',
        precioMinimo: 0
    });

    const filtrarProductos = (productos) => {
        return productos.filter(producto => {
            return (
                producto.precio >= filtros.precioMinimo && (
                    filtros.categoria === 'all' ||
                    producto.categoria === filtros.categoria
                )
            );
        });
    };

    return {
        filtros, 
        cambiarFiltros,
        filtrarProductos
    };
}