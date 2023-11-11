document.getElementById('search-button').addEventListener('click', function(event) {
    event.preventDefault();
    fetch('superheroes.php')
        .then(response => response.text()) // handle response as text
        .then(data => {
            alert(data); // uncomment this line if you want to display the data in an alert
        })
        .catch(error => console.error('Error:', error));
});