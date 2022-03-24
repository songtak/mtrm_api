// import User from 'models/User.js';
const user = require("user");

const resolvers = {
  Query: {
    async allUser() {
      return await user.find();
    },
  },
};

module.exports = resolvers;
