---
title: 04.01. Aritméticos
---

# 04. Operadores Aritméticos

Assim como em uma calculadora, a programação permite realizar operações aritméticas básicas. Na linguagem C, você pode executar operações como adição (+), subtração (-), multiplicação (*), divisão (/) e módulo (%).

No vídeo a seguir, você aprenderá mais sobre como utilizar operadores aritméticos em C e como aplicar essas operações em seus programas.

::embed{src="https://www.youtube.com/embed/SXAxAlGNcqE?si=_ZMsMv41TrftkD0V"}

## Exercícios

###### Exercício 1
Leia o peso e altura de uma pessoa, calcule e imprima seu IMC. Sabe-se que IMC = peso / altura².

:::accordion{title="Solução"}
```c
#include <stdio.h>

int main() {
    float peso;
    float altura;

    printf("Digite seu peso (em kg): ");
    scanf("%f", &peso);

    printf("Digite sua altura (em metros): ");
    scanf("%f", &altura);

    float imc = peso / (altura * altura);
    printf("Seu IMC é: %f\n", imc);
    return 0;
}
```
:::

###### Exercício 2
Leia 3 notas de um aluno e seus respectivos pesos. Depois, calcule e imprima a média ponderada do aluno. 

:::accordion{title="Solução"}
```c
int main() {
    float nota1, nota2, nota3, peso1, peso2, peso3, notaFinal;

    printf("Digite a nota 1: ");
    scanf("%f",&nota1);
    printf("Digite a peso das nota 1: ");
    scanf("%f", &peso1);

    printf("Digite a nota 2: ");
    scanf("%f",&nota2);
    printf("Digite a peso das nota 2: ");
    scanf("%f", &peso2);

    printf("Digite a nota 3: ");
    scanf("%f",&nota3);
    printf("Digite a peso das nota 3: ");
    scanf("%f", &peso3);

    notaFinal = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);
    printf("Nota final: %.2f", notaFinal);
```
:::

###### Exercício 3

Leia um número n com 8 dígitos, separe o dia, mês e ano do número lido, mostrando-os na tela. Exemplo: 25031949 imprime 25/03/1959.

:::accordion{title="Solução"}
**OBS:** Essa solução não é tão trivial para entender, portanto, pense em um número para *n* e tente realizar as operações abaixo. Lembre-se que números inteiros não parte decimal, portanto, caso o resultado da operação seja um número do tipo float, teremos a parte decimal truncada.
```c
int main() {
    int n;

    printf("Digite uma data (DDMMYYYY): ");
    scanf("%d", &n);

    int dia = n / 1000000;
    int mes = (n % 1000000) / 10000;
    int ano = n % 10000;

    printf("Data: %d/%d/%d\n", dia, mes, ano);
}
```
:::