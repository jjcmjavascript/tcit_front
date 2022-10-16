import axios from 'axios';
import { tcitClientUrl } from '../configs/config';

export default {
    async findAll(){
        const response = await axios.get(`${tcitClientUrl}/posts`);
        
        return response.data; 
    },
    
    async create(post){
        const response = await axios.post(`${tcitClientUrl}/posts`, post); 

        return response.data; 
    },

    async destroy(postId){
        const response = await axios.delete(`${tcitClientUrl}/posts/${postId}`) 

        return response.data; 
    }
}