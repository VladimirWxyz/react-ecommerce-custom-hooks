import { useState } from "react";

export function useFiltros() {

    const [filtros, setFiltros]= useState({
        categoria: 'todas',
        precioMinimo: 0
    });

    const cambiarFiltros = (nuevosFiltros) => setFiltros({...filtros, ...nuevosFiltros});

    return {
        filtros, 
        cambiarFiltros
    };
}