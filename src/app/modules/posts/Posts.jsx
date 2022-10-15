import React from 'react';
import Table from '../../components/Table';
import TableHeader from '../../components/TableHeader';
import Container from '../../components/Container';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';

export default ()=>{
    const tableHeader = ['Nombre', 'Descrición', 'Accion'];
    const tableBody = [{name: 'Test', description: "test 2"}, {name: 'Test 1', description: "test 4"}];

    return <>
        <Container>
            <div className="d-flex justify-content-between  mt-2 p-0">
                <FormInput placeholder="Buscar por Nombre ..." size="col-6 col-md-3"/>
                
                {/* <Button className="btn btn-sm btn-secondary col-6 col-md-1">
                    Buscar
                </Button> */}
            </div>

            <Table  className="table table-striped table-bordered mt-2" 
                headClassName={"bg-secondary"} 
                tableHeader={<TableHeader headers={tableHeader}/>}>
                {tableBody
                    .map((row, index) => (
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.description}</td>
                            <td>
                                <span className='badge bg-danger pointer'> Eliminar </span>
                            </td>
                        </tr>)
                )}

            </Table>
                    
            <form className="d-flex justify-content-between  mt-2 p-0">
                <FormInput placeholder="Nombre" size="col-6 col-md-3"/>
                
                <FormInput placeholder="Descripción"/>

                <Button className="btn btn-sm btn-secondary col-6 col-md-1 shadow">
                    Agregar
                </Button>
            </form>

        </Container> 
    </>
}