import React from 'react';

export default function Container({className = "container", children, style}) {
    return <div className={className}>
        <div className='row' style={style}>
            {children}
        </div>
    </div>
}