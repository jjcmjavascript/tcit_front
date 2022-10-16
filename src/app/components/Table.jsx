import React from 'react';

export default function Table({ className, headClassName, tableHeader, children }) {
    return <>
        <table className={className}>
            <thead className={headClassName}>
                {tableHeader}
            </thead>

            <tbody>
                {children}
            </tbody>
        </table>
    </>
}