const mainControllers = {
  home: (req, res) => res.send(`Route for home view from controller`),
  contact: (req, res) => res.send(`Route for contact view from controller`),
  about: (req, res) => res.send(`Route for about view from controller`),
  faqs: (req, res) => res.send(`Route for faqs view from controller`),
};

export default mainControllers;
