const users = {
  description: "Display users on platform",

  resolve: async (_parent, _args, { models }) => {
    const allUsers = await models.User.find();
    return allUsers;
  },
};

module.exports = users;
