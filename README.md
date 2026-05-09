# FarmConnect-PH

Professional Next.js web platform for FarmConnect PH with marketplace landing page and demo admin operations portal.

## Demo Admin
Default fallback credentials:
- Email: `arnolfoasidoy155@gmail.com`
- Password: `asidoy12345`

For production, configure secure credentials via environment variables:
- `DEMO_ADMIN_EMAIL`
- `DEMO_ADMIN_PASSWORD`

## Local Development
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
npm start
```

## Deploy to Vercel
1. Push this repository to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `npm run build`
5. Add environment variables in Vercel Project Settings:
   - `DEMO_ADMIN_EMAIL`
   - `DEMO_ADMIN_PASSWORD`
6. Click **Deploy**.
