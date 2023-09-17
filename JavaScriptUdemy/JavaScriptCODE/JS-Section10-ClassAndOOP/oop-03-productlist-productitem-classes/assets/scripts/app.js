class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement('li');
    // li를 만든다.
    prodEl.className = 'product-item';
    // product-item class를 준다.
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
      'A soft pillow!',
      19.99
    ),
    // new Product로 객체를 생성했다.
    // constructor의 this는 빈 객체를 참조한다.
    // constructor로 들어온 매개변수들은 새로운 객체의 값이 된다.
    // this.title => 키/ title은 값
    new Product(
      'A Carpet',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      'A carpet which you might like - or not.',
      89.99
    )
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById('app'); // div app을 가져온다.
    const prodList = document.createElement('ul'); // ul를 생성한다.
    prodList.className = 'product-list'; // 해당 ul에 class를 product-list로 만든다.
    for (const prod of this.products) { 
      // this.products는 productList의 products를 참조한다.
      // 이 prodcuts는 배열임으로 for-of를 돌 수 있다.
      // prodcucts로 가보자.
      const productItem = new ProductItem(prod);
      console.log(prod);
      console.log("prod0-")
      console.log(productItem);
      // 배열의 하나의 값 씩 prod에 생성자 함수를 통해 객체가 만들어진다.
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
