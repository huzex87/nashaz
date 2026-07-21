import { getResend } from '@/lib/resend';
import { NextResponse } from 'next/server';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = 5000;

/** Escape user-supplied text before interpolating it into the email HTML. */
function escapeHtml(value: unknown): string {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, sector, subject, message } = body ?? {};

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (typeof email !== 'string' || !EMAIL_PATTERN.test(email)) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        if (String(message).length > MAX_LENGTH || String(name).length > 200) {
            return NextResponse.json({ error: 'Input exceeds maximum length' }, { status: 400 });
        }

        const resend = getResend();
        if (!resend) {
            console.error('Contact form: RESEND_API_KEY is not configured.');
            return NextResponse.json({ error: 'Email service is not configured' }, { status: 503 });
        }

        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM || 'onboarding@resend.dev',
            to: process.env.CORPORATE_RECEIVER || 'info@nahsaz.group',
            replyTo: email,
            subject: `New Corporate Inquiry: ${subject || 'General Inquiry'} - ${sector || 'Group'}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #1B2D3D;">
                    <h1 style="color: #1B2D3D; border-bottom: 2px solid #C5A059; padding-bottom: 10px;">New Inquiry Received</h1>
                    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                    <p><strong>Phone:</strong> ${escapeHtml(phone) || '—'}</p>
                    <p><strong>Sector:</strong> ${escapeHtml(sector) || '—'}</p>
                    <p><strong>Subject:</strong> ${escapeHtml(subject) || '—'}</p>
                    <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 8px;">
                        <p><strong>Message:</strong></p>
                        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
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
        console.error('Contact form submission error:', err);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
