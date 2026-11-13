
function criarAluno(nome, idade, curso, nota) {
    return {
        nome: nome,
        idade: idade,
        curso: curso,
        nota: nota
    };
}

const alunos = [
    criarAluno("Ana", 18, "Desenvolvimento", 10),
    criarAluno("Carlos", 20, "Informática", 9),
    criarAluno("Mariana", 19, "Desenvolvimento", 7),
    criarAluno("Pedro", 21, "Informática", 6),
    criarAluno("João", 18, "Desenvolvimento", 5)
];

// Busca um aluno pelo nome
function buscarAluno(alunos, nome) {
    return alunos.find(aluno => aluno.nome === nome);
}

// Lista os alunos aprovados
function listarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 7);
}

// Retorna somente os nomes
function obterNomes(alunos) {
    return alunos.map(aluno => aluno.nome);
}

// Calcula a média da turma
function calcularMedia(alunos) {
    const soma = alunos.reduce((total, aluno) => {
        return total + aluno.nota;
    }, 0);

    return soma / alunos.length;
}

// Gera o resumo da turma
function gerarResumo(alunos) {
    const aprovados = listarAprovados(alunos);

    return {
        quantidadeAlunos: alunos.length,
        mediaTurma: calcularMedia(alunos),
        aprovados: aprovados.length,
        reprovados: alunos.length - aprovados.length
    };
}

// Exibindo os resultados
console.log("Aluno encontrado:");
console.log(buscarAluno(alunos, "Ana"));

console.log("Alunos aprovados:");
console.log(listarAprovados(alunos));

console.log("Nomes dos alunos:");
console.log(obterNomes(alunos));

console.log("Média da turma:");
console.log(calcularMedia(alunos));

console.log("Resumo da turma:");
console.log(gerarResumo(alunos));