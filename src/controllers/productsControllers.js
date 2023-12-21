/* const getProducts = async (req, res) => {
  try {
    const data = await model.getProducts();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getProduct = async (req, res) => {
  const data = await model.getProduct(req.params.id);
  res.send(data);
};

const postProduct = async (req, res) => {
  try {
    // Aquí puedes usar express-validator para validar req.body
    const data = await model.postProduct(req.body);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const updProduct = async (req, res) => {
  const data = await model.updProduct(req.params.id, req.body);
  if (data) {
    res.status(200).send("Se modificó correctamente");
  } else {
    res.status(404).send("No se encontró el producto para modificar");
  }
};

const delProduct = async (req, res) => {
  const data = await model.delProduct(req.params.id);
  res.send(data ? "si se borró" : "no se borró");
};

const getProductByMinPrice = async (req, res) => {
  try {
    const data = await model.getProductsByMinPrice(req.params.precio);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const productsController = {
  getProductByMinPrice,
  getProducts,
  getProduct,
  postProduct,
  updProduct,
  delProduct,
};

export default productsController; */
