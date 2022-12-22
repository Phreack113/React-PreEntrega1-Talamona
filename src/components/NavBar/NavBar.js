import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <nav className="navBar">
        <h2 className="logo">La Previa</h2>
        <ul>
            <li>Bebidas</li>
            <li>Juegos</li>
            <li>Promociones</li>
            <li>Contacto</li>
            <li>
              <CartWidget />
            </li>
        </ul>
    </nav>
  );
}

export default NavBar;
