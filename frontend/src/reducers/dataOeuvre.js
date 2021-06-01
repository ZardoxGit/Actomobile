export default function(value = '', action){
    if(action.type == 'getDataOeuvre'){
        return action.value
    } else {
        return value
    }
}