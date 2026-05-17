import './App.css'
import {useCarrito} from './hooks/useCarrito'
import {useFiltros} from './hooks/useFiltros'
import {Header} from './components/CarritoModal/CarritoModal'
import {Header} from './components/Controles/Controles'
import {Header} from './components/Header/Header'
import {Header} from './components/ProductCard/ProductCard'


export function App() {

const {carrito, agregarProducto} = useCarrito()

const {filtros, cambiarFiltros} = useFiltros()

return (
    <main>
        <Controles  cambiarFiltros={cambiarFiltros} /> 
        <Header carrito={carrito} />
        <ProductCard agregarProducto={agregarProducto} />
    </main>
)
}
