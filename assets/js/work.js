//
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

// Function to close the modal
document.getElementsByClassName("close")[0].onclick = function () {
  var modal = document.getElementById("videoModal");
  // Hide the modal
  modal.style.display = "none";
};

// Close modal when user clicks outside of it
window.onclick = function (event) {
  var modal = document.getElementById("videoModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
