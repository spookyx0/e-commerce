const gpuSubcategories = [
    { name: 'Gaming GPU', description: 'ROG STRIX GPU Description for Gaming GPU: Graphics Memory: 8GB GDDR6, CUDA Cores: 2560, Memory Interface: 256-bit,', price: 399.99 },
    { name: 'Workstation GPU', description: 'RAZER CORE V2 Description for Workstation GPU. Graphics Memory: 16GB GDDR6, CUDA Cores: 4352, Memory Interface: 256-bit, ...', price: 799.99 },
    { name: 'Budget GPU', description: 'NVIDIA GeForce RTX 2060 SUPER Description for Budget GPU. Graphics Memory: 4GB GDDR5, CUDA Cores: 896, Memory Interface: 128-bit, ...', price: 249.99 },
];

const powerSupplySubcategories = [
    { name: 'Gaming Power Supply', description: 'Description for Gaming Power Supply. Wattage: 750W, Efficiency: 80 PLUS Gold, Modular: Fully Modular, ...', price: 129.99 },
    { name: 'Workstation Power Supply', description: 'Description for Workstation Power Supply. Wattage: 1000W, Efficiency: 80 PLUS Platinum, Modular: Fully Modular, ...', price: 179.99 },
    { name: 'Budget Power Supply', description: 'Description for Budget Power Supply. Wattage: 500W, Efficiency: 80 PLUS Bronze, Modular: Non-Modular, ...', price: 79.99 },
];

const motherboardSubcategories = [
    { name: 'Gaming Motherboard', description: 'Description for Gaming Motherboard. Socket: LGA1200, Chipset: Z590, RAM Slots: 4, PCIe Slots: 3 x16, ...', price: 199.99 },
    { name: 'Workstation Motherboard', description: 'Description for Workstation Motherboard. Socket: TR4, Chipset: X399, RAM Slots: 8, PCIe Slots: 4 x16, ...', price: 299.99 },
    { name: 'Budget Motherboard', description: 'Description for Budget Motherboard. Socket: AM4, Chipset: B450, RAM Slots: 4, PCIe Slots: 2 x16, ...', price: 99.99 },
];

const caseSubcategories = [
    { name: 'Mid Tower Case', description: 'Description for Mid Tower Case. Form Factor: ATX, Expansion Slots: 7, Max GPU Length: 300mm, Max CPU Cooler Height: 160mm, ...', price: 89.99 },
    { name: 'Full Tower Case', description: 'Description for Full Tower Case. Form Factor: EATX, Expansion Slots: 9, Max GPU Length: 400mm, Max CPU Cooler Height: 180mm, ...', price: 129.99 },
    { name: 'Mini-ITX Case', description: 'Description for Mini-ITX Case. Form Factor: Mini-ITX, Expansion Slots: 2, Max GPU Length: 280mm, Max CPU Cooler Height: 160mm, ...', price: 59.99 },
];

const cpuSubcategories = [
    { name: 'Gaming CPU', description: 'Description for Gaming CPU. Socket: LGA1200, Cores: 6, Threads: 12, Base Clock: 3.6GHz, Max Boost Clock: 4.2GHz, ...', price: 229.99 },
    { name: 'Workstation CPU', description: 'Description for Workstation CPU. Socket: AM4, Cores: 16, Threads: 32, Base Clock: 3.5GHz, Max Boost Clock: 4.9GHz, ...', price: 499.99 },
    { name: 'Budget CPU', description: 'Description for Budget CPU. Socket: LGA1151, Cores: 4, Threads: 4, Base Clock: 3.1GHz, Max Boost Clock: 3.9GHz, ...', price: 129.99 },
];

const ramSubcategories = [
    { name: 'Gaming RAM', description: 'Description for Gaming RAM. Capacity: 16GB (2 x 8GB), Speed: DDR4-3200, CAS Latency: 16, RGB: Yes, ...', price: 89.99 },
    { name: 'Workstation RAM', description: 'Description for Workstation RAM. Capacity: 32GB (4 x 8GB), Speed: DDR4-3600, CAS Latency: 18, RGB: No, ...', price: 159.99 },
    { name: 'Budget RAM', description: 'Description for Budget RAM. Capacity: 8GB (1 x 8GB), Speed: DDR4-2666, CAS Latency: 15, RGB: No, ...', price: 49.99 },
];

const ssdSubcategories = [
    { name: 'NVMe SSD', description: 'Description for NVMe SSD. Capacity: 1TB, Interface: PCIe Gen3 x4, Read Speed: 3500MB/s, Write Speed: 3000MB/s, ...', price: 199.99 },
    { name: 'SATA SSD', description: 'Description for SATA SSD. Capacity: 500GB, Interface: SATA III, Read Speed: 550MB/s, Write Speed: 520MB/s, ...', price: 89.99 },
    { name: 'M.2 SSD', description: 'Description for M.2 SSD. Capacity: 256GB, Interface: SATA III, Read Speed: 560MB/s, Write Speed: 510MB/s, ...', price: 59.99 },
];

function addToCart(itemName, category, quantity) {
    var item = {
        name: itemName,
        category: category,
        quantity: quantity,
        price: getPrice(category, itemName),
        imageUrl: `path/to/${category.toLowerCase()}/${itemName.toLowerCase().replace(/\s+/g, '_')}.jpg`,
    };
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Item added to cart!');
    addItemToCart(item);
    showShoppingCart();
}

function getPrice(category, itemName) {
    const subcategory = category.toLowerCase().replace(/\s+/g, '_');
    const key = `${subcategory}_${itemName.toLowerCase().replace(/\s+/g, '_')}`;
    const prices = {
        'gpu_gaming_gpu': 399.99, 'gpu_workstation_gpu': 799.99, 'gpu_budget_gpu': 249.99,
        'powersupply_gaming_power_supply': 129.99, 'powersupply_workstation_power_supply': 179.99, 'powersupply_budget_power_supply': 79.99,
        'motherboard_gaming_motherboard': 199.99, 'motherboard_workstation_motherboard': 299.99, 'motherboard_budget_motherboard': 99.99,
        'case_mid_tower_case': 89.99, 'case_full_tower_case': 129.99, 'case_mini_itx_case': 59.99,
        'cpu_gaming_cpu': 229.99, 'cpu_workstation_cpu': 499.99, 'cpu_budget_cpu': 129.99,
        'ram_gaming_ram': 89.99, 'ram_workstation_ram': 159.99, 'ram_budget_ram': 49.99,
        'ssd_nvme_ssd': 199.99, 'ssd_sata_ssd': 89.99, 'ssd_m2_ssd': 59.99,
    };
    return prices[key] || 0;
}

function showHardwareSubcategories(category, subcategories) {
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
            var subcategoryImageContainer = document.createElement('div');
            subcategoryImageContainer.className = 'image-container';
            var subcategoryImage = document.createElement('img');
            subcategoryImage.src = `sauces/hardware/${category.toLowerCase()}/${subcategory.name.toLowerCase().replace(/\s+/g, '_')}_${index + 1}.jpg`;
            subcategoryImage.alt = subcategory.name;
            var priceOverlay = document.createElement('div');
            priceOverlay.className = 'price-overlay';
            priceOverlay.textContent = `$${subcategory.price.toFixed(2)}`;
            subcategoryImageContainer.appendChild(subcategoryImage);
            subcategoryImageContainer.appendChild(priceOverlay);
            var subcategoryDescription = document.createElement('p');
            subcategoryDescription.textContent = subcategory.description || 'Description not available';
            subcategoryDescription.classList.add('hidden');
            subcategoryItem.appendChild(subcategoryImageContainer);
            subcategoryImageContainer.addEventListener('click', function () {
                subcategoryItem.classList.toggle('clicked');
                subcategoryDescription.classList.toggle('hidden');
            });
            subcategoryItem.appendChild(subcategoryDescription);
            var buyButton = document.createElement('button');
            buyButton.textContent = 'Buy';
            buyButton.addEventListener('click', function () {
                addToCart(subcategory.name, category, 1);
                alert('Item added to cart!');
                window.location.href = 'cart.html';
            });
            subcategoryItem.appendChild(buyButton);
            subcategoriesContainer.appendChild(subcategoryItem);
        });
        modalContent.appendChild(subcategoriesContainer);
    }
    modalContainer.appendChild(modalContent);
    mainContent.appendChild(modalContainer);
    modalContainer.style.display = 'block';
    closeButton.onclick = function () {
        modalContainer.style.display = 'none';
    };
    window.onclick = function (event) {
        if (event.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    };
}

var buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(function (buyButton) {
    buyButton.addEventListener('click', function () {
        addToCart(subcategory.name, category, 1);
        alert('Item added to cart!');
        showShoppingCart();
    });
});
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

    // Rest of your hardware.js file...
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(function (buyButton) {
        buyButton.addEventListener('click', function () {
            addToCart(subcategory.name, category, 1);
            alert('Item added to cart!');
            showShoppingCart();
        });
    });
});