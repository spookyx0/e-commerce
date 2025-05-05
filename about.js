function openModal(profileName, profileProgram, profileAchievement, modalId, modalContent) {
    var modal = document.getElementById(modalId);

    // Check if modalContent is not empty
    if (modalContent.trim() !== '') {
        var modalProfileName = document.getElementById('modalProfileName' + modalId.charAt(modalId.length - 1));
        var modalProfileProgram = document.getElementById('modalProfileProgram' + modalId.charAt(modalId.length - 1));
        var modalProfileAchievement = document.getElementById('modalProfileAchievement' + modalId.charAt(modalId.length - 1));
        var modalEducation = document.getElementById('modalEducation' + modalId.charAt(modalId.length - 1)); // Added for Education section

        // Set modal content based on the profile clicked
        modalProfileName.innerText = profileName;
        modalProfileProgram.innerText = profileProgram;
        modalProfileAchievement.innerHTML = `<span class="highlight">${profileAchievement}</span>`;
        modalEducation.innerHTML = modalContent; // Set the provided modal content

        // Display the modal
        modal.style.display = 'flex';

        // Disable scroll on body while modal is open
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);

    // Hide the modal
    modal.style.display = 'none';

    // Enable scroll on body after modal is closed
    document.body.style.overflow = 'auto';
}


var vinceModalContent = `
    <p><strong>Education:</strong></p>
    <p>I am a 3rd year college student studying in the University of Eastern Philippines. In my Senior High School years, I graduated from Gala Vocational School studying Computer System Servicing, which became my specialty and career. Before that, my TVL was Electronics for 7 years, enhancing my expertise in hardware.</p>
    <br>
    <p><strong>Achievements:</strong></p>
    <p><strong>=Junior High=</strong></p>
    <p>After graduating Junior High, I was awarded Best in TVL Electronics and one of the honor students.</p>
    <br>
    <p><strong>=Senior High=</strong></p>
    <p>In my Senior High years, I was awarded Honor Student for 2 years and graduated with High Honor.</p>
    <br>
    <p><strong>=College=</strong></p>
    <p>In my College years, Me and my Team were awarded the first place in the Arduino challenge in UEP.</p>
    <p>I led my Team Towards Winning, achieving our goal and tasting the sweetness of winning.</p>
`;

// Example for Quinreeve
var quinreeveModalContent = `
    <p><strong>Education:</strong></p>
    <p>Replace this text with Quinreeve's education information.</p>
    <br>
    <p><strong>Achievements:</strong></p>
    <p>Replace this text with Quinreeve's achievements.</p>
`;

document.querySelector('.profile-container:nth-child(1)').addEventListener('click', function () {
    openModal("Vince's Name", "Vince's Program", "Vince's Achievement", "modal1", vinceModalContent);
});

document.querySelector('.profile-container:nth-child(2)').addEventListener('click', function () {
    openModal("Quinreeve's Name", "Quinreeve's Program", "Quinreeve's Achievement", "modal2", quinreeveModalContent);
});


