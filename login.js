<script>
    document.querySelector('.remove-btn').addEventListener('click', function() {
        alert('REMOVE button clicked!')
    });

    document.querySelector('.facebook-btn').addEventListener('click', function() {
        alert('Facebook login clicked!')
    });

    document.querySelector('.twitter-btn').addEventListener('click', function() {
        alert('Twitter login clicked!')
    });

    document.querySelector('.google-btn').addEventListener('click', function() {
        alert('Google login clicked!')
    });
</script>

// Initialize Firebase Database Reference
const database = firebase.database();

// Reference to the 'users' collection in the database
const usersRef = database.ref('users');

// Function to save user data
function saveUserData(username, email, password, city, state) {
  // Push the user data to the database
  usersRef.push({
    username,
    email,
    password, // Note: You should hash and salt the password before saving it
    city,
    state,
  });
}

// Handle user registration form submission
document.getElementById('userRegistrationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Get user input
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  
  // Save user data to Firebase
  saveUserData(username, email, password, city, state);
  
  // Clear the form
  document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('city').value = '';
  document.getElementById('state').value = '';
});