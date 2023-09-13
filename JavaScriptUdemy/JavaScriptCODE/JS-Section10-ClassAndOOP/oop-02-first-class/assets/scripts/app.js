class Product{

  // title = 'DEFAULT';
  // imageURL;
  // description;
  // price;

  constructor (title, image, desc, price) {
    this.title = title;
    this.imageURL = image;
    this.description = desc;
    this.price = price;
  }

}

class ProductItem{

  constructor(product){
    this.product = product;
  }

}

class ProductList{

   products = [
    new Product(
      'A Pillow',
      'https://images.unsplash.com/photo-1687360441296-fddbccf0acb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://images.unsplash.com/photo-1694396641992-193eb434d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      'A carpet which you might like - or not.',
      89.99
    )
  ]

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}" >
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}


const productList = new ProductList();
productList.render();