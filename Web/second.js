// Define a dataset of proficiencies
const prof = [
    "Information Security",
    "Data Sciences",
    "Machine Learning",
    "Computer Graphics",
    "Big Data and Visual Analytics",
    "Image Analysis and Processing",
    "Cloud Computing",
    "Human Computer Interaction",
    "Artificial Intelligence",
    "Social Computing"
  ];
  
  // Shortens document.getElementById
  function element(id) {
    return document.getElementById(id);
  }
  
  let allSearchData = "";
  
  // Gets each input's data starting from second input
  function getResults() {
    // Gets value of input
    let search = element("search-input").value;
    allSearchData = ""; // Clears data for each word typed
    
    hideSearchResults();
    clearSearchResults();
    clearSearchData();
    
    // Starts searching from the second input
    if (search.length > 1) {
      let counter = 0; // Counts to 10
      for (let x of prof) {
        if (counter < 10) {
          // Checks for similarities
          if (x.toLowerCase().includes(search.toLowerCase())) {
            // Populates the suggestion div
            element("search-results").innerHTML +=
              "<div class='search-item' onclick='displayData(\"" +
              x +
              "\")'><p>" +
              x +
              "</p></div>";
    
            counter++;
          }
        }
        if (x.toLowerCase().includes(search.toLowerCase())) {
          // Saves all the realated names
          allSearchData += "<p>" + x + "</p>";
        }
      }
      displaySearchResults();
    }
  }
  
  // Displays the suggestion div
  function displaySearchResults() {
    element("search-results").style.display = "block";
  }
  
  // Clears the suggestion div
  function clearSearchResults() {
    element("search-results").innerHTML = "";
  }
  
  // Hides the suggestion div
  function hideSearchResults() {
    element("search-results").style.display = "none";
  }
  
  // Displays names when you click a suggestion
  function displayData(prof) {
    hideSearchResults();
  
    // Navigate to a new URL based on the selected proficiency
    switch (prof) {
      case "Information Security":
        window.location = "InfoSec.html";
        break;
      case "Data Sciences":
        window.location = "datascience.html";
        break;
      case "Machine Learning":
        window.location = "machinelearning.html";
        break;
      case "Computer Graphics":
        window.location = "computergraphics.html";
        break;
      case "Big Data and Visual Analytics":
        window.location = "bigdata.html";
        break;
      case "Image Analysis and Processing":
        window.location = "imageanalysis.html";
        break;
      case "Cloud Computing":
        window.location = "cloud.html";
        break;
      case "Human Computer Interaction":
        window.location = "humancomputer.html";
        break;
      case "Artificial Intelligence":
        window.location = "ai.html";
        break;
      case "Social Computing":
        window.location = "socialcomputing.html";
        break;
    }
  }
  
  
      // Clears the search data div
      function clearSearchData() {
      element("search-data").innerHTML = "";
      }
      
      // Hides the suggestion div when the user clicks anywhere on the page
      document.onclick = function(event) {
      if (event.target !== element("search-input")) {
      hideSearchResults();
      }
      };
      
      // Attaches the getResults function to the search-input
      element("search-input").addEventListener("input", getResults);
      
      // Hides the suggestion div and clears the search data div when the user clicks on the search-input
      element("search-input").addEventListener("click", function() {
      hideSearchResults();
      clearSearchData();
      });
  
     