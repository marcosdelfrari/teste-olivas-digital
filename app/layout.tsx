import Navbar from "@/components/Navbar";
import "./globals.scss";
import { Fira_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Olivas Digtal",
  description: "- Teste estapa 1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${firaSans.className} max-w-[1254px] mx-auto`}>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
