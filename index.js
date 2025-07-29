const express = require('express');
const app = express();
const port = 3000;

// Rota 1: Filmes sobre desigualdade de gênero
app.get('/filmes/desigualdade-genero', (req, res) => {
  const filmes = [
    { titulo: "As Sufragistas", autor: "Abi Morgan" },
    { titulo: "Que Horas Ela Volta?", autor: "Anna Muylaert" },
    { titulo: "Barbie", autor: "Noah Baumbach" }
  ];
  res.json(filmes);
});

// Rota 2: Artigos sobre subvalorização do trabalho feminino
app.get('/artigos/subvalorizacao', (req, res) => {
  const artigos = [
    {
      titulo: "Ocupações 'femininas' são desvalorizadas no Brasil",
      autor: "Daniela Verzola Vaz e Yasmin Geronimo da Silva",
      link: "https://humanas.blog.scielo.org"
    },
    {
      titulo: "A Desvalorização da Mulher no Mercado de Trabalho",
      autor: "André Marcelo Lima Pereira, Leonice Domingos dos Santos Cintra Lima",
      link: "https://revista.facfama.edu.br/"
    },
    {
      titulo: "Mulheres no mercado de trabalho: desafios e dificuldades",
      autor: "DIEESE",
      link: "https://www.dieese.org.br/"
    }
  ];
  res.json(artigos);
});

// Rota 3: Leis e políticas públicas sobre igualdade no trabalho
app.get('/leis/igualdade-trabalho', (req, res) => {
  const leis = [
    {
      nome: "CLT - Art. 373-A",
      descricao: "Proíbe discriminação salarial e critérios de admissão entre homens e mulheres."
    },
    {
      nome: "Constituição Federal - Art. 5º e 7º",
      descricao: "Garante igualdade de direitos e proíbe diferença salarial por motivo de sexo."
    },
    {
      nome: "Plano Nacional de Políticas para as Mulheres (PNPM)",
      descricao: "Política pública que promove ações de combate à desigualdade de gênero, incluindo incentivo à autonomia econômica feminina."
    }
  ];
  res.json(leis);
});

app.listen(port, () => {
  console.log(`🚀 API 'Desigualdade da Mulher no Trabalho' rodando em http://localhost:${port}`);
});