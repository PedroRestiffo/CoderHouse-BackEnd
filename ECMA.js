/*

--Se creará una instancia de la clase “ProductManager”

--Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

-- Se llamará al método “addProduct” con los campos:
title: “producto prueba”
description:”Este es un producto prueba”
price:200,
thumbnail:”Sin imagen”
code:”abc123”,
stock:25

---El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE

---Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

---Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.

---Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

*/
/*
let currentId = 0;

class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    let id = ++currentId;
    while (this.products.some((product) => product.id === id)) {
      id = ++currentId;
    }

    const existingProduct = this.products.find((product) => product.code === code);

    if (existingProduct) {
      throw new Error('El código ya ha sido utilizado previamente');
    }

    const product = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(product);

    return product;
  }
  getProductById(id) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new Error('El producto no se encontró');
    }

    return product;
  }
}


const productManager = new ProductManager();

// Se llama al método "getProducts" y se espera que devuelva un arreglo vacío
console.log(productManager.getProducts()); // []

// Se llama al método "addProduct" con los campos proporcionados y se espera que el producto se agregue satisfactoriamente
console.log(productManager.addProduct('producto prueba', 'Este es un'))
*/

class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct({title, description, price, thumbnail, code, stock}) {
      if (this.products.some(product => product.code === code)) {
        throw new Error("El código de producto ya existe.");
      }
  
      const id = this.generateProductId();
      const newProduct = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
      this.products.push(newProduct);
      return newProduct;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        throw new Error("Producto no encontrado.");
      }
      return product;
    }
  
    generateProductId() {
      const existingIds = this.products.map(product => product.id);
      let newId;
      do {
        newId = Math.floor(Math.random() * 1000) + 1;
      } while (existingIds.includes(newId));
      return newId;
    }
    
  }

  
  const productManager = new ProductManager();
console.log(productManager.getProducts()); // []

const newProduct = {
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25
};
const addedProduct = productManager.addProduct(newProduct);
console.log(addedProduct); // {id: 1, title: "producto prueba", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: "abc123", stock: 25}
console.log(productManager.getProducts()); // [{id: 1, title: "producto prueba", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: "abc123", stock: 25}]

try {
  productManager.addProduct(newProduct);
} catch (error) {
  console.log(error.message); // "El código de producto ya existe."
}

const foundProduct = productManager.getProductById(addedProduct.id);
console.log(foundProduct); // {id: 1, title: "producto prueba", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: "abc123", stock: 25}

try {
  productManager.getProductById(2);
} catch (error) {
  console.log(error.message); // "Producto no encontrado."
}

  