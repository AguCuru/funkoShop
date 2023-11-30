const adminControllers = {
  admin: (req, res) => res.render(`admin`),
  createGet: (req, res) => res.render(`create`),
  createPost: (req, res) =>
    res.render(`Route for post create view from controller`),
  editGet: (req, res) => res.render(`edit`),
  editPost: (req, res) =>
    res.render(`Route for send edit item from controller`),
  delete: (req, res) => res.render(`Route for delete item from controller`),
};

export default adminControllers;
