axios.get('navbar.html')
  .then(response => {
    // Insert the navbar HTML into the container div
    document.getElementById('navbar-container').innerHTML = response.data;
  })
  .catch(error => console.error('Error loading navbar:', error));