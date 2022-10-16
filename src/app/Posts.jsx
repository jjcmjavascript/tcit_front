import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import {setName, setDescription} from './features/posts/formSlice';
import {filterPost} from './features/posts/postSlice';
import {initPosts, createPost, deletePost} from './actions';

import Table from './components/Table';
import TableHeader from './components/TableHeader';
import Container from './components/Container';
import Button from './components/Button';
import FormInput from './components/FormInput';
import LoadingCircle from './components/LoadingCircle';
import Swal from 'sweetalert2';

const containerHeight = {
    'height': 'auto',
    'maxHeight': '80vh',
    'overflowY': 'auto'
} 

const showErrors = (errors)=>{
    Swal.fire(
        'Opps...!',
        errors.join("<br>"),
        'error'
      )
}; 

export default ()=>{
    const dispatch = useDispatch();
    const tableHeader = ['Nombre', 'Descrición', 'Accion'];
    const posts = useSelector(state => state.posts.filtered);
    const formState = useSelector(state => state.form);
    const errorsState = useSelector(state => state.errors.errors);
    
    const inputFilterHandler = e => {
        dispatch(filterPost(e.target.value));
    }; 
    
    const formSubmitHandler = (e) => {
        e.preventDefault();

        if(formState.name && formState.description){
            return dispatch(createPost({
                name: formState.name,
                description: formState.description
            })); 
        }
        return showErrors(['Todos los campos son requeridos']);
    }
    
    const deleteHandler = async ({name, id}) => {
        const swalResult = await Swal.fire({
            title: `Borrar post: ${name}`,
            icon: 'info',
            html: '¿Estas seguro de borrar este post?',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: 'Borrar',
        })
        
        if(swalResult.isConfirmed){
            dispatch(deletePost(id));
        }
    };

    if(errorsState && errorsState.length > 0){
        showErrors(errorsState);
    }

    useEffect(()=>{
        dispatch(initPosts());
    },[]); 

    return <>
        <Container>
            <div className="d-flex justify-content-between  mt-2 p-0">
                <FormInput placeholder="Buscar por Nombre ..." size="col-6 col-md-3" onChange={inputFilterHandler} />
            </div>

            <Container style={containerHeight}> 
                <Table  className="table table-striped table-bordered mt-2"
                    headClassName={"bg-secondary"} 
                    tableHeader={<TableHeader headers={tableHeader}/>}>
                    {posts
                        .map((post, index) => (
                            <tr key={index}>
                                <td>{post.name}</td>
                                <td>{post.description}</td>
                                <td>
                                    <span className='badge bg-danger pointer' onClick={()=> deleteHandler(post)}> Eliminar </span>
                                </td>
                            </tr>)
                    )}
                </Table>
            </Container>
                    
            <form className="d-flex justify-content-between  mt-2 p-0">
                <FormInput placeholder="Nombre" size="col-6 col-md-3" value={formState.name} onChange={(e)=>{
                    dispatch(setName(e.target.value));
                }}/>
                
                <FormInput placeholder="Descripción" value={formState.description} onChange={(e) => {
                    dispatch(setDescription(e.target.value));
                }}/>

                {
                    formState.isLoading ? <LoadingCircle/> : 
                        <Button className="btn btn-sm btn-secondary col-6 col-md-1 shadow" onClick={formSubmitHandler}>
                            Agregar
                        </Button>
                }
            </form>

        </Container> 
    </>
}