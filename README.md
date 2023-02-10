# wefit - Front-end

O desafio consiste na criação de um site de e-commerce simplificado do zero, onde o candidato terá que criar um fluxo com três módulos/telas.

## Telas

- Home: Onde ele terá que fazer uma requisição na API, trazendo assim, a lista de filmes quem podem ser adicionados ao carrinho.
- Carrinho: Onde ele poderá ver os itens que foram adicionados, somando o valor total com base em cada item adicionado, podendo remover um item do carrinho. Por padrão, se o carrinho tiver nenhum item adicionado, deverá aparecer a tela de empty com a opção de voltar para tela inicial.
- Compra realizada: Após confirmar o pedido na tela anterior, o usuário deverá ser encaminhado para a tela de pedido confirmado. Aqui o usuário também terá a opção de voltar para tela inicial.

## Tech

- [ReactJS] - criação de interfaces para o usuário.
- [React-router-dom] - criação de rotas.
- [axios] - integração com a API.
- [styled-components] - estilização componentizada.
- [styled-reset] - resetar estilização dos browsers. 
- [vite] - alternativa mais rápida e eficiente para instalação do React.
- [concurrently] - para executar o JSON Server e o Vite junto. 

## Installation

```sh
    git clone "https://github.com/Nthliacc/wefit.git"
    cd wefit
    npm install
    npm start
```

## O que eu poderia melhorar

1. Ter feito o uso de useContext nos dados recebidos para maior envovilmento na aplicação e assim poderia setar. 
2. Utilização do ThemeProvider, para centralizar as cores padrões.
3. Por esquecimento, não consegui fazer o histórico de commits ideal para análise.

## Desafios encontrados


> Algumas libs nunca havia usado e esse teste serviu como exercicio e fazia tempo que não lidava com desenvolvimento para telas web e mobile.