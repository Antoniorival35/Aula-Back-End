import express from 'express';
import session from 'express-session';

const app = express();

app.use(session({
  secret: 'segredo',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
let cont = 0;
app.get('/set-session', (req, res) => {
  req.session.usuario = 'Maria';
  cont++;
  res.send('Sessão criada!');

});

app.get('/get-session', (req, res) => {
  res.send(`
    usuário na sessão: ${req.session.usuario} ${cont}');
  `);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
