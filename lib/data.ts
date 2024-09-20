const logo = "/logo.png";
const headerImg = "/headerImg.png";
const seoImg = "/seoImg.png";
const perfoImg = "/perfoImg.png";
const velocidadeIcon = "/velocidade.svg";
const otimizacaoIcon = "/otimizacao.svg";
const seoIcon = "/seoIcon.svg";

export const id = {
  logo: logo,
  corPrimary: "#C6B92D",
  corSecondary: "#841E7F",
};

export const links = [
  { label: "Sobre o teste", hash: "#teste" },
  { label: "SEO", hash: "#seo" },
  { label: "Performance", hash: "#performance" },
  { label: "blog", hash: "#blog" },
];

export const header = {
  title: "Teste de desenvolvimento <span> Front-end Next.JS </span>",
  description:
    "Bem-vindo ao nosso desafio de codificação React! Este teste avalia suas habilidades em desenvolver aplicações web interativas com React. Sua tarefa é construir uma aplicação que interaja com APIs externas e exiba dados de forma clara e eficiente. Estamos ansiosos para ver sua criatividade e qualidade de código em prática.",
  img: headerImg,
};

export const seo = {
  title: "",
  description: "",
  titleTags: "",
  tags: [
    {
      text: "",
      icon: "",
    },
  ],
  seoImg: seoImg,
};

export const performance = {
  title: "",
  subtitle: "",
  description: "",
  titleTags: "",
  tags: [
    {
      text: "",
      icon: velocidadeIcon,
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
