$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    return false;
});

// Get references to the button and additional content
const seeMoreButton = document.getElementById('see-more');
const additionalContent = document.getElementById('additional-content');

// Add a click event listener to the button
seeMoreButton.addEventListener('click', () => {
    // Toggle the visibility of the additional content
    if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
        additionalContent.style.display = 'block';
        seeMoreButton.textContent = 'Hide';
    } else {
        additionalContent.style.display = 'none';
        seeMoreButton.textContent = 'See More ->';
    }
});
