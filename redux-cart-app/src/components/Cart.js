import classes from './Cart.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {addItem,removeItem} from '../actions/cartActions';
function Cart(){
    const itemsCount = useSelector((state) => state.noOfItems);
    const dispatch = useDispatch();
    return(
        <div className={classes.container}>
            <div className={classes.cart}>Number of Items in Cart : {itemsCount}</div>
            <button className={classes.add} onClick={()=>{
                dispatch(addItem()); 
                }}
                >ADD
            </button>
            <button className={classes.rem} onClick={()=>{
                dispatch(removeItem());
                }} 
                
                >Delete
            </button>
        </div>
    );
}
export default Cart;