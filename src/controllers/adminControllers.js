const admin = (req, res) => res.render(`admin`);

const createGet = (req, res) => res.render(`create`);

const createPost = (req, res) => res.render(`create`);

const editGet = (req, res) => res.render(`edit`);

const editPost = (req, res) => res.render(`edit`);

const deleteItem = (req, res) =>
  res.render(`Route for delete item from controller`);

const adminControllers = {
  admin,
  createGet,
  createPost,
  editGet,
  editPost,
  deleteItem,
};

export default adminControllers;
