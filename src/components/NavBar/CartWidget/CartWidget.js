import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartModal from '../CartModal/CartModal';
import { useContext } from 'react';
import { contexto } from '../../Context/CustomProvider';

library.add(faCartShopping)


function CartWidget({ qty }) {
  const { viewModal, setViewModal } = useContext(contexto);
  
  const openCart = () => {
    setViewModal(true);
  }
  
  return (
    <>
      <div className='cartContainer'>
        <button className='cartButton' onClick={openCart}>
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className='cart'/>
          <p className='count'>{qty}</p>
        </button>
      </div>
      { viewModal && <CartModal/> }
    </>
  );
}

export default CartWidget;