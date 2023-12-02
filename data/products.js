const products = [
  {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",

    img_front: "/assets/img/pokemon/pidgeotto-1.webp",

    img_back: "/assets/img/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 2,
    licence_name: "Star Wars",
    category_name: "Figuras coleccionables",
    product_name: "STORMTROOPER LIGHTSABER",
    product_description: "Figura coleccionable pokemon",
    product_price: 2000.99,
    dues: 10,
    product_sku: "PKM001001",

    img_front: "/assets/img/star-wars/trooper-1.webp",

    img_back: "/assets/img/star-wars/trooper-box.webp",
  },
  {
    product_id: 3,
    licence_name: "Harry Potter",
    category_name: "Figuras coleccionables",
    product_name: "LUNA LOVEGOOD LION MASK",
    product_description: "Figura coleccionable pokemon",
    product_price: 1500.99,
    dues: 10,
    product_sku: "PKM001001",

    img_front: "/assets/img/harry-potter/luna-1.webp",

    img_back: "/assets/img/harry-potter/luna-box.webp",
  },
  {
    product_id: 4,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",

    img_front: "/assets/img/pokemon/pidgeotto-1.webp",

    img_back: "/assets/img/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 5,
    licence_name: "Star Wars",
    category_name: "Figuras coleccionables",
    product_name: "STORMTROOPER LIGHTSABER",
    product_description: "Figura coleccionable pokemon",
    product_price: 2000.99,
    dues: 10,
    product_sku: "PKM001001",

    img_front: "/assets/img/star-wars/trooper-1.webp",

    img_back: "/assets/img/star-wars/trooper-box.webp",
  },
  {
    product_id: 6,
    licence_name: "Harry Potter",
    category_name: "Figuras coleccionables",
    product_name: "LUNA LOVEGOOD LION MASK",
    product_description: "Figura coleccionable pokemon",
    product_price: 1500.99,
    dues: 10,
    product_sku: "PKM001001",

    img_front: "/assets/img/harry-potter/luna-1.webp",

    img_back: "/assets/img/harry-potter/luna-box.webp",
  },
  {
    product_id: 7,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",

    img_front: "/assets/img/pokemon/pidgeotto-1.webp",

    img_back: "/assets/img/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 8,
    licence_name: "Star Wars",
    category_name: "Figuras coleccionables",
    product_name: "STORMTROOPER LIGHTSABER",
    product_description: "Figura coleccionable pokemon",
    product_price: 2000.99,
    dues: 10,
    product_sku: "PKM001001",

    img_front: "/assets/img/star-wars/trooper-1.webp",

    img_back: "/assets/img/star-wars/trooper-box.webp",
  },
  {
    product_id: 9,
    licence_name: "Harry Potter",
    category_name: "Figuras coleccionables",
    product_name: "LUNA LOVEGOOD LION MASK",
    product_description: "Figura coleccionable pokemon",
    product_price: 1500.99,
    dues: 10,
    product_sku: "PKM001001",

    img_front: "/assets/img/harry-potter/luna-1.webp",

    img_back: "/assets/img/harry-potter/luna-box.webp",
  },
];

const addProduct = (product) => {
  products.push(product);
};

const productsData = {
  products,
  addProduct,
};

export default productsData;