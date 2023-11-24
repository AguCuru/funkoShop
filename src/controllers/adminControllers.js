const adminControllers = {
  admin: (req, res) => res.send(`Route for admin view from controller`),
  createGet: (req, res) =>
    res.send(`Route for get create view from controller`),
  createPost: (req, res) =>
    res.send(`Route for post create view from controller`),
  editGet: (req, res) => res.send(`Route for edit item from controller`),
  editPost: (req, res) => res.send(`Route for send edit item from controller`),
  delete: (req, res) => res.send(`Route for delete item from controller`),
};

export default adminControllers;
