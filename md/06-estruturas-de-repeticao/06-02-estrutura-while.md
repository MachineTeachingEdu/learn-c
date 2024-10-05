---
title: 06.02. While e Do While
description: Neste capítulo, você aprenderá sobre as estruturas de repetição while e do while, que permitem executar um bloco de código enquanto uma condição for verdadeira.
---
# 08. Estruturas de Repetição: *while e do while*

Para além da estrutura for-loop, há também outras duas estruturas que você precisa aprender. Diferente da estrutura for-loop, while e do while precisa apenas de uma condição para realizar as iterações.

### Estrutura While

A estrutura while executa um bloco de código enquanto uma condição for verdadeira. O código dentro do loop é executado repetidamente até que a condição se torne falsa.

::embed{src="https://www.youtube.com/embed/FhM-rXPALL8?si=sZh7M9wyNu5WxzjR"}

### Estrutura Do While

A estrutura do while é semelhante ao while, mas com uma diferença crucial: o bloco de código é executado pelo menos uma vez antes de a condição ser verificada. Isso ocorre porque a verificação da condição acontece após a execução do bloco de código.

::embed{src="https://www.youtube.com/embed/GGHR93PKsXc?si=_Q4RkMVmzrKdfu8q"}

## Exercícios

**OBS:** Não use for-loop para os exercícios abaixo

###### Exercício 1

Imprima os 50 primeiros números pares, não considerando o zero

:::accordion{title="Solução"}
```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
   int i=0, j=1;
   while(i < 50) {
       if (j % 2 == 0) {
           printf("%d ", j);
           i++;
       }
       j++;
   }
   return 0;
}
```
:::

###### Exercício 2

Crie um programa em C que solicite ao usuário a entrada de notas de provas até que o valor 0 seja inserido. Após o término da entrada, o programa deve calcular e exibir a média das notas inseridas, desconsiderando o 0.

:::accordion{title="Solução"}
```c
#include <stdio.h>

int main() {
    int nota;
    int soma = 0;
    int contador = 0;

    do {
        printf("Digite a nota da prova (ou 0 para encerrar): ");
        scanf("%d", &nota);

        if (nota != 0) {
            soma += nota;
            contador++;
        }
    } while (nota != 0);

    if (contador > 0) {
        float media = (float)soma / contador;
        printf("A média das notas é: %.2f\n", media);
    } else {
        printf("Nenhuma nota válida foi inserida.\n");
    }

    return 0;
}
```
:::