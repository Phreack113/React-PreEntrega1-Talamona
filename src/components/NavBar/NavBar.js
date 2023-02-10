import './NavBar.css';
import CartWidget from '../NavBar/CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { contexto } from '../../components/Context/CustomProvider';


function NavBar() {
  const { tatalQty } = useContext(contexto);
  return (
    <nav className="navBar">
        <h2 className="logo"><a href='/'>La Previa</a></h2>
        <ul>
            <li><NavLink to="/categoria/bebidas">Bebidas</NavLink></li>
            <li><NavLink to="/categoria/juegos">Juegos</NavLink></li>
            <li><NavLink to="/categoria/promociones">Promociones</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
            <li>
              <CartWidget qty={tatalQty}/>
            </li>
        </ul>
    </nav>
  );
}

export default NavBar;
