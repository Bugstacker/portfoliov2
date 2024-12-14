import React from 'react';
import TechStack from "@/components/tech-stack";

interface ExperienceProps {
    duration?: string
    title?: string
    description?: string
    techStack?: string[]
}

const Experience = ({ duration, title, description, techStack }: ExperienceProps) => {
    return (
        <article className='grid gap-1.5 sm:grid-cols-[25%_1fr]'>
            <p className='text-slate-500 text-sm font-bold'>{duration}</p>
            <div className='space-y-1.5 flex-1'>
                <h3 className='text-slate-100 font-bold '>{title}</h3>
                <p>{description}</p>
                <div className='py-3 flex gap-2 flex-wrap'>
                    {techStack?.map((stack, index) => (<TechStack key={index} stack={stack}/>))}
                </div>
            </div>
        </article>
    )
}

export default Experience;