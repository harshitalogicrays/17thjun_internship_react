export const ShowOnLogin=({children})=>{
    if(sessionStorage.getItem("17thjun_project") != null){
        return children
    } 
    else return null
}

export const ShowOnLogout=({children})=>{
    if(sessionStorage.getItem("17thjun_project") == null){
        return children
    } 
    else return null
}