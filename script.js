// function OHM() {
//   // formula I=P/V
//   var PotenciaNominal = 4600;
//   var TensaoRede = 127;
//   //   var Porcentagem = 0.20; // Tolerancia de 20% acima da corrente do circuito
//   var Dispositivo_Protecao = PotenciaNominal / TensaoRede;
//   //   var Dispositivo_Protecao_Acrecimo = Dispositivo_Protecao * Porcentagem;
//   var Result = Dispositivo_Protecao;
//   const Capacidade_Dijuntores = [
//     2, 4, 5, 6, 10, 16, 20, 25, 30, 32, 35, 40, 50, 60, 63, 70, 80, 90, 100,
//     115, 125, 160, 175, 200, 250, 300, 400, 600,
//   ];

//   Dijuntor_Recomendado = Capacidade_Dijuntores.find(
//     (element) => element >= Result.toFixed(1)
//   );
//   console.log(
//     " Dijuntor Recomendado Para O Circuito = " +
//       Dijuntor_Recomendado +
//       tipo_de_dijuntor()
//   );
// }

// function tipo_de_dijuntor() {
//   // Disjuntor_Monopolar = " Disjuntor Monopolar";
//   // Disjuntor_bipolar = " Disjuntor Bipolar";
//   Disjuntor_tripolar = " Disjuntor Tripolar";
//   // curva_C = " CURVA C";
//   // curva_D = " CURVA D";
//   curva_B = " CURVA B";

//   const Tipo_de_dijuntores = [
//     " Disjuntor Monopolar",
//     " Disjuntor Bipolar",
//     " Disjuntor Tripolar",
//     " CURVA B",
//     " CURVA C",
//     " CURVA D",
//   ];
//   var Tipo_de_dijuntor = Tipo_de_dijuntores.find(
//     (selected) => selected === Disjuntor_tripolar
//   );
//   return Tipo_de_dijuntor;
// }

// OHM();

// function Tipo_do_Circuito(){
//   Cargas_Resistivas= ["Chuveiro","Aquecedores","Fornos"]
//   iluminacao_tomada_fase1 =[" tomadas", "iluminação"]
//   Tipo_de_Distribuicao = ["Monofasica", "Trifasica", "Bifasica"]

//   }

// apagar campo resultado
window.onload = function reset() {
  console.log("TESTE");
  document.getElementById("cabo").value = innerHTML = "";
  document.getElementById("disjuntor").value = innerHTML = "";
  document.getElementById("tensao").value = innerHTML = "";
  document.getElementById("watts").value = innerHTML = "";
  document.getElementById("quantidade").value = innerHTML = "";
  document.getElementById("correnteProjeto").value = innerHTML = "";

  var inputAll = document.querySelectorAll(".entrada");
  for (var i = 0; i < inputAll.length; i++) {
    inputAll[i].addEventListener("input", function () {
      document.getElementById("cabo").value = innerHTML = "";
      document.getElementById("disjuntor").value = innerHTML = "";
      document.getElementById("correnteProjeto").value = innerHTML = "";
    });
  }
};

function novo_Projeto() {
  document.getElementById("cabo").value = innerHTML = "";
  document.getElementById("disjuntor").value = innerHTML = "";
  document.getElementById("tensao").value = innerHTML = "";
  document.getElementById("watts").value = innerHTML = "";
  document.getElementById("quantidade").value = innerHTML = "";
  document.getElementById("correnteProjeto").value = innerHTML = "";
  document.getElementById("circuito").value = innerHTML = "";

  var inputAll = document.querySelectorAll(".entrada");
  for (var i = 0; i < inputAll.length; i++) {
    inputAll[i].addEventListener("input", function () {
      document.getElementById("cabo").value = innerHTML = "";
      document.getElementById("disjuntor").value = innerHTML = "";
      document.getElementById("correnteProjeto").value = innerHTML = "";
    });
  }
}

// fator de correcao
function FatorCorrecao() {
  var agrupamento = 0.8;
  var temperatura = 0.94;

  var fatorCorrecao = agrupamento * temperatura;
  //0.752
  return fatorCorrecao;
}

// Condutores carregados
function condutores_Carregados() {
  var condutores = document.getElementById("selectCondutores");
  return condutores.value;
}

// metodo instalacao
function metodo_Instalacao() {
  var metodos_Instalacao = document.getElementById("metodoInstalacao");
  return metodos_Instalacao.value;
}

// tipo dispositivo
function tipo_dispositivo() {
  var metodos_Instalacao = document.getElementById("tipoDispositivo");
  return metodos_Instalacao.value;
}

// corrente de projeto
function correnteProjeto() {
  var tensao = document.getElementById("tensao").value;
  var watts = document.getElementById("watts").value;
  var quantidade = document.getElementById("quantidade").value;

  var correnteTotal = (watts * quantidade) / tensao;

  document.getElementById("correnteProjeto").value = innerHTML =
    correnteTotal.toFixed(0) + " A";
  return correnteTotal.toFixed(0);
}

function capacidade_ConducaoCobre() {
  const secoesNominais0005 = [7, 7, 7, 7, 9, 8, 9, 8, 10, 9, 12, 10]; //Seções nominaiL 0.5 mm2
  const secoesNominais0075 = [9, 9, 9, 9, 11, 10, 11, 10, 13, 11, 15, 12]; //Seções nominaiL 0.75 mm2
  const secoesNominais1 = [11, 10, 11, 10, 14, 12, 13, 12, 15, 14, 18, 15]; //Seções nominaiL 1.5 mm2
  const secoesNominais015 = [
    14.5, 13.5, 14, 13, 17.5, 15.5, 16.5, 15, 19.5, 17.5, 22, 18,
  ]; //Seções nominaiL 0.5 mm2
  const secoesNominais025 = [
    19.5, 18, 18.5, 17.5, 24, 21, 23, 20, 27, 24, 29, 24,
  ]; //Seções nominaiL 2.5 mm2
  const secoesNominais4 = [26, 24, 25, 23, 32, 28, 30, 27, 36, 32, 38, 31]; //Seções nominaiL 4 mm2
  const secoesNominais6 = [34, 31, 32, 29, 41, 36, 38, 34, 46, 41, 47, 39]; //Seções nominaiL 6 mm2
  const secoesNominais10 = [46, 42, 43, 39, 57, 50, 52, 47, 63, 57, 63, 52]; //Seções nominaiL 10 mm2
  const secoesNominais16 = [61, 56, 57, 52, 76, 68, 69, 62, 85, 76, 81, 67]; //Seções nominaiL 16 mm2
  const secoesNominais25 = [89, 73, 75, 68, 101, 89, 90, 80, 112, 96, 104, 86]; //Seções nominaiL 25 mm2
  const secoesNominais35 = [
    99, 89, 92, 83, 125, 110, 111, 99, 138, 119, 125, 103,
  ]; //Seções nominaiL 35 mm2
  const secoesNominais50 = [
    119, 108, 110, 99, 151, 134, 133, 118, 168, 144, 148, 122,
  ]; //Seções nominaiL 50 mm2
  const secoesNominais70 = [
    151, 136, 139, 125, 192, 171, 168, 149, 213, 184, 183, 151,
  ]; //Seções nominaiL 70 mm2
  const secoesNominais95 = [
    182, 164, 167, 150, 232, 207, 201, 179, 258, 223, 216, 179,
  ]; //Seções nominaiL 95 mm2
  const secoesNominais120 = [
    210, 188, 192, 172, 269, 239, 232, 206, 299, 259, 246, 203,
  ]; //Seções nominaiL 120 mm2
  const secoesNominais150 = [
    240, 216, 219, 196, 309, 275, 265, 236, 344, 299, 278, 230,
  ]; //Seções nominaiL 150 mm2
  const secoesNominais185 = [
    273, 245, 248, 223, 353, 314, 300, 268, 392, 341, 312, 258,
  ]; //Seções nominaiL 185 mm2
  const secoesNominais240 = [
    321, 286, 291, 261, 415, 370, 351, 313, 461, 403, 361, 297,
  ]; //Seções nominaiL 240 mm2
  const secoesNominais300 = [
    367, 328, 334, 298, 477, 426, 401, 358, 530, 464, 408, 336,
  ]; //Seções nominaiL 300 mm2
  const secoesNominais400 = [
    438, 390, 398, 355, 571, 510, 477, 425, 634, 557, 478, 394,
  ]; //Seções nominaiL 400 mm2
  const secoesNominais500 = [
    502, 447, 456, 406, 656, 587, 545, 486, 729, 642, 540, 445,
  ]; //Seções nominaiL 500 mm2
  const secoesNominais630 = [
    578, 514, 526, 467, 758, 678, 626, 559, 843, 743, 614, 506,
  ]; //Seções nominaiL 630 mm2
  const secoesNominais800 = [
    669, 593, 609, 540, 881, 788, 723, 645, 978, 865, 700, 577,
  ]; //Seções nominaiL 800 mm2
  const secoesNominais1000 = [
    767, 679, 698, 618, 1012, 906, 827, 738, 1125, 996, 792, 652,
  ]; //Seções nominaiL 1000 mm2

  A12 = [
    7, 9, 11, 14.5, 19.5, 26, 34, 46, 61, 80, 99, 119, 151, 182, 210, 240, 273,
    321, 367, 438, 502, 578, 669, 767,
  ];

  A13 = [
    7, 9, 10, 13.5, 18, 24, 31, 42, 56, 73, 89, 108, 136, 164, 188, 216, 245,
    286, 328, 390, 447, 514, 593, 679,
  ];

  A22 = [
    7, 9, 11, 14, 18.5, 25, 32, 43, 57, 75, 92, 110, 139, 167, 192, 219, 248,
    291, 334, 398, 456, 526, 609, 698,
  ];

  A23 = [
    7, 9, 10, 13, 17.5, 23, 29, 39, 52, 68, 83, 99, 125, 150, 172, 196, 223,
    261, 298, 355, 406, 467, 540, 618,
  ];

  B12 = [
    9, 11, 14, 17.5, 24, 32, 41, 57, 76, 101, 125, 151, 192, 232, 269, 309, 353,
    415, 477, 571, 656, 758, 881, 1012,
  ];
  B13 = [
    8, 10, 12, 15.5, 21, 28, 36, 50, 68, 89, 110, 134, 171, 207, 239, 275, 314,
    370, 426, 510, 587, 678, 788, 906,
  ];
  B22 = [
    9, 11, 13, 16.5, 23, 30, 38, 52, 69, 90, 111, 133, 168, 201, 232, 165, 300,
    351, 401, 477, 545, 626, 723, 827,
  ];

  B23 = [
    8, 10, 12, 15, 20, 27, 34, 46, 62, 80, 99, 118, 149, 179, 206, 236, 268,
    313, 358, 425, 486, 559, 645, 738,
  ];
  C2 = [
    10, 13, 15, 19.5, 27, 36, 46, 63, 85, 112, 138, 168, 213, 258, 299, 344,
    392, 461, 530, 634, 729, 843, 978, 1125,
  ];
  C3 = [
    9, 11, 14, 17.5, 24, 32, 41, 57, 76, 96, 119, 144, 184, 223, 259, 299, 341,
    403, 464, 557, 642, 743, 865, 996,
  ];
  D2 = [
    12, 15, 18, 22, 29, 38, 47, 63, 81, 104, 125, 148, 183, 216, 246, 278, 312,
    408, 478, 540, 614, 700, 792,
  ];
  D3 = [
    10, 12, 15, 18, 24, 31, 39, 52, 87, 86, 103, 122, 151, 179, 203, 230, 258,
    297, 336, 39, 4445, 506, 577, 652,
  ];
  const correnteInicial = correnteProjeto() / FatorCorrecao();

  if (metodo_Instalacao() == "A1" && condutores_Carregados() == 2) {
    corrente = A12.find((element) => element >= correnteInicial); // Procurando dijuntor igual a corrente ou proximo valor superior
    console.log(corrente);
    if (secoesNominais0005[0] === corrente && A12[0] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,5");
    } else if (secoesNominais0075[0] === corrente && A12[1] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,75");
    } else if (secoesNominais1[0] === corrente && A12[2] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1");
    } else if (secoesNominais015[0] === corrente && A12[3] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1,5");
    } else if (secoesNominais025[0] === corrente && A12[4] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "2,5");
    } else if (secoesNominais4[0] === corrente && A12[5] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "4");
    } else if (secoesNominais6[0] === corrente && A12[6] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "6");
    } else if (secoesNominais10[0] === corrente && A12[7] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "10");
    } else if (secoesNominais16[0] === corrente && A12[8] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "16");
    } else if (secoesNominais25[0] === corrente && A12[9] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "25");
    } else if (secoesNominais35[0] === corrente && A12[10] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "35");
    } else if (secoesNominais50[0] === corrente && A12[11] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "50");
    } else if (secoesNominais70[0] === corrente && A12[12] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "70");
    } else if (secoesNominais95[0] === corrente && A12[13] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "95");
    } else if (secoesNominais120[0] === corrente && A12[14] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "120");
    } else if (secoesNominais150[0] === corrente && A12[15] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "150");
    } else if (secoesNominais185[0] === corrente && A12[16] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "185");
    } else if (secoesNominais240[0] === corrente && A12[17] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "240");
    } else if (secoesNominais300[0] === corrente && A12[18] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "300");
    } else if (secoesNominais400[0] === corrente && A12[19] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "400");
    } else if (secoesNominais500[0] === corrente && A12[20] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "500");
    } else if (secoesNominais630[0] === corrente && A12[21] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "630");
    } else if (secoesNominais800[0] === corrente && A12[22] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "800");
    } else if (secoesNominais1000[0] === corrente && A12[23] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1000");
    }
  }

  if (metodo_Instalacao() == "A1" && condutores_Carregados() == 3) {
    const corrente = A13.find((element) => element >= correnteInicial); // Procurando dijuntor igual a corrente ou proximo valor superior

    if (secoesNominais0005[1] === corrente && A13[0] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,5");
    } else if (secoesNominais0075[1] === corrente && A13[1] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,75");
    } else if (secoesNominais1[1] === corrente && A13[2] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1");
    } else if (secoesNominais015[1] === corrente && A13[3] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1,5");
    } else if (secoesNominais025[1] === corrente && A13[4] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "2,5");
    } else if (secoesNominais4[1] === corrente && A13[5] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "4");
    } else if (secoesNominais6[1] === corrente && A13[6] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "6");
    } else if (secoesNominais10[1] === corrente && A13[7] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "10");
    } else if (secoesNominais16[1] === corrente && A13[8] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "16");
    } else if (secoesNominais25[1] === corrente && A13[9] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "25");
    } else if (secoesNominais35[1] === corrente && A13[10] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "35");
    } else if (secoesNominais50[1] === corrente && A13[11] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "50");
    } else if (secoesNominais70[1] === corrente && A13[12] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "70");
    } else if (secoesNominais95[1] === corrente && A13[13] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "95");
    } else if (secoesNominais120[1] === corrente && A13[14] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "120");
    } else if (secoesNominais150[1] === corrente && A13[15] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "150");
    } else if (secoesNominais185[1] === corrente && A13[16] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "185");
    } else if (secoesNominais240[1] === corrente && A13[17] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "240");
    } else if (secoesNominais300[1] === corrente && A13[18] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "300");
    } else if (secoesNominais400[1] === corrente && A13[19] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "400");
    } else if (secoesNominais500[1] === corrente && A13[20] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "500");
    } else if (secoesNominais630[1] === corrente && A13[21] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "630");
    } else if (secoesNominais800[1] === corrente && A13[22] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "800");
    } else if (secoesNominais1000[1] === corrente && A13[23] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1000");
    }
  }
  if (metodo_Instalacao() == "A2" && condutores_Carregados() == 2) {
    const corrente = A22.find((element) => element >= correnteInicial); // Procurando dijuntor igual a corrente ou proximo valor superior
    if (secoesNominais0005[2] === corrente && A22[0] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,5");
    } else if (secoesNominais0075[2] === corrente && A22[1] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,75");
    } else if (secoesNominais1[2] === corrente && A22[2] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1");
    } else if (secoesNominais015[2] === corrente && A22[3] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1,5");
    } else if (secoesNominais025[2] === corrente && A22[4] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "2,5");
    } else if (secoesNominais4[2] === corrente && A22[5] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "4");
    } else if (secoesNominais6[2] === corrente && A22[6] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "6");
    } else if (secoesNominais10[2] === corrente && A22[7] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "10");
    } else if (secoesNominais16[2] === corrente && A22[8] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "16");
    } else if (secoesNominais25[2] === corrente && A22[9] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "25");
    } else if (secoesNominais35[2] === corrente && A22[10] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "35");
    } else if (secoesNominais50[2] === corrente && A22[11] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "50");
    } else if (secoesNominais70[2] === corrente && A22[12] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "70");
    } else if (secoesNominais95[2] === corrente && A22[13] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "95");
    } else if (secoesNominais120[2] === corrente && A22[14] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "120");
    } else if (secoesNominais150[2] === corrente && A22[15] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "150");
    } else if (secoesNominais185[2] === corrente && A22[16] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "185");
    } else if (secoesNominais240[2] === corrente && A22[17] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "240");
    } else if (secoesNominais300[2] === corrente && A22[18] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "300");
    } else if (secoesNominais400[2] === corrente && A22[19] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "400");
    } else if (secoesNominais500[2] === corrente && A22[20] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "500");
    } else if (secoesNominais630[2] === corrente && A22[21] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "630");
    } else if (secoesNominais800[2] === corrente && A22[22] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "800");
    } else if (secoesNominais1000[2] === corrente && A22[23] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1000");
    }
  }

  if (metodo_Instalacao() == "A2" && condutores_Carregados() == 3) {
    const corrente = A23.find((element) => element >= correnteInicial); // Procurando dijuntor igual a corrente ou proximo valor superior
    console.log(corrente);
    if (secoesNominais0005[3] === corrente && A23[0] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,5");
    } else if (secoesNominais0075[3] === corrente && A23[1] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,75");
    } else if (secoesNominais1[3] === corrente && A23[2] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1");
    } else if (secoesNominais015[3] === corrente && A23[3] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1,5");
    } else if (secoesNominais025[3] === corrente && A23[4] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "2,5");
    } else if (secoesNominais4[3] === corrente && A23[5] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "4");
    } else if (secoesNominais6[3] === corrente && A23[6] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "6");
    } else if (secoesNominais10[3] === corrente && A23[7] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "10");
    } else if (secoesNominais16[3] === corrente && A23[8] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "16");
    } else if (secoesNominais25[3] === corrente && A23[9] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "25");
    } else if (secoesNominais35[3] === corrente && A23[10] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "35");
    } else if (secoesNominais50[3] === corrente && A23[11] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "50");
    } else if (secoesNominais70[3] === corrente && A23[12] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "70");
    } else if (secoesNominais95[3] === corrente && A23[13] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "95");
    } else if (secoesNominais120[3] === corrente && A23[14] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "120");
    } else if (secoesNominais150[3] === corrente && A23[15] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "150");
    } else if (secoesNominais185[3] === corrente && A23[16] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "185");
    } else if (secoesNominais240[3] === corrente && A23[17] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "240");
    } else if (secoesNominais300[3] === corrente && A23[18] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "300");
    } else if (secoesNominais400[3] === corrente && A23[19] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "400");
    } else if (secoesNominais500[3] === corrente && A23[20] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "500");
    } else if (secoesNominais630[3] === corrente && A23[21] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "630");
    } else if (secoesNominais800[3] === corrente && A23[22] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "800");
    } else if (secoesNominais1000[3] === corrente && A23[23] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1000");
    }
  }
  if (metodo_Instalacao() == "B1" && condutores_Carregados() == 2) {
    const corrente = B12.find((element) => element >= correnteInicial); // Procurando dijuntor igual a corrente ou proximo valor superior
    if (secoesNominais0005[4] === corrente && B12[0] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,5");
    } else if (secoesNominais0075[4] === corrente && B12[1] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,75");
    } else if (secoesNominais1[4] === corrente && B12[2] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1");
    } else if (secoesNominais015[4] === corrente && B12[3] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1,5");
    } else if (secoesNominais025[4] === corrente && B12[4] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "2,5");
    } else if (secoesNominais4[4] === corrente && B12[5] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "4");
    } else if (secoesNominais6[4] === corrente && B12[6] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "6");
    } else if (secoesNominais10[4] === corrente && B12[7] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "10");
    } else if (secoesNominais16[4] === corrente && B12[8] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "16");
    } else if (secoesNominais25[4] === corrente && B12[9] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "25");
    } else if (secoesNominais35[4] === corrente && B12[10] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "35");
    } else if (secoesNominais50[4] === corrente && B12[1] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "50");
    } else if (secoesNominais70[4] === corrente && B12[12] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "70");
    } else if (secoesNominais95[4] === corrente && B12[13] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "95");
    } else if (secoesNominais120[4] === corrente && B12[14] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "120");
    } else if (secoesNominais150[4] === corrente && B12[15] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "150");
    } else if (secoesNominais185[4] === corrente && B12[16] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "185");
    } else if (secoesNominais240[4] === corrente && B12[17] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "240");
    } else if (secoesNominais300[4] === corrente && B12[18] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "300");
    } else if (secoesNominais400[4] === corrente && B12[19] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "400");
    } else if (secoesNominais500[4] === corrente && B12[20] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "500");
    } else if (secoesNominais630[4] === corrente && B12[21] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "630");
    } else if (secoesNominais800[4] === corrente && B12[22] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "800");
    } else if (secoesNominais1000[4] === corrente && B12[23] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1000");
    }
  }
  if (metodo_Instalacao() == "B1" && condutores_Carregados() == 3) {
    const corrente = B13.find((element) => element >= correnteInicial); // Procurando dijuntor igual a corrente ou proximo valor superior

    if (secoesNominais0005[5] === corrente && B13[0] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,5");
    } else if (secoesNominais0075[5] === corrente && B13[1] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,75");
    } else if (secoesNominais1[5] === corrente && B13[2] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1");
    } else if (secoesNominais015[5] === corrente && B13[3] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1,5");
    } else if (secoesNominais025[5] === corrente && B13[4] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "2,5");
    } else if (secoesNominais4[5] === corrente && B13[5] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "4");
    } else if (secoesNominais6[5] === corrente && B13[6] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "6");
    } else if (secoesNominais10[5] === corrente && B13[7] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "10");
    } else if (secoesNominais16[5] === corrente && B13[8] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "16");
    } else if (secoesNominais25[5] === corrente && B13[9] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "25");
    } else if (secoesNominais35[5] === corrente && B13[10] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "35");
    } else if (secoesNominais50[5] === corrente && B13[11] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "50");
    } else if (secoesNominais70[5] === corrente && B13[12] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "70");
    } else if (secoesNominais95[5] === corrente && B13[13] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "95");
    } else if (secoesNominais120[5] === corrente && B13[14] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "120");
    } else if (secoesNominais150[5] === corrente && B13[15] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "150");
    } else if (secoesNominais185[5] === corrente && B13[16] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "185");
    } else if (secoesNominais240[5] === corrente && B13[17] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "240");
    } else if (secoesNominais300[5] === corrente && B13[18] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "300");
    } else if (secoesNominais400[5] === corrente && B13[19] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "400");
    } else if (secoesNominais500[5] === corrente && B13[20] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "500");
    } else if (secoesNominais630[5] === corrente && B13[21] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "630");
    } else if (secoesNominais800[5] === corrente && B13[22] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "800");
    } else if (secoesNominais1000[5] === corrente && B13[23] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1000");
    }
  }
  if (metodo_Instalacao() == "B2" && condutores_Carregados() == 2) {
    const corrente = B22.find((element) => element >= correnteInicial); // Procurando dijuntor igual a corrente ou proximo valor superior
    if (secoesNominais0005[6] === corrente && B22[0] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,5");
    } else if (secoesNominais0075[6] === corrente && B22[1] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,75");
    } else if (secoesNominais1[6] === corrente && B22[2] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1");
    } else if (secoesNominais015[6] === corrente && B22[3] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1,5");
    } else if (secoesNominais025[6] === corrente && B22[5] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "2,5");
    } else if (secoesNominais4[6] === corrente && B22[6] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "4");
    } else if (secoesNominais6[6] === corrente && B22[9] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "6");
    } else if (secoesNominais10[6] === corrente && B22[8] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "10");
    } else if (secoesNominais16[6] === corrente && B22[9] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "16");
    } else if (secoesNominais25[6] === corrente && B22[10] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "25");
    } else if (secoesNominais35[6] === corrente && B22[11] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "35");
    } else if (secoesNominais50[6] === corrente && B22[12] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "50");
    } else if (secoesNominais70[6] === corrente && B22[13] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "70");
    } else if (secoesNominais95[6] === corrente && B22[14] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "95");
    } else if (secoesNominais120[6] === corrente && B22[15] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "120");
    } else if (secoesNominais150[6] === corrente && B22[16] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "150");
    } else if (secoesNominais185[6] === corrente && B22[17] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "185");
    } else if (secoesNominais240[6] === corrente && B22[18] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "240");
    } else if (secoesNominais300[6] === corrente && B22[19] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "300");
    } else if (secoesNominais400[6] === corrente && B22[20] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "400");
    } else if (secoesNominais500[6] === corrente && B22[21] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "500");
    } else if (secoesNominais630[6] === corrente && B22[22] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "630");
    } else if (secoesNominais800[6] === corrente && B22[23] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "800");
    } else if (secoesNominais1000[6] === corrente && B22[24] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1000");
    }
  }
  if (metodo_Instalacao() == "B2" && condutores_Carregados() == 3) {
    console.log("correto");
    const corrente = B23.find((element) => element >= correnteInicial); // Procurando dijuntor igual a corrente ou proximo valor superior

    if (secoesNominais0005[7] === corrente && B23[0] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,5");
    } else if (secoesNominais0075[7] === corrente && B23[1] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,75");
    } else if (secoesNominais1[7] === corrente && B23[2] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1");
    } else if (secoesNominais015[7] === corrente && B23[3] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1,5");
    } else if (secoesNominais025[7] === corrente && B23[4] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "2,5");
    } else if (secoesNominais4[7] === corrente && B23[5] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "4");
    } else if (secoesNominais6[7] === corrente && B23[6] === corrente) {
      console.log(secoesNominais6.indexOf(corrente));
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "6");
    } else if (secoesNominais10[7] === corrente && B23[7] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "10");
    } else if (secoesNominais16[7] === corrente && B23[8] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "16");
    } else if (secoesNominais25[7] === corrente && B23[9] === corrente) {
      console.log(secoesNominais25.indexOf(corrente));
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "25");
    } else if (secoesNominais35[7] === corrente && B23[10] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "35");
    } else if (secoesNominais50[7] === corrente && B23[11] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "50");
    } else if (secoesNominais70[7] === corrente && B23[12] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "70");
    } else if (secoesNominais95[7] === corrente && B23[13] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "95");
    } else if (secoesNominais120[7] === corrente && B23[14] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "120");
    } else if (secoesNominais150[7] === corrente && B23[15] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "150");
    } else if (secoesNominais185[7] === corrente && B23[16] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "185");
    } else if (secoesNominais240[7] === corrente && B23[17] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "240");
    } else if (secoesNominais300[7] === corrente && B23[18] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "300");
    } else if (secoesNominais400[7] === corrente && B23[19] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "400");
    } else if (secoesNominais500[7] === corrente && B23[20] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "500");
    } else if (secoesNominais630[7] === corrente && B23[21] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "630");
    } else if (secoesNominais800[7] === corrente && B23[22] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "800");
    } else if (secoesNominais1000[7] === corrente && B23[23] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1000");
    }
  }

  if (metodo_Instalacao() == "C" && condutores_Carregados() == 2) {
    const corrente = C2.find((element) => element >= correnteInicial); // Procurando dijuntor igual a corrente ou proximo valor superior

    if (secoesNominais0005[8] === corrente && C2[0] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,5");
    } else if (secoesNominais0075[8] === corrente && C2[1] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,75");
    } else if (secoesNominais1[8] === corrente && C2[2] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1");
    } else if (secoesNominais015[8] === corrente && C2[3] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1,5");
    } else if (secoesNominais025[8] === corrente && C2[4] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "2,5");
    } else if (secoesNominais4[8] === corrente && C2[5] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "4");
    } else if (secoesNominais6[8] === corrente && C2[6] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "6");
    } else if (secoesNominais10[8] === corrente && C2[7] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "10");
    } else if (secoesNominais16[8] === corrente && C2[8] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "16");
    } else if (secoesNominais25[8] === corrente && C2[9] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "25");
    } else if (secoesNominais35[8] === corrente && C2[10] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "35");
    } else if (secoesNominais50[8] === corrente && C2[11] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "50");
    } else if (secoesNominais70[8] === corrente && C2[12] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "70");
    } else if (secoesNominais95[8] === corrente && C2[13] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "95");
    } else if (secoesNominais120[8] === corrente && C2[14] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "120");
    } else if (secoesNominais150[8] === corrente && C2[15] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "150");
    } else if (secoesNominais185[8] === corrente && C2[16] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "185");
    } else if (secoesNominais240[8] === corrente && C2[17] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "240");
    } else if (secoesNominais300[8] === corrente && C2[18] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "300");
    } else if (secoesNominais400[8] === corrente && C2[19] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "400");
    } else if (secoesNominais500[8] === corrente && C2[20] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "500");
    } else if (secoesNominais630[8] === corrente && C2[21] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "630");
    } else if (secoesNominais800[8] === corrente && C2[22] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "800");
    } else if (secoesNominais1000[8] === corrente && C2[23] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1000");
    }
  }
  if (metodo_Instalacao() == "C" && condutores_Carregados() == 3) {
    const corrente = C3.find((element) => element >= correnteInicial); // Procurando dijuntor igual a corrente ou proximo valor superior

    if (secoesNominais0005[9] === corrente && C3[0] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,5");
    } else if (secoesNominais0075[9] === corrente && C3[1] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,75");
    } else if (secoesNominais1[9] === corrente && C3[2] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1");
    } else if (secoesNominais015[9] === corrente && C3[3] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1,5");
    } else if (secoesNominais025[9] === corrente && C3[4] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "2,5");
    } else if (secoesNominais4[9] === corrente && C3[5] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "4");
    } else if (secoesNominais6[9] === corrente && C3[6] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "6");
    } else if (secoesNominais10[9] === corrente && C3[7] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "10");
    } else if (secoesNominais16[9] === corrente && C3[8] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "16");
    } else if (secoesNominais25[9] === corrente && C3[9] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "25");
    } else if (secoesNominais35[9] === corrente && C3[10] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "35");
    } else if (secoesNominais50[9] === corrente && C3[11] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "50");
    } else if (secoesNominais70[9] === corrente && C3[12] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "70");
    } else if (secoesNominais95[9] === corrente && C3[13] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "95");
    } else if (secoesNominais120[9] === corrente && C3[14] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "120");
    } else if (secoesNominais150[9] === corrente && C3[15] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "150");
    } else if (secoesNominais185[9] === corrente && C3[16] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "185");
    } else if (secoesNominais240[9] === corrente && C3[17] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "240");
    } else if (secoesNominais300[9] === corrente && C3[18] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "300");
    } else if (secoesNominais400[9] === corrente && C3[19] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "400");
    } else if (secoesNominais500[9] === corrente && C3[20] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "500");
    } else if (secoesNominais630[9] === corrente && C3[21] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "630");
    } else if (secoesNominais800[9] === corrente && C3[22] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "800");
    } else if (secoesNominais1000[9] === corrente && C3[23] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1000");
    }
  }
  if (metodo_Instalacao() == "D" && condutores_Carregados() == 2) {
    const corrente = D2.find((element) => element >= correnteInicial); // Procurando dijuntor igual a corrente ou proximo valor superior
    if (secoesNominais0005[10] === corrente && D2[0] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,5");
    } else if (secoesNominais0075[10] === corrente && D2[1] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,75");
    } else if (secoesNominais1[10] === corrente && D2[2] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1");
    } else if (secoesNominais015[10] === corrente && D2[3] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1,5");
    } else if (secoesNominais025[10] === corrente && D2[4] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "2,5");
    } else if (secoesNominais4[10] === corrente && D2[5] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "4");
    } else if (secoesNominais6[10] === corrente && D2[6] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "6");
    } else if (secoesNominais10[10] === corrente && D2[7] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "10");
    } else if (secoesNominais16[10] === corrente && D2[8] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "16");
    } else if (secoesNominais25[10] === corrente && D2[9] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "25");
    } else if (secoesNominais35[10] === corrente && D2[10] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "35");
    } else if (secoesNominais50[10] === corrente && D2[11] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "50");
    } else if (secoesNominais70[10] === corrente && D2[12] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "70");
    } else if (secoesNominais95[10] === corrente && D2[13] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "95");
    } else if (secoesNominais120[10] === corrente && D2[14] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "120");
    } else if (secoesNominais150[10] === corrente && D2[15] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "150");
    } else if (secoesNominais185[10] === corrente && D2[16] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "185");
    } else if (secoesNominais240[10] === corrente && D2[17] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "240");
    } else if (secoesNominais300[10] === corrente && D2[18] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "300");
    } else if (secoesNominais400[10] === corrente && D2[19] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "400");
    } else if (secoesNominais500[10] === corrente && D2[20] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "500");
    } else if (secoesNominais630[10] === corrente && D2[21] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "630");
    } else if (secoesNominais800[10] === corrente && D2[22] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "800");
    } else if (secoesNominais1000[10] === corrente && D2[23] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1000");
    }
  }
  if (metodo_Instalacao() == "D" && condutores_Carregados() == 3) {
    const corrente = D3.find((element) => element >= correnteInicial); // Procurando dijuntor igual a corrente ou proximo valor superior
    if (secoesNominais0005[11] === corrente && D3[0] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,5");
    } else if (secoesNominais0075[11] === corrente && D3[1] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "0,75");
    } else if (secoesNominais1[11] === corrente && D3[2] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1");
    } else if (secoesNominais015[11] === corrente && D3[3] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1,5");
    } else if (secoesNominais025[11] === corrente && D3[4] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "2,5");
    } else if (secoesNominais4[11] === corrente && D3[5] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "4");
    } else if (secoesNominais6[11] === corrente && D3[6] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "6");
    } else if (secoesNominais10[11] === corrente && D3[7] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "10");
    } else if (secoesNominais16[11] === corrente && D3[8] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "16");
    } else if (secoesNominais25[11] === corrente && D3[9] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "25");
    } else if (secoesNominais35[11] === corrente && D3[10] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "35");
    } else if (secoesNominais50[11] === corrente && D3[11] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "50");
    } else if (secoesNominais70[11] === corrente && D3[12] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "70");
    } else if (secoesNominais95[11] === corrente && D3[13] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "95");
    } else if (secoesNominais120[11] === corrente && D3[14] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "120");
    } else if (secoesNominais150[11] === corrente && D3[15] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "150");
    } else if (secoesNominais185[11] === corrente && D3[16] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "185");
    } else if (secoesNominais240[11] === corrente && D3[17] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "240");
    } else if (secoesNominais300[11] === corrente && D3[18] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "300");
    } else if (secoesNominais400[11] === corrente && D3[19] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "400");
    } else if (secoesNominais500[11] === corrente && D3[20] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "500");
    } else if (secoesNominais630[11] === corrente && D3[21] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "630");
    } else if (secoesNominais800[11] === corrente && D3[22] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "800");
    } else if (secoesNominais1000[11] === corrente && D3[23] === corrente) {
      document.getElementById("disjuntor").value = innerHTML = corrente;
      return (document.getElementById("cabo").value = innerHTML = "1000");
    }
  }
}

function salvar() {
  var tensao = document.getElementById("tensao").value;
  var watts = document.getElementById("watts").value;
  var quantidade = document.getElementById("quantidade").value;
  var disjuntor = document.getElementById("disjuntor").value;
  var cabo = document.getElementById("cabo").value;
  var circuito = document.getElementById("circuito").value;

  var Array = [
    tensao,
    watts,
    quantidade,
    disjuntor,
    cabo,
    circuito,
    condutores_Carregados(),
    correnteProjeto(),
    tipo_dispositivo(),
  ];

  if (
    (tensao != "" &&
      watts != "" &&
      quantidade != "" &&
      disjuntor != "" &&
      cabo != "" &&
      circuito != "" &&
      condutores_Carregados() == "2") ||
    (condutores_Carregados() == "3" && correnteProjeto() != NaN) ||
    tipo_dispositivo() == "iluminacao" ||
    tipo_dispositivo() == "tomada"
  ) {
    let chave = localStorage.length; // Inicia com base no que já existe
    chave++;
    localStorage.setItem(chave, JSON.stringify(Array));
    console.log(Array);
    Swal.fire({
      title: "Pojeto Salvo com sucesso",
      text: "",
      icon: "success",
    });
  } else {
    Swal.fire({
      title: "Voce deve preencher todas as lacunas para salvar seu projeto",
      text: "Oops...",
      icon: "error",
    });
  }
}
