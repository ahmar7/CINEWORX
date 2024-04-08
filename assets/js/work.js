// Function to open the video modal
function openVideoModal(videoId) {
  var modal = document.getElementById("videoModal");
  var videoPlayer = document.getElementById("videoPlayer");
  // Clear any existing video content
  videoPlayer.innerHTML = "";
  // Create iframe element for Vimeo video
  var iframe = document.createElement("iframe");
  iframe.src = "https://player.vimeo.com/video/" + videoId + "?autoplay=1";
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "100%");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "");
  // Append iframe to videoPlayer div
  videoPlayer.appendChild(iframe);
  // Display the modal
  modal.style.display = "flex";
}

// Function to close the modal and stop video playback
function closeVideoModal() {
  var modal = document.getElementById("videoModal");
  var videoPlayer = document.querySelector("#videoPlayer iframe");
  // Pause the video if it exists
  if (videoPlayer) {
    videoPlayer.src = ""; // Stop the video by clearing the src attribute
  }
  // Hide the modal
  modal.style.display = "none";
}

// Assign closeVideoModal function to close button click event
document.getElementsByClassName("close")[0].onclick = closeVideoModal;

// Close modal when user clicks outside of it
window.onclick = function (event) {
  var modal = document.getElementById("videoModal");
  if (event.target == modal) {
    closeVideoModal();
  }
};
