const funcionarios = [
    {
        nome: 'joão',
        salario: 2500,
        cargo: 'desenvolvedor'
    },{
        nome:'maria',
        salario:3200,
        cargo:'designer'
    },{
        nome:'Carlos',
        salario:4500,
        cargo:'analista'
    }
];
function aplicarReajuste(funcionarios, percentual
) {
    return funcionarios.map(funcionario => {
        return {
            ...funcionario,
            salario:funcionario.salario
            + (funcionario.salario * percentual / 100)
        }
    });
}
let percentual = Number (prompt('digite o percentual de reajuste:'));
let novoFuncionario = aplicarReajuste(funcionarios, percentual)
console.log('funcionários originais:');
console.log(funcionarios);
console.log('funcionários com reajuste:')
console.log( novosFuncionarios);