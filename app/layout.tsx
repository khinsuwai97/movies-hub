import '@/styles/globals.css';
import { Rubik } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import RegisterModal from '@/components/Modal/RegisterModal';
import LoginModal from '@/components/Modal/LoginModal';
import ToasterAlert from '@/components/ToasterAlert';
import Head from 'next/head';

const inter = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Movies Hub',
  description: 'Search Favorite movies and series',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/png" sizes="32x32" />
      </head>

      <body className={`${inter.className} dark:bg-primaryDark bg-white`}>
        <Providers>
          <ToasterAlert />
          <LoginModal />
          <RegisterModal />
          <div className="w-full">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
