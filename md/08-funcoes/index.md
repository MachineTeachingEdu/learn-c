---
title: 08. Funções
description: Neste capítulo, você aprenderá sobre funções, que são fundamentais na programação. As funções permitem modularizar, reutilizar e organizar seu código de maneira eficiente.
---
# 10. Funções

Uma das características essenciais da programação moderna é o uso de funções, também conhecidas como subrotinas. As funções desempenham papéis cruciais como modularização, reutilização e organização do código.

Primeiramente, vamos explorar a estrutura básica de uma função através do vídeo a seguir.

::embed{src="https://www.youtube.com/embed/OrF2ydZIELk?si=WUoIcChQ3yPR-BGz"}

## Parâmetros da Função

Os parâmetros são fundamentais para a interação entre uma função e o código que a chama. Eles permitem que você passe informações necessárias para a execução da função. Por exemplo, para procurar um estudante em um banco de dados, você pode passar o nome do estudante como um parâmetro. No vídeo abaixo, você aprenderá como definir e usar parâmetros em suas funções.

::embed{src="https://www.youtube.com/embed/5BBD_IfFUtk?si=ZY-iaCbQ0xzWbIAj"}

## Retorno da Função

O retorno de uma função permite que você envie uma informação de volta para o código que chamou a função. Isso pode incluir diferentes tipos de valores, dependendo do que a função deve fornecer. Assista ao vídeo a seguir para aprender a sintaxe e as práticas recomendadas para retornar valores de funções.

::embed{src="https://www.youtube.com/embed/E3zGQKc0BX4?si=VNNuIeYTenHE2lru"}

## Recursividade

Recursão é uma técnica onde uma função se chama diretamente dentro de sua própria definição, funcionando como um loop. Essa abordagem permite resolver problemas complexos ao dividi-los em subproblemas menores e mais gerenciáveis, continuando até que uma condição de parada seja atendida. No vídeo a seguir, você aprenderá, de forma prática, como criar e utilizar funções recursivas para resolver problemas de maneira eficiente.

::embed{src="https://www.youtube.com/embed/1kBiqUCN888?si=0RuGDA-j-k4khBOp"}

## Exercícios

###### Exercício 1

Implemente uma função que retorna raízes de uma função de 2° grau. Lembre-se que a função de 2° grau é dado por **f(x) = ax² + bx + c**, onde a, b e c são as constantes do seu programa e, portanto, serão os parâmetros da sua função.

:::accordion{title="Solução"}
```c
#include <stdio.h>
#include <math.h>  // Para a função sqrt()

void encontrarRaizes(double a, double b, double c) {
    double delta = b * b - 4 * a * c;

    if (delta > 0) {
        double x1 = (-b + sqrt(delta)) / (2 * a);
        double x2 = (-b - sqrt(delta)) / (2 * a);
        
        printf("Raízes reais distintas:\n");
        printf("x1 = %f\n", x1);
        printf("x2 = %f\n", x2);
    } else if (delta == 0) {
        double x = -b / (2 * a);
        printf("Raiz real:\n");
        printf("x = %f\n", x);
    } else {
        printf("Não existem raízes reais para esses valores\n");
    }
}

int main() {
    float a, b, c;
    
    printf("Digite os coeficientes a, b e c da equação ax^2 + bx + c:\n");
    printf("a = ");
    scanf("%f", &a);
    printf("b = ");
    scanf("%f", &b);
    printf("c = ");
    scanf("%f", &c);
    
    if (a == 0) {
        printf("O coeficiente 'a' deve ser diferente de zero para que a equação seja quadrática.\n");
    } else {
        encontrarRaizes(a, b, c);
    }
    
    return 0;
}
```
:::

###### Exercício 2

Implemente uma **função recursiva** que retorna o n-ésimo número da sequência de fibonacci.

:::accordion{title="Solução"}
```c
#include <stdio.h>

int fib(int n) {
    if (n <= 1)
        return n
    return fib(n - 2) + fib(n - 1)
}

int main() {
    int n, resultado;

    printf("Digite o valor para n: ");
    scanf("%d", &n);

    resultado = fib(n);
    printf("O %d° número é %d", n, resultado);
}
```
:::
