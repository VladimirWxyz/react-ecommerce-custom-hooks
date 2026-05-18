import './Controles.css'
import { useId } from 'react';

export function Controles ({ cambiarFiltros }) {

    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handlePrecioMinimo = (event) => {
        cambiarFiltros(prevState => ({
            ...prevState,
            precioMinimo: event.target.value
        }));
    };

    const handleCategoria = (event) => {
        cambiarFiltros(prevState => ({
            ...prevState,
            categoria: event.target.value
        }));
    };

    return (
        <section>
            <h2>Filtros de Busqueda</h2>

            <div>
                <label htmlFor={minPriceFilterId}>Precio Minimo: </label>
                <input type="range" id={minPriceFilterId} min="0" max="300" onChange={handlePrecioMinimo}/>
            </div>
                <label htmlFor={categoryFilterId}>Categoria: </label>
                <select id={categoryFilterId} onChange={handleCategoria}>
                    <option value="all">Todos</option>
                    <option value="perifericos">Perifericos</option>    
                    <option value="monitores">Monitores</option>
                </select>
            <div>
            </div>
        </section>
    );
}

