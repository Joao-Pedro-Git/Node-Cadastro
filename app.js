const express = require('express'); // Biblioteca Express
const app = express();
const mysql = require('mysql');

const bodyparser = require('body-parser');
const path = require('path');

app.listen('3000', () => {
    console.log('Servidor Rodando');
});

// Body Parser
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyparser.json());  
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Conexao com o Banco Mysql
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'node',

})
db.connect((err)=>{
    if(err){console.log('n foi possivel iniciar o banco!');}
});


app.get('/', (req, res) => { 
    let query = db.query('SELECT * FROM clientes', (err,results)=>{
        res.render('index', {lista:results});
    });
    
});

app.get('/registrar', (req, res) => {
    res.render('cadastro', {});
});

app.post('/registrar', (req, res) => {

    console.log('Cadastrado com Sucesso!')

    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha; 

    // Verificação rápida dos valores recebidos
    if (!nome || !email || !senha) {
        return res.send('Erro: Todos os campos devem ser preenchidos');
    }

    const sql = 'INSERT INTO clientes (nome, email, senha) VALUES (?, ?, ?)';
    
    db.query(sql, [nome, email, senha], (err, result) => {

        if (err) {
            console.error('Erro ao inserir no banco:', err);
            return res.send('Erro ao cadastrar: ' + err.message);
        }
        
        res.redirect('/'); // Redirecionar para a página inicial ou outra página
    });
});
