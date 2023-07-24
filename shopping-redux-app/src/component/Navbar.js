import './Navbar.css';
import { useSelector } from 'react-redux';
function Navbar(){
    const amount = useSelector((store)=> store.cart.amount);
    return(
        <div className="nav-bar">
          <h2>Cart</h2>
          <div className="cart-icon">
             <p>{amount}</p>
          </div>
        </div>
    );
}

export default Navbar;