export default function(value = '', action){
    if(action.type === 'addValue'){
        return action.value
    } else {
        return value
    }
}