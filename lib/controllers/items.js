const { Router } = require('express');
const Item = require('../models/Item');
const authenticate = require('../middleware/authenticate');

module.exports = Router()
  .post('/', authenticate, async (req, res, next) => {
    try {
      const item = await Item
        .insert({ ...req.body, user_id: req.user_id });
      res.json(item);
    } catch (e) {
      next(e);
    }
  });
