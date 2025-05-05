const keyboardSubcategories = [
  {
    name: 'Mechanical Keyboard',
    description: 'Mechanical key switch, RGB backlighting, programmable keys, USB interface, anti-ghosting, N-Key rollover, 1000 Hz polling rate, suitable for both hands. Dimensions: 17.6 x 5.8 x 1.4", Weight: 2.8 lb',
  },
  {
    name: 'Wireless Keyboard',
    description: 'Wireless and Bluetooth connectivity, compact design, suitable for various devices.',
  },
  {
    name: 'Gaming Keyboard',
    description: 'Mechanical keys, RGB backlighting, programmable keys, suitable for gaming.',
  },
];

const mouseSubcategories = [
  {
    name: 'Wireless Mouse',
    description: 'ASUS ROG Gladius: Optical sensor, 12,000 DPI, scroll wheel, 1000 Hz polling rate, customizable RGB illumination, suitable for right-hand use. Dimensions: 5.0 x 2.6 x 1.8", Weight: 3.88 oz',
  },
  {
    name: 'Gaming Mouse',
    description: 'RAZER VIPER V2 PRO: Right-handed symmetrical design, Razer™ HyperSpeed Wireless, 30000 DPI, 750 IPS, 6 programmable buttons, Optical Mouse Switches Gen-3, 90 million clicks lifecycle, 58g weight.',
  },
  {
    name: 'Bluetooth Mouse',
    description: 'Logitech G pro X:  Bluetooth connectivity, optical sensor, 12,000 DPI, scroll wheel, suitable for various devices.',
  },
];

const headphonesSubcategories = [
  {
    name: 'Over-Ear Headphones',
    description: 'Over-ear design, noise-canceling, high-quality sound for immersive audio experience.',
  },
  {
    name: 'In-Ear Headphones',
    description: 'In-ear design, lightweight, noise isolation for on-the-go use.',
  },
  {
    name: 'Wireless Headphones',
    description: 'Wireless and Bluetooth connectivity, long battery life for convenience.',
  },
];

const monitorSubcategories = [
  {
    name: '4K Monitor',
    description: '4K resolution, high refresh rate for crisp visuals.',
  },
  {
    name: 'Gaming Monitor',
    description: 'High refresh rate, low response time for optimal gaming experience.',
  },
  {
    name: 'Curved Monitor',
    description: 'Curved design for an immersive viewing experience.',
  },
];
const peripheralPrices = {
  'keyboard_mechanical_keyboard': 129.99,
  'keyboard_wireless_keyboard': 49.99,
  'keyboard_gaming_keyboard': 79.99,
  'mouse_wireless_mouse': 59.99,
  'mouse_gaming_mouse': 99.99,
  'mouse_bluetooth_mouse': 39.99,
  'headphones_over_ear_headphones': 149.99,
  'headphones_in_ear_headphones': 29.99,
  'headphones_wireless_headphones': 99.99,
  'monitor_4k_monitor': 399.99,
  'monitor_gaming_monitor': 299.99,
  'monitor_curved_monitor': 249.99,
};


function getPeripheralPrice(category, itemName) {
  const subcategory = category.toLowerCase().replace(/\s+/g, '_');
  const key = `${subcategory}_${itemName.toLowerCase().replace(/\s+/g, '_')}`;
  
  if (peripheralPrices[key] !== undefined) {
    return peripheralPrices[key];
  } else {
    console.warn(`Price not available for ${key}`);
    return 0; 
  }
}
function addToCartPeripheral(itemName, category, quantity) {
  const item = {
    name: itemName,
    category: category,
    quantity: quantity,
    price: getPeripheralPrice(category, itemName),
    imageUrl: `path/to/${category.toLowerCase()}/${itemName.toLowerCase().replace(/\s+/g, '_')}.jpg`,
  };
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  
  cartItems.push(item);

  
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  alert('Item added to cart!');
 
  addItemToCart(item);
  showShoppingCart(); 
}


function showSubcategories(category, categoryName, subcategories) {
  var mainContent = document.getElementById('category-container');
  mainContent.innerHTML = '';

  var modalContainer = document.createElement('div');
  modalContainer.className = 'modal-container';

  var modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  var closeButton = document.createElement('span');
  closeButton.className = 'close';
  closeButton.innerHTML = '&times;';
  modalContent.appendChild(closeButton);

  if (subcategories && subcategories.length > 0) {
    var subcategoriesContainer = document.createElement('div');
    subcategoriesContainer.className = 'subcategory';

    subcategories.forEach(function (subcategory, index) {
      var subcategoryItem = document.createElement('div');
      subcategoryItem.className = 'modal-item';

      var subcategoryName = document.createElement('h3');
      subcategoryName.textContent = subcategory.name;

      var subcategoryImage = document.createElement('img');
      subcategoryImage.src = `peripherals/${category.toLowerCase()}/${subcategory.name.toLowerCase().replace(/\s+/g, '_')}_${index + 1}.jpg`;
      subcategoryImage.alt = subcategory.name;

      var subcategoryDescription = document.createElement('div');
      subcategoryDescription.className = 'description-container hidden'; 

      var descriptionTitle = document.createElement('h4');
      descriptionTitle.textContent = 'TECH SPECS';

      var descriptionTable = document.createElement('table');
      descriptionTable.className = 'tech-specs-table';

     
      subcategory.description.split('\n').forEach(function (item) {
        var row = document.createElement('tr');
        var cells = item.trim().split(':');

        cells.forEach(function (cellContent) {
          var cell = document.createElement('td');
          cell.textContent = cellContent.trim();
          row.appendChild(cell);
        });

        descriptionTable.appendChild(row);
      });

      subcategoryDescription.appendChild(descriptionTitle);
      subcategoryDescription.appendChild(descriptionTable);

      
      subcategoryItem.appendChild(subcategoryName);
      subcategoryItem.appendChild(subcategoryImage);

     
      subcategoriesContainer.appendChild(subcategoryItem);

      
      subcategoriesContainer.appendChild(subcategoryDescription);

   
      subcategoryItem.addEventListener('click', function () {
        subcategoryDescription.classList.toggle('hidden');
      });
      var buyButton = document.createElement('button');
      buyButton.textContent = 'Buy';
      buyButton.addEventListener('click', function () {
        const quantity = prompt('Enter quantity:');
        if (quantity && !isNaN(quantity) && quantity > 0) {
          addToCartPeripheral(subcategory.name, category, parseInt(quantity));
        } else {
          alert('Invalid quantity. Please enter a valid number.');
        }
      });
      subcategoryItem.appendChild(buyButton);
    });
    modalContent.appendChild(subcategoriesContainer);
  }

  modalContainer.appendChild(modalContent);
  mainContent.appendChild(modalContainer);

  modalContainer.style.display = 'block';

  closeButton.onclick = function () {
    window.location.href = 'peripherals.html';
  };

  window.onclick = function (event) {
    if (event.target === modalContainer) {
      modalContainer.style.display = 'none'
    }
  };
}
document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.querySelector(".main-content");
  const footer = document.querySelector("footer");
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
  }, 2000); // Set loading time to 3 seconds

  // Show/hide footer on scroll
  window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
          footer.style.display = "block";
      } else {
          footer.style.display = "none";
      }
  });
});