---
title: 03. Variáveis e tipos de dados
description: Neste capítulo, você aprenderá a declarar variáveis e explorar os tipos de dados na linguagem C.
---

# 03. Variáveis e tipos de dados

Neste capítulo, você aprenderá a declarar variáveis na linguagem C e a explorar os principais tipos de dados disponíveis.

## Declaração de variáveis

Em C, variáveis são espaços de memória utilizados para armazenar dados temporariamente. Ao declarar uma variável, você está reservando um bloco de memória que pode ser acessado e manipulado ao longo do programa. Cada variável aponta para um endereço específico na memória onde o dado é armazenado.

::embed{src="https://www.youtube.com/embed/n68tJh2mIx4?si=cT_nmXzjNt9Z31iD"}

## Tipos de dados

Você provavelmente já conhece os tipos de dados primitivos, como inteiros, ponto flutuante e caracteres. No entanto, a linguagem C oferece uma variedade de tipos de dados adicionais que são fundamentais para um entendimento completo. No vídeo abaixo, você será introduzido aos principais tipos de dados em C, incluindo detalhes sobre bits e bytes, e como eles influenciam a alocação de memória.

::embed{src="https://www.youtube.com/embed/DPv2qG1XGp4?si=TbDi9YQNDmPZxvBK"}

## Exercícios

1. Crie um programa que pede a idade e altura e depois imprime. Dica: Para scanear um dado do usuário use o `scanf`.

:::accordion{title="Solução"}
```c
#include <stdio.h> // Inclui a biblioteca padrão do C para funções de entrada e saída

int main() {
    int idade;    // Declara uma variável para armazenar a idade
    float altura; // Declara uma variável para armazenar a altura

    // Solicita ao usuário que insira a idade
    printf("Digite sua idade: ");
    scanf("%d", &idade); // Lê a idade fornecida pelo usuário e armazena na variável 'idade'

    // Solicita ao usuário que insira sua altura
    printf("Digite sua altura (em metros): ");
    scanf("%f", &altura); // Lê a altura fornecida pelo usuário e armazena na variável 'altura'

    // Imprime a idade e a altura fornecidos pelo usuário
    printf("Idade: %d\n", idade);
    printf("Altura: %f metros\n", altura);

    return 0; // Retorna 0 para indicar que o programa terminou com sucesso
}
```
:::