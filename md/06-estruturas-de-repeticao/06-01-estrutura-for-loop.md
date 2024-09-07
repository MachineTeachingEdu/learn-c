---
title: 06.01. For-loop
---
# 08. Estruturas de Repetição

Estruturas de repetição são como um jeito de fazer o computador repetir uma ação várias vezes, sem que você precise escrever o mesmo código novamente. Imagine que você quer fazer algo repetidamente, tipo contar de 1 a 10, ou percorrer todos os itens de uma lista. Em vez de escrever "conte 1, conte 2, conte 3..." até 10, você usa uma estrutura de repetição, como um loop, que faz isso pra você automaticamente. 

Na linguagem de programação C, existem 2 estruturas de repetição:
- [For-loop](#for-loop)
- [While e Do While](/06-estruturas-de-repeticao/06-02-estrutura-while)

Nesta aula, abordaremos a estrutura for-loop.

## for-loop

::embed{src="https://www.youtube.com/embed/F3Kn4iyrrEA?si=87EFZfWj3wpEBZ8M"}

## Exercícios

###### Exercício 1

Calcule e imprima o somatório dos números de n a m, sendo n e m maiores que zero e m > n

:::accordion{title="Solução"}
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, m, i, soma=0;
    scanf("%d %d", &n, &m);

    for (i = n; i <= m; i++) {
        soma += i;
    }

    printf("Soma: %d\n", soma);
}
```
:::

###### Exercício 2

Leia um número inteiro n e imprima o valor de H, dado pela série abaixo. Se n ≤ 0 imprima uma mensagem de erro.

![Imagem exemplo para exercicio 2](https://i.imgur.com/vB48SOr.png)

:::accordion{title="Solução"}
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, i;
    float soma = 0;
    scanf("%d", &n);

    if (n <= 0) {
        printf("Numero invalido\n");
        return 0;
    }

    for (i=n;i>=1;i--) {
        soma += (float)n/i;
    }

    printf("Soma: %f\n", soma);
}
```
:::