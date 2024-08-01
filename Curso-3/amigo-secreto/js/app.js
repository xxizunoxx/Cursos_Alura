let amigos = [];

function adicionar() {
  let amigoInput = document.getElementById('nome-amigo');
  let amigo = amigoInput.value;
  if (amigo) {
    amigos.push(amigo);
    atualizarLista();
    amigoInput.value = '';
  }
}

function atualizarLista() {
  let lista = document.getElementById('lista-amigos');
  lista.textContent = amigos.join(', ');
}

function sortear() {
  if (amigos.length === 0) {
    alert('Nenhum amigo na lista para sortear.');
    return;
  }
  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceSorteado];
  document.getElementById('lista-sorteio').textContent = 'Amigo sorteado: ' + amigoSorteado;
}

function reiniciar() {
  amigos = [];
  document.getElementById('lista-amigos').textContent = '';
  document.getElementById('lista-sorteio').textContent = '';
}
