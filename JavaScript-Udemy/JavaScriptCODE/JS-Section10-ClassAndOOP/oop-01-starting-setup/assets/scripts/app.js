const productList = {
    products :[
    {
        title : 'A soocer player',
        imageURL : 'https://cdn.pixabay.com/photo/2023/05/25/07/31/woman-8016553_1280.jpg',
        price : 2000,
        des : 'A cool girl'
    },
    {
        title : 'S soccer player',
        imageURL : 'https://cdn.pixabay.com/photo/2023/08/28/23/17/superb-fairywren-8220199_1280.jpg',
        price : 2000,
        des : 'He is good player'
    }
],
    render () {
        const renderHook = document.getElementById('app');
        const productList = document.createElement('ul');
        const singleProduct = document.createElement('li');
        productList.className = 'product-list';
        for(const prod of this.products){
            singleProduct.className = 'product-item'
            console.log(prod);
            singleProduct.innerHTML = `
                <div>
                    <img src = "${prod.imageURL}" alt = "${prod.title}">
                    <div class="product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.des}</p>
                    <button> Add to Cart </button>
                    </div>                
                </div>
            `;
        productList.append(singleProduct);
        }
        renderHook.append(productList);
    }

}

productList.render();