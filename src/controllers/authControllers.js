const title = "Funko";

/* export class AuthControllers {
  constructor() {
    this.services = new UserServices()
  }
} */

const login = (req, res) => res.render(`login`, { title: "Funko | Login " });

const loginPost = (req, res) =>
  res.render(`index`, { title: "Funko | Login " });

const register = (req, res) =>
  res.render(`register`, { title: "Funko | Register " });

const registerPost = (req, res) =>
  res.render(`register`, { title: "Funko | Register " });

const logout = (req, res) => res.render(`index`, { title: "Funko | Logout " });

const authControllers = {
  login,
  loginPost,
  register,
  registerPost,
  logout,
};

export default authControllers;
