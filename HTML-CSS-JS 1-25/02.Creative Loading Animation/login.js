login.js

// Function to handle login process
function login() {
    // Perform any login logic here if needed

    // After login logic, redirect to main website after 3 seconds
    setTimeout(function() {
        window.location.href = 'https://riyazahamed2646.wixsite.com/profilewebsite'; // Replace with your website URL
    }, 1000); // 1000 milliseconds = 1 seconds
}

// Add event listener to the login button
document.getElementById('login-button').addEventListener('click', function() {
    login(); // Call the login function when the button is clicked
});
