const authControllers = {
  login: (req, res) => res.render(`login`),
  loginPost: (req, res) => res.render(`Route for post login view`),
  register: (req, res) => res.render(`register`),
  registerPost: (req, res) => res.render(`Route for post register view`),
  logout: (req, res) => res.render(`index`),
};

export default authControllers;
