import { useSelector } from "react-redux";
import "./Items.css";

function Items(){
    const item = useSelector((store)=> (store.cart.cartItems));
    return(
        item.map(itm=>(
            <div className="items-div">
                <h2>{itm.name}</h2>
                <div>
                    <img src={itm.pic} alt="Pictures"/>
                </div>
                <div>
                    <p>{itm.price}</p>
                </div>
            </div>
        ))
       
    );
}

export default Items;