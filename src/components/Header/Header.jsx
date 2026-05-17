import './Header.css'

export function Header({carrito}) {
    return (
        <header className="main-header">
            <h1>StreamShop 🛒</h1>
            <div className="cart-counter">
                <span>🛍️ Items:{carrito.length} </span>
            </div>
        </header>
    )

}