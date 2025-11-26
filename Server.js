//Arquivo server.js

import express from "express";
import { createServer } from "node:http";


// Criar aplicativo Express
const app = express();

// Criar servidor HTTP
const server = createServer(app);

// Rota de status
app.get("/api/status", (req, res) => {


  res.json({ mensagem: "Servidor está rodando!" });
});
/*
for(let i = 0; i <= 10; i++){
  console.log(i)
}
*/
const produtos = [
  { nome: 'Notebook', preco: 2500 },
  { nome: 'Mouse', preco: 50 },
  { nome: 'Teclado', preco: 150 }
];

// forEach() para exibir no console o nome e preço de cada produto.
produtos.forEach(produto => {
  console.log(`Produto: ${produto.nome} - Preço: R$ ${produto.preco}`);

//Map para criar um novo array contendo apenas os nomes dos produtos.
const nomes = produtos.map((produto) => produto.nome);
console.log(nomes);

//Map para criar um novo array com os preços acrescidos de 10%.
const precosComAumento = produtos.map((produto) => produto.preco * 1.10);
console.log(precosComAumento);



});




// Iniciar servidor
server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});


