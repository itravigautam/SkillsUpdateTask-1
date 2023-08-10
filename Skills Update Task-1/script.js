// Generate a random unique ID
function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  
  // Handle form submission
  document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var collegeCompany = document.getElementById('collegeCompany').value;
  
    // Generate ID
    var id = generateUniqueId();
  
    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `
      <h2>Registration Successful!</h2>
      <p>ID: ${id}</p>
      <p>Name: ${name}</p>
      <p>Age: ${age}</p>
      <p>Email: ${email}</p>
      <p>Address: ${address}</p>
      <p>College/Company: ${collegeCompany}</p>
    `;
  });
  