import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const NotFound = () => {
    return (
        <main className='px-6 sm:p-20 lg:p-0'>
            <div className='py-20 md:flex flex-row-reverse md:pt-40 items-center my-container'>
            <Image src='/404.png' alt='404 3d Animation' width={500} height={552} className='object-cover'/>
            <section className='text-center grid gap-4 md:gap-8 md:text-left'>
                <h1 className='text-4xl font-bold'>Page Not Found</h1>
                <p>Sorry, the page you&apos;re looking for might have been removed or is temporarily unavailable.</p>
                <Link
                    href='/'
                    className='bg-emerald-600 font-bold md:mx-0 text-emerald-100 px-8 py-4 w-fit mx-auto rounded-md'
                >Go to Homepage</Link>
            </section>
            </div>
        </main>
    );
};

export default NotFound;