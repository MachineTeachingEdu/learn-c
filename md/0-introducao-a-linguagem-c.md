---
title: Introdução à Linguagem C
---

# Introdução à Linguagem C

::embed{src="https://www.youtube.com/embed/KJgsSFOSQv0?si=9zSReQ8YAR23VJGR"}

::embed{src="https://onlinegdb.com/KZkyzS37Q"}

A linguagem de programação C é uma das mais influentes e amplamente utilizadas no desenvolvimento de software. Criada por Dennis Ritchie nos anos 1970, C é conhecida por sua eficiência, controle de hardware e versatilidade. Neste documento, vamos explorar os conceitos básicos da linguagem C, ilustrados com código e diagramas.

## História e Importância

C foi desenvolvida inicialmente para escrever o sistema operacional Unix, e sua popularidade cresceu rapidamente devido à sua eficiência e portabilidade. Ela influenciou muitas outras linguagens modernas, incluindo C++, C#, e Java.

## Estrutura Básica de um Programa em C

Todo programa em C possui uma estrutura básica que inclui a inclusão de bibliotecas, a definição de funções e a execução de comandos. Aqui está um exemplo simples de um programa em C que imprime "Hello, World!" na tela:

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

### Explicação do Código

1. `#include <stdio.h>`: Esta linha inclui a biblioteca padrão de entrada e saída, necessária para usar a função `printf`.
2. `int main() { ... }`: Define a função principal do programa. A execução começa a partir desta função.
3. `printf("Hello, World!\n");`: Imprime "Hello, World!" na tela.
4. `return 0;`: Indica que o programa terminou com sucesso.

## Compilação e Execução

Para compilar e executar um programa em C, você precisa de um compilador. O GCC (GNU Compiler Collection) é um dos mais populares. Aqui está como você pode compilar e executar o programa acima:

```c
gcc hello.c -o hello
./hello
```

## Variáveis e Tipos de Dados

C suporta vários tipos de dados, incluindo inteiros (int), caracteres (char), ponto flutuante (float e double), e mais. Aqui está um exemplo de uso de variáveis em C:

<iframe
  src="https://codepen.io/team/codepen/embed/preview/PNaGbb"
  style="width:100%; height:300px;"
></iframe>

```c
#include <stdio.h>

int main() {
    int idade = 25;
    float altura = 1.75;
    char inicial = 'A';

    printf("Idade: %d\n", idade);
    printf("Altura: %.2f\n", altura);
    printf("Inicial: %c\n", inicial);

    return 0;
}
```

### Explicação do Código

1. **int idade = 25;**: Declara uma variável inteira e atribui o valor 25 a ela.
2. **float altura = 1.75;**: Declara uma variável de ponto flutuante e atribui o valor 1.75.
3. **char inicial = 'A';**: Declara uma variável de caractere e atribui a letra 'A'.

## Conclusão

A linguagem C é fundamental para a programação moderna, oferecendo controle preciso sobre hardware e desempenho eficiente. Aprender C fornece uma base sólida para entender conceitos mais avançados e outras linguagens de programação. Pratique escrevendo e compilando seus próprios programas para solidificar seu entendimento.
