import '@/styles/Header.css'
import { FaUserLarge } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";


export default function Header(){
    return (
        <>
            <header className="header">
                <div className="logo">GreenShop</div>
                <div className="search__bar">
                <input type="text" placeholder="Search..." />
                <i className="fa fa-search"></i>
                </div>

                <nav className="nav__links">
                <a href="#product" className="nav__item">Products</a>
                <div className="login__icon">
                    <FaUserLarge size={16}></FaUserLarge>
                </div>
                <div className="cart__icon">
                    <MdShoppingCart></MdShoppingCart>
                    <span className="cart__count">0</span>
                </div>
                </nav>
            </header>
        </>
    )
}