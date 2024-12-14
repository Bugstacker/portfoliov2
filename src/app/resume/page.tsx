import React from 'react';

const Page = () => {
    return (
        <main className='flex justify-center items-center h-screen'>
            <iframe
                src='/resume.pdf'
                className='w-full h-full border-0'
                title='resume'
            ></iframe>
        </main>
    );
};

export default Page;