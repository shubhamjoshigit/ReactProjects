import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

    const addItem =()=>{
        return{
            type: ADD_ITEM
        }
    }

    const removeItem =()=>{
        return {
            type: DELETE_ITEM
        }
    }

export {addItem,removeItem};