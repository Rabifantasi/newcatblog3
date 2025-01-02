import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'Cat Blog',
  description: 'Explore cute and fun articles about cats.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header />
        <main className="min-h-screen container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 custom:px-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
