import {IoLogoGithub, IoLogoInstagram, IoLogoTwitter, IoLogoWhatsapp} from "react-icons/io5";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import React from "react";
import Experience from "@/components/experience";
import Project from "@/components/project";
import Link from "next/link";
import Blog from "@/components/blog";
import Navbar from "@/components/navbar";


export default function Home() {
    return (
        <div className="grid grid-rows-[auto_1fr] lg:grid-rows-[auto_auto_auto] min-h-screen px-6 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] lg:p-0 lg:flex max-w-screen-xl mx-auto">
            <aside className='lg:sticky lg:h-screen lg:overflow-hidden lg:top-0 lg:w-[40%] lg:py-24'>
                <header className='pt-10 lg:pt-0 lg:h-full lg:flex lg:flex-col lg:justify-between'>
                    <div>
                        <h1 className='text-slate-100 font-bold text-4xl'>Kenneth Matovu</h1>
                        <h2 className='text-slate-300 text-xl font-semibold py-2'>Fullstack Engineer</h2>
                        <p className='mt-2 w-1/2'>I build accessible, pixel-perfect digital experiences for the web.</p>
                        <Navbar />
                    </div>
                    <section className="flex mt-6 w-1/2 gap-4">
                        <a href="https://github.com/Bugstacker" target='_blank' referrerPolicy='no-referrer'>
                            <IoLogoGithub className='w-8 h-8 hover:text-slate-100'/>
                        </a>
                        <a href="https://www.linkedin/in/kenneth-matovu"  target='_blank' referrerPolicy='no-referrer'>
                        <RiLinkedinBoxLine className='w-8 h-8 hover:text-slate-100'/>
                        </a>
                        <a href="https://www.instagram.com/emaky_sr" target='_blank' referrerPolicy='no-referrer'>
                            <IoLogoInstagram className='w-8 h-8 hover:text-slate-100'/>
                        </a>
                        <a href="https://wa.me/+256752001253" target='_blank' referrerPolicy='no-referrer'>
                            <IoLogoWhatsapp className='w-8 h-8 hover:text-slate-100'/>
                        </a>
                        <a href="https://x.com/emkaysr" target='_blank' referrerPolicy='no-referrer'>
                            <IoLogoTwitter className='w-8 h-8 hover:text-slate-100'/>
                        </a>
                    </section>
                </header>
            </aside>
            
            <main className="flex flex-col gap-8 row-start-2 lg:w-[60%] lg:overflow-y-auto lg:py-24">
                <section id='about' className='grid gap-4'>
                    <h3 className='text-slate-100 font-bold text-xl lg:mt-0 mt-10'>ABOUT</h3>
                    <article className='mt-5'>
                        I&apos;m a developer passionate about crafting accessible, pixel-perfect user interfaces that
                        blend thoughtful design with robust engineering. My favorite work lies at the intersection of
                        design and development, creating experiences that not only look great but are meticulously built
                        for performance and usability.
                    </article>
                    
                    <article>
                        Currently, I&apos;m a <span className='text-slate-100 font-semibold'>freelance</span> full-stack
                        developer, specializing in building web apps custom tailored to the business needs, vision and
                        goals. I design the layouts mainly in <span className='text-slate-100'>Figma</span>, start
                        building the application from scratch following the design. In certain scenarios clients only
                        have an idea on what they want even without the graphic elements like logos, which I then first
                        need to create upfront. Later on I contribute to the maintenance of UI components that power
                        these app&apos;s frontend and the business logic for the backend, ensuring these platforms meet
                        web accessibility standards and best practices to deliver an intriguing user experience.
                    </article>
                    
                    <article>
                        On this amazing journey, I&apos;ve had an opportunity to develop software across a variety of
                        settings ---- from <span className='text-slate-100'>large corporations</span> to <span
                        className='text-slate-100'>start-ups</span> and <span className='text-slate-100'>small digital product studios</span>.
                        Additionally, I also released an article on medium, guiding anyone on how to learn how to build
                        web apps with all I wished I knew which could&apos;ve saved me some good amount of time.
                    </article>
                    
                    <p>In my spare time, I&apos;m usually playing billiards 🎱, making technology research / Learning new
                        stacks, hanging out with my friends.</p>
                </section>
                <section id='experience' className='space-y-10'>
                    <h2 className='text-slate-100 font-bold text-xl pt-10'>EXPERIENCE</h2>
                    <Experience
                        duration='2024 -- PRESENT'
                        title='Full-Stack Developer, Resi Staffing & Services Ltd'
                        description='Build and maintain critical web apps use dto construct RSS&apos;s frontend and backend. Work closely with the client, to create an application which align with the business goals & vision, and advocate for best practices in web accessibility.'
                        techStack={['TypeScript', 'NextJS', 'Tailwind CSS', 'React', 'HTML & CSS']}
                    />
                    <Experience
                        duration='2023 -- 2024'
                        title='Web Developer, Mina Care Services Ltd'
                        description="Build, style, and ship high quality website of the company and digital experiences through creating social media pages, then teaching the staff on how they can manage these pages, as I maintain the website. Increased the company's enquiry rate by 80% through the initiatives to establish a digital presence."
                        techStack={['NextJs', 'Tailwind CSS', 'Javascript', 'Rest API', 'React', 'HTML & CSS']}
                    />
                    
                    <Experience
                        duration='2022 -- 2023'
                        title='Software Developer, Sonador Motors Co., Ltd'
                        description='Created social media pages, Browser profiles and the first version of the website. Inaddition, I geared the advertising campaigns which saw a 100% increase in the enquiry rate thus improving sales by 80%, Created other apps which am also still maintaining like the <span className="text-slate-100">Invoice Generator App</span> which generates 4 invoices for the company, which it requires for use on a daily basis.'
                        techStack={['React', 'NextJs', 'Tailwind CSS', 'Javascript', 'HTML & CSS', 'Django', 'Python', 'Amazon S3', 'Amazon RDS', 'REST API']}
                    />
                </section>
                
                <Link href='/resume' className='flex items-center gap-2 text-lg text-slate-100 font-semibold'>View Full
                    Resume <FaArrowUpRightFromSquare/>
                </Link>
                
                <section id='projects' className='space-y-8'>
                    <h3 className='text-slate-100 font-bold text-xl pt-10'>PROJECTS</h3>
                    <Project
                        title='Resi Staffing & Services Web App'
                        href='https://resistaffingandservices.co.uk'
                        description='A platform that connects job seekers with employers in the hospitality industry.'
                        thumbnail='https://placehold.co/600x400@3x.png'
                    />
                    
                    <Project
                        title='Mina Care Services Website'
                        href='https://minacareservices.co.uk'
                        description='A website that showcases the services offered by Mina Care Services.'
                        thumbnail='https://placehold.co/600x400@3x.png'
                    />
                    
                    <Link href='#'
                          className='flex gap-2 hover:gap-4 hover:border-b w-fit transition-all ease-in border-emerald-500 items-center font-bold text-slate-100'>View
                        Full Project Archive <FaArrowUpRightFromSquare/></Link>
                </section>
                
                <section className='space-y-8'>
                    <h3 className='text-slate-200 font-bold text-xl pt-10'>WRITING</h3>
                    <Blog
                        thumbnail='https://placehold.co/600x400@3x.png'
                        title='How to Learn Web Development'
                        year='2023'
                    />
                </section>
                
                <footer className='max-w-md'>
                    <p>Loosely designed in <span className='text-slate-200'>Figma</span> and coded in <span
                        className='text-slate-100'>Webstorm</span> by yours truly. Built in <span
                        className='text-slate-100'>Next.js</span> and <span
                        className='text-slate-100'>Tailwind CSS</span> with <span
                        className='text-slate-100'>TypeScript</span>, deployed with <span
                        className='text-slate-100'>Vercel.</span>All text is set to GeistMono typeface</p>
                </footer>
            </main>
        </div>
    );
}
