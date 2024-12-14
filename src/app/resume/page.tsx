import React from 'react';

const Page = () => {
    return (
        <main className='flex justify-center items-center h-screen'>
            <embed
                src='/resume.pdf'
                type={'application/pdf'}
                width='100%'
                height='100%'
            />
        </main>
    );
};

export default Page;