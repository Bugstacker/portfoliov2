'use client'

import React from 'react';
import Link from "next/link";

const Navbar = () => {
    const [active, setActive] = React.useState<string>('about');
    
    React.useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = 'about'
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop
                const sectionHeight = section.clientHeight
                const scrollPosition = window.scrollY + window.innerHeight / 2
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.id
                }
            });
            setActive(currentSection)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                <li>
                    <Link className={`group flex items-center py-3 ${active ? 'text-slate-100': ''}`} href={`#about`}>
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                    </Link>
                </li>
                <li>
                    <Link className={`group flex items-center py-3 active`} href={`#experience`}>
                                        <span
                                            className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span
                            className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                    </Link>
                </li>
                <li>
                    <Link className={`group flex items-center py-3 active`} href={`#projects`}>
                                        <span
                                            className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span
                            className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;