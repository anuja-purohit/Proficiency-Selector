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
    element("search-data").innerHTML = "<p>" + prof + "</p>";
    hideSearchResults();
  
    // Displays sample data for the selected proficiency
    switch (prof) {
      case "Information Security":
        element("search-data").innerHTML +=
          "<p>Proficiency in Information security consist the following major disciplines:5Th sem DATA COMPRESSION\n 5Th sem DATA COMPRESSION Lab\n 6Th sem DIGITAL FORENSICS\n6Th sem DIGITAL FORENSICS LAB\n6TH sem INFORMATION SECURITY\n6TH sem INFORMATION SECURITY LAB\n7TH sem CRYTOGRAPHY & NETWORK SECURITY \n7TH sem CRYTOGRAPHY & NETWORK SECURITY LAB\n7TH sem INFORMATION AUDITING & RISK MANAGEMENT \n8TH sem ETHICS AND INFORMATION SECURITY </p>";
        break;
      case "Data Sciences":
        element("search-data").innerHTML +=
        "<p>Proficiency in Data Sciences consist the following major disciplines:5Th sem DATA COMPRESSION\n 5Th sem DATA COMPRESSION Lab\n 6Th sem DIGITAL FORENSICS\n6Th sem DIGITAL FORENSICS LAB\n6TH sem INFORMATION SECURITY\n6TH sem INFORMATION SECURITY LAB\n7TH sem CRYTOGRAPHY & NETWORK SECURITY \n7TH sem CRYTOGRAPHY & NETWORK SECURITY LAB\n7TH sem INFORMATION AUDITING & RISK MANAGEMENT \n8TH sem ETHICS AND INFORMATION SECURITY </p>";
        break;
  
      case "Machine Learning":
        element("search-data").innerHTML +=
        "<p>Proficiency in ML consist the following major disciplines:5Th sem DATA COMPRESSION\n 5Th sem DATA COMPRESSION Lab\n 6Th sem DIGITAL FORENSICS\n6Th sem DIGITAL FORENSICS LAB\n6TH sem INFORMATION SECURITY\n6TH sem INFORMATION SECURITY LAB\n7TH sem CRYTOGRAPHY & NETWORK SECURITY \n7TH sem CRYTOGRAPHY & NETWORK SECURITY LAB\n7TH sem INFORMATION AUDITING & RISK MANAGEMENT \n8TH sem ETHICS AND INFORMATION SECURITY </p>";
        break;
  
      case "Computer Graphics":
        element("search-data").innerHTML +=
        "<p>Proficiency in Computer Graphics consist the following major disciplines:5Th sem DATA COMPRESSION\n 5Th sem DATA COMPRESSION Lab\n 6Th sem DIGITAL FORENSICS\n6Th sem DIGITAL FORENSICS LAB\n6TH sem INFORMATION SECURITY\n6TH sem INFORMATION SECURITY LAB\n7TH sem CRYTOGRAPHY & NETWORK SECURITY \n7TH sem CRYTOGRAPHY & NETWORK SECURITY LAB\n7TH sem INFORMATION AUDITING & RISK MANAGEMENT \n8TH sem ETHICS AND INFORMATION SECURITY </p>";
        break;
  
      case "Big Data and Visual Analytics":
        element("search-data").innerHTML +=
        "<p>Proficiency in Big Data and visiualization consist the following major disciplines:5Th sem DATA COMPRESSION\n 5Th sem DATA COMPRESSION Lab\n 6Th sem DIGITAL FORENSICS\n6Th sem DIGITAL FORENSICS LAB\n6TH sem INFORMATION SECURITY\n6TH sem INFORMATION SECURITY LAB\n7TH sem CRYTOGRAPHY & NETWORK SECURITY \n7TH sem CRYTOGRAPHY & NETWORK SECURITY LAB\n7TH sem INFORMATION AUDITING & RISK MANAGEMENT \n8TH sem ETHICS AND INFORMATION SECURITY </p>";
        break;
      case "Image Analysis and Processing":
        element("search-data").innerHTML +=
        "<p>Proficiency in Image analysis and Processing consist the following major disciplines:5Th sem DATA COMPRESSION\n 5Th sem DATA COMPRESSION Lab\n 6Th sem DIGITAL FORENSICS\n6Th sem DIGITAL FORENSICS LAB\n6TH sem INFORMATION SECURITY\n6TH sem INFORMATION SECURITY LAB\n7TH sem CRYTOGRAPHY & NETWORK SECURITY \n7TH sem CRYTOGRAPHY & NETWORK SECURITY LAB\n7TH sem INFORMATION AUDITING & RISK MANAGEMENT \n8TH sem ETHICS AND INFORMATION SECURITY </p>";
        break;
        case "Cloud Computing":
          element("search-data").innerHTML +=
          "<p>Proficiency in Cloud Computing consist the following major disciplines:5Th sem DATA COMPRESSION\n 5Th sem DATA COMPRESSION Lab\n 6Th sem DIGITAL FORENSICS\n6Th sem DIGITAL FORENSICS LAB\n6TH sem INFORMATION SECURITY\n6TH sem INFORMATION SECURITY LAB\n7TH sem CRYTOGRAPHY & NETWORK SECURITY \n7TH sem CRYTOGRAPHY & NETWORK SECURITY LAB\n7TH sem INFORMATION AUDITING & RISK MANAGEMENT \n8TH sem ETHICS AND INFORMATION SECURITY </p>";
          break;
        
        case "Human Computer Interaction":
          element("search-data").innerHTML +=
          "<p>Proficiency in Human Computer Interaction consist the following major disciplines:5Th sem DATA COMPRESSION\n 5Th sem DATA COMPRESSION Lab\n 6Th sem DIGITAL FORENSICS\n6Th sem DIGITAL FORENSICS LAB\n6TH sem INFORMATION SECURITY\n6TH sem INFORMATION SECURITY LAB\n7TH sem CRYTOGRAPHY & NETWORK SECURITY \n7TH sem CRYTOGRAPHY & NETWORK SECURITY LAB\n7TH sem INFORMATION AUDITING & RISK MANAGEMENT \n8TH sem ETHICS AND INFORMATION SECURITY </p>";
        break;
        
        case "Artificial Intelligence":
          element("search-data").innerHTML +=
          "<p>Proficiency in AI consist the following major disciplines:5Th sem DATA COMPRESSION\n 5Th sem DATA COMPRESSION Lab\n 6Th sem DIGITAL FORENSICS\n6Th sem DIGITAL FORENSICS LAB\n6TH sem INFORMATION SECURITY\n6TH sem INFORMATION SECURITY LAB\n7TH sem CRYTOGRAPHY & NETWORK SECURITY \n7TH sem CRYTOGRAPHY & NETWORK SECURITY LAB\n7TH sem INFORMATION AUDITING & RISK MANAGEMENT \n8TH sem ETHICS AND INFORMATION SECURITY </p>";
          break;
        case "Social Computing":
          element("search-data").innerHTML +=
          "<p>Proficiency in Social Computing consist the following major disciplines:5Th sem DATA COMPRESSION\n 5Th sem DATA COMPRESSION Lab\n 6Th sem DIGITAL FORENSICS\n6Th sem DIGITAL FORENSICS LAB\n6TH sem INFORMATION SECURITY\n6TH sem INFORMATION SECURITY LAB\n7TH sem CRYTOGRAPHY & NETWORK SECURITY \n7TH sem CRYTOGRAPHY & NETWORK SECURITY LAB\n7TH sem INFORMATION AUDITING & RISK MANAGEMENT \n8TH sem ETHICS AND INFORMATION SECURITY </p>";
        break;
        
        default:
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
  
      function checkit(){
        $.post( "ajax/test.jsp",
            $('#form').serialize(),
            function( data ) {
            if(data == "success"){
                alert("success");
            }
        });
    }