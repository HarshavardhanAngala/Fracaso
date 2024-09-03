const itemPrice = 19.99; // Change this to your item's price

function showQuantitySelector() {
  const quantityContainer = document.getElementById('quantityContainer');
  const showAddToCart = document.getElementById('showAddToCart');
  
  quantityContainer.classList.remove('d-none', 'fade');
  quantityContainer.classList.add('fade', 'show');
  
  showAddToCart.classList.remove('fade', 'show');
  showAddToCart.classList.add('d-none');
  
  updateCartTotal();
}

function increment() {
  const input = document.getElementById('quantityInput');
  let currentValue = parseInt(input.value);
  input.value = currentValue + 1;
  updateCartTotal();
}

function decrement() {
  const input = document.getElementById('quantityInput');
  let currentValue = parseInt(input.value);
  if (currentValue > 1) {
    input.value = currentValue - 1;
    updateCartTotal();
  }
}

function addToCart() {
  const quantity = parseInt(document.getElementById('quantityInput').value);
  if (quantity < 1) {
    // Hide the quantity container and show the "Add to Cart" button
    const quantityContainer = document.getElementById('quantityContainer');
    const showAddToCart = document.getElementById('showAddToCart');
    
    quantityContainer.classList.add('fade');
    quantityContainer.classList.remove('show');
    
    showAddToCart.classList.remove('d-none');
    showAddToCart.classList.add('fade', 'show');
    
    alert('Please select a valid quantity.');
  } else {
    alert(`Added ${quantity} item(s) to the cart.`);
    // Reset quantity and toggle visibility
    document.getElementById('quantityInput').value = 1;
    
    const quantityContainer = document.getElementById('quantityContainer');
    const showAddToCart = document.getElementById('showAddToCart');
    
    quantityContainer.classList.add('fade');
    quantityContainer.classList.remove('show');
    
    showAddToCart.classList.remove('d-none');
    showAddToCart.classList.add('fade', 'show');
    
    updateCartTotal();
  }
}

function updateCartTotal() {
  const quantity = parseInt(document.getElementById('quantityInput').value);
  const totalAmount = (quantity * itemPrice).toFixed(2);
  document.getElementById('cartTotal').textContent = totalAmount;
}
