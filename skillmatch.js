// Criar o perfil do candidato

const candidato = {
  nome: "Amanda",
  area: "Front-End",
  habilidades: ["HTML", "CSS", "JavaScript", "React"],
  experienciaMeses: "6 meses",
};

// Teste temporário para ver no console depois
//console.log("Candidato cadastrado:", candidato.nome);
//console.log("Habilidades do candidato:", candidato.habilidades.join(", "));

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
    requisitos: ["JavaScript", "Kanban", "GitHub"],
    salario: 1950,
    modalidade: "Presencial",
  },
  {
    id: 4,
    empresa: "NovaDigital",
    cargo: "Desenvolvedor Vue.js",
    requisitos: ["Vue", "Vuex", "Axios", "SCRUM"],
    salario: 5290,
    modalidade: "Remoto",
  },
];
//console.log(vagas);

// Função para calcular a compatibilidade com cada vaga

function compatibilidade(vaga, habilidades) {
  const requisitosAtendidos = vaga.requisitos.filter((habilidade) =>
    candidato.habilidades.includes(habilidade),
  );

  const requisitosNaoAtendidos = vaga.requisitos.filter(
    (habilidade) => !candidato.habilidades.includes(habilidade),
  );

  //Classificar compatibilidade conforme percentual
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

  console.log(`Empresa: ${vaga.empresa}`);
  console.log(`Cargo: ${vaga.cargo}`);
  console.log(`Compatibilidade: ${classificacaoPercentual}%`);
  console.log(`Habilidades encontradas: ${requisitosAtendidos.join(", ")}`);
  console.log(`Habilidades faltantes: ${requisitosNaoAtendidos.join(", ")}`);
  console.log("Classificação:", classificacao);
}

function calcularCompatibilidade(requisitosAtendidos, requisitosDaVaga) {
  return (requisitosAtendidos / requisitosDaVaga) * 100;
}
compatibilidade(vagas[1], candidato.habilidades);
