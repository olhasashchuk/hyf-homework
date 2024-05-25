const products = getAvailableProducts();
console.log(products);

const listOfProducts = document.querySelector('.products')

function renderProducts(products) {
   for (let i = 0; i < products.length; i++) {
      const item = document.createElement('li'); 
      
      const titleProduct = document.createElement('h3');
      item.appendChild(titleProduct);
      titleProduct.innerHTML = `Title: ${products[i].name}`;

      const priceProduct = document.createElement('p');
      item.appendChild(priceProduct);
      priceProduct.innerHTML = `Price: ${products[i].price}`;

      const ratingProduct = document.createElement('p');
      item.appendChild(ratingProduct);
      ratingProduct.innerHTML = `Price: ${products[i].rating}`;

      listOfProducts.appendChild(item)
   }
}

renderProducts(products)
