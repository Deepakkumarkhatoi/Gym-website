document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    if(name && email && phone) {
        alert('Registration successful!');
    } else {
        alert('Please fill out all fields.');
    }
});