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
  {
    id: 1,
    empresa: "Microsoft",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["JavaScript", "Vue", "Lógica de Programação", "Scrum"],
    salario: 3200,
    modalidade: "Híbrido",
  },
  {
    id: 2,
    empresa: "TechGold",
    cargo: "Front-End Trainee",
    requisitos: ["HTML", "CSS", "JavaScript"],
    salario: 2100,
    modalidade: "Presencial",
  },
  {
    id: 3,
    empresa: "WebDigitalSolutions",
    cargo: "Estágio JavaScript Júnior",
    requisitos: ["JavaScript", "Kanban", "GitHub", "HTML"],
    salario: 1950,
    modalidade: "Presencial",
  },
  {
    id: 4,
    empresa: "NovaDigital",
    cargo: "Desenvolvedor Vue.js",
    requisitos: ["Vue", "Vuex", "Axios", "Scrum"],
    salario: 5290,
    modalidade: "Remoto",
  },
];

vagas.forEach((vaga, i) => {
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
  if (!vagaMaisCompativel) {
    vagaMaisCompativel = objCompatibilidade;
  } else if (
    vagaMaisCompativel.classificacaoPercentual <
    objCompatibilidade.classificacaoPercentual
  ) {
    vagaMaisCompativel = objCompatibilidade;
  }
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
console.log(`Sugestões de estudo: ${sugestoesEstudo.join(", ")}`);

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
