import React from 'react';

export default ({ size = "col-6 col-md-7", className="form-control", placeholder }) => {
    return <>
        <div className={size}>
            <input className={className} type="text" placeholder={placeholder} />
        </div>
    </>
}