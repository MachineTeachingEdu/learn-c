---
title: 02. Introdução a Linguagem C
---
# 02. Introdução a Linguagem C

A partir de agora, você será introduzido à linguagem C, mas primeiro precisamos elucidar alguns conceitos importantes relacionados diretamente a linguagem. Nesse capítulo abordaremos:

- [Compiladores](#compiladores)
- [Primeiro Programa em C](#primeiro-programa-em-c)

## Compiladores

Você sabia que um dos passos mais importantes da linguagem C, é a compilação? Essa é a única forma que o hardware da sua maquina consegue entender seu algoritmo (código-fonte). Sem esse passo é como fornecer uma informação em alemão para alguém que não sabe alemão ou ainda, é como tentar entender um bebê.

No vídeo abaixo, você aprenderá mais sobre compiladores e como é possível converter um código-fonte em código de maquina de forma que o seu algoritmo seja executado.

::embed{src="https://www.youtube.com/embed/afUiVvDUIRA?si=2z43Xz-d3cymYtec"}

## Primeiro Programa em C

Nessa video-aula, você aprenderá a construir seu primeiro programa na linguagem C.

::embed{src="https://www.youtube.com/embed/E7XAkCL6Ut8?si=N6fSFsW-bJUMw4QG"}

## Exercícios

1. Faça um programa que imprime seu nome, idade e curso. Dica: use `printf` para imprimir.

:::accordion{title="Solução"}
**OBS:** No código abaixo, os textos que vem logo após `//` servem apenas para designar um comentário. Leia com atenção.
```c
#include <stdio.h> // Inclui a biblioteca padrão do C, que fornece funções para entrada e saída, como printf.

int main() { // Define a função principal do programa, que é o ponto de entrada para execução.
    // Imprime uma string formatada na tela. 
    // A string contém informações sobre o nome, idade e curso.
    printf("Nome: João, Idade: 21, Curso: Sistemas de Informação");
    
    // Retorna 0 para indicar que o programa terminou sua execução com sucesso.
    return 0;
}
```
:::