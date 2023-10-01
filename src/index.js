document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const cardTitle = document.getElementById('card-title');
    const cardImage = document.getElementById('card-image');
    const likeCount = document.getElementById('like-count');
    const commentsList = document.getElementById('comments-list');
    
    // Make a GET request to retrieve the image data
    fetch('http://localhost:3000/images/1') // Replace with your actual server endpoint
      .then((response) => response.json())
      .then((imageData) => {
        // Update the HTML elements with the image data
        cardTitle.textContent = imageData.title;
        cardImage.src = imageData.image;
        cardImage.alt = imageData.title;
        likeCount.textContent = `${imageData.likes} likes`;
        
        // Clear the existing comments
        commentsList.innerHTML = '';
        
        // Iterate through the comments and add them to the comments list
        imageData.comments.forEach((comment) => {
          const commentItem = document.createElement('li');
          commentItem.textContent = comment.content;
          commentsList.appendChild(commentItem);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
  