const Item = require('../models/Item');

module.exports = async (req, res, next) => {
  try {
    const item = await Item.getById(req.params.id);
    if (item && (req.user.email === 'admin' || req.user.id !== item.user_id) {
      next();
    } else {
      throw new Error('Access Denied');
    }
  } catch (e) {
    e.status = 403;
    next(e);
  }
};
