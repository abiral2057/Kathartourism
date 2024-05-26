function showContent() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loadertext").style.display = "none";
    document.getElementById("content").style.display = "block";
  }

  // Event listener to call showContent function when the page finishes loading
  window.addEventListener("load", showContent);