// Function to display error messages in a modal
function displayErrorModal(errorMessages) {
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");
  const errorMessagesContainer = document.getElementById(
    "errorMessagesContainer"
  );

  // Clear existing messages
  errorMessagesContainer.innerHTML = "";

  // Add error messages to the modal
  errorMessages.forEach((message) => {
    const errorMessageElement = document.createElement("p");
    errorMessageElement.textContent = message;
    errorMessagesContainer.appendChild(errorMessageElement);
  });

  // Display the modal
  modal.style.display = "block";

  // Close the modal when clicking on the close button
  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close the modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}
