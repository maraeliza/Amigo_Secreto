//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

const resultDiv = document.getElementById("resultado");
const listaAmigosDiv = document.getElementById("listaAmigos");
const input = document.getElementById("amigo");

function adicionarAmigo() {
  const nomeInput = input.value;

  if (nomeInput == "") {
    alert("Insira um nome válido para adicionar");
    return;
  } else {
    input.value = "";
    listaAmigosDiv.innerHTML = "";

    amigos.push("<li>" + nomeInput + "</li>");
    listaAmigosDiv.innerHTML = amigos.join("").replace(",", "");
  }
}
var prevI = 0;
var i = 0;
function sortearAmigo() {
  prevI = i;
  while (i == prevI) {
    i = Math.floor(Math.random() * amigos.length);
  }
  const amigoSorteado = amigos[i];
  resultDiv.innerHTML = amigoSorteado;
}
