# E-commerce Website

A modern full-stack e-commerce website built with Next.js, featuring product management, user authentication, payment integrations, and admin panel.

## Features

- Unlimited product categories
- General products with stock and service orders
- Discount system
- Recommended products and categories on homepage
- Flash sales
- Top-up system with TrueWallet and PromptPay QR
- Custom top-up codes
- User membership with Discord OAuth
- Profile page with purchase history
- Admin backend for managing all aspects
- Rank system with colors
- Responsive design with dark/light mode
- Customizable theme colors

## Tech Stack

- **Frontend:** Next.js 16, React 19, Tailwind CSS, TypeScript
- **Backend:** Next.js API Routes
- **Database:** MongoDB with Mongoose
- **Authentication:** NextAuth.js with Discord OAuth
- **Payments:** TrueWallet, PromptPay QR integration
- **Styling:** Tailwind CSS with next-themes for dark mode

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env.local`:
   ```
   MONGODB_URI=your-mongodb-connection-string
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=http://localhost:3000
   DISCORD_CLIENT_ID=your-discord-client-id
   DISCORD_CLIENT_SECRET=your-discord-client-secret
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Project Structure

- `app/` - Next.js app directory with pages and API routes
- `components/` - Reusable React components
- `lib/` - Utility functions and database connections
- `models/` - Mongoose schemas
- `public/` - Static assets

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT
