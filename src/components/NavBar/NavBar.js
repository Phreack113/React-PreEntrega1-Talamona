import './NavBar.css';
import CartWidget from '../NavBar/CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { contexto } from '../../components/Context/CustomProvider';


function NavBar() {
  const { tatalQty } = useContext(contexto);
  return (
    <nav className="navBar">
        <h2 className="logo"><NavLink to="/React-Talamona/">La Previa</NavLink></h2>
        <ul>
            <li><NavLink to="/React-Talamona/categoria/bebidas">Bebidas</NavLink></li>
            <li><NavLink to="/React-Talamona/categoria/juegos">Juegos</NavLink></li>
            <li><NavLink to="/React-Talamona/categoria/promociones">Promociones</NavLink></li>
            <li><p className='contacto'>Contacto</p></li>
            <li>
              <CartWidget qty={tatalQty}/>
            </li>
        </ul>
    </nav>
  );
}

export default NavBar;
