function criarProduto(nome,preco,categoria) {
    return{
        nome: nome,
        preco: preco,
        categoria: categoria
    };
}
let nome = prompt ("digite o nome do produto") 
let preco = Number (prompt('digite o preço do produto'))
let categoria = prompt ('digite a categpria do produto')
let produto = criarProduto (nome,preco,categoria)

console.log(produto);
function aplicarDesconto(produto,percentual) {
    return{
... produto ,
preco: produto.preco - (produto.preco * percentual / 100)
    }
    
}