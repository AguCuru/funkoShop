const shopControllers = {
  shop: (req, res) => res.send(`Route for shop view from controller`),
  itemGet: (req, res) =>
    res.send(
      `Route for find a retrieve a product from the ID: ${req.params.id} from controller`
    ),
  itemPost: (req, res) =>
    res.send(`Route for add the current item to the shop cart from controller`),
  cartGet: (req, res) => res.send(`Route for cart view from controller`),
  cartPost: (req, res) =>
    res.send(`Route for got checkout page from controller`),
};

export default shopControllers;
