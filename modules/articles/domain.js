const bcrypt = require('bcryptjs');
const wrapper = require('../../helpers/utils/wrapper');
const jwt = require('jsonwebtoken');
const config = require('../../configs/global_config');
const mongodb = require('../../helpers/database/query');
const articlesCollection = config.get('/mongoDbCollections').articles;

const getAllArticles = async (payload) => {
  // const query = await mongodb.findMany({}, articlesCollection);
  
  const response = [
    {
        "title": "Ronaldinho Masuk RANS FC",
        "slug": "ronaldinho-masuk-rans-fc",
        "imageUrl": "google.com",
        "description": "description",
        "totalClick": 3
    },
    {
        "title": "Ronaldinho Masuk RANS FC",
        "slug": "ronaldinho-masuk-rans-fc",
        "imageUrl": "google.com",
        "description": "description",
        "totalClick": 2
    },
    {
        "title": "Ronaldinho Masuk RANS FC",
        "slug": "ronaldinho-masuk-rans-fc",
        "imageUrl": "google.com",
        "description": "description",
        "totalClick": 2
    }
  ];
  return wrapper.data(response, 'success get all articles', 200);
};

module.exports = {
  getAllArticles
};