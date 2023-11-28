alert('Boas Vindas ao Jogo do número secreto');
let numeroSecreto = 7;
console.log(numeroSecreto)
let chute = prompt ('Qual é o numero Secreto entre 1 e 10');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`)
} else {
    alert ('oh não, não foi dessa vez :(')
}
