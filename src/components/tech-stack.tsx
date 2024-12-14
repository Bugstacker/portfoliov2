import React from 'react';

interface TechStackProps {
    stack?: string
}

const TechStack = ({stack}: TechStackProps) => {
    return (
        <p className='bg-emerald-800 w-fit text-xs text-emerald-100 bg-opacity-80 font-bold py-2 px-4 rounded-full text-center'>
            {stack}
        </p>
    )
}

export default TechStack;