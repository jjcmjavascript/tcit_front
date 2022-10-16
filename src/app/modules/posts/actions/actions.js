import postService from '../../../services/postsService';
import { setLoading, cleanInputs } from '../features/formSlice';
import errorsFormater from '../../../utils/errorsFormater';

export const initPosts = () => {
    return async (dispatch) => {
        try {
            const posts = await postService.findAll();

            dispatch({
                type: 'posts/setPosts',
                payload: posts
            });
        }
        catch (e) {
            const errors = errorsFormater(e);

            dispatch({
                type: 'errors/setErrors',
                payload: errors,
            });
        }
    };
}

export const createPost = (newPost) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))

            const post = await postService.create(newPost);

            dispatch({
                type: 'posts/setPost',
                payload: post
            });

            dispatch(cleanInputs());
        }
        catch (e) {
            const errors = errorsFormater(e);

            dispatch({
                type: 'errors/setErrors',
                payload: errors,
            });
        }
        finally {
            dispatch(setLoading(false))
        }
    };
}

export const deletePost = (postId) => {
    return async (dispatch) => {
        try {
            await postService.destroy(postId);

            dispatch({
                type: 'posts/destroyPost',
                payload: postId
            });
        }
        catch (e) {
            const errors = errorsFormater(e);

            dispatch({
                type: 'errors/setErrors',
                payload: errors,
            });
        }
    };
}   
