import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    name: '',
    description: '',
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setName(state, action) {
            return {
                ...state,
                name: action.payload
            }
        },
        setDescription(state, action) {
            return {
                ...state,
                description: action.payload
            }
        },
        setLoading(state, action) {
            return {
                ...state,
                isLoading: action.payload
            }
        },
        cleanInputs(state, _) {
            return {
                ...state,
                name: '',
                description: '',
            }
        }
    }
});

export const { setName, setDescription, setLoading, cleanInputs } = formSlice.actions;

export default formSlice.reducer;