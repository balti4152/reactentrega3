import ShoppingCart from "../ShoppingCart/Shoppingcart"
import './NavBar.css'

const NavBar = () => {
    return (
        <nav >
            
            
         
    <h3>Ecommerce</h3>
    <a  aria-current="page" href="#">Celulares</a>
    <a  href="#">Tablets</a>
    <a  href="#">Computadoras</a>
  

  <ShoppingCart/>

           
        </nav>
    )
}

export default NavBar