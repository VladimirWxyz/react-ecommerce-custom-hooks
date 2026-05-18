import './App.css'
import {useCarrito} from './hooks/useCarrito'
import {useFiltros} from './hooks/useFiltros'
import {CarritoModal} from './components/CarritoModal/CarritoModal'
import {Controles} from './components/Controles/Controles'
import {Header} from './components/Header/Header'
import {ProductCard} from './components/ProductCard/ProductCard'

const PRODUCTOS_BASE = [
    { id: 1, nombre: "Mouse Gamer RGB", precio: 45, imagen: "🖱️", categoria: "perifericos" },
    { id: 2, nombre: "Teclado Mecánico", precio: 85, imagen: "⌨️", categoria: "perifericos" },
    { id: 3, nombre: "Monitor 144Hz", precio: 220, imagen: "🖥️", categoria: "monitores" }
];

export default function App() {

const {carrito, agregarProducto, limpiarCarrito} = useCarrito()
const {filtros, cambiarFiltros, filtrarProductos} = useFiltros()

const productosFiltrados = filtrarProductos(PRODUCTOS_BASE)
return (
    <main>
        <Controles  cambiarFiltros={cambiarFiltros} /> 
        <Header carrito={carrito} />
        <CarritoModal carrito={carrito} limpiarCarrito={limpiarCarrito} />
        <ProductCard productos={productosFiltrados} agregarProducto={agregarProducto} />
    </main>
)
}
