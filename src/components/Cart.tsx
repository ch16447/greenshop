import "@/styles/Cart.css"
import { IoMdClose } from "react-icons/io";


export default function Cart(){
    return (
        <>
            <div className="cart__drawer">
                <div className="cart__header">
                <h3>Your Cart</h3>
                <IoMdClose className="close__cart"></IoMdClose>
                </div>
                <ul className="cart__items"></ul>
                <div className="cart__footer">
                <div className="cart__total">Total: $0</div>
                <button className="checkout__btn">Checkout</button>
                </div>
            </div>
        </>

    )
}