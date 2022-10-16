import React from "react";
import { useDispatch } from "react-redux";
import { filterPost } from '../features/postSlice';

import FormInput from '../../../components/FormInput';

export default () => {
    const dispatch = useDispatch();
    const inputFilterHandler = e => {
        dispatch(filterPost(e.target.value));
    };

    return <>
        <FormInput placeholder="Buscar por Nombre ..." size="p-0 col-6 col-md-3" onChange={inputFilterHandler} />
    </>
}