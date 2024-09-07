---
title: 07. Vetores e Matrizes
---
# 09. Vetores e Matrizes

Vetores e matrizes são estruturas de dados fundamentais em programação que permitem o armazenamento e a manipulação de múltiplos valores do mesmo tipo em uma única variável. Eles são essenciais para gerenciar coleções de dados, como listas de contatos ou grades de valores.

Antes de mergulharmos na sintaxe dos vetores em C, é importante entender o conceito fundamental por trás deles, pois isso facilita a compreensão de vetores e matrizes na programação.

::embed{src="https://www.youtube.com/embed/u4rFAwUynKQ?si=ELAM4MNOgXGpVYt2"}

## Criando Vetores

O vídeo a seguir irá guiá-lo na criação e manipulação de vetores na linguagem C. Você aprenderá desde a declaração até o uso de vetores para armazenar e acessar uma sequência de elementos.

::embed{src="https://www.youtube.com/embed/NPd38oeO1Js?si=QwC81m-7MLuCnAGV"}

## Criando Vetores Bidimensionais (Matrizes).

Matrizes em C são como tabelas bidimensionais que armazenam múltiplos valores do mesmo tipo organizados em linhas e colunas. O vídeo a seguir demonstrará como criar e trabalhar com matrizes, explicando como acessar e modificar seus elementos.

::embed{src="https://www.youtube.com/embed/8d1bH8bkj5Q?si=y1z-jRuWoXnOGNY0"}

## Exercícios

###### Exercício 1

Leia um vetor v de 10 inteiros e gere outro vetor w contendo os elementos de v ao quadrado.
Imprima w.

:::accordion{title="Solução"}
```c
#include <stdio.h>

int main() {
    int v[10], w[10];
    
    printf("Digite 10 inteiros:\n");
    for (int i = 0; i < 10; i++) {
        printf("v[%d] = ", i);
        scanf("%d", &v[i]);
    }
    
    for (int i = 0; i < 10; i++) {
        w[i] = v[i] * v[i];
    }
    
    printf("Os elementos do vetor w (quadrado dos elementos de v) são:\n");
    for (int i = 0; i < 10; i++) {
        printf("w[%d] = %d\n", i, w[i]);
    }
    
    return 0;
}
```
:::

###### Exercício 2

Leia uma matriz quadrada de inteiros m (4 x 4) e exiba os elementos que estão em linhas pares e
colunas ímpares.

:::accordion{title="Solução"}
```c
#include <stdio.h>

int main() {
    int matriz[4][4];
    
    printf("Digite os elementos da matriz 4x4:\n");
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            printf("Elemento [%d][%d]: ", i, j);
            scanf("%d", &matriz[i][j]);
        }
    }

    printf("Elementos em linhas pares e colunas ímpares:\n");
    for (int i = 0; i < 4; i++) {
        if (i % 2 == 0) {
            for (int j = 0; j < 4; j++) {
                if (j % 2 != 0) {
                    printf("Elemento na linha %d, coluna %d: %d\n", i + 1, j + 1, matriz[i][j]);
                }
            }
        }
    }

    return 0;
}
```
:::

###### Exercício 3

Leia uma matriz quadrada de inteiros m (5 x 5) e verifique se ela é simétrica, ou seja, se os valores da linha 1 são iguais aos da coluna 1, os da linha 2 são iguais aos da coluna 2, e assim por diante. Ao final imprimir “É simétrica” ou “Não é simétrica”.

:::accordion{title="Solução"}
```c
#include <stdio.h>

int main() {
    int matriz[5][5];
    int simetrica = 1; // 1 significa que é simétrica, 0 significa que não é simétrica

    printf("Digite os elementos da matriz 5x5:\n");
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            printf("Elemento [%d][%d]: ", i, j);
            scanf("%d", &matriz[i][j]);
        }
    }

    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            if (matriz[i][j] != matriz[j][i]) {
                simetrica = 0; // Define como não simétrica
                break; // Sai do loop interno
            }
        }
        if (simetrica == 0) {
            break; // Sai do loop externo
        }
    }

    if (simetrica == 1) {
        printf("É simétrica\n");
    } else {
        printf("Não é simétrica\n");
    }

    return 0;
}
```
:::