import Header from "@/components/Header";
import Seo from "@/components/Seo";
import SpaceSection from "@/components/SpaceSection";
import Performance from "@/components/Performance";
import Contato from "@/components/Contato";
import Blog from "@/components/Blog";
import Head from "next/head";

export default function Home() {
  return (
    <div className="max-w-[1254px] mx-auto">
      <Head>
        <meta property="og:title" content="Título Específico da Página" />
        <meta
          property="og:description"
          content="Descrição desta página nas redes sociais."
        />
        <meta property="og:image" content="/images/specific-image.jpg" />
        <meta
          property="og:url"
          content="https://www.seusite.com/pagina-especifica"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Nome do Seu Site" />

        <meta
          name="google-site-verification"
          content="Código de verificação do Google"
        />
      </Head>
      <Header />

      <Seo />

      <Performance />
      <SpaceSection />
      <Blog />
      <SpaceSection />
      <Contato />
      <SpaceSection />
    </div>
  );
}
