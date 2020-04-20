const express = require('express');
const asyncHandler = require('express-async-handler');
const multer = require('multer');
const { all, one } = require('../data/pet-data');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });
const cloudinary = require('cloudinary').v2;

/* GET users listing. */
router.get('/', asyncHandler(async function(_, res) {
  const data = await all();
  res.json(data);
}));

router.get('/:id', asyncHandler(async function(req, res) {
  const data = await one(req.params.id);
  res.json(data);
}));

router.patch('/:id', upload.single('image'), asyncHandler(async (req, res) => {
  const pet = await one(req.params.id);
  pet.petImageUrl = `/${req.file.filename}`;
  await pet.save();
  res.json(pet);
}));

module.exports = router;
