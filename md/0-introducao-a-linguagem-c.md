---
title: 02. Introdução a Linguagem C
---

# Introdução a Linguagem C

::embed{src="https://onlinegdb.com/t17805MTK"}

Olá! Bem-vindo ao curso de introdução à programação da UFRJ. 😊 Este é o material de nossa primeira aula. Além de conhecer os objetivos e o formato do curso, essa primeira semana também será uma oportunidade para conhecer seu professor e alguns dos monitores das atividades práticas.

Nós, da equipe de instrutores, também gostaríamos de conhecer um pouco mais sobre você, seus mecanismos de acesso ao material deste curso e sobre suas expectativas. Para isso, pedimos que, caso queira, preencha o pequeno formulário [“Conhecendo a turma de Computação 1”](https://forms.gle/emNUGHTF9MSsECDJ7).

Este curso de introdução à programação é oferecido para estudantes de várias áreas dentro das ciências exatas e da terra da UFRJ. A programação é uma competência cada dia mais valiosa a todas as pessoas, e é muito importante para os universitários destas áreas.

Assista ao vídeo porque aprender a programar.

::embed{src="https://www.youtube.com/embed/mHW1Hsqlp6A?si=mBpaEFy2eqyBYOaM"}

Agora, convidamos você a assistir o vídeo de apresentação deste curso:

::embed{src="https://www.youtube.com/embed/LmLlBnxs4x4"}

## Objetivos do curso

O objetivo deste curso é o desenvolvimento das competências fundamentais da programação de computadores. Para tanto, vamos aprender muitos conceitos, porém principalmente, temos que praticar bastante para nos tornarmos competentes em:

- Identificação das informações relevantes de um problema e sua respectiva representação e manipulação na programação.
- Compreensão dos aspectos sintáticos e semânticos da linguagem de programação.
- Articulação dos comandos, estruturas de dados e estruturas básicas da programação para a construção de soluções para problemas simples.
- Modelagem e implementação de código modularizado para problemas não elementares.
- Construção de código organizado, reutilizável e legível, seguindo os princípios das boas práticas de programação.

**Fique atento**: A programação é uma atividade complexa, que envolve conhecimento, prática e proficiência. É imprescindível praticar muito! Além disso, receber bons fundamentos no estágio inicial é essencial para a capacitação de um programador. Procure sempre fontes confiáveis de informação, dando preferência a material produzido por instituições consolidadas nessa área, como por exemplo universidades e centros ou organizações de formação e ensino associados ao ministério da educação ou à CAPES.

## Conceitos iniciais

Você sabe o que é um programa? Sabe a diferença entre programa e aplicativo (ou app)? Explore os links abaixo para ter um primeiro contato com definições destes conceitos, que são elementares para nosso curso. Você vai descobrir que, além dos conceitos de programa e aplicativo, outros conceitos como algoritmo e linguagem de programação vão aparecer de forma interligada. Ao fazer sua leitura do conteúdo abaixo, anote suas impressões e dúvidas, e aproveite a aula síncrona para conversar com seu professor e aprofundar seu entendimento.

### Programa, Aplicativo e Algoritmo

- [Programa de computador](https://escola.britannica.com.br/artigo/programa-de-computador/483487)
- [Software aplicativo](https://pt.wikipedia.org/wiki/Software_aplicativo)
- [Programa de computador](https://pt.wikipedia.org/wiki/Programa_de_computador)

Veja agora alguns exemplos de problemas a serem resolvidos e algoritmos para resolver esses problemas.

- **Primeiros algoritmos** - nesse vídeo falamos de dois problemas e chegamos a um algoritmo para a solução de cada um dos problemas. Ao final do segundo problema pedimos que proponha um problema similar, que se resolva da mesma maneira.

::embed{src="https://www.youtube.com/embed/1o2WbsiwdcY"}

- **Primeiros algoritmos** - mais um exemplo - nesse outro vídeo estudamos um problema menos trivial, que exige um maior esforço de busca da solução.

::embed{src="https://www.youtube.com/embed/TN9oLmvvxnA"}

### Funcionamento do computador, Linguagem de programação e Execução de programas

Para ter uma ideia melhor de como os programas são executados pelo computador, temos que ter um entendimento inicial de como o computador funciona.

Assista ao vídeo “Como funciona um computador (animação)”:

::embed{src="https://www.youtube.com/embed/RRBO9KYuN28"}

Agora, leia um pouco mais sobre o assunto e sobre como um programa de computador pode ser executado em:

- [Como funciona um programa de computador](https://woliveiras.com.br/posts/como-funciona-um-programa-de-computador/)

Entenda melhor o conceito de linguagem de programação:

- [O que é linguagem de programação?](https://universidadedatecnologia.com.br/o-que-e-linguagem-de-programacao/)
- [Linguagens de programação. O que são e para que servem?](http://www.digitaldev.com.br/linguagens-de-programacao/)

Agora você já sabe que programas são escritos em uma linguagem de programação, e que o computador, para executá-los, tem que saber como as instruções escritas na linguagem de programação são mapeadas para a sua linguagem própria, a linguagem de máquina. Duas maneiras de fazer isso são a compilação e a interpretação. Veja mais sobre elas em:

- [Interpretadores, compiladores e tradutores](http://www.inf.ufsc.br/~j.barreto/cca/arquitet/arq4.htm)
- [Qual a diferença entre código compilado e código interpretado?](https://youtu.be/fzNd_PD4_n4)

::embed{src="https://www.youtube.com/embed/fzNd_PD4_n4"}

Neste curso, adotaremos a linguagem de programação Python. Ela é considerada uma excelente linguagem para iniciantes em programação, e também é uma linguagem amplamente utilizada com propósitos comerciais, acadêmicos e de pesquisa.

Veja este artigo sobre as razões para se aprender a programar em Python:

- [Por que aprender Python pode te levar mais longe na carreira!](https://becode.com.br/porque-aprender-python/)

Conheça o site oficial da linguagem de programação Python: [https://www.python.org/](https://www.python.org/)

## Atividade

Vamos convidá-lo agora a exercitar os conhecimentos que acabamos de ver. Você vai agora fazer uma atividade respondendo algumas perguntas sobre os conceitos que acabamos de estudar. Fique atento: o importante é escrever respostas suas, próprias, que revelem o seu entendimento. É inútil copiar respostas de qualquer material. Nossa equipe já sabe esses conceitos, estamos interessados em ver como você os entendeu, para que possamos orientar nossas próximas ações educativas. Se você coloca respostas copiadas, ninguém se beneficia, nem nós, nem você mesmo. Ao contrário, você tirará grande proveito do exercício ao tentar elaborar suas próprias respostas, pois é nesse processo que você tem a oportunidade de refletir sobre o que foi estudado, articular cada parte de informação que está na sua memória e consolidar seus conhecimentos.

Então respire fundo, e responda o formulário [“Conceitos Iniciais”](https://forms.gle/B76mXNVCUAtHpR978).

## Primeiros passos na programação

Ter uma instalação local do Python é importante para as práticas deste curso! Siga as instruções a seguir para fazer o download e a instalação do Python no seu computador.

Este [link](https://www.python.org/downloads/) leva você para a página de download da versão mais recente do Python compatível com o sistema operacional da sua máquina:

Nos links abaixo estão instruções que podem te ajudar no processo de instalação. Escolha o link de acordo com o sistema operacional que você usa. As informações sobre “pip” não são importantes no momento, caso não você não as entenda, não se preocupe com isso agora:

- [Passo a passo de instalação de Python para Windows;](https://python.org.br/instalacao-windows/)
- [Passo a passo de instalação de Python para Linux;](https://python.org.br/instalacao-linux/)
- [Passo a passo de instalação de Python para Mac.](https://python.org.br/instalacao-mac/)

Caso você não tenha conseguido instalar, peça ajuda à equipe de monitores ou ao seu professor. Consulte do vídeo tutorial de instalação do Python:

::embed{src="https://www.youtube.com/embed/VGhJFcSxSvg"}

Uma vez instalado o Python, podemos abrir o programa IDLE, que vem com o Python, no seu computador. Basta usar a busca do sistema operacional, que geralmente está na barra de tarefas, na parte de baixo da tela do seu computador. Digite IDLE, e deve aparecer para você o link para abrir o programa de que estamos falando. Clique nele. Aí você está pronto para acompanhar as próximas etapas que vamos seguir para escrever seu primeiro código.

Os monitores também prepararam um vídeo mostrando como abrir e começar a usar o IDLE. Ele está disponível aqui:

::embed{src="https://www.youtube.com/embed/p0pQ0k16XXQ"}
