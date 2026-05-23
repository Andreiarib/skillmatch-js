# skillmatch-js

Simulador de Compatibilidade com Vaga Front-End Júnior

## Sobre o projeto

O SkillMatch JS é um simulador simples de compatibilidade entre um candidato e vagas de front-end júnior.

O projeto compara as habilidades do candidato com os requisitos das vagas e mostra:

- percentual de compatibilidade;
- habilidades encontradas;
- habilidades faltantes;
- vaga mais compatível;
- recomendação de estudo.

## Objetivo

Praticar os principais conceitos do Módulo 01:

- lógica de programação;
- JavaScript;
- tipos de dados;
- condicionais;
- operadores;
- escopo;
- laços de repetição;
- funções;
- arrow functions;
- arrays;
- métodos de array;
- objetos;
- classes;
- herança;
- this;
- callbacks;
- closures;
- Promises;
- async/await;
- GitHub;
- Kanban.

## Como executar

Este projeto não precisa de Node.js.

Você pode executar de uma destas formas:

1. Abrir o navegador Google Chrome.
2. Pressionar F12 ou Ctrl + Shift + J.
3. Abrir a aba Console.
4. Copiar o código do arquivo `skillmatch.js`.
5. Colar no console.
6. Pressionar Enter.

## Estrutura do projeto

```txt
skillmatch-js/
├── skillmatch.js
└── README.md
```

## Tipos de variáveis utilizadas

O projeto foi utiliza const e let seguindo boas práticas modernas do JavaScript, pois o var é uma forma mais antiga de declarar variáveis, é menos utilizado porque pode causar problemas no código, ou seja, comportamentos inesperados.

## Métodos de array utilizados

O projeto utiliza alguns métodos de array para manipular os dados das vagas:

filter - para filtrar habilidades atendidas e não atendidas;
map - para criar um novo array de compatibilidades;
reduce- para encontrar a vaga mais compatível.

## Programação Orientada a Objetos

O projeto utiliza conceitos de POO através das classes:

- Vaga
- Vaga FrontEnd

Também foi aplicada herança utilizando:
javaScript
class VagaFrontEnd extends Vaga

## Melhorias futuras

Algumas melhorias que podem ser implementadas futuramente:

Interface web;
Organizar melhor as funções.
