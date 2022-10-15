import axios from 'axios';
import { tcitClientUrl } from '../configs/config';

export const tcitService = {
    async findAll(){
        try {
            const response = axios.get(`${tcitClientUrl}/posts`).then(response => response.data);
            return response.data; 
        }
        catch(e){
            console.log(e);
            return e; 
        }
    },
    
    async create(post){
        try {
            const response = axios.post(`${tcitClientUrl}/posts`, post); 

            return response.data; 
        }
        catch(e){
            console.log(e);
            return e; 
        }
    },

    async destroy(postId){
        try {
            const response = axios.delete(`${tcitClientUrl}/posts/${postId}`) 

            return response.data; 
        }
        catch(e){
            console.log(e);
            return e; 
        }
    }
}