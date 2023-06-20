import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Header } from '@/components/Header';
import { ReduxProvider } from '../redux/provider';
import '../styles/index.scss';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Новости ИТМО',
  description: 'Новости ИТМО',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ReduxProvider>
          <Header />
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
