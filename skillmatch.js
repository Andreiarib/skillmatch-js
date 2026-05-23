class Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }
}

class VagaFrontEnd extends Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(id, empresa, cargo, requisitos, salario, modalidade);

    this.nivel = nivel;
  }

  exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
  }
}

// Criar o perfil do candidato

const candidato = {
  nome: "Amanda",
  area: "Front-End",
  habilidades: ["HTML", "CSS", "JavaScript", "React", "Scrum"],
  experienciaMeses: "6 meses",
};

let vagaMaisCompativel = null;
let sugestoesEstudo = [];

// Criar um array lista de vagas
const vagas = [
  new VagaFrontEnd(
    1,
    "Microsoft",
    "Desenvolvedor Front-End Júnior",
    ["JavaScript", "Vue", "Lógica de Programação", "Scrum"],
    3200,
    "Híbrido",
    "Júnior",
  ),

  new Vaga(
    2,
    "TechGold",
    "Front-End Trainee",
    ["HTML", "CSS", "JavaScript"],
    2100,
    "Presencial",
  ),

  new Vaga(
    3,
    "WebDigitalSolutions",
    "Estágio JavaScript Júnior",
    ["JavaScript", "Kanban", "GitHub", "HTML"],
    1950,
    "Presencial",
  ),

  new Vaga(
    4,
    "NovaDigital",
    "Desenvolvedor Vue.js",
    ["Vue", "Vuex", "Axios", "Scrum"],
    5290,
    "Remoto",
  ),
];

// Promise simula carregamento das vagas
function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 1000);
  });
}

// Closure mantém o valor da variável "total" mesmo após a função terminar
function criarContadorDeAnalises() {
  let total = 0;

  return function () {
    total++;

    return total;
  };
}

// Criando contador
const contadorAnalises = criarContadorDeAnalises();

vagas.forEach((vaga, i) => {
  console.log(`Análise número: ${contadorAnalises()}`);

  let objCompatibilidade = compatibilidade(vaga, candidato.habilidades);
  console.log(`Empresa: ${objCompatibilidade.empresa}`);
  console.log(`Cargo: ${objCompatibilidade.cargo}`);
  console.log(
    `Compatibilidade: ${objCompatibilidade.classificacaoPercentual}%`,
  );
  console.log(
    `Habilidades encontradas: ${objCompatibilidade.requisitosAtendidos.join(", ")}`,
  );
  console.log(
    `Habilidades faltantes: ${objCompatibilidade.requisitosNaoAtendidos.join(", ")}`,
  );
  console.log("Classificação:", objCompatibilidade.classificacao);
  console.log();

  //Usando Map para criar um novo array contendo a compatibilidade de cada vaga.
  const compatibilidades = vagas.map((vaga) =>
    compatibilidade(vaga, candidato.habilidades),
  );

  // Usando reduce percorrer todas as compatibilidades e retornar a vaga com maior percentual
  vagaMaisCompativel = compatibilidades.reduce((melhor, atual) => {
    return atual.classificacaoPercentual > melhor.classificacaoPercentual
      ? atual
      : melhor;
  });
  objCompatibilidade.requisitosNaoAtendidos.forEach((sugestaoEstudo, i) => {
    if (!sugestoesEstudo.includes(sugestaoEstudo)) {
      sugestoesEstudo.push(sugestaoEstudo);
    }
  });
});

console.log("Vaga mais compatível:");
console.log(`${vagaMaisCompativel.empresa} - ${vagaMaisCompativel.cargo}`);
//console.log(`${vagaMaisCompativel.cargo}`);
console.log(`${vagaMaisCompativel.classificacaoPercentual}%`);
console.log(
  `Recomendações de estudo:\nPriorize estudar ${sugestoesEstudo.join(", ")}, pois esses conteúdos aparecem nas vagas.`,
);

// Função para calcular a compatibilidade com cada vaga

function compatibilidade(vaga, habilidades) {
  const requisitosAtendidos = vaga.requisitos.filter((habilidade) =>
    candidato.habilidades.includes(habilidade),
  );

  const requisitosNaoAtendidos = vaga.requisitos.filter(
    (habilidade) => !candidato.habilidades.includes(habilidade),
  );

  //Classificar compatibilidade conforme percentual
  let classificacao = "";
  const classificacaoPercentual = calcularCompatibilidade(
    requisitosAtendidos.length,
    vaga.requisitos.length,
  );
  if (classificacaoPercentual >= 80 && classificacaoPercentual <= 100) {
    classificacao = "Alta compatibilidade";
  } else if (classificacaoPercentual >= 50 && classificacaoPercentual <= 79) {
    classificacao = "Média compatibilidade";
  } else {
    classificacao = "Baixa compatibilidade";
  }

  const candidatoCompatibilidade = {
    empresa: vaga.empresa,
    cargo: vaga.cargo,
    classificacaoPercentual: classificacaoPercentual,
    requisitosAtendidos: requisitosAtendidos,
    requisitosNaoAtendidos: requisitosNaoAtendidos,
    classificacao: classificacao,
  };
  return candidatoCompatibilidade;
}

function calcularCompatibilidade(requisitosAtendidos, requisitosDaVaga) {
  return (requisitosAtendidos / requisitosDaVaga) * 100;
}

// Função que recebe um callback
function finalizarAnalise(nomeCandidato, callback) {
  console.log("Análise finalizada.");

  callback(nomeCandidato);
}

// Função callback
function exibirMensagemFinal(nome) {
  console.log(
    `${nome}, revise suas habilidades faltantes e atualize seu plano de estudos.`,
  );
}

// Chamando a função
finalizarAnalise(candidato.nome, exibirMensagemFinal);

// async/await → aguarda as vagas carregarem
async function iniciarSistema() {
  const vagasCarregadas = await buscarVagasSimuladas();

  console.log("Vagas carregadas com sucesso!");
}

iniciarSistema();
