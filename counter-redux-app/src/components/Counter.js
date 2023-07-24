import './Counter.css';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount, increaseCount, resetCount } from '../actions/counterActions';

function Counter(){
    const dispatch = useDispatch();
    const count = useSelector((state)=> state.counter);
    return(
        <div className="counter">
            <h2>Value: {count}</h2>
         <button className="increment" onClick={()=>{dispatch(increaseCount())}}>+</button>
         <button className="reset" onClick={()=>{dispatch(resetCount())}}>reset</button>
         <button className="decrement" onClick={()=>{dispatch(decreaseCount())}}>-</button>
        </div>
    );
}

export default Counter;