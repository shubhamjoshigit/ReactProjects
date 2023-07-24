import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotal } from './features/cartSlice';
import Modal from './components/Modal';


function App() {
  const dispatch= useDispatch();
  const {cartItems} = useSelector((store)=> store.cart);
  const {isOpen} = useSelector((store) => store.modal);

  useEffect(()=>{
    dispatch(calculateTotal());
  },[cartItems,dispatch]);

  return (
    <main>
      {isOpen &&  <Modal/>}
      <Navbar/>
      <CartContainer/>
    </main>
  );
}

export default App;
