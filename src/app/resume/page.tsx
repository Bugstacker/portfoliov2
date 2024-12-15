import React from 'react';

const Page = () => {
    return (
        <main className='flex justify-center items-center min-h-screen p-2 sm:p-4'>
            <div className="w-full max-w-4xl mx-auto h-[calc(100vh-2rem)] sm:h-[calc(100vh-4rem)]">
                <iframe
                    src='/resume.pdf'
                    className='w-full h-full border-none rounded-lg shadow-lg'
                    title='Resume'
                    allowFullScreen
                    loading='lazy'
                ></iframe>
            </div>
        </main>
    );
};

export default Page;