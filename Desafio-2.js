/*                                        DESAFIO NUMERO 2 (MANEJO DE ARCHIVOS)
---Se creará una instancia de la clase “ProductManager”

---Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

---Se llamará al método “addProduct” con los campos:
-title: “producto prueba”
-description:”Este es un producto prueba”
-price:200,
-thumbnail:”Sin imagen”
-code:”abc123”,
-stock:25

--El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE

--Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
--Se llamará al método “getProductById” y se corroborará que devuelva el producto con el id especificado, en caso de no existir, debe arrojar un error.
--Se llamará al método “updateProduct” y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.
--Se llamará al método “deleteProduct”, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.
*/


class ProductManager {
    constructor() {
      this.products = [];
    }
  
    generateId() {
      return Date.now().toString() + Math.floor(Math.random() * 1000);
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      const product = {
        id: this.generateId(),
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock
      }
      this.products.push(product);
      return product;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    }
  
    updateProduct(id, updates) {
      const productIndex = this.products.findIndex(product => product.id === id);
      if (productIndex === -1) {
        throw new Error('Product not found');
      }
      const product = this.products[productIndex];
      this.products[productIndex] = {
        ...product,
        ...updates
      }
      return this.products[productIndex];
    }
  
    deleteProduct(id) {
      const productIndex = this.products.findIndex(product => product.id === id);
      if (productIndex === -1) {
        throw new Error('Product not found');
      }
      const product = this.products[productIndex];
      this.products.splice(productIndex, 1);
      return product;
    }
  }
  
  // Crear instancia de ProductManager
  const manager = new ProductManager();
  
  // Verificar que getProducts devuelva un arreglo vacío
  console.log(manager.getProducts()); // []
  
  // Agregar un producto a la lista
  const product = manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
  console.log(product);
  
  // Verificar que getProducts devuelva el producto recién agregado
  console.log(manager.getProducts());
  