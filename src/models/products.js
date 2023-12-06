import conn from "../config/conn.js";

const getProducts = async () => {
  try {
    const [rows] = await conn.query("SELECT * FROM productos;");
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const products = {
  getProducts,
};

export default products;
