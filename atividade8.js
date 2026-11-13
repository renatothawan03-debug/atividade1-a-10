const aluno = [
    {nome: 'ana', nota: 8},
    {nome: 'carlos', nota: 5},
    {nome: 'mariana', nota: 9},
    {nome: 'pedro', nota: 4},
    {nome: 'joão', nota: 7}
];
function listarAprovados(alunos) {
    return alunos.filter(alunos => aluno.nome >= 7);
}
function obterNomes(alunos) {
    return alunos.map(aluno => aluno.nome);
}
function calcularMediaTurma(alunos) {
    const soma = alunos.reduce((total,aluno)=> {
        return total + aluno.nota;
    },0)
 return soma / alunos.length;   
} 
console.log('alunos aprovados:')
console.log(listarAprovados(alunos));
console.log('nomes dos alunos:')
console.log(obterNomes(alunos));
console.log('Média da turma:')
console.log(calcularMediaTurma(alunos));