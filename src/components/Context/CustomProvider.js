import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CarritoProvider = ({ children }) => {
    const [viewModal, setViewModal] = useState(false);
    const [cart, setCart] = useState([]);
    const [tatalQty, setTotalQty] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [qty, setQty] = useState(0);
    const [prd, setPrd] = useState({});

    let cartArr = [...cart];

    const mas = () => {
        const newQty = qty + 1;
        console.log(newQty)
        setQty(newQty)
        changePrd(prd, newQty)
    }
    
    const menos = () => {
        if (qty > 0){
            const newQty = qty - 1;
            setQty(newQty)
            changePrd(prd, newQty)
        }
    }
    
    const isInCart = (idProd) => {
        const searchPrd = cartArr.find(({ id }) => `${id}` === idProd);
        const searchQty = searchPrd ? searchPrd.qty : 0;
        setQty(searchQty);
    }

    const changePrd = (prd, qty) =>{

        const totals = () => {
            const newTotals = cartArr.reduce((acc, p) => {
                acc.qty += p.qty;
                acc.amount += (p.qty * p.price);
                return acc;
            }, {
                qty: 0,
                amount: 0
            })
            setTotalQty(newTotals.qty);
            setTotalAmount(newTotals.amount);
        }
        
        
        if (qty !== 0){
            //Reviso si el producto ya está en el carrito
            const searchPrd = cartArr.map( p => p.id).indexOf(prd.id);
            console.log(searchPrd);
            const cartPrd = { ...prd, qty };
            console.log(cartPrd);
            console.log(cartArr)
            searchPrd > -1 ? cartArr[searchPrd] = cartPrd : cartArr.push(cartPrd);
            console.log(cartArr)
            setCart(cartArr);  
        } else {
            //Quito del array el producto eliminado
            cartArr = [...cart].filter(p => p.id !== prd.id)
            console.log(cartArr)
            setCart(cartArr);  
        }

        totals();
    }

    const cleanCart = () => {
        setCart([]);
        setViewModal(false);
        setTotalQty(0);
        setTotalAmount(0);
    }

    const valorContexto = {
        cart,
        tatalQty,
        totalAmount,
        cleanCart,
        changePrd,
        isInCart,
        viewModal,
        setViewModal,
        qty,
        mas,
        menos,
        prd, 
        setPrd
    }

    return (
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CarritoProvider;