const authControllers = {
  login: (req, res) => res.send(`Route for login view from controller`),
  loginPost: (req, res) => res.send(`Route for post login view`),
  register: (req, res) => res.send(`Route for register view`),
  registerPost: (req, res) => res.send(`Route for post register view`),
};

export default authControllers;
