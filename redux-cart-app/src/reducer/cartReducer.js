import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";
const initialState = {noOfItems: 0,};

function cartReducer (state=initialState, action) {
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                initialState : state.noOfItems + 1
            }
        
        case DELETE_ITEM:
            return{
                ...state,
                initialState : state.noOfItems - 1
            }

        default:
            return state;


    }
}

export default cartReducer;
