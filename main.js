const form = document.getElementById('formulario'); // aqui pego o html do form
const nomes = [] // um array para nomes
const telefones = [] // array pra telefone

let linhas = "" // linhas começa vazio

form.addEventListener('submit', (e) => { // aqui o evento de submit pro botão que puxa algumas funções 
  e.preventDefault()
  addContact()  
  tableAtt()
  attContact()


})

function addContact() {
  let nome = document.getElementById('nome-contato').value; // aqui é pra retornar o html do input
  console.log(nome); // aqui esta retornando corretamente o nome digitado
  let tel = document.getElementById('tel-contato').value; // mesma coisa aqui
  console.log(tel);

  if (nomes.indexOf(nome) === -1) {
    
    let linha = "<tr>";  // aqui ele adiciona uma linha com o nome e telefone
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${tel.value}</td>`;
    linha += "</tr>";

    linhas += linha; // aqui a linhas recebe uma linha
    nome = ""; // aqui depois do submit o nome e tel fica vazio os inputs
    tel = "";
    
  } else {
    alert(`${nome} e ${tel} já adicionado, não é permitido repetir um mesmo contato!`);
  }

  // if(nomes.indexOf(nome) === -1){

  //   //adiciona o nome do contato na memoria da aplicação, se nao existir ainda
  //   nomes.push(nome);
  //   console.log(nomes);

  //   // Adiciona o contato na tabela no html
  //   let linha = "<tr>";
  //   linha += `<td>${nome}</td>`;
  //   linha += `<td>${tel}</td>`;
  //   linha += "</tr>";
  //     // Eu quero que exiba no else o nome e o telefone, quero os dois.
  //     linhas += linha;
  //     nome = "";
  //     tel = "";

  // } else {
  //   alert(`${nome} e ${tel} já adicionado, não é permitido repetir um mesmo contato!`);
  // }

//   if (nomes.includes(nome.value) && telefones.includes(tel.value)) { 
//     alert(`O nome ${nome.value} e ${tel.value} ja foi adicionado!`)
//   } else {
//     nomes.push(nome.value)
//     telefones.push(parseInt(tel.value))

    

//   }

// }


function tableAtt() {
  const bodyTable = document.querySelector("tbody"); // aqui ele pega o body e é onde vai escrever o conteudo, no caso os contatos 
  bodyTable.innerHTML = linhas;
}

function attContact() {
  document.getElementById("total-contato").innerHTML = nomes.length; // aqui é só um contador mesmo
}
}