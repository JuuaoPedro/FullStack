const express = require("express");
const router = express.Router();

const Livro = require('../controllers/livro');

router.get('/', Livro.teste);
router.post('/livro/criar', Livro.criar);
router.get('/livro/listar', Livro.listar);
router.get('/livro/listar/:nome', Livro.listar);
router.put('/livro/alterar', Livro.alterar);
router.delete('/livro/excluir/:nome', Livro.excluir);

module.exports = router