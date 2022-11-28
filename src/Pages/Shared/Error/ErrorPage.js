import React from 'react';
import error from './error.png'

const ErrorPage = () => {
    return (
        <div className='grid justify-items-center my-16'>
            <img className=' h-screen w-fit' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;