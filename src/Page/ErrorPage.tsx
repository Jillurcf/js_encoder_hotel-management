import React from 'react';

const ErrorPage: React.FC<any> = () => {
    return (
        <div className='w-screen h-screen items-center flex justify-center mx-auto'>
            <h1 className='text-2xl font-bold text-red-700'>Page Not Found: 404</h1>
        </div>
    );
};

export default ErrorPage;