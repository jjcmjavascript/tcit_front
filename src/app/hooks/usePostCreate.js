import { useDispatch } from "react-redux";
import { setPost } from "../features/posts/postSlice";
import { setLoading, } from "../features/posts/formSlice";
import { useEffect } from "react";
import postService from "../services/postsService";

export default (newPost)=>{
    const dispatch = useDispatch(); 
    
    useEffect(()=>{
        dispatch(setLoading(true));

        postService.create(newPost)
            .then(response=>{
                dispatch(setPost(response))
            })
            .catch(err =>{
                
            })
            .finally(()=>{
                dispatch(setLoading(false));
            });
    }); 
}