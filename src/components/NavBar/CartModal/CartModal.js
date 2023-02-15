import './CartModal.css';
import { useContext } from 'react';
import { contexto } from '../../Context/CustomProvider';
import CartItemContainer from '../CartItemContainer/CartItemContainer';

import * as React from 'react';
import Button from '@mui/material/Button';

function CartModal() {
    
    const { setViewModal, cleanCart, totalAmount } = useContext(contexto);
      
    const closeCart = () => {
        setViewModal(false);
    }
    
    return (
    <div className='modalBack'>
        <div className='modal'>
            <h2>Carrito de compras</h2>
            <CartItemContainer />
            <div className='buttonsContainer'>
                <div className='totalAmount'>
                 <p>Total a pagar $ {totalAmount}</p>
                </div>
                <Button variant="text" onClick={closeCart}>Cerrar</Button>
                <Button variant="text" onClick={cleanCart}>Descartar</Button>
                <Button variant="contained" onClick={closeCart}>Pagar</Button>
            </div>
        </div>
    </div>
  );
}

export default CartModal;
