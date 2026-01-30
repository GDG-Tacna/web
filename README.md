# GDG Tacna Web

Official website for the **Google Developer Group (GDG) Tacna**, Peru. This platform serves as a hub for our community events, member information, and resources.

## 🚀 Technologies

This project is built with a modern frontend stack:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: React Hook Form + Zod
- **Code Quality**: ESLint + Prettier

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (Latest LTS recommended)
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd gdg-tacna-web
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Set up environment variables:
   Copy `.env.local.example` to `.env.local` (if available) or create it with necessary keys.

4. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

The project follows a modular structure inside the `src` directory:

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── [locale]/     # Localized routes (en/es)
├── config/           # Global configurations (site metadata, etc.)
├── data/             # Static data files
├── i18n/             # Internationalization setup and locales
├── lib/              # Utility functions
└── presentation/     # UI Components
    ├── components/   # Business components (Header, Footer)
    └── ui/           # Reusable UI components (Buttons, Cards)
```

## 📜 Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs ESLint to check for code quality issues.
- `pnpm type-check`: Runs TypeScript compiler check.
- `pnpm format`: Formats code using Prettier.

## 🌐 Community

Join our community channels:

- [Website](https://gdgtacna.dev)
- [LinkedIn](https://linkedin.com/company/gdgtacna)
- [Twitter/X](https://twitter.com/gdgtacna)
- [Facebook](https://facebook.com/gdgtacna)
- [GitHub](https://github.com/gdgtacna)
