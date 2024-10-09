let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagItems();
  displayBagIcon();
  loadBagItemObjects();
}

function loadBagItemObjects() {
  console.log(bagItems);
  bagItemObjects = bagItems.map(itemId => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
}


function displayBagItems() {
  let bagElement = document.querySelector('.bag-item-count');
  bagElement.innerText = bagItems.length;
}


// function displayBagIcon() {
//   let bagIcon = document.querySelector('.bag-item-count');
//   if (bagItems.length > 0) {
//     bagIcon.style.visibility = 'visible';
//     bagIcon.innerHTML = bagItems.length;
//   }
//   else {
//     bagIcon.style.visibility = 'hidden';
//   }
// }

function addToBag(itemid) {
  bagItems.push(itemid);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  console.log(`Your bag contains ${bagItems.length} items and ${itemid} has been added recently!`)
  
  let bagElement = document.querySelector('.bag-item-count');
  bagElement.innerText = bagItems.length;
 // alert(`You have added ${bagItems.item_name}}`);
  displayBagItems();
  displayBagIcon();
}

function displayItemsOnHomePage() {
  let productFlexElement = document.querySelector('#product-flex');
  if (!productFlexElement) {
    return;
  }

  let innerHtml = '';
  items.forEach(product => {
    innerHtml += `
    <div class="product-item">
    <img class="product-img" src="${product.image}" alt="Product 1">
    <div class="rating">
         ${product.rating.stars} ★ | ${product.rating.reviews}
      </div>
    <h3>${product.company_name}</h3>
    <h5>${product.item_name}</h5>
    <p id="price">₹${product.current_price}</p>
    <button class="add-to-bag" onclick="addToBag(${product.id})" >Add to Cart</button>
    </div>`
  });
  productFlexElement.innerHTML = innerHtml;
}


