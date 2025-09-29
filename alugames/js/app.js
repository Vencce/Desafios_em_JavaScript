function alterarStatus(id) {
  let gameClicked = document.getElementById(`game-${id}`);
  let imagem = gameClicked.querySelector(".dashboard__item__img");
  let botao = gameClicked.querySelector(".dashboard__item__button");
  let nome = gameClicked.querySelector(".dashboard__item__name");

  if (imagem.classList.contains("dashboard__item__img--rented")) {
    let confirmacao = confirm(
      `Você tem certeza que deseja devolver o jogo ${nome.textContent}?`
    );

    if (confirmacao) {
      imagem.classList.remove("dashboard__item__img--rented");
      botao.classList.remove("dashboard__item__button--return");
      nome.classList.remove("dashboard__item__name--rented");
      botao.textContent = "Alugar";
      console.log(`O jogo '${nome.textContent}' foi devolvido.`);
    } else {
      console.log(
        `Devolução do jogo '${nome.textContent}' cancelada pelo usuário.`
      );
    }
  } else {
    imagem.classList.add("dashboard__item__img--rented");
    botao.classList.add("dashboard__item__button--return");
    nome.classList.add("dashboard__item__name--rented");
    botao.textContent = "Devolver";
    console.log(`O jogo '${nome.textContent}' foi alugado.`);
  }
}
