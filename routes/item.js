const express = require('express');
const router = express.Router();

const itemsController = require('../controllers/itemsController');
const { catchErrors } = require('./errorhandlers');

router.get('/:limit?',catchErrors(itemsController.listItems))
router.post('/',catchErrors(itemsController.addItem))
router.delete('/:id',catchErrors(itemsController.deleteItem))

module.exports = router;