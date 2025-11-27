const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

app.get('/set-cookie', (req,res) => {
    res.cookie('usuario', 'Antonio', { maxAge: 60000 });
    res.send('cookie definido com sucesso!');
});

app.get('/get-cookie', (req, res) => {
    res.send(`usuário: ${req.cookies.usuario}`);
});
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));