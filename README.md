# NAHSAZ Group — Corporate Platform

The official corporate website for **NAHSAZ Group**, a diversified Nigerian
conglomerate operating across real estate, agriculture, energy, and healthcare.
Built with the Next.js App Router, it presents the group's sectors and
subsidiaries, publishes corporate insights and careers, routes contact
inquiries via email, and includes an internal admin command center.

## Tech Stack

| Concern        | Choice                                   |
| -------------- | ---------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI             | React 19, [Tailwind CSS v4](https://tailwindcss.com) |
| Animation      | [Framer Motion](https://www.framer.com/motion/) |
| Icons          | [lucide-react](https://lucide.dev)       |
| Transactional email | [Resend](https://resend.com)        |
| Data (optional) | [Supabase](https://supabase.com)        |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Script          | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the development server       |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build         |
| `npm run lint`  | Run ESLint                         |

## Environment Variables

Create a `.env.local` file. All variables are optional in development — the
contact form degrades gracefully when email is not configured.

| Variable                | Purpose                                             |
| ----------------------- | --------------------------------------------------- |
| `RESEND_API_KEY`        | Resend API key used to send contact-form emails     |
| `RESEND_FROM`           | Verified "from" address (defaults to `onboarding@resend.dev`) |
| `CORPORATE_RECEIVER`    | Inbox that receives inquiries (defaults to `info@nahsaz.group`) |
| `NEXT_PUBLIC_GA_ID`     | Google Analytics measurement ID (analytics load only when set) |

## Project Structure

```
src/
├── app/                  # App Router routes
│   ├── about/            # The Group
│   ├── admin/            # Internal command center (excluded from robots)
│   ├── api/contact/      # Contact form email endpoint
│   ├── careers/          # Careers listing
│   ├── insights/         # Corporate insights
│   ├── sectors/[slug]/   # Dynamic sector pages
│   └── subsidiaries/[slug]/  # Dynamic subsidiary pages
├── components/           # Home, layout, and UI components
└── lib/
    ├── data/             # Sectors, jobs, and news content
    └── resend.ts         # Lazily-initialized email client
```

## Deployment

The app is optimized for [Vercel](https://vercel.com/new). Configure the
environment variables above in the project settings before deploying. See the
[Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying)
for other platforms.
