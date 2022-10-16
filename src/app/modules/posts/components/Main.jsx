import Swal from 'sweetalert2';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import {deletePost} from '../actions/actions';
import Table from '../../../components/Table';
import TableHeader from '../../../components/TableHeader';
import Container from '../../../components/Container';

const style = {
    'minHeight' : 'auto',
    'maxHeight': '80vh',
    'overflowY': 'auto',
}

export default () => {
    const dispatch =  useDispatch();

    const posts = useSelector(state => state.posts.filtered);
 
    const tableHeader = ['Nombre', 'Descripcion', 'Accion'];

    const deleteHandler = async ({ name, id }) => {
        const swalResult = await Swal.fire({
            title: `Borrar post: ${name}`,
            icon: 'info',
            html: '¿Estas seguro de borrar este post?',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: 'Borrar',
        })

        if (swalResult.isConfirmed) {
            dispatch(deletePost(id));
        }
    };

    return <>
        <Container style={style}>
            <Table className="table table-striped table-bordered mt-2"
                headClassName={"bg-secondary"}
                tableHeader={<TableHeader headers={tableHeader} />}>
                {posts
                    .map((post, index) => (
                        <tr key={index}>
                            <td>{post.name}</td>
                            <td>{post.description}</td>
                            <td>
                                <span className='badge bg-danger pointer' onClick={() => deleteHandler(post)}> Eliminar </span>
                            </td>
                        </tr>)
                    )}
            </Table>
        </Container>
    </>
}