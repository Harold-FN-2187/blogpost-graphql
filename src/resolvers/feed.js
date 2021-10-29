const feed = {
  description: "Return all blogspots",
  resolve: async (_parent, _args, { models }) => {
    const blogposts = await models.BlogPost.find();
    return blogposts;
  },
};

module.exports = feed;
