import React from 'react';

export default function Container({className = "container", children}) {
    return <div className={className}>
        <div className='row'>
            {children}
        </div>
    </div>
}