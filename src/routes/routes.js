const router = require('express').Router()

const ProductController = require('../controllers/products')

// Verbos HTTP - 4 Tipos

// GET: obter dados
// Post: enviar (cliente) ou receber dados (servidor)
// PUT: atualizar dados
// DELETE: remover dados

router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.remove)

module.exports = router
