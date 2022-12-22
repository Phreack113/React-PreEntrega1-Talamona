import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

library.add(faCartShopping)


function CartWidget() {
  return (
    <div className='cartContainer'>
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className='cart'/>
        <p className='count'>8</p>
    </div>
  );
}

export default CartWidget;