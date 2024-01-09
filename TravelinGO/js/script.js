
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Display all the user's inputs from localStorage
function loadData() {
    // Get the user's inputs from localStorage as an array
    var inputs = JSON.parse(localStorage.getItem('inputs'));
  
    // Check if the array exists and is not empty
    if (inputs && inputs.length > 0) {
      // Loop through the array
      for (var i = 0; i < inputs.length; i++) {
        // Get the name, trip, feedback, and image from each input object
        var nameText = inputs[i].name;
        var tripText = inputs[i].trip;
        var feedbackText = inputs[i].feedback;
        var imageSrc = inputs[i].image;
  
        // Create a message container element
        var messageContainer = document.createElement('div');
        messageContainer.classList.add('message');
  
        // Create a paragraph element for the text feedback
        var message = document.createElement('p');
        message.innerText ='NAME:'+ nameText + '\n TRIP: ' + tripText + '\nFeed back:\n' + feedbackText;
        messageContainer.appendChild(message);
  
        // Check if an image is available
        if (imageSrc) {
          // Create an image element and set the source to the stored image
          var image = document.createElement('img');
          image.src = imageSrc;
          messageContainer.appendChild(image);
        }
  
        // Append the message container to the message container
        document.getElementById('messageContainer').appendChild(messageContainer);
      }
    }
  }
  
   // Run the loadData function when the page loads
   window.onload = loadData;
  
   // Save the user's input to localStorage as an array
   function saveData() {
    var nameText = document.getElementById('name').value; // Get the name text
    var tripText = document.getElementById('trip').value; // Get the trip text
    var feedbackText = document.getElementById('feedback').value; // Get the feedback text
    var fileInput = document.getElementById('photo'); // Get the file input
    var file = fileInput.files[0]; // Get the selected file
  
    if (feedbackText.trim() !== '' && nameText.trim() !== '' && tripText.trim() !== '') { // Check if all fields are filled
      // Create an input object with the name, planet, feedback, and image
      var input = {
        name: nameText,
        trip: tripText,
        feedback: feedbackText,
        image: null // Placeholder for the image
      };
  
      // Read the file as a data URL
      var reader = new FileReader();
      reader.onload = function (e) {
        input.image = e.target.result; // Set the image data URL in the input object
  
        // Get the existing inputs from localStorage as an array
        var inputs = JSON.parse(localStorage.getItem('inputs'));
  
        // Check if the array exists
        if (inputs) {
          // Push the new input to the array
          inputs.push(input);
        } else {
          // Create a new array with the input
          inputs = [input];
        }
  
        // Store the updated array in localStorage
        localStorage.setItem('inputs', JSON.stringify(inputs));
  
        // Create a message element with the user's input and image
        var messageContainer = document.createElement('div');
        messageContainer.classList.add('message');
  
        var message = document.createElement('p');
        message.innerText = nameText + '\n TRIP: ' + tripText + '\n feed back:\n' + feedbackText; // Add the name and planet to the message
        messageContainer.appendChild(message);
  
        // Create an image element and set the source to the uploaded image
        var image = document.createElement('img');
        image.src = input.image;
        messageContainer.appendChild(image);
  
        // Append the message element to the message container
        document.getElementById('feedback-list').appendChild(messageContainer);
  
        // Clear the text fields and file input
        document.getElementById('name').value = '';
        document.getElementById('trip').value = '';
        document.getElementById('feedback').value = '';
        fileInput.value = '';
      };
  
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  }
  
   // Add a click event listener to the share button
   document.getElementById('shareButton').addEventListener('click', saveData);
  
   // Delete the last input from localStorage and the message container

          // Display Image
          function displayImage() {
            var fileInput = document.getElementById("imageInput");
            var file = fileInput.files[0];
            var reader = new FileReader();
  
            reader.onload = function (e) {
                var imageContainer = document.createElement("div");
                imageContainer.className = "image-container";
  
                var image = document.createElement("img");
                image.src = e.target.result;
                imageContainer.appendChild(image);
  
                document.getElementById("imageArea").appendChild(imageContainer);
  
                // Store the data URL in local storage
                var storedImages = JSON.parse(localStorage.getItem("userImages")) || [];
                storedImages.push(e.target.result);
                localStorage.setItem("userImages", JSON.stringify(storedImages));
            };
  
            reader.readAsDataURL(file);
        }
       
        function saveData() {
            var feedbackText = document.getElementById('feedback').value; // Get the feedback text
            var nameText = document.getElementById('name').value; // Get the name text
            var tripText = document.getElementById('trip').value; // Get the trip text
            var fileInput = document.getElementById('imageInput'); // Get the file input
            var file = fileInput.files[0]; // Get the selected file
          
            if (feedbackText.trim() !== '' && nameText.trim() !== '' && tripText.trim() !== '') { // Check if all fields are filled
              // Create an input object with the name, trip, feedback, and image
              var input = {
                name: nameText,
                trip: tripText,
                feedback: feedbackText,
                image: null // Placeholder for the image
              };
          
              // Read the file as a data URL
              var reader = new FileReader();
              reader.onload = function (e) {
                input.image = e.target.result; // Set the image data URL in the input object
          
                // Get the existing inputs from localStorage as an array
                var inputs = JSON.parse(localStorage.getItem('inputs'));
          
                // Check if the array exists
                if (inputs) {
                  // Push the new input to the array
                  inputs.push(input);
                } else {
                  // Create a new array with the input
                  inputs = [input];
                }
          
                // Store the updated array in localStorage
                localStorage.setItem('inputs', JSON.stringify(inputs));
          
                // Create a message element with the user's input and image
                var messageContainer = document.createElement('div');
                messageContainer.classList.add('message');
          
                var message = document.createElement('p');
                message.innerText = nameText + '\n TRIP: ' + tripText + '\nfeed back:\n' + feedbackText; // Add the name and trip to the message
                messageContainer.appendChild(message);
          
                // Create an image element and set the source to the uploaded image
                var image = document.createElement('img');
                image.src = input.image;
                messageContainer.appendChild(image);
          
                // Append the message element to the message container
                document.getElementById('messageContainer').appendChild(messageContainer);
          
                // Clear the text fields and file input
                document.getElementById('feedback').value = '';
                document.getElementById('name').value = '';
                document.getElementById('trip').value = '';
                fileInput.value = '';
                
              };
          
              reader.readAsDataURL(file); // Read the file as a data URL
            }
          }