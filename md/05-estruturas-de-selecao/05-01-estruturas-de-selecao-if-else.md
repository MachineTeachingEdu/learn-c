---
title: 05.01. if-else
description: Neste capítulo, você aprenderá sobre estruturas de seleção, que permitem que o programa tome decisões com base em condições específicas.
---
# 06. Estruturas de Seleção (ou decisão)

Após entender os operadores lógicos e relacionais, é hora de explorar as estruturas de seleção. Essas estruturas permitem criar ramificações em seu programa, permitindo que ele tome decisões com base em condições específicas. Com as estruturas de seleção, você pode definir caminhos distintos de execução, ajustando o comportamento do seu programa conforme as condições definidas.

## If-else

::embed{src="https://www.youtube.com/embed/MGUpDTEc3SM?si=RCd8UPx12BJfzoc2"}

## Exercícios

###### Exercício 1
Leia um número inteiro n e informe se ele é ou não divisível por 6.

:::accordion{title="Solução"}
```c
#include <stdio.h>

int main() {
    int n;
    printf("Digite um número inteiro: ");
    scanf("%d", &n);

    if (n % 6 == 0) {
        printf("O número %d é divisível por 6.\n", n);
    } else {
        printf("O número %d não é divisível por 6.\n", n);
    }
}
```
:::

###### Exercício 2
Leia o preço de um produto e a condição de pagamento e imprima os valores a serem pagos,
considerando a seguinte tabela:

![Tabela de Exercício 2](https://i.imgur.com/0KWDNDW.png)

:::accordion{title="Solução"}
```c
#include <stdio.h>

int main() {
    float peso, altura;

    printf("Digite o peso (kg): ");
    scanf("%f", &peso);

    printf("Digite a altura (m): ");
    scanf("%f", &altura);

    float imc = peso / (altura * altura);

    if (imc < 20) {
        printf("Abaixo do peso\n");
    } else if (imc > 20 && imc <= 25) {
        printf("Normal\n");
    } else if (imc > 25 && imc <= 30) {
        printf("Excesso de Peso\n");
    } else if (imc > 30 && imc <= 35) {
        printf("Obesidade\n");
    } else {
        printf("Obesidade Mórbida\n");
    }
}
```
:::

###### Exercício 3
Baseado no ano e peso do modelo de um automóvel, uma cidade determina a sua classe e o valor da
taxa de registro usando a seguinte tabela:

![Tabela do Exercício 3](https://i.imgur.com/TI5yi9z.png)

Usando esta tabela, leia o ano e o peso do modelo de um automóvel e calcule e imprima a classe e o
valor da taxa de registro para o carro.
