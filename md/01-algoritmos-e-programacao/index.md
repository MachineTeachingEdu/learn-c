---
title: 01. Algoritmos e Programação
description: Neste capítulo, você aprenderá sobre algoritmos e desenvolverá seu primeiro algoritmo na prática.
---
# 01. Algoritmos e Programação

Algoritmo é um dos conceitos mais importantes que existem. É ele que diz exatamente o que o seu programa deve fazer para realizar determinada tarefa. Resumidamente, um algoritmo é uma sequência de passos que devem ser realizados para que uma tarefa seja concluída.

No entanto, escrever um algoritmo não é uma tarefa trivial. Para isso, é preciso pensar em passos especifícos que nem sempre pensamos no nosso dia a dia.

O vídeo abaixo, evidencia por que instruções com pouca clareza podem dificultar a realização de determinada tarefa.

::embed{src="https://www.youtube.com/embed/mhGZRTbUUo8?si=5kavCMgzM32KYZ5A"}

## Criando seu primeiro algoritmo

Agora que você aprendeu o que é um algoritmo e a sua importância, você irá desenvolver o seu primeiro algoritmo utilizando linguagem simples (pseudocódigo).

::embed{src="https://www.youtube.com/embed/M2Af7gkbbro?si=NeiK_AqE1FS7hPZ0"}

## Exercício

Crie um algoritmo que converta uma temperatura de Celsius para Fahrenheit. Lembre-se que algoritmos devem ser bem descritos. Não é necessário utilizar uma linguagem específica, porém é importante ser bem estruturada. Caso seja necessário, reassista o vídeo para melhor compreensão.

:::accordion{title="Solução"}
**OBS:** Lembre-se que a solução abaixo não precisa ser igual ao que você fez, porém deve seguir a mesma lógica, portanto, leia a solução e análise de forma crítica se o seu algoritmo encontra-se correto.
```js
Início
    Escreva "Digite a temperatura em Celsius:"
    Leia temperaturaCelsius

    temperaturaMultiplicacao = temperaturaCelsius MULTIPLICADO POR 9
    temperaturaDivisao = temperaturaMultiplicacao DIVIDIDO POR 5
    temperaturaSoma = temperaturaDivisao SOMADO COM 32

    Escreva "A temperatura em Fahrenheit é: ", temperaturaSoma
Fim
```
:::