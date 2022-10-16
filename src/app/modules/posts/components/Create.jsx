import React from "react";
import Swal from 'sweetalert2';

import { useSelector, useDispatch } from 'react-redux';
import { setDescription, setName } from "../features/formSlice";
import { createPost } from '../actions/actions';

import FormInput from '../../../components/FormInput';
import Button from '../../../components/Button';
import LoadingCircle from '../../../components/LoadingCircle';

const showErrors = (errors) => {
    Swal.fire(
        'Opps...!',
        errors.join("<br>"),
        'error'
    )
};

export default () => {
    const dispatch = useDispatch();
    const formState = useSelector(state => state.form);

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (formState.name && formState.description) {
            return dispatch(createPost({
                name: formState.name,
                description: formState.description
            }));
        }
        return showErrors(['Todos los campos son requeridos']);
    }

    return <>
        <form className="d-flex justify-content-between  mt-2 p-0">
            <FormInput placeholder="Nombre" size="col-6 col-md-3" value={formState.name} onChange={(e) => {
                dispatch(setName(e.target.value));
            }} />

            <FormInput placeholder="Descripción" value={formState.description} onChange={(e) => {
                dispatch(setDescription(e.target.value));
            }} />

            {
                formState.isLoading ? <LoadingCircle /> :
                    <Button className="btn btn-sm btn-secondary col-6 col-md-1 shadow" onClick={formSubmitHandler}>
                        Agregar
                    </Button>
            }
        </form>
    </>
}