const express = require('express');
const asyncHandler = require('express-async-handler');
const { all, one } = require('../data/owner-data');
const router = express.Router();

router.get('/', asyncHandler(async function(_, res) {
  const owners = await all();
  res.render('owners/index', { owners });
}));

router.get('/:id', asyncHandler(async function(req, res) {
  const owner = await one(req.params.id);
  res.render('owners/detail', { owner })
}));

module.exports = router;
