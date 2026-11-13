const usuario  = [
    {
        id:1,
        nome: 'Thawan',
        email:'thawan@email.com'
    },{
        id:2,
        nome:'adriano',
        email: 'adriano@email.com'
    },{
        id:3,
        nome: 'gabriel',
        email: 'gabriel@email.com'
    }
];
function buscarUsuario(usuario, email) {
    let usuario = usuario.find( usuario => usuario.email === email
    );
    return usuario || null;
};
let email = prompt('digite o e-mail do usuário:');
let resultado = buscarUsuario(usuario, email);
if ( resultado !== null) {
    console.log('usuário encontrado:')
    console.log('resultado.nome')
} else {
    console.log('Usuário não encontrado.')
}