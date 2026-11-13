function calcularMedia (notas) {
    for (let i = 1; i <= 4; i++) {
    let nota = Number(prompt('digite a' + i + 'nota:'));
    notas.push(nota);
}
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
} 
let notas = [];

let media = calcularMedia(notas);
alert ('Notas:' + notas);
alert ("Média" + media);