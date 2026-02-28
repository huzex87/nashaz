import { resend } from '@/lib/resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, sector, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM || 'onboarding@resend.dev',
            to: process.env.CORPORATE_RECEIVER || 'info@nahsaz.group',
            subject: `New Corporate Inquiry: ${subject || 'General Inquiry'} - ${sector || 'Group'}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #1B2D3D;">
                    <h1 style="color: #1B2D3D; border-bottom: 2px solid #C5A059; padding-bottom: 10px;">New Inquiry Received</h1>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Sector:</strong> ${sector}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 8px;">
                        <p><strong>Message:</strong></p>
                        <p>${message}</p>
                    </div>
                    <footer style="margin-top: 30px; font-size: 0.8em; color: #64748b;">
                        Sent via NAHSAZ Group Official Portal - Operational Excellence System
                    </footer>
                </div>
            `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (err) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
