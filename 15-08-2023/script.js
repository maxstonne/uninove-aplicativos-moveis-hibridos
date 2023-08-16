const nome = document.querySelector("#nome");
const telefone = document.querySelector("telefone");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValue = nome.value;
  const templateHTML = `<li>${inputValue}</li>`;

  if (inputValue === "") {
    alert("digite alguma coisa");
    return;
  }

  lista.innerHTML += templateHTML;
  nome.value = "";
});