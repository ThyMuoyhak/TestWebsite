<<<<<<< HEAD
// Simulated product data for 4 products
const products = [
    {
      "id": 1,
      "title": "Wonder Door",
      "price": 29.99,
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
    },
    {
      "id": 2,
      "title": "Wonder Door",
      "price": 39.99,
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
    },
    {
      "id": 3,
      "title": "Wonder Door",
      "price": 49.99,
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
    },
    {
      "id": 4,
      "title": "Wonder Door",
      "price": 59.99,
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
    },
    {
        "id": 5,
        "title": "Wonder Door",
        "price": 29.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      },
      {
        "id": 6,
        "title": "Wonder Door",
        "price": 39.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      },
      {
        "id": 7,
        "title": "Wonder Door",
        "price": 49.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      },
      {
        "id": 8,
        "title": "Wonder Door",
        "price": 59.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      }
      ,
    {
        "id": 9,
        "title": "Wonder Door",
        "price": 29.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      },
      {
        "id": 10,
        "title": "Wonder Door",
        "price": 39.99,
        "description": "This is another product description.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      },
      {
        "id": 11,
        "title": "Wonder Door",
        "price": 49.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      },
      {
        "id": 12,
        "title": "Wonder Door",
        "price": 59.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      }
  ];

  function displayProducts() {
    const productContainer = document.getElementById('product-container');
    
    let productCards = '';
    // Loop through products and generate cards
    products.forEach((product, index) => {
      productCards += `
        <div
  class="product-card relative max-w-xs overflow-hidden group hover:cursor-pointer border-2 border-transparent group-hover:border-blue-500 transform transition-all duration-300"
  data-index="${index}"
>
  <!-- Attach index for easy identification -->

  <!-- Product Image -->
  <img class=" w-full h-100 object-cover transition-transform duration-300" src="${product.image}" alt="${product.title}">

  <!-- Shine Effect -->
  <div class="shine absolute inset-0 z-10 opacity-0 group-hover:opacity-100"></div>

  <!-- Product Info -->
  <div class="px-6 py-4 bg-blue-900">
    <div class="text-center font-semibold text-xl mb-2 text-white">${product.title}</div>
  </div>
</div>

      `;
    });

    // Insert product cards into the container
    document.getElementById('product-container').innerHTML = productCards;

    // Add click event listener for product cards
    document.getElementById('product-container').addEventListener('click', (event) => {
      const productCard = event.target.closest('.product-card');
      if (productCard) {
        const index = productCard.getAttribute('data-index');
        const product = products[index];
        // Redirect to product detail page with query parameters
        window.location.href = `product-detail.html?title=${encodeURIComponent(product.title)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.description)}`;
      }
    });
  
  

    // Insert the generated product cards into the container
    productContainer.innerHTML = productCards;
    
  }
  

  // Call the displayProducts function when the page loads
  window.onload = displayProducts;

  // Function to filter products based on search input
function filterProducts() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  
  // Filter products that match the search term in the title
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );
  
  // Display the filtered products
  displayProducts(filteredProducts);
}

// Event listener for search button
document.getElementById('search-btn').addEventListener('click', filterProducts);

// Display all products initially
window.onload = () => displayProducts(products);
=======
// Simulated product data for 4 products
const products = [
    {
      "id": 1,
      "title": "Wonder Door",
      "price": 29.99,
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
    },
    {
      "id": 2,
      "title": "Wonder Door",
      "price": 39.99,
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
    },
    {
      "id": 3,
      "title": "Wonder Door",
      "price": 49.99,
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
    },
    {
      "id": 4,
      "title": "Wonder Door",
      "price": 59.99,
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
    },
    {
        "id": 5,
        "title": "Wonder Door",
        "price": 29.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      },
      {
        "id": 6,
        "title": "Wonder Door",
        "price": 39.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      },
      {
        "id": 7,
        "title": "Wonder Door",
        "price": 49.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      },
      {
        "id": 8,
        "title": "Wonder Door",
        "price": 59.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      }
      ,
    {
        "id": 9,
        "title": "Wonder Door",
        "price": 29.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      },
      {
        "id": 10,
        "title": "Wonder Door",
        "price": 39.99,
        "description": "This is another product description.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      },
      {
        "id": 11,
        "title": "Wonder Door",
        "price": 49.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      },
      {
        "id": 12,
        "title": "Wonder Door",
        "price": 59.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/323463228_1358878644857822_8311225256044706450_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFITUIuaBEwL_-TQKLoAfybCuBoEU35NJsK4GgRTfk0g5a6S13AGaUCyePbk47yKdeypv8Go98z9SrRzGHP2qK&_nc_ohc=0Vp4SwGommUQ7kNvgGBuqTk&_nc_oc=AdiMWGUlfmj5IhHjtyClKx1NFuqcTCdOVYpH6OQb3gLtJYKm9LFo8jw21mZKQDOQ-nA&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=A1j-k-ayqNIOmxPxs29kBhy&oh=00_AYCcUmcDmr8L-ooi0Jt41GKtHqYZ8KuOowHwsvIL0g94zw&oe=676854FD"
      }
  ];

  function displayProducts() {
    const productContainer = document.getElementById('product-container');
    
    let productCards = '';
    // Loop through products and generate cards
    products.forEach((product, index) => {
      productCards += `
        <div 
          class="product-card relative max-w-xs overflow-hidden group hover:cursor-pointer border-2 group-hover:border-blue-500 transform transition-all duration-300 hover:shadow-xl"
          data-index="${index}"> <!-- Attach index for easy identification -->
        
          <!-- Product Image -->
          <img class="w-full h-100 object-cover transition-transform duration-300" src="${product.image}" alt="${product.title}">
          
          <!-- Product Info -->
          <div class="px-6 py-4 bg-blue-900">
            <div class="text-center font-semibold text-xl mb-2 text-white">${product.title}</div>
          </div>
    
          <!-- Hover Buttons (Email & Telegram) -->
          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="flex flex-col space-y-2 relative">
              <!-- Email Button -->
              <button class="email-btn bg-green-500 text-white py-1 px-2 rounded-lg shadow-md transform transition-all duration-500 ease-in-out group-hover:translate-x-0 translate-x-[100%] hover:scale-105 hover:bg-green-600 hover:shadow-xl">
                <i class="fas fa-envelope mr-1 text-xs sm:text-sm"></i> Email
              </button>
              <!-- Telegram Button -->
              <button class="telegram-btn bg-blue-500 text-white py-1 px-2 rounded-lg shadow-md transform transition-all duration-500 ease-in-out group-hover:translate-x-0 translate-x-[-100%] hover:scale-105 hover:bg-blue-600 hover:shadow-xl">
                <i class="fab fa-telegram-plane mr-1 text-xs sm:text-sm"></i> Telegram
              </button>
            </div>
          </div>
        </div>
      `;
    });

    // Insert product cards into the container
    document.getElementById('product-container').innerHTML = productCards;

    // Add click event listener for product cards
    document.getElementById('product-container').addEventListener('click', (event) => {
      const productCard = event.target.closest('.product-card');
      if (productCard) {
        const index = productCard.getAttribute('data-index');
        const product = products[index];
        // Redirect to product detail page with query parameters
        window.location.href = `product-detail.html?title=${encodeURIComponent(product.title)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.description)}`;
      }
    });
  
  

    // Insert the generated product cards into the container
    productContainer.innerHTML = productCards;
    
  }
  

  // Call the displayProducts function when the page loads
  window.onload = displayProducts;

  // Function to filter products based on search input
function filterProducts() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  
  // Filter products that match the search term in the title
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );
  
  // Display the filtered products
  displayProducts(filteredProducts);
}

// Event listener for search button
document.getElementById('search-btn').addEventListener('click', filterProducts);

// Display all products initially
window.onload = () => displayProducts(products);
>>>>>>> fa29adc8cb59e461b1c56c913d179948c70c6166
