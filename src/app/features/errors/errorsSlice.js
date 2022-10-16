const {createSlice } = require('@reduxjs/toolkit');

const initialState = {
    errors: [],
}; 

export const errorsSlice = createSlice({
    name: 'errors',
    initialState,
    reducers: {
        setErrors(state, action){
            return {
                errors : action.payload
            }
        }
    },
}); 

export const { setErrors } = errorsSlice.actions;

export default errorsSlice.reducer; 
