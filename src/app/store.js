import { configureStore } from '@reduxjs/toolkit'; 
import postReducer from './features/posts/postSlice';
import formReducer from './features/posts/formSlice';
import errorsSlice from './features/errors/errorsSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    form : formReducer,
    errors: errorsSlice,
  },
  middleware: [thunk]
})