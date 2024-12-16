'use server'

import { transporter } from "@/utils/nodemailer";

export async function enquiry(prevState: unknown, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    if(!name) return { success: false, message: 'Name is required' }
    if(!email) return { success: false, message: 'Email is required' }
    if(!message) return { success: false, message: 'Message is required' }
    
    const emailHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Website Enquiry</title>
            <!--[if !mso]><!-->
            <link href="https://fonts.googleapis.com/css2?family=Geist+Sans:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
            <!--<![endif]-->
            <style>
                @media screen and (max-width: 600px) {
                    .container {
                        width: 100% !important;
                    }
                    .content {
                        padding: 20px !important;
                    }
                    .logo {
                        width: 140px !important;
                    }
                    h1 {
                        font-size: 22px !important;
                    }
                    p {
                        font-size: 14px !important;
                        line-height: 22px !important;
                    }
                }
            </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Geist Sans', Arial, sans-serif; background-color: #1e293b;">
            <table role="presentation" style="width: 100%; border: none; border-spacing: 0; background-color: #1e293b; padding: 20px 0; margin-inline: auto">
                <tr>
                    <td style="padding: 0;">
                        <table role="presentation" class="container" style="width: 600px; border: none; border-spacing: 0; background-color: #0f172a; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
                            <!-- Main Content -->
                            <tr>
                                <td class="content" style="padding: 20px 40px;">
                                    <h1 style="font-family: 'Geist Sans', Arial, sans-serif; color: #10b981; margin: 0 0 20px 0; font-size: 24px; font-weight: 700; text-align: center;">
                                        New Website Enquiry
                                    </h1>
                                    <p style="font-family: 'Geist Sans', Arial, sans-serif; color: #e5e7eb; margin: 0 0 25px 0; font-size: 16px; line-height: 24px;">
                                        You have received a new enquiry from your website. Here are the details:
                                    </p>
                                    <table role="presentation" style="width: 100%; border: none; border-spacing: 0; background-color: #334155; border-radius: 6px; margin-bottom: 25px;">
                                        <tr>
                                            <td style="padding: 20px;">
                                                <p style="font-family: 'Geist Sans', Arial, sans-serif; color: #e5e7eb; margin: 0 0 15px 0; font-size: 15px;">
                                                    <strong style="color: #065f46; font-family: 'Geist Sans', Arial, sans-serif;">Name:</strong> ${name}
                                                </p>
                                                <p style="font-family: 'Geist Sans', Arial, sans-serif; color: #e5e7eb; margin: 0 0 15px 0; font-size: 15px;">
                                                    <strong style="color: #065f46; font-family: 'Geist Sans', Arial, sans-serif;">Email:</strong> ${email}
                                                </p>
                                                <p style="font-family: 'Geist Mono', monospace; color: #e5e7eb; margin: 0; font-size: 15px;">
                                                    <strong style="color: #065f46; font-family: 'Geist Sans', Arial, sans-serif;">Message:</strong><br>
                                                    ${message}
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                    <p style="font-family: 'Geist Sans', Arial, sans-serif; color: #6b7280; margin: 0; font-size: 14px; text-align: center;">
                                        This email was sent from your website contact form. Please respond to the sender directly.
                                    </p>
                                </td>
                            </tr>
                            <!-- Footer -->
                            <tr>
                                <td style="padding: 30px 40px; background-color: #0f172a; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                                    <p style="font-family: 'Geist Sans', Arial, sans-serif; color: #6b7280; margin: 0; font-size: 13px; text-align: center;">
                                        © ${new Date().getFullYear()} Kenneth Matovu. All rights reserved.
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `
    
    const options = {
        from: process.env.EMAIL,
        to: process.env.TO_EMAIL,
        replyTo: email,
        subject: 'New Porfolio Website Enquiry',
        html: emailHtml
    }
    
    try {
        const info = await transporter.sendMail(options);
        const success = info.accepted.length > 0;
        return { success, message: success ? 'Enquiry sent successfully, I reach out to you as soon as I can.' : 'Failed to send enquiry, Please Try Again' }
    } catch (_) {
        console.error('Error Occurred: ', _);
        return { success: false, message: 'Failed to send enquiry, Please Try Again' }
    }
    
}