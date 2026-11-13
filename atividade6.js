function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}
function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
}
function converterTemperatura(celsius) {
    return {
        celsius: celsius,
        fahrenheit:
        celsiusParaFahrenheit(celsius),
        kelvin:
        celsiusParaKelvin(celsius)

    };
    
}
let temperatura = Number(prompt('digite a temperatura em Celsius'))
let resultado = converterTemperatura(temperatura);
console.log('celsius:', resultado.celsius + '°C');
console.log('fahrenheit:', resultado.fahrenheit + '°F');
console.log('kelvin:', resultado.kelvin + 'K');