
const pedidos = [
    { id: 1, cliente: "Ana", valor: 150 },
    { id: 2, cliente: "Carlos", valor: 300 },
    { id: 3, cliente: "Ana", valor: 250 },
    { id: 4, cliente: "Mariana", valor: 500 }
];


function buscarPedidosPorCliente(pedidos, cliente) {
    return pedidos.filter(pedido => pedido.cliente === cliente);
}


function calcularTotalPedidos(pedidos) {
    return pedidos.reduce((total, pedido) => {
        return total + pedido.valor;
    }, 0);
}


const pedidosAna = buscarPedidosPorCliente(pedidos, "Ana");


console.log("Pedidos da Ana:");
console.log(pedidosAna);

console.log("Total dos pedidos da Ana:");
console.log(calcularTotalPedidos(pedidosAna));
