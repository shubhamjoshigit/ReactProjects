import cartReducer from "./reducer/cartReducer";
import { createStore} from "redux";
const store = createStore(cartReducer);
export default store;