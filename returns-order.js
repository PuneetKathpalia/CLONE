document.getElementById('returns-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const orderId = document.getElementById('orderId').value;
    const reason = document.getElementById('reason').value;

    // Simulate form submission
    if (orderId && reason) {
        document.getElementById('response').innerHTML = 'Your return request has been successfully submitted!';
        document.getElementById('response').style.color = '#28a745'; // Success color

        // Optionally clear the form fields
        document.getElementById('returns-form').reset();
    } else {
        document.getElementById('response').innerHTML = 'Please fill in all fields.';
        document.getElementById('response').style.color = '#dc3545'; // Error color
    }
});
