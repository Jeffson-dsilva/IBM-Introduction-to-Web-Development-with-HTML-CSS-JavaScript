function addRecommendation() {
    // Get the new recommendation message
    const newRecommendation = document.getElementById('new_recommendation').value;

    // Validate the input
    if (newRecommendation.trim() === '') {
        alert('Please enter a message.');
        return;
    }

    // Create a new div element for the recommendation
    const newRecElement = document.createElement('div');
    newRecElement.classList.add('recommendation');

    // Add the content to the new recommendation element
    newRecElement.innerHTML = `<span>&#8220;</span> ${newRecommendation} <span>&#8221;</span>`;

    // Add the new recommendation to the list of recommendations
    document.getElementById('all_recommendations').appendChild(newRecElement);

    // Show the popup confirmation message
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';

    // Clear the input fields
    document.getElementById('new_recommendation').value = '';
}

// Add an event listener to the popup "Ok" button to close the popup when clicked
document.querySelector('#popup button').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});
