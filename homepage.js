document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const categoryContainer = document.querySelector(".main-content");
    const subcategoryContainer = document.querySelector(".subcategory-container");
    const footer = document.querySelector("footer");
    const loadingOverlay = document.querySelector("#loading-overlay");

    // Simulate fetching user data
    const userData = fetchUserData();

    // Show loading overlay
    loadingOverlay.style.display = "flex";

    if (categoryContainer && subcategoryContainer) {
        displayCategoryOptions(categoryContainer, "peripherals", "Peripherals");
        displayCategoryOptions(categoryContainer, "hardware", "Hardware");
    }

    // Simulate content loading delay (you can replace this with your actual data loading logic)
    setTimeout(() => {
        // Hide loading overlay, toggle fade-in class, and hide footer after 5 seconds
        loadingOverlay.style.display = "none";
        body.classList.remove("fade-out");
        body.classList.add("fade-in");
        setTimeout(() => {
            footer.style.display = "none";
        }, 2000);
    }, 5000);

    // Show/hide footer on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            footer.style.display = "block";
        } else {
            footer.style.display = "none";
        }
    });

    // Check if user data exists
    if (userData) {
        // Update header with user information
        updateHeader(userData);
    }
});

function fetchUserData() {
    const fullName = document.getElementById('fullName').value;
    const newUsername = document.getElementById('newUsername').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    return {
        name: fullName,
        username: newUsername,
        phone: phone,
        profileImage: "path_to_user_profile_image.jpg",
    };
}

function updateHeader(userData) {
    const userProfileImage = document.getElementById("userProfileImage");
    const userName = document.getElementById("userName");
    const userPhone = document.getElementById("userPhone");

    if (userProfileImage) {
        userProfileImage.src = userData.profileImage || "path_to_default_image.jpg";
    }

    if (userName) {
        userName.textContent = "Username: " + userData.username;
    }

    if (userPhone) {
        userPhone.textContent = "Phone: " + userData.phone;
    }
}

function displayCategoryOptions(container, category, categoryName) {
    container.innerHTML += `
        <div class="category-container" onclick="showSubcategories('${category}', '${categoryName}')">
            <img src="sauces/${category.toLowerCase()}.jpg" alt="${categoryName}">
            <h2>${categoryName}</h2>
        </div>
    `;
}

function showSubcategories(category, categoryName) {
    const categoryContainer = document.querySelector(".main-content");
    const subcategoryContainer = document.querySelector(".subcategory-container");

    categoryContainer.innerHTML = '';
    subcategoryContainer.innerHTML = `<h2>${categoryName}</h2>`;

    switch (category) {
        case 'peripherals':
            displaySubcategory(peripherals, subcategoryContainer);
            break;
        case 'hardware':
            displaySubcategory(hardware, subcategoryContainer);
            break;
    }
}

function displaySubcategory(subcategory, container) {
    subcategory.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("subcategory-item");

        itemElement.innerHTML = `
            <h3>${item.name}</h3>
            <ul>
                ${item.brands.map(brand => `<li>${brand}</li>`).join('')}
            </ul>
        `;

        container.appendChild(itemElement);
    });
}

// Function to toggle create account and login forms
function toggleCreateAccount() {
    const createAccountContainer = document.querySelector('.create-account-container');
    createAccountContainer.style.display = 'block';

    const loginContainer = document.querySelector('.login-container');
    loginContainer.style.display = 'none';
}

function toggleLogin() {
    const createAccountContainer = document.querySelector('.create-account-container');
    createAccountContainer.style.display = 'none';

    const loginContainer = document.querySelector('.login-container');
    loginContainer.style.display = 'block';
}

function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Add your login logic here
    // For example, you might make an AJAX request to your server to check credentials

    // After successful login, you can redirect the user or perform other actions
}

// Function to handle file input change for profile image
document.getElementById('profileImage').addEventListener('change', function () {
    const preview = document.getElementById('imagePreview');
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function () {
            // Display the selected image in the circular format
            preview.innerHTML = `<img src="${reader.result}" alt="Profile Image">`;
        });

        reader.readAsDataURL(file);
    } else {
        // Clear the preview if no file selected
        preview.innerHTML = '';
    }
});

function createAccount() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate passwords match
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Add your create account logic here
    // For example, you might make an AJAX request to your server to create a new account

    // After successful account creation, you can redirect the user or perform other actions
}
