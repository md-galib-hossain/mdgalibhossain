import type { Metadata } from 'next';
import './globals.css';  // Import your global styles
import Providers from '@/lib/providers/Providers';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Md Galib Hossain Portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <>
              <Toaster position="top-center" richColors />
              {children}
            </>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
