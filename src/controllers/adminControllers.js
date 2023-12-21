import { ProductsServices } from "../services/productsServices.js";
import { join } from "path";

const title = "FunkoShop";

export class AdminControllers {
  constructor() {
    this.services = new ProductsServices();
  }

  admin = async (req, res) => {
    try {
      // Obtén todos los productos desde el servicio
      const products = await this.services.getProducts();
      res.render(`admin`, { title: "Funko | Admin", products });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).send("Internal Server Error");
    }
  };

  createGet = (req, res) => res.render(`create`, { title: "Funko | Create " });

  createPost = async (req, res) => {
    try {
      const {
        product_name,
        product_description,
        product_price,
        product_stock,
        product_discount,
        product_sku,
        product_dues,
        category_id,
        licence_id,
      } = req.body;

      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ error: "Missing image files" });
      }

      const img_front = req.files.img_front[0].filename;
      const img_back = req.files.img_back[0].filename;

      const licenceName = this.services.getLicenceNameById(licence_id);

      const imagePath_front = join(
        "/assets/img",
        licenceName.toLowerCase(),
        img_front
      );
      const imagePath_back = join(
        "/assets/img",
        licenceName.toLowerCase(),
        img_back
      );

      const productData = {
        product_name,
        product_description,
        product_price,
        product_stock,
        product_discount,
        product_sku,
        product_dues,
        img_front: imagePath_front,
        img_back: imagePath_back,
        category_id,
        licence_id,
      };

      const newProduct = await this.services.createProduct(productData);
      res.status(201).render("create", {
        title: "Funko | Create",
        newProduct,
      });
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).send("Internal Server Error");
    }
  };

  // ... (otros métodos del controlador)

  updProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await this.services.getProductById(productId);

      if (!product) {
        res.status(404).send("Product not found");
        return;
      }

      res.render("edit", {
        title: "Funko | Edit",
        product,
      });
    } catch (error) {
      console.error("Error fetching product for edit:", error);
      res.status(500).send("Internal Server Error");
    }
  };
  updProductPut = async (req, res) => {
    const {
      product_name,
      product_description,
      product_price,
      product_stock,
      product_discount,
      product_sku,
      product_dues,
      category_id,
      licence_id,
    } = req.body;

    const updatedProduct = await this.services.updProduct(req.params.id, {
      product_name,
      product_description,
      product_price,
      product_stock,
      product_discount,
      product_sku,
      product_dues,
      category_id,
      licence_id,
    });
    const data = await this.services.updProduct(req.params.id, req.body);

    res.send(data ? "si se modificó" : "no se modificó");
  };
  /* updProductPut = async (req, res) => {
    try {
      const productId = req.params.id;
      const {
        product_name,
        product_description,
        product_price,
        product_stock,
        product_discount,
        product_sku,
        product_dues,
        category_id,
        licence_id,
      } = req.body;

      // Asegúrate de que el producto exista antes de intentar actualizar
      const existingProduct = await this.services.getProductById(productId);

      if (!existingProduct) {
        res.status(404).send("Product not found");
        return;
      }

      // Realiza la actualización del producto
      const updatedProduct = await this.services.updProduct(productId, {
        product_name,
        product_description,
        product_price,
        product_stock,
        product_discount,
        product_sku,
        product_dues,
        category_id,
        licence_id,
      });

      res.status(200).render("edit", {
        title: "Funko | Edit",
        product: updatedProduct,
      });
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).send("Internal Server Error");
    }
  }; */

  delProduct = async (req, res) => {
    try {
      const productId = req.params.id;

      // Llama al servicio para eliminar el producto
      await this.services.delProduct(productId);
      const products = await this.services.getProducts();
      // Redirige a la página de administrador después de la eliminación
      res.render("admin", { title, products });
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).send("Internal Server Error");
    }
  };
}

/* const title = "Funko";

const admin = (req, res) => res.render(`admin`, { title: "Funko | Admin " });

const createGet = (req, res) =>
  res.render(`create`, { title: "Funko | Create " });

const createPost = (req, res) =>
  res.render(`create`, { title: "Funko | Create " });

const editGet = (req, res) => res.render(`edit`, { title: "Funko | Edit " });

const editPost = (req, res) => res.render(`edit`, { title: "Funko | Edit " });

const deleteItem = (req, res) =>
  res.render(`Route for delete item from controller`, {
    title: "Funko | Delete ",
  });

const adminControllers = {
  admin,
  createGet,
  createPost,
  editGet,
  editPost,
  deleteItem,
};

export default adminControllers; */
