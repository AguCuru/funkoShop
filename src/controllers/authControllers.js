const login = (req, res) => res.render(`login`);

const loginPost = (req, res) => res.render(`index`);

const register = (req, res) => res.render(`register`);

const registerPost = (req, res) => res.render(`register`);

const logout = (req, res) => res.render(`index`);

const authControllers = {
  login,
  loginPost,
  register,
  registerPost,
  logout,
};

export default authControllers;
