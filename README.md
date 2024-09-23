# Nome do Projeto

Este é um projeto desenvolvido em [Next.js](https://nextjs.org/) com foco em desenvolver uma pequena aplicação em Next.js que demonstre habilidades com React, gestão de estado e chamadas de API.
.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Execução](#execução)
- [Funcionalidades](#funcionalidades)
- [Tratamento de Erros](#tratamento-de-erros)
- [Responsividade](#responsividade)
- [Como Contribuir](#como-contribuir)

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sass](https://sass-lang.com)
- [TypeScript](https://www.typescriptlang.org/)

## Instalação

1. Clone o repositório:

   git clone https://github.com/marcosdelfrari/teste-olivas-digital.git

   cd teste-olivas-digital

2. Instale as dependências:

   npm install

   # ou

   yarn install

## Execução

Inicie o servidor de desenvolvimento:

npm run dev

# ou

yarn dev

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Funcionalidades

- Busca Dinâmica: Filtragem de conteúdo por palavras-chave.
- Geração de Estilos: Criação de SCSS com cores padrão do cliente a partir de /lib/data.ts durante o build.
- Carrossel com Dots: Exibição de posts da API em um carrossel com indicadores.
- Inputs Personalizados: Componentes de formulário com validação integrada.
- Animações Interativas: Uso de Framer Motion para transições suaves.
- Hooks Personalizados: Consumo de API, controle de carrossel e gerenciamento de formulário através de hooks.

## Tratamento de Erros

A aplicação lida com erros de API de forma adequada, exibindo mensagens claras para o usuário quando necessário. As mensagens de erro não foram traduzidas.

## Responsividade

A aplicação foi desenvolvida para ser totalmente responsiva, funcionando bem em dispositivos móveis e desktops. Os elementos se ajustam automaticamente ao tamanho da tela.

## Como Contribuir

1. Clone o repositório.
2. Crie uma branch para sua feature:

   git checkout -b minha-feature

3. Faça suas alterações e commit:

   git commit -m "Adiciona nova funcionalidade"

4. Envie para o repositório remoto:

   git push origin minha-feature

5. Abra um Pull Request.
