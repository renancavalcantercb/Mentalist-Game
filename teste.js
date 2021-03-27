var numero = parseInt(Math.random() * 11)
var tentativas = 3

while (tentativas > 0){



    var chute = parseInt(prompt("Digite um número entre 0 e 10"))

    if (numero == chute){
        alert("Parabéns, você acertou o número")
        break
    }
    else if (chute > 10){
        alert("Número inválido, insira um número entre 0 a 10")
        tentativas = tentativas - 1
    }
    else if(chute <0){
        alert("Número inválido, insira um número entre 0 a 10")
        tentativas = tentativas - 1
    }
    else if(chute > numero){
        alert("O número secreto é menor")
        tentativas = tentativas - 1
    }
    else if(chute < numero){
        alert("O Número secreto é maior")
        tentativas = tentativas - 1
    }
    else if(isNaN(chute)){
        alert("Insira um número")
    }

}

if( chute !=numero){
    alert("Suas tentativas acabaram, o número secreto era " + numero )
}
