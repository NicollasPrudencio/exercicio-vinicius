const form = document.getElementById('formulario');
const nomes = []
const telefones = []

let linhas = ""

form.addEventListener('submit', (e) => {
  e.preventDefault()
  addContact()
  tableAtt()
  attContact()


})

function addContact() {
  const nome = document.getElementById('nome-contato')
  console.log(nome);
  const tel = document.getElementById('tel-contato')

  if (nomes.includes(nome.value) && telefones.includes(tel.value)) {
    alert(`O nome ${nome.value} e ${tel.value} ja foi adicionado!`)
  } else {
    nomes.push(nome.value)
    telefones.push(parseInt(tel.value))

    let linha = "<tr>";
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${tel.value}</td>`;
    linha += "</tr>";

    linhas += linha;
    nome.value = ""
    tel.value = ""

  }

}


function tableAtt() {
  const bodyTable = document.querySelector("tbody");
  bodyTable.innerHTML = linhas;
}

function attContact() {
  document.getElementById("total-contato").innerHTML = nomes.length;
}