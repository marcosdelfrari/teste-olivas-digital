const logo = "/logo.png";
const headerImg = "/headerImg.png";
const seoImg = "/seoImg.png";
const perfoImg = "/perfoImg.png";
const velocidadeIcon = "/velocidade.svg";
const otimizacaoIcon = "/otimizacao.svg";
const seoIcon = "/seo.svg";
const logoSvg = "/logo.svg";
const iconLogo = "/iconLogo.svg";
const visitaIcon = "/visitas.svg";
const leadsIcon = "/leads.svg";
const oportunidadesIcon = "/oportunidades.svg";
const vendasIcon = "/carrinho.svg";
const tempoIcon = "/tempo.svg";

export const id = {
  logo: logo,
  logoSvg: logoSvg,
  iconLogo: iconLogo,
  corPrimary: "#C6B92D",
  corSecondary: "#841E7F",
};

export const links = [
  { label: "Sobre o teste", hash: "#teste" },
  { label: "SEO", hash: "#seo" },
  { label: "Performance", hash: "#performance" },
  { label: "Blog", hash: "#blog" },
];

export const header = {
  title: `Teste de desenvolvimento <span class="text-primary"> Front-end Next.JS </span>`,
  description:
    "Bem-vindo ao nosso desafio de codificação React! Este teste avalia suas habilidades em desenvolver aplicações web interativas com React. Sua tarefa é construir uma aplicação que interaja com APIs externas e exiba dados de forma clara e eficiente. Estamos ansiosos para ver sua criatividade e qualidade de código em prática.",
  img: headerImg,
};

export const seo = {
  title: `SEO, ou <span class="text-primary"> otimização</span>`,
  description:
    "É uma estratégia crucial para melhorar a visibilidade e o ranking de um site nos resultados de pesquisa orgânica de motores de busca como Google, Bing e Yahoo.  A prática de SEO envolve uma série de técnicas e metodologias que visam otimizar aspectos internos e externos de um website para torná-lo mais atrativo.",
  titleTags: "O que pode ajudar com os seguintes resultados:",
  tags: [
    {
      text: "Visitas do seu site",
      icon: visitaIcon,
    },
    {
      text: "Mais leads gerados por mês",
      icon: leadsIcon,
    },
    {
      text: "Oportunidades geradas por mês",
      icon: oportunidadesIcon,
    },
    {
      text: "Vendas realizadas por mês",
      icon: vendasIcon,
    },
    {
      text: "Tempo de carregamento do site",
      icon: tempoIcon,
    },
  ],
  seoImg: seoImg,
};

export const performance = {
  title: "Acelere o seu site e melhore sua Performance!",
  subtitle: `Para <span class="text-primary">aumentar o faturamento</span> da sua empresa`,
  description:
    "Você está pronto para transformar a velocidade do seu site e oferecer a melhor experiência possível aos seus usuários? Nossa equipe de especialistas em otimização de sites está aqui para ajudar. Utilizamos as mais avançadas técnicas de SEO técnico e as melhores práticas de desenvolvimento web para garantir que seu site não só carregue rapidamente, mas também se mantenha seguro, acessível e otimizado para todos os dispositivos.",
  tags: [
    {
      text: "Melhore a Velocidade do Carregamento",
      icon: velocidadeIcon,
    },
    {
      text: "Otimização para Mobile",
      icon: otimizacaoIcon,
    },
    {
      text: "SEO Técnico",
      icon: seoIcon,
    },
  ],
  perfoImg: perfoImg,
};

export const contato = {
  title: "",
  subtitle: "",
  description: "",
  checkbox: "",
};
