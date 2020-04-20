const { Pet, PetType, Owner } = require('../models');

async function all() {
  const owners = await Owner.findAll({
    order: ['lastName'],
    include: [Pet]
  });
  return owners.map(owner => ({
    id: owner.id,
    lastName: owner.lastName,
    firstName: owner.firstName,
    numberOfPets: owner.Pets.length,
    href: `/owners/${owner.id}`
  }));
}

async function one(id) {
  return await Owner.findByPk(id, {
    include: [{ model: Pet, include: [PetType] }]
  });
}

module.exports = {
  all,
  one
};
