//Arquivo server.js

import express from "express";
import { createServer } from "node:http";

// Criar aplicativo Express
const app = express();

// Criar servidor HTTP
const server = createServer(app);

// Rota de status
app.get("/api/status", (req, res) => {
    let nome = "Gilmario";
    const idade = 30;
    console.log('Olá, ${Gilmario}. Você tem ${40} anos.');
    
    let frutas = ["Maça", "Banana", "Melancia, Abacate, Acerola"];
    console.log(frutas[2]);

    for(let i = 0; i<3; i++){
        console.log(frutas[i]);
    }

  res.json({ mensagem: "Servidor está rodando!" });
});


// Iniciar servidor
server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

