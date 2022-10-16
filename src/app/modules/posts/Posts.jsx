import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux'
import { initPosts } from './actions/actions';

import Container from '../../components/Container';
import Filters from './components/Filters';
import Create from './components/Create';
import Main from './components/Main';

const showErrors = (errors) => {
    Swal.fire(
        'Opps...!',
        errors.join("<br>"),
        'error'
    )
};

export default () => {
    const dispatch = useDispatch();
    const errorsState = useSelector(state => state.errors.errors);

    if (errorsState && errorsState.length > 0) {
        showErrors(errorsState);
    }

    useEffect(() => {
        dispatch(initPosts());
    }, []);

    return <>
        <Container className='container pt-3'>
            <Filters />
            <Main/>
            <Create />
        </Container>
    </>
}