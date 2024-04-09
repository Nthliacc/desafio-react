# wefit - Front-end

O desafio consiste na criação de um site de e-commerce simplificado do zero, onde o candidato terá que criar um fluxo com três módulos/telas.

## Telas

- Home: Onde ele terá que fazer uma requisição na API, trazendo assim, a lista de filmes quem podem ser adicionados ao carrinho, onde também podem ser filtrados.
- Carrinho: Onde ele poderá ver os itens que foram adicionados, somando o valor total com base em cada item adicionado, podendo remover um item do carrinho. Por padrão, se o carrinho tiver nenhum item adicionado, deverá aparecer a tela de empty com a opção de voltar para tela inicial.
- Compra realizada: Após confirmar o pedido na tela anterior, o usuário deverá ser encaminhado para a tela de pedido confirmado. Aqui o usuário também terá a opção de voltar para tela inicial.
- Empty: Tela de carrinho vazio, com a opção de voltar para tela inicial.

link Figma: [https://www.figma.com/file/RY494yKewR5EpAWUWBhlUp/Re-teste-Front-React-WeFit---2024?type=design&node-id=0%3A1&mode=design&t=8BphTewiGkv0GnQk-1]

## API

Simulando uma API, foi utilizado o JSON Server, onde foi criado um arquivo db.json com os dados dos filmes informado.

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

## License

MIT
**Free Software, Hell Yeah!**