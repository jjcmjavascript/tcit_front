import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  original: [],
  filtered: [],
}

export const filterSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPost(state, action){
            state.original = [...state.original, action.payload];
            state.filtered = [...state.filtered, action.payload];
        },
        setPosts(state, action){
            return {
                original : action.payload,
                filtered : [...action.payload]
            }
        },
        destroyPost(state, action){
            return {
                original : state.original.filter(post =>  post.id !== action.payload),
                filtered: [...state.original.filter(post =>  post.id !== action.payload)]
            }
        },
        filterPost(state, action){
            const formatedAction =  action.payload.trim().toLowerCase();

            return {
                original: state.original,
                filtered: !formatedAction ? [...state.original] 
                    : state.original.filter(post => post.name && post.name.toLowerCase().includes(formatedAction)) 
            }
        }
    }
}); 

export const { setPosts , setPost, destroyPost, filterPost, fetchPost} = filterSlice.actions;

export default filterSlice.reducer;