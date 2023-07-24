import { useContext } from 'react';
import { context } from '../App';
import classes from './Products.module.css';

function Products({name,price,pic}){
    const item = useContext(context); 
    return(<>
        {item.map(
            (itm) => {
            return ( 
            <div className={classes.itemContainer}>
                <div className={classes.item}>
                    <h3>{itm.name}</h3>
                    <div className={classes.cartpic}><img src={itm.pic} alt="iphone"/></div>
                    <p>{itm.price}$</p>
                    <button>Buy</button>
                </div>
            </div>);
        }
        )}
       </>
    )
}

export default Products