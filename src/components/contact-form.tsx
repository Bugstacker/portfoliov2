'use client'

import {ReactElement, useActionState} from 'react';
import Form from "next/form";
import { enquiry } from "@/app/actions";
import {IoCheckmarkCircleOutline} from "react-icons/io5";
import {RxCrossCircled} from "react-icons/rx";

export const viewport = {
    width: 1,
    content: 'width=device-width, initial-scale=1.0',
    userScalable: 'no',
}

const ContactForm = () => {
    const [data, action, isPending] = useActionState(enquiry, null);
    let feedback: ReactElement | null = null;
    
    if (data?.success) {
        feedback = (
            <p className="text-emerald-400 font-bold flex items-center justify-center gap-4 border border-emerald-600 py-2 bg-emerald-800/50 rounded">
                <IoCheckmarkCircleOutline className="h-8 w-8" />
                {data?.message}
            </p>
        );
    } else {
        feedback = (
            <p className="text-rose-400 font-bold flex items-center justify-center gap-4 border border-rose-600 py-2 bg-rose-800/50 rounded">
                <RxCrossCircled className="h-8 w-8" />
                {data?.message}
            </p>
        );
    }

    
    return (
        <section id='#contact' className='transition-all ease-in'>
            <h2 className='text-2xl uppercase my-10 font-bold font-[family-name:var(--font-geist-mono)] text-slate-100'>Contact Form</h2>
            {!data?.success && <Form action={action} className='grid gap-4 w-full'>
                <div className='grid gap-2'>
                    <label htmlFor='name' className='font-bold'>Name:</label>
                    <input
                        type='text' name='name' required autoComplete='off'
                        className='bg-transparent p-2 border font-semibold text-sm outline-none border-slate-500 rounded text-emerald-500 capitalize'
                        autoCapitalize={'none'}
                        placeholder='John Doe'
                    />
                </div>
                
                <div className='grid gap-2'>
                    <label htmlFor='email' className='font-bold'>Email:</label>
                    <input
                        type='email'
                        name='email'
                        required autoComplete={'email'}
                        className='bg-transparent p-2 border font-semibold text-sm outline-none border-slate-500 rounded text-emerald-500'
                        placeholder='johndoe@example.com'
                    />
                </div>
                
                <div className='grid gap-2'>
                    <label htmlFor='message' className='font-bold'>Message:</label>
                    <textarea
                        name='message'
                        className='w-full p-2 font-semibold text-sm bg-transparent rounded border-slate-500 border text-emerald-500 resize-none outline-none'
                        rows={6} required
                        placeholder="I'm John Doe from the moon. I'd like to know more about your services or we work on something together."
                    />
                </div>
                
                <button type='submit'
                        className='bg-emerald-800 transition-colors ease-in hover:bg-emerald-100 hover:text-emerald-800 w-1/4 uppercase text-emerald-100 font-bold py-2 px-4 rounded text-center disabled:opacity-50'
                        disabled={isPending}
                >{isPending ? 'Sending...' : 'Send'}</button>
            </Form>}
            { data && feedback }
        </section>
    );
};

export default ContactForm;