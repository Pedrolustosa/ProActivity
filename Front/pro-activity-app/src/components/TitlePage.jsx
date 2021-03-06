import React from 'react'

export default function TitlePage({ title, children }) {
    return (
        <div className='d-flex justify-content-between align-items-end mt-4 mb-3 pb-2 border-bottom border-1'>
            <h1 className='m-0 p-1'>{title}</h1>
            {children}
        </div>
    );
}
