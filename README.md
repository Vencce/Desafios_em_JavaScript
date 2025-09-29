# 🚀 Coleção de Desafios em JavaScript

Este repositório é uma coleção de mini-projetos e desafios desenvolvidos para praticar e demonstrar conceitos fundamentais de JavaScript, HTML e CSS. Cada pasta contém um projeto independente e funcional, focado em uma lógica de programação específica.

## ✨ Conceitos Gerais Praticados

Através destes projetos, foram exploradas diversas habilidades essenciais como:

-   **Manipulação do DOM:** Seleção e alteração de elementos HTML de forma dinâmica.
-   **Gerenciamento de Eventos:** Captura de interações do usuário, como cliques em botões.
-   **Lógica de Programação:** Uso de condicionais, loops e funções para criar interatividade.
-   **Manipulação de Arrays e Strings:** Adição, remoção, verificação e sorteio de itens em listas.
-   **Gerenciamento de Estado:** Controle de variáveis para refletir o estado atual da aplicação (ex: itens no carrinho, estoque de ingressos).

---

## 📂 Os Projetos

Aqui está uma descrição de cada um dos desafios incluídos neste repositório:

### 1. 🎮 AluGames

Uma interface simples para simular o aluguel e devolução de jogos. O projeto foca na manipulação visual dos elementos para refletir seu status.

-   **Recursos:**
    -   Alterna o status de um item entre "Alugado" e "Disponível" com um clique.
    -   Muda a aparência (classes CSS) e o texto do botão conforme o status.
    -   Utiliza `confirm()` para garantir que o usuário realmente deseja devolver um jogo.
-   **Conceitos Praticados:** Manipulação de classes CSS (`classList`), `getElementById`, `querySelector`, eventos de clique.

### 2. 🎁 Amigo Secreto

Uma aplicação clássica para realizar o sorteio de um amigo secreto.

-   **Recursos:**
    -   Permite adicionar nomes de participantes a uma lista.
    -   Valida entradas para não permitir nomes repetidos.
    -   Utiliza o algoritmo **Fisher-Yates** (`embaralhar`) para garantir um sorteio justo e aleatório.
    -   Exibe a lista de sorteio final (quem tira quem).
-   **Conceitos Praticados:** Manipulação de arrays (`push`, `includes`), algoritmos de embaralhamento, validação de dados.

### 3. 🛒 Carrinho de Compras

Uma simulação de um carrinho de compras funcional, onde o usuário pode adicionar produtos e ver o valor total.

-   **Recursos:**
    -   Adiciona produtos de uma lista pré-definida ao carrinho.
    -   Calcula o preço subtotal baseado na quantidade e no valor unitário.
    -   Atualiza o valor total da compra em tempo real.
    -   Permite limpar o carrinho e zerar o valor total.
-   **Conceitos Praticados:** Manipulação de strings (`split`), cálculos matemáticos, geração dinâmica de HTML (`innerHTML`).

### 4. 🎟️ Compra de Ingressos

Um sistema para gerenciar a venda de ingressos para um evento, controlando a quantidade disponível para cada setor.

-   **Recursos:**
    -   Subtrai a quantidade de ingressos comprados do estoque disponível.
    -   Valida se a quantidade desejada está disponível antes de confirmar a compra.
    -   Exibe alertas de sucesso ou de falha na operação.
-   **Conceitos Praticados:** Gerenciamento de estado (estoque), conversão de tipos (`parseInt`), validação de formulários.

### 5. 🎲 Sorteador de Números

Uma ferramenta versátil que sorteia uma quantidade definida de números únicos dentro de um intervalo especificado pelo usuário.

-   **Recursos:**
    -   Permite ao usuário definir a quantidade de números a sortear, o valor inicial e o valor final.
    -   Garante que não haverá números repetidos no resultado do sorteio.
    -   Possui uma função para reiniciar e limpar os resultados para um novo sorteio.
-   **Conceitos Praticados:** Geração de números aleatórios (`Math.random`), loops (`for`, `while`), lógica para garantir unicidade em sorteios.

## 🚀 Como Executar

Cada projeto é autocontido em sua própria pasta. Para executá-los:

1.  Clone este repositório
2.  Navegue até a pasta do projeto desejado (ex: `cd alugames`).
3.  Abra o arquivo `index.html` no seu navegador.

---

Desenvolvido por [Seu Nome](https://github.com/seu-usuario)
