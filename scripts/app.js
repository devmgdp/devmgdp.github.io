let carrinho = [];

document.addEventListener('DOMContentLoaded', () => {
  const carrinhoSalvo = localStorage.getItem('carrinho');
  if (carrinhoSalvo) {
    carrinho = JSON.parse(carrinhoSalvo);
    atualizarCarrinho();
  }
});

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  salvarCarrinhoNoLocalStorage(); // Salva os itens no Local Storage
  atualizarCarrinho();
}

function removerItem(index) {
  carrinho.splice(index, 1);
  salvarCarrinhoNoLocalStorage(); // Salva os itens no Local Storage
  atualizarCarrinho();
}

function limparCarrinho() {
  carrinho = [];
  salvarCarrinhoNoLocalStorage(); // Salva os itens no Local Storage
  atualizarCarrinho();
}

function salvarCarrinhoNoLocalStorage() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function atualizarCarrinho() {
  const totalCarrinho = document.getElementById('totalCarrinhoModal');
  const carrinhoItens = document.getElementById('carrinhoItensModal');
  let total = 0;

  carrinhoItens.innerHTML = '';

  carrinho.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} <span class="spacer"></span><button onclick="removerItem(${index})">Remover</button>`;
    carrinhoItens.appendChild(listItem);
    total += item.preco;
  });

  totalCarrinho.innerText = `Total: R$ ${total.toFixed(2)}`;
}

function exibirCarrinho() {
  const modal = document.getElementById('modalCarrinho');
  modal.style.display = 'block';
}

function fecharCarrinho() {
  const modal = document.getElementById('modalCarrinho');
  modal.style.display = 'none';
}

// JavaScript para ativar o menu hambúrguer em dispositivos móveis
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menuCel');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active'); // Adiciona ou remove a classe 'active' no menu
});
