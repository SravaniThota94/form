// Function to show details of selected gifts in a modal
function showDetails(occasion) {
    let modal = document.getElementById('product-modal');
    let title = document.getElementById('modal-title');
    let description = document.getElementById('modal-description');

    // Update modal content based on the occasion
    if (occasion === 'birthday') {
        title.innerHTML = 'Birthday Gift Ideas';
        description.innerHTML = 'Celebrate your loved ones with personalized birthday gifts like custom mugs, photo frames, and more!';
    } else if (occasion === 'anniversary') {
        title.innerHTML = 'Anniversary Gift Ideas';
        description.innerHTML = 'Show your love with engraved jewelry, custom photo albums, and romantic gift options!';
    } else if (occasion === 'friendship') {
        title.innerHTML = 'Friendship Gift Ideas';
        description.innerHTML = 'Gifts to celebrate friendship – personalized keepsakes, matching bracelets, and heartfelt message cards!';
    }
    // Display modal
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    let modal = document.getElementById('product-modal');
    modal.style.display = "none";
}

// Function to smoothly scroll to a section
function smoothScroll(targetId) {
    let target = document.getElementById(targetId);
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    });
}

// Function to handle checkout process (simulating checkout for now)
function checkout() {
    let message = document.getElementById('message').value;
    let engraving = document.getElementById('engraving').value;

    // Basic validation for message or engraving (for demo purposes)
    if (message === "" && engraving === "") {
        alert("Please add a message or engraving for your gift.");
        return;
    }

    // Simulate a successful checkout process
    alert("Checkout complete! Your personalized gift is on its way.");
}

