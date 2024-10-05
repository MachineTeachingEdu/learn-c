---
title: 05.02. switch-case
description: Neste capítulo, você aprenderá sobre a estrutura de seleção switch-case, que permite decisões baseadas em múltiplas condições.
---
# 07. Estruturas de Seleção (ou decisão)

Após entender os operadores lógicos e relacionais, é hora de explorar as estruturas de seleção. Essas estruturas permitem criar ramificações em seu programa, permitindo que ele tome decisões com base em condições específicas. Com as estruturas de seleção, você pode definir caminhos distintos de execução, ajustando o comportamento do seu programa conforme as condições definidas.

::embed{src="https://www.youtube.com/embed/MGUpDTEc3SM?si=RCd8UPx12BJfzoc2"}

## Exercícios

###### Exercício 1

Leia o número do mês do ano (1 a 12) e mostre o nome do mês por extenso. Se o número for
inválido, imprima "Mês inválido".

:::accordion{title="Solução"}
```c
#include <stdio.h>

int main() {
    int mesDoAno;
    printf("Digite o número do mês do ano (1 até 12): ");
    scanf("%d", &mesDoAno);

    printf("O mês do ano é: ");
    
    switch (mesDoAno) {
        case 1:
            printf("Janeiro.\n");
            break;
        case 2:
            printf("Fevereiro.\n");
            break;
        case 3:
            printf("Março.\n");
            break;
        case 4:
            printf("Abril.\n");
            break;
        case 5:
            printf("Maio.\n");
            break;
        case 6:
            printf("Junho.\n");
            break;
        case 7:
            printf("Julho.\n");
            break;
        case 8:
            printf("Agosto.\n");
            break;
        case 9:
            printf("Setembro.\n");
            break;
        case 10:
            printf("Outubro.\n");
            break;
        case 11:
            printf("Novembro.\n");
            break;
        case 12:
            printf("Dezembro.\n");
            break;
        default:
            printf("Mês inválido.\n");
            break;
    }
    return 0;
}
```
:::