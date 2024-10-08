let bagItems;
onLoad();

function onLoad(){
bagItems= localStorage.getItem('bagItems')?JSON.parse(localStorage.getItem('bagItems')):[];
displayItemsOnHomePage();
displayBagItems();
}

function addToBag(itemid){
  bagItems.push(itemid);
  localStorage.setItem('bagItems' ,JSON.stringify(bagItems));
  displayBagItems();
}

function displayBagItems(){
  let bagElement=document.querySelector('.bag-item-count');
  if (bagItems.length>0) {
    bagElement.style.visibility='visible';
    bagElement.innerText=bagItems.length;
  }
  else{
    bagElement.style.visibility='hidden';
  } 
}

function displayItemsOnHomePage(){
  let productFlexElement=document.querySelector('#product-flex');
  if (!productFlexElement){
    return;
  }

  let innerHtml='';
    items.forEach(product => {
    innerHtml +=   `
    <div class="product-item">
    <img src="${product.image}" alt="Product 1">
    <h3>${product.company_name}</h3>
    <h5>${product.item_name}</h5>
    <p id="price">₹${product.current_price}</p>
    <button class="add-to-bag" onclick="addToBag(${product.id})" >Add to Cart</button>
    </div>`
  });
  
  
  
  productFlexElement.innerHTML= innerHtml;
}


  
  