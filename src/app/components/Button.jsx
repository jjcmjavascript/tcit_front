import React from 'react';

export default (props) => {
    const children = props.children;

    return <>
        <button  {...props}>
            {children}
        </button>
    </>
}