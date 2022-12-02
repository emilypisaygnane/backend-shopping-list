const { Router } = require('express');
const Item = require('../models/Item');
const authenticate = require('../middleware/authenticate');

module.exports = Router()
  .post('/', authenticate, async (req, res, next) => {
    try {
      const item = await Item
        .insert({ 
          description: req.body.description,
          qty: req.body.qty,
          user_id: req.user.id,
        });
      res.json(item);
    } catch (e) {
      next(e);
    }
  })

  .get('/', authenticate, async (req, res, next) => {
    try {
      const items = await Item.getAll(req.user.id);
      res.json(items);
    } catch (e) {
      next(e);
    }
  });
