import React from 'react';

export default ({headers}) => {
    return <>
        <tr>
            {headers.map((header, index) => <th key={index}>{header}</th>)}
        </tr>
    </>
}