export default (err)=>{
    if(!err) return ; 

    if(err.response && err.response.data){
        return err.response.data.errors || [err.response.data.message];
    }

    return [err.message];
}