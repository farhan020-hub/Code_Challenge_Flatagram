// your code here
// first deliverable of showing image and contents recieved from the server
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the HTML elements
  const cardTitle = document.getElementById("card-title");
  const cardImage = document.getElementById("card-image");
  const likeCount = document.getElementById("like-count");
  const commentsList = document.getElementById("comments-list");

  // Make a GET request to retrieve the image data
  fetch("http://localhost:3000/images/1")
    .then((resp) => resp.json())
    .then((imageData) => {
      // Update the HTML elements with the image data
      cardTitle.textContent = imageData.title;
      cardImage.src = imageData.image;
      cardImage.alt = imageData.title;
      likeCount.textContent = `${imageData.likes} likes`;

      // Clear the existing comments
      commentsList.innerHTML = "";

      // Iterate through the comments and add them to the comments list
      imageData.comments.forEach((comment) => {
        const commentItem = document.createElement("li");
        commentItem.textContent = comment.content;
        commentsList.appendChild(commentItem);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// second deliverable of clicking on the heart icon to increase image likes on the page.
document.addEventListener("DOMContentLoaded", () => {
  const likeButton = document.getElementById("like-button");
  const likeCount = document.getElementById("like-count");

  likeButton.addEventListener("click", () => {
    // Handle the like button click event
    increaseLikes();
  });

  function increaseLikes() {
    // Get the current like count and convert it to a number
    let currentLikes = parseInt(likeCount.textContent, 10);

    // Incrementing the like count
    currentLikes++;

    // Update the displayed like count
    likeCount.textContent = `${currentLikes} likes`;
  }
});

// third deliverable of adding a new comment to the page when the comment form is submitted.
document.addEventListener("DOMContentLoaded", () => {

  const commentForm = document.getElementById("comment-form");
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get the comment input element
    const commentInput = document.getElementById("comment");

    // Retrieve the comment text from the input
    const newCommentText = commentInput.value;

    // Check if the comment is not empty
    if (newCommentText.trim() !== "") {
      // Call a function to add the new comment to the page
      addComment(newCommentText);

      // Clear the comment input field
      commentInput.value = "";
    }
  });

//Bonus deliverable of removing a comment from the page when it is clicked 
  function addComment(commentText) {
    // Get the comments list element
    const commentsList = document.getElementById('comments-list');
  
    // Create a new list item for the comment
    const newComment = document.createElement('li');
    newComment.textContent = commentText;
  
   
    // Append the new comment to the comments list
    commentsList.appendChild(newComment);
  }
  
});
