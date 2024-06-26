import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReduxProvider from "../provider/redux/ReduxProvider";
const inter = Inter({ subsets: ["latin"] });
import NextTopLoader from "nextjs-toploader";
import MainLayout from "../layout/MainLayout";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <MainLayout>
        <html lang="en">
          <body className={inter.className}>
            <NextTopLoader zIndex={1600} height={3} color="#7947fe" />
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </MainLayout>
    </ReduxProvider>
  );
}
