const carrinho = [
    {produto: 'Mouse', quantidade: 2, preco: 80 },
    {produto: 'Teclado', quantidade: 1, preco: 150},
    {produto: 'Headset', quantidade: 2, preco: 200}
]
        function calcularTotal(carrinho) { return carrinho.reduce((total, item) => {
                return total + (item.preco * item.quantidade);
            },0)
            
        } function calcularTotalComDesconto (carrinho, desconto) {
            let total = calcularTotal(carrinho); 
            return total - (total * desconto / 100 );
        }
        let total = calcularTotal(carrinho);
        let totalFinal = calcularTotalComDesconto(carrinho, 10);
        console.log ('Total: R$', total);
        console.log ('Desconto: 10%');
        console.log ('Total final: R$',totalFinal)
        
