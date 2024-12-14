import React from 'react';
import Image from "next/image";
import {FaArrowUpRightFromSquare} from "react-icons/fa6";

type ProjectProps = {
    title?: string
    description?: string
    thumbnail?: string
    href?: string
}

const Project = ({title, description, thumbnail, href}: ProjectProps) => {
    return (
        <article className='gap-2 grid sm:grid-cols-[25%_1fr]'>
            <div className='space-y-2 sm:order-2'>
                <a href={href} target='_blank' className='text-slate-100 font-bold flex gap-2 items-center'>{title}
                    <FaArrowUpRightFromSquare/></a>
                <p>{description}</p>
            </div>
            {thumbnail && title &&
		        <Image
			        src={thumbnail}
			        alt={title}
			        width={200}
			        height={100}
                className='rounded object-cover col-span-1'
            />}
        </article>
    );
};

export default Project;