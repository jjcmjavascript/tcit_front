import postService from '../services/postsService';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setPosts } from '../features/posts/postSlice';

export default () =>{
    const dispatch = useDispatch();
    useEffect(() => {
        postService.findAll()
            .then(response => {
                dispatch(setPosts(response))
            })
            .catch(err => {

            })
    }, []);
}