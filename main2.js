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
    let nome = document.getElementById('nome-contato').value;
    let tel = document.getElementById('tel-contato').value;

    const index = nomes.findIndex((contato) => contato.nome === nome && contato.tel === tel);
    console.log(index);
    if (index !== -1 ) { // aqui era para o nome e telefone se forem verdadeiros, exibir o alert
        alert(`O nome ${nome} e ${tel} ja foi adicionado!`);
    } else {
        if(nomes.length === 0){
            nomes.push({nome, tel});
            telefones.push(parseInt(tel));
        } else {
            const indexName = nomes.findIndex((contato) => contato.nome === nome); // cria um arquivo para eu te mostrar um codigo
            if(indexName !== -1){
                alert(`O nome ${nome} e ${tel} ja foi adicionado!`);
            } else{
                nomes.push({nome, tel });
                telefones.push(parseInt(tel));
            }
        }

         // para fazer isso aqui, teria então que criar um array chamado contato e adicionaria ambos
         // por isso o push do tel

// ex:  contato.push({nome, tel})

        let linha = "<tr>";
        linha += `<td>${nome}</td>`;
        linha += `<td>${tel}</td>`;
        linha += "</tr>";
            // olha o codigo la em baixo, aquele ta funcionando 100%
        linhas += linha;
        nome = "";
        tel = "";

    }

}


function tableAtt() {
    const bodyTable = document.querySelector("tbody");
    bodyTable.innerHTML = linhas;
}

function attContact() {
    document.getElementById("total-contato").innerHTML = nomes.length;
}


/* const form = document.getElementById("form-contatos");
const nomes = [];
const numeros = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
  atualizaTotalContatos();
});

function adicionaLinha() {
  const inputNomeContato = document.getElementById("nome");
  const inputNumeroContato = document.getElementById("telefone");

  if (nomes.includes(inputNomeContato.value)) {
    alert(`Contato: ${inputNomeContato.value}   já foi inserido`);
  } else {
    nomes.push(inputNomeContato.value);
    numeros.push(parseInt(inputNumeroContato.value));

    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += "</tr>";

    linhas += linha;
  }

  inputNomeContato.value = "";
  inputNumeroContato.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
function atualizaTotalContatos() {
  document.getElementById("total-contato").innerHTML = nomes.length;
} */