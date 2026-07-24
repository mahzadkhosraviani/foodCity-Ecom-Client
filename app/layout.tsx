import NextBprogress from "@/components/libraries/NextNprogress";
import "./globals.css";
import Header from "@/components/layout/Header";
import BootstrapClient from "@/components/libraries/Bootstrap";
import Footer from "@/components/layout/Footer";
import Toastify from "@/components/libraries/Toastify";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AuthProvider>
          <NextBprogress>
            <Header />
            {children}
            <Footer />
            <BootstrapClient />
            <Toastify />
          </NextBprogress>
        </AuthProvider>
      </body>
    </html>
  );
}
