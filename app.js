document.getElementById('search-button').addEventListener('click', function(event) {
    event.preventDefault();

    // Get the search query from the input field
    var searchQuery = document.getElementById('search-input').value;

    // Sanitize the search query to prevent any malicious code from being injected
    searchQuery = encodeURIComponent(searchQuery);

    // Send the search query as a query parameter in the AJAX request
    fetch('superheroes.php?query=' + searchQuery)
        .then(response => response.text()) // handle response as text
        .then(data => {
            // Display the result inside a div on your page
            document.getElementById('result').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
});

