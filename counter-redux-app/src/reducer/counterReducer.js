const initialState = {
    counter: 0,
}

function counterReducer (state = initialState, action){
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                counter : state.counter + 1
            }

        case 'SUBTRACT':
            return{
                ...state,
                counter : state.counter - 1
            }

        case 'RESET':
            return{
                counter : 0
            }

        default:
            return state
    }
}

export default counterReducer;