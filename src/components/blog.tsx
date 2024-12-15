import Image from "next/image";
import {FaArrowUpRightFromSquare} from "react-icons/fa6";
import React from "react";

type BlogProps = {
    title?: string
    year?: string
    thumbnail?: string
    href?: string
}

const Blog = ({title, thumbnail, year, href}: BlogProps) => {
    return (
        <a href={href} className='flex gap-4 items-center sm:grid grid-cols-[25%_1fr]'>
            {thumbnail && title &&
                <>
                    <Image src={thumbnail} alt={title}
                           width={100} height={50}
                           className='rounded object-cover sm:hidden'
                    />
                    <Image src={thumbnail} alt={title}
                           width={200} height={100}
                           className='rounded object-cover hidden sm:block'
                    />
                </>
            }
            <div>
                <p className='font-bold text-slate-400'>{year}</p>
                <p className='text-slate-100 font-bold flex gap-2 font-[family-name:var(--font-geist-mono)] items-center'>{title} <FaArrowUpRightFromSquare/></p>
            </div>
        </a>
    );
};

export default Blog;