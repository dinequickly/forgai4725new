# ForgeAI Studio

A futuristic AI startup studio interface with a chat interface powered by Google's Gemini API.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Add your Google API key to `.env.local`

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Google API Integration

To fully integrate with Google's Gemini API:

1. Get an API key from [Google AI Studio](https://makersuite.google.com/)
2. Add your API key to `.env.local`
3. Update the API route in `app/api/chat/route.ts` to use the actual Google API

Example implementation:

```typescript
// In app/api/chat/route.ts
const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.GOOGLE_API_KEY}`
  },
  body: JSON.stringify({
    contents: [
      {
        parts: [
          { text: message }
        ]
      }
    ]
  })
});

const data = await response.json();
const aiResponse = data.candidates[0].content.parts[0].text;
```

## Features

- Futuristic UI with holographic elements
- Chat interface for interacting with AI
- Code preview panel
- AI Co-Pilot suggestions

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
