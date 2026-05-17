import './App.css'
import {useCarrito} from './hooks/useCarrito'
import {useFiltros} from './hooks/useFiltros'
// import {CarritoModal} from './components/CarritoModal/CarritoModal'
// import {Controles} from './components/Controles/Controles'
import {Header} from './components/Header/Header'
// import {ProductCard} from './components/ProductCard/ProductCard'


export default function App() {

const {carrito, agregarProducto} = useCarrito()

const {filtros, cambiarFiltros} = useFiltros()

return (
    <main>
        {/* <Controles  cambiarFiltros={cambiarFiltros} />  */}
        <Header carrito={carrito} />
        {/* <ProductCard agregarProducto={agregarProducto} /> */}
    </main>
)
}
