"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contato = exports.performance = exports.seo = exports.header = exports.links = exports.id = void 0;
var logo = "/logo.png";
var headerImg = "/headerImg.png";
var seoImg = "/seoImg.png";
var perfoImg = "/perfoImg.png";
var velocidadeIcon = "/velocidade.svg";
var otimizacaoIcon = "/otimizacao.svg";
var seoIcon = "/seoIcon.svg";
exports.id = {
    logo: logo,
    corPrimary: "#C6B92D",
    corSecondary: "#841E7F",
};
exports.links = [
    { label: "Sobre o teste", hash: "#teste" },
    { label: "SEO", hash: "#seo" },
    { label: "Performance", hash: "#performance" },
    { label: "blog", hash: "#blog" },
];
exports.header = {
    title: "Teste de desenvolvimento <span> Front-end Next.JS </span>",
    description: "Bem-vindo ao nosso desafio de codificação React! Este teste avalia suas habilidades em desenvolver aplicações web interativas com React. Sua tarefa é construir uma aplicação que interaja com APIs externas e exiba dados de forma clara e eficiente. Estamos ansiosos para ver sua criatividade e qualidade de código em prática.",
    img: headerImg,
};
exports.seo = {
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
exports.performance = {
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
exports.contato = {
    title: "",
    subtitle: "",
    description: "",
    checkbox: "",
};
