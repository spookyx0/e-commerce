document.addEventListener('DOMContentLoaded', function () {
    const cartContainer = document.getElementById('cart-container');
    const totalContainer = document.getElementById('total-price'); 
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    updateCartDisplay(); 
    const loadingOverlay = document.querySelector("#loading-overlay");

  // Show loading overlay
  loadingOverlay.style.display = "flex";

  // Simulate content loading delay (replace with your actual data loading logic)
  setTimeout(() => {
      // Hide loading overlay
      loadingOverlay.style.display = "none";

      setTimeout(() => {
          footer.style.display = "none";
      }, 2000);
  }, 3000); // Set loading time to 3 seconds

  // Show/hide footer on scroll
  window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
          footer.style.display = "block";
      } else {
          footer.style.display = "none";
      }
  });

    
    function updateCartDisplay() {
        console.log('Updating cart display...');
        cartContainer.innerHTML = '';
    
        cartItems.forEach(item => {
            const cartItemElement = createCartItemElement(item);
            cartContainer.appendChild(cartItemElement);
        });
    
        updateTotal(); 
    }
    
function createCartItemElement(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    const itemDetails = document.createElement('div');
    itemDetails.className = 'cart-item-details';

    const itemName = document.createElement('h3');
    itemName.textContent = item.name;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price ? `$${item.price.toFixed(2)}` : 'Price not available';

    const itemQuantity = document.createElement('p');
    itemQuantity.textContent = `Quantity: ${item.quantity}`;

    const total = document.createElement('p');
    total.textContent = item.price ? `Total: $${(item.price * item.quantity).toFixed(2)}` : 'Total not available';

    itemDetails.appendChild(itemName);
    itemDetails.appendChild(itemPrice);
    itemDetails.appendChild(itemQuantity);
    itemDetails.appendChild(total);

    const itemImage = document.createElement('img');
    itemImage.src = item.imageUrl;
    itemImage.alt = item.name;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
        const confirmed = window.confirm(`Are you sure you want to remove ${item.name} from your cart?`);
        if (confirmed) {
            removeFromCart(item);
        }
    });

    cartItem.appendChild(itemImage);
    cartItem.appendChild(itemDetails);
    cartItem.appendChild(removeButton);

    return cartItem;
}
function updateTotal() {
    if (totalContainer) {
        const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

        
        const totalElement = document.createElement('p');
        totalElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

        
        totalContainer.innerHTML = '';
        totalContainer.appendChild(totalElement);
    } else {
        console.error('Total container not found');
    }
}
    function removeFromCart(item) {
        const index = cartItems.findIndex(cartItem => cartItem.name === item.name);
        if (index !== -1) {
            console.log('Before removal:', cartItems);
            cartItems.splice(index, 1);
            console.log('After removal:', cartItems);
            updateCartDisplay();
            saveCartToLocalStorage(); 
            updateTotal(); 
        }
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    function updateTotal() {
        if (totalContainer) {
            const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            totalContainer.textContent = `$${totalPrice.toFixed(2)}`;
        } else {
            console.error('Total container not found');
        }
    }

    
    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.addEventListener('click', function () {
        window.location.href = 'homepage.html';
    });
    cartContainer.appendChild(backButton);

    updateCartDisplay();
});
