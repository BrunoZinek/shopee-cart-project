# Carrinho de compras com Node.js

Projeto de estudos em JavaScript e Node.js que simula um carrinho de compras no terminal, inspirado no carrinho da Shopee.

O objetivo é praticar módulos ES (`import` e `export`), funções assíncronas, objetos e manipulação de arrays.

## Funcionalidades

- Criar produtos com nome, preço e quantidade.
- Adicionar produtos ao carrinho.
- Remover uma unidade de um produto por vez.
- Excluir o produto do carrinho quando sua quantidade chegar a zero.
- Excluir um produto diretamente pelo nome.
- Exibir os produtos, suas quantidades e subtotais.
- Calcular o valor total do carrinho.

## Como executar

Tenha o Node.js instalado. O projeto não utiliza dependências externas.

Na pasta do projeto, execute:

```bash
node src/index.js
```

O arquivo `src/index.js` contém um exemplo que cria dois produtos, adiciona ambos ao carrinho, remove duas unidades de um deles e exibe o resultado no terminal. Para experimentar outras operações, altere esse arquivo.

## Estrutura do projeto

```text
shopee-cart-project/
├── src/
│   ├── services/
│   │   ├── cart.js      # Operações do carrinho
│   │   └── item.js      # Criação de produtos e cálculo do subtotal
│   └── index.js         # Exemplo de uso
├── package.json
└── README.md
```

## Funções disponíveis

| Função | Descrição |
| --- | --- |
| `createItem(name, price, quantity)` | Cria um produto com um método para calcular seu subtotal. |
| `addItem(userCart, item)` | Adiciona um produto ao carrinho. |
| `removeItem(userCart, item)` | Remove uma unidade; se for a última, retira o produto do carrinho. |
| `deleteItem(userCart, name)` | Exclui o produto pelo nome, independentemente da quantidade. |
| `displayCart(userCart)` | Exibe os produtos e seus subtotais no terminal. |
| `calculateTotal(userCart)` | Soma os subtotais e exibe o total no terminal. |

## Exemplo de uso

No arquivo `src/index.js`:

```javascript
import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const item = await createItem("Carrinho de brinquedo", 20, 3);

await cartService.addItem(myCart, item);
await cartService.removeItem(myCart, item);

await cartService.displayCart(myCart); // 2 unidades, subtotal de R$ 40
await cartService.calculateTotal(myCart); // Total de R$ 40
```

## Como o subtotal é atualizado

O subtotal é calculado quando o método `item.subtotal()` é chamado:

```javascript
subtotal() {
  return this.price * this.quantity;
}
```

Assim, o cálculo usa o preço e a quantidade atuais do objeto. Quando uma unidade é removida, a próxima chamada de `subtotal()` já reflete a nova quantidade.

## Observações

- O carrinho fica em memória: os dados não são salvos ao encerrar o programa.
- A execução usa exemplos definidos no código, sem menu interativo.
- O projeto ainda não possui uma suíte de testes automatizados configurada; o comando `npm test` contém apenas o script padrão.
