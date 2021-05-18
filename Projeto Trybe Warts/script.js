const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const submit = document.querySelector('#button');
const textArea = document.querySelector('#textarea');

submit.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const check = document.querySelector('#agreement');
const enviar = document.querySelector('#submit-btn');

check.addEventListener('click', () => {
  if (check.checked === true) {
    enviar.removeAttribute('disabled');
  } else {
    enviar.setAttribute('disabled', 'disabled');
  }
});

function limits() {
  let textValue = document.querySelector('#textarea').value;
  const limit = 500;
  const total = textValue.length;
  if (total <= limit) {
    const rest = limit - total;
    document.getElementById('counter').innerHTML = rest;
  } else {
    textValue = textValue.substr(0, limit);
  }
}

textArea.addEventListener('keyup', limits);

function Mudarestado() {
  const mainDiv = document.querySelector('.none');
  const formTexto = document.querySelector('.formTexto');
  mainDiv.style.display = 'none';
  formTexto.style.display = 'flex';
}

function trataMaterias(listaMaterias) {
  let retorno = '';
  listaMaterias.forEach((element) => {
    if (retorno !== '') {
      retorno += ', ';
    }
    retorno += element.value;
  });
  return retorno;
}

function info() {
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email2 = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const obs = document.querySelector('#textarea').value;
  const radioFamilia = document.querySelector('input[name=family]:checked').value;
  const radioNota = document.querySelector('input[name=rate]:checked').value;
  const fullName = `${nome} ${sobrenome}`;
  const aprender = document.querySelectorAll('input[name=checkList]:checked');

  const materias = trataMaterias(aprender);

  document.querySelector('#labelNome').innerHTML = `Nome: ${fullName}`;
  document.querySelector('#labelEmail').innerHTML = `Email: ${email2}`;
  document.querySelector('#labelCasa').innerHTML = `Casa: ${casa}`;
  document.querySelector('#labelFamilia').innerHTML = `Família: ${radioFamilia}`;
  document.querySelector('#labelMaterias').innerHTML = `Matérias: ${materias}`;
  document.querySelector('#labelAvaliacao').innerHTML = `Avaliação: ${radioNota}`;
  document.querySelector('#labelObs').innerHTML = `Observações: ${obs}`;
}

enviar.addEventListener('click', (Event) => {
  Mudarestado();
  Event.preventDefault();
  info();
});
