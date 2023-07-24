import './CartItem.css';
import { ChevronUp,ChevronDown } from '../icons';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cartSlice';


function CartItem({ id,pic, name, price, amount }){
    const dispatch = useDispatch();
    return(
    <article className='cart-item'>
      <img src={pic} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn' onClick={()=>{
            dispatch(removeItem(id));
        }}>
          remove
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={()=>{
            dispatch(increase({id}));
        }}>
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn' onClick={()=>{
            if(amount === 1){
                dispatch(removeItem(id));
                return;
            }
            dispatch(decrease(id));
          }}>
          <ChevronDown />
        </button>
      </div>
    </article>
    );
}
export default CartItem;