const user = {
  description: "Return a Single User",
  resolve: async (_parent, args, { models }) => {
    const singleUser = await models.findOne({ _id: args.userId });
    return singleUser;
  },
};

module.exports = user;
