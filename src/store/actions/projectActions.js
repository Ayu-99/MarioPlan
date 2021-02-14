export const createProject=(project)=>{
    return (dispatch,getState)=>{
        //make asyn calls to database
        dispatch({type:"CREATE_PROJECT",project:project})
        

    }
}