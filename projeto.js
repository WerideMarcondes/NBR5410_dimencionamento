window.onload = function () {
  const dataAtual = new Date().toLocaleDateString("pt-BR");
  document.getElementById("date").value = innerHTML = dataAtual;


for (let i = 0; i < localStorage.length; i++) {
    const chave = localStorage.key(i);
    const valor = JSON.parse(localStorage.getItem(chave))
    console.log(valor);

// 1. Encontrar a div com a classe já existente
const container = document.querySelector('.tabelas');

// 1. Cria o elemento tabela
const tabela = document.createElement('table');

// 2. Cria o cabeçalho (thead)
const thead = tabela.createTHead();
const linhaCabecalho = thead.insertRow();
["Circuito","Tensão","Watts"," QTD Circuito","Disjuntor","cabo","QTD Condutores Carregados","Corrente Inicial Projeto","Tipo de Dispositivo ",].forEach(texto => {
    let th = document.createElement('th');
    th.textContent = texto;
    linhaCabecalho.appendChild(th);
});

// 3. Cria o corpo da tabela (tbody)
const tbody = tabela.createTBody();
// Dados de exemplo
const dados = [
    { Circuito: valor[5], Tensao: valor[0], Watts: valor[1], qtd: valor[2], Disjuntor: valor[3], Cabo: valor[4]+" mm² ",condutoresCarregados: valor[7], Corrente: valor[6],Disposotivo: valor[8] },
];
// 4. Preenche as linhas (tr) e células (td)
dados.forEach(projeto=> {
    let linha = tbody.insertRow();
     let celulaCircuito = linha.insertCell();
    celulaCircuito.textContent = projeto.Circuito;

    let celulaTensao = linha.insertCell();
    celulaTensao.textContent = projeto.Tensao;
    
    let celulaWatts = linha.insertCell();
    celulaWatts.textContent = projeto.Watts;

    let celulaqtd = linha.insertCell();
    celulaqtd.textContent = projeto.qtd;

    let celulaDisjuntor = linha.insertCell();
    celulaDisjuntor.textContent = projeto.Disjuntor;

        let celulaCabo = linha.insertCell();
    celulaCabo.textContent = projeto.Cabo;

        let celulaCorrente = linha.insertCell();
    celulaCorrente.textContent = projeto.Corrente;
    
    let celulacondutoresCarregados = linha.insertCell();
    celulacondutoresCarregados.textContent = projeto.condutoresCarregados;

    let celulaDisposotivo  = linha.insertCell();
    celulaDisposotivo.textContent = projeto.Disposotivo ;
    
});

// 5. Adiciona a tabela ao corpo da página (body)
// document.body.appendChild(tabela);
container.appendChild(tabela);
}
};

function export_PDF() {
  const resultados = document.querySelector(".resultados");
  const nomeProjeto = document.getElementById("nomeProjeto").value;
  const executor = document.getElementById("executor").value;
  
  if (nomeProjeto!="" && executor !=""){  const doc = {
    margin: [5, 5, 5, 5],
    filename: "Projeto" + nomeProjeto,
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(doc).from(resultados).save();
}else{
   Swal.fire({
    title: "Insira o nome do projeto e o responsável",
    text: "Oops...",
    icon: "error",
  });
}


}

function apagar_dados(){
  localStorage.clear();

}