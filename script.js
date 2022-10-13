//while

function tabuada() {

    var num = parseInt(prompt("Digite o número que você quer ver a tabuada"));
    var tabuada = 1;

    alert("Abra o console para ver o resultado!")
    if (num > 0 && num < 10) {
        while (tabuada <= 10) {

            console.log(num + " x " + tabuada + " = " + num * tabuada);

            tabuada++;
        }
    }
    else {
        alert("Número inválido")
    }


}

function somatoria() {
    var num = 0
    var conta = 1


    while (conta <= 100) {
        num += conta;
        conta++;
    }

    alert("A somatória dos cem primeiros números inteiros é: " + num)
}

function somatorioPares() {
    var num = 0
    var cont = 0

    while (cont <= 500) {

        if (cont % 2 == 0) {
            num += cont
        }
        cont++
    }

    alert("A somatória dos números pares entre 1 e 500 é: " + num)
}

function pares1a20() {
    var cont = 0
    alert("Abra o console para ver o resultado!")
    while (cont <= 20) {

        if (cont % 2 == 1) {
            console.log("Números ímpares até 20: " + cont)
        }
        cont++
    }
}

function expoente3() {
    var acumuladora, contadora;

    alert("Abra o console para ver o resultado");
    acumuladora = 1;
    contadora = 1;

    console.log("O número 3 elevado " + contadora + " é igual a: 1");

    while (contadora <= 15) {

        acumuladora = acumuladora * 3
        console.log("O número 3 elevado " + contadora + " é igual a: ", acumuladora);
        contadora++
    }


}

function expoenteBase() {
    var base, expoente, resultado, cont;

    base = parseInt(prompt("Digite o número da base"));
    expoente = parseInt(prompt("Digite o valor do expoente"));
    resultado = 1
    cont = 1

    while (cont <= expoente) {
        resultado *= base
        cont++
    }

    alert("A base " + base + " elevado a " + expoente + " é: " + resultado)

}

function fibonacci15() {
    var num, num1, termo, res, cont;

    alert("Abra o console para ver o resultado");

    termo = 15;

    num = 0;
    num1 = 1;
    cont = 0;

    while (cont <= termo) {
        res = num + num1;
        num = num1;
        num1 = res;
        console.log("Termo " + cont + ": " + res);
        cont++
    }

}

function celsiusF() {
    var c, f, cont, percorre;

    alert("Abra o console para ver o resultado")

    cont = 10
    percorre = 1

    while (percorre <= cont) {
        c = cont * percorre;
        f = (c * 9 / 5) + 32;
        console.log("A conversão de " + c + "°C para Fahrenheit é: " + f + "°F");
        percorre++
    }

}

function mediasoma10() {
    let cont = 1;
    let num, media, soma;

    soma = 0

    while (cont <= 10) {
        num = parseInt(prompt("Digite um número"));
        soma += num
        cont++
    }

    media = soma / cont;

    alert("O valor da soma de todos os valores digitados é: " + soma);
    alert("A média aritmética dos valores é: " + media);
}

function mediasoma50a70() {

    let cont = 50;
    let media, soma;

    soma = 0

    while (cont <= 70) {

        if (cont % 2 == 0) {
            soma += cont;

        }
        cont++
    }

    media = soma / cont;

    alert("O valor da soma dos números pares entre 50 e 70 é: " + soma);
    alert("A média aritmética dos valores é: " + media);
}


function areacasa() {
    var nome, comprimento, altura, area, comodo, continuar;

    area = 0

    function promptNum(mensagem, erro) {
        let msg = mensagem
        while (true) {
            var ret = parseFloat(prompt(msg));
            if (!isNaN(ret)) return ret;
            msg = erro;
        }

    }

    do {

        do {
            nome = prompt("Digite o nome do comodo")
        }
        while ((nome == "") || (nome == null))

        do {
            comprimento = promptNum("Digite o comprimento do comodo", "Digite apenas números!!")
        }
        while ((nome == "") || (nome == null))

        do {
            altura = promptNum("Digite a altura do comodo", "Digite apenas números!!")
        }
        while ((nome == "") || (nome == null))

        comodo = comprimento * altura

        area += comodo

        continuar = confirm("Deseja calcular outro comodo?")


    }
    while (continuar == true)

    alert("A área da casa é: " + area + "m²")
}

function atenegativo() {
    var num, maior;

    maior = 0;

    num = 0;

    while (num > 0) {

        num = parseInt(prompt("Digite um valor"))

        if (num > maior) {

            maior = num
        }
    }

    alert("Maior numero: " + maior)
    alert("Menor numero: " + num)

}

//dowhile

function quadrado15a200() {
    let contadora = 15

    alert("Valores no console!");

    do {

        console.log("O valor do quadrado de " + contadora + " é: " + Math.pow(contadora, 2));
        contadora++

    } while (contadora <= 200);
}

function somapares1a500() {
    var num = 500;
    var soma = 0;
    let cont = 1

    alert("Resultado no console")

    do {

        if (cont % 2 == 0) {
            soma += cont;
        }
        cont++

    } while (cont <= num);

    console.log(soma);
}

function pares200() {
    var num = 1;

    alert("Resultado no console");

    do {

        if (num % 4 == 0) {
            console.log(num)
        }
        num++

    } while (num <= 200);
}

function graostrigo() {
    var trigo, quadro, i, res;

    trigo = 0
    quadro = 0

    alert("Resultado no console");

    do {

        res = trigo + quadro
        trigo = res
        quadro++

    } while (quadro <= 64);

    console.log(res)
}

function somatoriofat() {
    var num, fatorial, repete, soma;

    fatorial = 1;
    repete = 0;
    soma = 0;

    do {

        num = parseInt(prompt("Digite um valor"));

        for (i = num; i > 1; i--) {

            fatorial *= i;
            console.log(fatorial);
            soma += fatorial;

        }
        repete++

    } while (repete < 15);


    alert("Resultado no console");
}

function somapositivos() {
    var num, soma, media, contagem;

    soma = 0;
    media = 0;
    contagem = 0;

    do {

        num = parseInt(prompt("Digite um valor"));

        if (num > 0) {

            soma += num;
            contagem++;

        }

    } while (num > 0);

    media = soma / contagem

    alert("Resultado no console");
    console.log("O total de números positivos digitados foi: " + contagem);
    console.log("Soma dos valores: " + soma);
    console.log("A média é: " + media);
}

function fatimpar() {
    var fatorial, num, repete;

    num = 10;
    fatorial = 1;
    repete = 1;

    alert("Resultado no console");

    do {
        fatorial *= repete;

        if(repete %2 == 1){
            console.log(fatorial);
        }


        repete++;

    } while (repete <= 10);


}

function negativo() {
    var num, maior;

    maior = 0

    do {

        num = parseInt(prompt("Digite um valor"))

        if (num > maior) {

            maior = num
        }

    } while (num >= 0);

    alert("Maior numero: " + maior)
    alert("Menor numero: " + num)

}

function divisao() {
    var num, num2, res;

    num = parseFloat(prompt("Digite um valor"));
    num2 = parseFloat(prompt("Digite outro"));
    res = 1;

    do {

        num -= num2;
        res++

    } while (num > num2);

    alert("A divisão é: " + res)
}

// for

function quadrado15a200For() {

    alert("Valores no console!");

    for (let i = 15; i <= 200; i++) {

        console.log("O valor do quadrado de " + i + " é: " + Math.pow(i, 2));
    }

}

function tabuadaFor() {
    var num = parseInt(prompt("Digite o número que você quer ver a tabuada"));

    alert("Abra o console para ver o resultado!")
    if (num > 0 && num < 10) {
        for (let i = 1; i <= 10; i++) {

            console.log(num + " x " + i + " = " + num * i);

            tabuada++;
        }
    }
    else {
        alert("Número inválido")
    }
}

function soma100() {
    var num = 0

    for (let i = 0; i <= 100; i++) {
        num += i;

    }

    alert("A somatória dos cem primeiros números inteiros é: " + num)
}

function somapar500() {
    var num = 500;
    var soma = 0;

    for (let i = 0; i <= num; i++) {

        if (i % 2 == 0) {
            soma += i;
        }


    }

    alert("O resultado da soma é: " + soma);
}

function impares1a20() {

    alert("Abra o console para ver o resultado!");

    for (let i = 0; i <= 20; i++) {
        if (i % 2 == 1) {
            console.log("Números ímpares até 20: " + i);
        }
    }



}

function div4ate200() {

    alert("Resultado no console");

    for (let i = 0; i <= 200; i++) {
        if (i % 4 == 0) {
            console.log(i)
        }
    }

}

function pot3() {
    let acumuladora;

    alert("Abra o console para ver o resultado");
    acumuladora = 1;


    console.log("O número 3 elevado " + contadora + " é igual a: 1");

    for (let i = 0; i <= 15; i++) {
        acumuladora = acumuladora * 3
        console.log("O número 3 elevado " + i + " é igual a: ", acumuladora);
    }

}

function potbase() {
    var base, expoente, resultado;

    base = parseInt(prompt("Digite o número da base"));
    expoente = parseInt(prompt("Digite o valor do expoente"));
    resultado = 1

    for (let i = 1; i <= expoente; i++) {
        resultado *= base
    }

    alert("A base " + base + " elevado a " + expoente + " é: " + resultado)
}

function fibofor() {
    var num, num1, termo, res, cont;

    alert("Abra o console para ver o resultado");

    termo = 15;

    num = 0;
    num1 = 1;

    for (let i = 0; i <= termo; i++) {
        res = num + num1;
        num = num1;
        num1 = res;
        console.log("Termo " + cont + ": " + res);
    }

}

function ctof() {
    var c, f, cont, percorre;

    alert("Abra o console para ver o resultado")

    cont = 10

    for (let i = 0; i <= cont; i++) {
        c = cont * percorre;
        f = (c * 9 / 5) + 32;
        console.log("A conversão de " + c + "°C para Fahrenheit é: " + f + "°F");
    }

}

function fatimpar10() {
    var fatorial, num, repete;

    fatorial = 1;


    alert("Resultado no console");


    for (i = 1; i <= 10; i++) {
        fatorial *= i;

        if (i % 2 == 1) {

            console.log(fatorial);
        }


    }



}