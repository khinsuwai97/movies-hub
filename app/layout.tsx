import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Rubik } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { Noto_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import RegisterModal from '@/components/Modal/RegisterModal';
import LoginModal from '@/components/Modal/LoginModal';
import BottomMobileMenu from '@/components/BottomMobileMenu';
const inter = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Movies Hub',
  description: 'Search Favorite movies and series',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.className} dark:bg-primaryDark bg-white`}>
        <Providers>
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

// bg-white dark:bg-primaryDark antialiased
// bg-white text-slate-900 antialiased
