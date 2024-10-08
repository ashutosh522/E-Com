let bagItems;
bagItems= localStorage.getItem('bagItems')?JSON.parse(localStorage.getItem('bagItems')):[];
displayBagItems();
displayItemsOnHomePage();

function addToBag(productid){
  bagItems.push(productid);
  localStorage.setItem('bagItems' ,JSON.stringify(bagItems));
  displayBagItems();



}

function displayBagItems(){
  let bagElement=document.querySelector('.bag-item-count');
  if (bagItems.length===0) {
    bagElement.style.display = 'none';
  }
  
  
}


function displayItemsOnHomePage(){
  let productFlexElement=document.querySelector('#product-flex');
  const items = [
    // {
    //     id: '001',
    //     image: './Images/1.jpg',
    //     company_name: 'Carlton London',
    //     item_name: 'Rhodium-Plated CZ Floral Studs',
    //     original_price: 1045,
    //     current_price: 606,
    //     discount_percentage: 42,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 4.5,
    //         reviews: 1400,
    //     },
    // },
    // {
    //     id: '002',
    //     image: './Images/2.jpg',
    //     company_name: 'CUKOO',
    //     item_name: 'Women Padded Halter Neck Swimming Dress',
    //     original_price: 2599,
    //     current_price: 1507,
    //     discount_percentage: 42,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 4.3,
    //         reviews: 24,
    //     },
    // },
    // {
    //     id: '003',
    //     image: './Images/3.jpg',
    //     company_name: 'NUEVOSDAMAS',
    //     item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
    //     original_price: 1599,
    //     current_price: 495,
    //     discount_percentage: 69,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 4.1,
    //         reviews: 249,
    //     },
    // },
    // {
    //     id: '004',
    //     image: './Images/4.jpg',
    //     company_name: 'ADIDAS',
    //     item_name: 'Indian Cricket ODI Jersey',
    //     original_price: 999,
    //     current_price: 999,
    //     discount_percentage: 0,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 5.0,
    //         reviews: 10,
    //     },
    // },
    // {
    //     id: '005',
    //     image: './Images/5.jpg',
    //     company_name: 'Roadster',
    //     item_name: 'Pure Cotton T-shirt',
    //     original_price: 1399,
    //     current_price: 489,
    //     discount_percentage: 65,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 4.2,
    //         reviews: 3500,
    //     },
    // },
    // {
    //     id: '006',
    //     image: './Images/6.jpg',
    //     company_name: 'Nike',
    //     item_name: 'Men ReactX Running Shoes',
    //     original_price: 14995,
    //     current_price: 14995,
    //     discount_percentage: 0,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 0.0,
    //         reviews: 0,
    //     },
    // },
    // {
    //     id: '007',
    //     image: './Images/7.jpg',
    //     company_name: 'The Indian Garage Co',
    //     item_name: 'Men Slim Fit Regular Shorts',
    //     original_price: 1599,
    //     current_price: 639,
    //     discount_percentage: 60,
    //     rating: {
    //         stars: 4.2,
    //         reviews: 388,
    //     },
    // },
    // {
    //     id: '008',
    //     image: './Images/8.jpg',
    //     company_name: 'Nivea',
    //     item_name: 'Men Fresh Deodrant 150ml',
    //     original_price: 285,
    //     current_price: 142,
    //     discount_percentage: 50,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 4.2,
    //         reviews: 5200,
    //     },
    // },
    // {
    //     id: '009',
    //     image: './Images/images (1).jpg',
    //     company_name: 'Lee Cooper',
    //     item_name: 'Black & White printed Shirt for Men',
    //     original_price: 1100,
    //     current_price: 999,
    //     discount_percentage: 50,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 4.2,
    //         reviews: 5200,
    //     },
    // },
    // {
    //     id: '010',
    //     image: './Images/images (2).jpg',
    //     company_name: 'The Indian Garage Co',
    //     item_name: 'Printed Shirt for Men',
    //     original_price: 880,
    //     current_price: 530,
    //     discount_percentage: 50,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 4.2,
    //         reviews: 5200,
    //     },
    // },
    // {
    //     id: '011',
    //     image: './Images/images (3).jpg',
    //     company_name: 'Rare Rabbit',
    //     item_name: 'Men Solid Blue Shirt',
    //     original_price: 499,
    //     current_price: 449,
    //     discount_percentage: 50,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 4.2,
    //         reviews: 5200,
    //     },
    // },
    // {
    //     id: '012',
    //     image: './Images/images (4).jpg',
    //     company_name: 'Levis',
    //     item_name: 'Men Slim Fit Shirt',
    //     original_price: 760,
    //     current_price: 550,
    //     discount_percentage: 50,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 4.2,
    //         reviews: 5200,
    //     },
    // },
    // {
    //     id: '015',
    //     image: './Images/images.jpg',
    //     company_name: 'Wrogn',
    //     item_name: 'Men Casual Shirt',
    //     original_price: 900,
    //     current_price: 650,
    //     discount_percentage: 50,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 4.2,
    //         reviews: 5200,
    //     },
    // },
    // {
    //     id: '016',
    //     image: './Images/new.jpg',
    //     company_name: 'Roadster',
    //     item_name: 'Men Dailywear Shirt',
    //     original_price: 800,
    //     current_price: 570,
    //     discount_percentage: 50,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 4.2,
    //         reviews: 5200,
    //     },
    // },
    // {
    //     id: '017',
    //     image: './Images/new2.jpg',
    //     company_name: 'Snitch',
    //     item_name: 'Men Casual Shirt',
    //     original_price: 600,
    //     current_price: 542,
    //     discount_percentage: 50,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 4.2,
    //         reviews: 5200,
    //     },
    // },
    // {
    //     id: '018',
    //     image: './Images/new3.jpg',
    //     company_name: 'Rare Rabbit',
    //     item_name: 'Men Slim Fit Shirt',
    //     original_price: 785,
    //     current_price: 600,
    //     discount_percentage: 50,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 4.2,
    //         reviews: 5200,
    //     },
    // },
    {
        id: '019',
        image: './Images/kid1.jpg',
        company_name: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            reviews: 1400,
        },
    },
    {
        id: '020',
        image: './Images/kid2.jpg',
        company_name: 'CUKOO',
        item_name: 'Women Padded Halter Neck Swimming Dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            reviews: 24,
        },
    },
    {
        id: '021',
        image: './Images/kid3.jpg',
        company_name: 'NUEVOSDAMAS',
        item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            reviews: 249,
        },
    },
    {
        id: '022',
        image: './Images/kid4.jpg',
        company_name: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            reviews: 10,
        },
    }
];
  let innerHtml='';
    items.forEach(product => {
    innerHtml +=   `
    <div class="product-item">
    <img src="${product.image}" alt="Product 1">
    <h3>${product.company_name}</h3>
    <h5>${product.item_name}</h5>
    <p id="price">₹${product.current_price}</p>
    <button class="add-to-bag" onclick="addToBag(${product.id})" >Add to Bag</button>
    </div>`
  });
  
  
  
  productFlexElement.innerHTML= innerHtml;
  
  
}
