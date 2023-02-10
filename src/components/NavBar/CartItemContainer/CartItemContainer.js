import { useContext } from "react"
import { contexto } from "../../Context/CustomProvider"
import { CartItemDetail } from "../CartItemDetail/CartItemDetail";

const CartItemContainer = () => {

    const { cart } = useContext(contexto);
    
    return (
        <>
            {cart.map( p => 
            {
                return(
                    <CartItemDetail prd={p}/>
                )
            })}
        </>
    )
}

export default CartItemContainer