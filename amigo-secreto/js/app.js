let amigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo").value;
  if (amigo.value == "") {
    alert("Digite o nome de um amigo");
    return;
  }

  if (amigos.includes(amigo.value)) {
    alert("Esse amigo ja foi adicionado");
    return;
  }
  let lista = document.getElementById("lista-amigos");

  if (lista.textContent == "") {
    lista.textContent = amigo;
  } else {
    lista.textContent = lista.textContent + ", " + amigo;
  }

  amigos.push(amigo);
  document.getElementById("nome-amigo").value = "";
}

function sortear() {
  if (amigos.length < 4) {
    alert("Adicione pelo menos 4 amigos");
    return;
  }

  embaralhar(amigos);
  let sorteio = document.getElementById("lista-sorteio");
  sorteio.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio.innerHTML += amigos[i] + " --> " + amigos[0] + "<br>";
    } else {
      sorteio.innerHTML += amigos[i] + " --> " + amigos[i + 1] + "<br>";
    }
  }
}

function embaralhar(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function reiniciar() {
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
  amigos = [];
}
