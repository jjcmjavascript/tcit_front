import { configureStore } from '@reduxjs/toolkit'; 
import postReducer from '../modules/posts/features/postSlice';
import formReducer from '../modules/posts/features/formSlice';
import errorsSlice from '../features/errors/errorsSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    form : formReducer,
    errors: errorsSlice,
  },
  middleware: [thunk]
})