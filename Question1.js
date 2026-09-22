// Lista para armazenar vários alunos.
let listaAlunos = [];

//Função para cadastrar um novo aluno.
function cadastrarAluno(nome, idade, curso, nota1, nota2, nota3) {
  let aluno = {
    nome: nome,
    idade: idade,
    curso: curso,
    notas: [nota1, nota2, nota3]
  };

  listaAlunos.push(aluno);
}

//Função para Calcular a média das três notas de cada aluno.
function calcularMedia(notas) {
  let soma = notas.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0);
  return soma / notas.length;
}

//Informar a situação do aluno.
function obterSituacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

//Exibir o resultado dos alunos.
function exibirRelatorio() {
  let aprovados = 0;
  let recuperacao = 0;
  let reprovados = 0;

  console.log("DADOS DOS ALUNOS");

  //usa o .forEach() para percorrer cada aluno cadastrado
  listaAlunos.forEach((aluno) => {
    let media = calcularMedia(aluno.notas);
    let situacao = obterSituacao(media);

    //Situação do aluno.
    if (situacao === "Aprovado") {
      aprovados++;
    } else if (situacao === "Recuperação") {
      recuperacao++;
    } else {
      reprovados++;
    }

    // Exibição dos dados do aluno
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Curso: ${aluno.curso}`);
    console.log(`Notas: ${aluno.notas.join(", ")}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Situação: ${situacao}`);
    console.log("----------------------------");
  });

  // Resumo final de situações
  console.log("\nRESUMO DA TURMA");
  console.log(`Aprovados: ${aprovados}`);
  console.log(`Recuperação: ${recuperacao}`);
  console.log(`Reprovados: ${reprovados}`);
}

//Alunos teste.
cadastrarAluno("João David", 20, "Sistemas de Informação", 8.0, 7.5, 9.0);
cadastrarAluno("Marina silva", 22, "Engenharia de Software", 6.0, 5.5, 6.5);
cadastrarAluno("Carlos Eduardo", 19, "Ciência da Computação", 4.0, 3.5, 5.0);
cadastrarAluno("kammylly silva", 20, "Ciência da Computação", 8.0, 3.5, 5.0);

// Exibe o relatório.
exibirRelatorio();


