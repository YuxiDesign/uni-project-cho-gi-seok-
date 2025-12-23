import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Providers from './providers';

export const metadata = {
  title: "Cho Gi-Seok",
  description: "Portfolio Redesigned",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="fixed inset-x-0 top-0 z-50 bg-transparent text-white border-b border-white/50 ">
          <Nav />
        </header>
        <Providers>
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}