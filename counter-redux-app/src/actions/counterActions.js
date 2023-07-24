export function increaseCount(){
    return{
        type: 'ADD'
    }
}
export function decreaseCount(){
    return{
        type: 'SUBTRACT'
    }
}
export function resetCount(){
    return{
        type: 'RESET'
    }
}