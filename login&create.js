document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const categoryContainer = document.querySelector(".main-content");
    const subcategoryContainer = document.querySelector(".subcategory-container");
    const footer = document.querySelector("footer");
    const loadingOverlay = document.querySelector("#loading-overlay");

    
    const userData = fetchUserData();


    loadingOverlay.style.display = "flex";

    if (categoryContainer && subcategoryContainer) {
        displayCategoryOptions(categoryContainer, "peripherals", "Peripherals");
        displayCategoryOptions(categoryContainer, "hardware", "Hardware");
    }

   
    setTimeout(() => {
        
        loadingOverlay.style.display = "none";
        body.classList.remove("fade-out");
        body.classList.add("fade-in");
        setTimeout(() => {
            footer.style.display = "none";
        }, 2000);
    }, 5000);

   
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            footer.style.display = "block";
        } else {
            footer.style.display = "none";
        }
    });

   
    if (userData) {
       
        updateHeader(userData);
    }
});


function fetchUserData() {
   
    return null; 
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

    updateHeader({
        username: loginUsername,
        phone: "555-1234",  
        profileImage: 'path_to_updated_profile_image.jpg',  
    });
}


document.getElementById('profileImage').addEventListener('change', function () {
    const preview = document.getElementById('imagePreview');
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function () {
            
            preview.innerHTML = `<img src="${reader.result}" alt="Profile Image">`;
        });

        reader.readAsDataURL(file);
    } else {
       
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

    // Assuming a successful account creation, update the header
    const createdUserData = {
        username: newUsername,
        phone: "555-1234",  // Update with the actual phone number
        profileImage: 'path_to_updated_profile_image.jpg',  // Update with the actual image path
    };

    // Update the header with user information
    updateHeader(createdUserData);

    // Redirect to the homepage (replace 'homepage.html' with your actual homepage URL)
    window.location.href = 'homepage.html';
}
