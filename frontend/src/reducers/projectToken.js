export default function (projectToken = '', action){
    if(action.type == 'addProjectToken'){
        return action.projectToken
    } else {
        return projectToken
    }
}