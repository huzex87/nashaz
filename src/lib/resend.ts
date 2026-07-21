import { Resend } from 'resend';

let client: Resend | null = null;

/**
 * Lazily instantiate the Resend client.
 *
 * The client is created on first use rather than at module load so that a
 * missing `RESEND_API_KEY` does not crash the production build (Next.js
 * evaluates route modules during page-data collection, where the key is
 * typically absent). Returns `null` when the key is not configured, letting
 * callers degrade gracefully.
 */
export function getResend(): Resend | null {
    if (!process.env.RESEND_API_KEY) {
        return null;
    }
    if (!client) {
        client = new Resend(process.env.RESEND_API_KEY);
    }
    return client;
}
