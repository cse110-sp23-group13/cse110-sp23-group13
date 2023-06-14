//feedback.js
document.getElementById("suggestionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the user's suggestion
    var suggestion = document.getElementById("suggestion").value;
    
    // Process the suggestion (you can replace this with your own logic)
    console.log("Received suggestion:", suggestion);
    
    // Clear the input field
    document.getElementById("suggestion").value = "";
    
    // Display a thank you message in a popup
    alert("Thank you for your submission, but we don't actually have a backend set up to recieve it!");
  });