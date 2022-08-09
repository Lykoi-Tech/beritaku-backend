const bcrypt = require('bcryptjs');
const wrapper = require('../../helpers/utils/wrapper');
const jwt = require('jsonwebtoken');
const config = require('../../configs/global_config');
const mongodb = require('../../helpers/database/query');
const articlesCollection = config.get('/mongoDbCollections').articles;

const getAllCategory = async (payload) => {
  // const query = await mongodb.findMany({}, articlesCollection);
  
  const response = [
    "Sea Games",
    "ASEAN",
    "Indonesia",
    "Timnas Indonesia",
    "Philipina",
    "Indonesia Menang",
    "Kominfo",
    "Blokir Game",
    "Blokir Steam",
    "Joni Kominfo"
  ];
  return wrapper.data(response, 'success get all category', 200);
};

module.exports = {
  getAllCategory
};