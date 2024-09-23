import Navbar from "@/components/Navbar";
import "./globals.scss";
import { Fira_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Head from "next/head";
import WhatsappFloat from "@/components/WhatsappFloat";

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
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Descrição do site para motores de busca."
        />
        <meta name="keywords" content="palavras-chave, SEO, site" />
        <meta name="author" content="Nome do Autor" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Título do Site" />
        <meta
          property="og:description"
          content="Descrição do site nas redes sociais."
        />
        <meta property="og:image" content="/images/social-image.jpg" />
        <meta property="og:url" content="https://www.seusite.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nome do Seu Site" />

        <meta
          name="google-site-verification"
          content="Código de verificação do Google"
        />
      </Head>

      <body className={`${firaSans.className} `}>
        <Navbar />
        {children}
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
