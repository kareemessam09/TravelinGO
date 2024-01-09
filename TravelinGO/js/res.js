function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function submitBooking() {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const destination = document.getElementById('destination').value;
  const dates = document.getElementById('dates').value;
  const travelers = document.getElementById('travelers').value;
  
  // Display the booking information on the page
  const bookingInfo = `
    <h2>Booking Information:</h2>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    <p><strong>Destination:</strong> ${destination}</p>
    <p><strong>Dates:</strong> ${dates}</p>
    <p><strong>Number of Travelers:</strong> ${travelers}</p>
  `;
  
  document.getElementById('bookingDetails').innerHTML = bookingInfo;

  // Clear form inputs after submission
  document.getElementById('fullName').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('destination').value = '';
  document.getElementById('dates').value = '';
  document.getElementById('travelers').value = '';
  document.getElementById('bookingDetails').innerHTML = ''; // Clear the booking details section
}
