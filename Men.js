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
    //     image: '../Images/1.jpg',
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
    //     image: '../Images/2.jpg',
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
    //     image: '../Images/3.jpg',
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
    {
        id: '004',
        image: './Images/4.jpg',
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
    },
    {
        id: '005',
        image: './Images/5.jpg',
        company_name: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        original_price: 1399,
        current_price: 489,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            reviews: 3500,
        },
    },
    {
        id: '006',
        image: './Images/6.jpg',
        company_name: 'Nike',
        item_name: 'Men ReactX Running Shoes',
        original_price: 14995,
        current_price: 14995,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 0.0,
            reviews: 0,
        },
    },
    {
        id: '007',
        image: './Images/7.jpg',
        company_name: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 1599,
        current_price: 639,
        discount_percentage: 60,
        rating: {
            stars: 4.2,
            reviews: 388,
        },
    },
    {
        id: '008',
        image: './Images/8.jpg',
        company_name: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            reviews: 5200,
        },
    },
    {
        id: '009',
        image: './Images/download (1).jpg',
        company_name: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            reviews: 5200,
        },
    },
    {
        id: '010',
        image: './Images/download (2).jpg',
        company_name: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            reviews: 5200,
        },
    },
    {
        id: '011',
        image: './Images/download (3).jpg',
        company_name: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            reviews: 5200,
        },
    },
    {
        id: '012',
        image: './Images/download (4).jpg',
        company_name: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            reviews: 5200,
        },
    },
    {
        id: '015',
        image: './Images/download.jpg',
        company_name: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            reviews: 5200,
        },
    },
    {
        id: '016',
        image: './Images/images (1).jpg',
        company_name: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            reviews: 5200,
        },
    },
    {
        id: '017',
        image: './Images/images (2).jpg',
        company_name: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            reviews: 5200,
        },
    },
    {
        id: '018',
        image: './Images/images (3).jpg',
        company_name: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            reviews: 5200,
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
    <button class="add-to-bag" onclick="addToBag(${product.id})" >Add to Cart</button>
    </div>`
  });
  
  
  
  productFlexElement.innerHTML= innerHtml;
  
  
}
