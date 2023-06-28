import '@/styles/globals.css';
import { Rubik } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import RegisterModal from '@/components/Modal/RegisterModal';
import LoginModal from '@/components/Modal/LoginModal';
import ToasterAlert from '@/components/ToasterAlert';

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
