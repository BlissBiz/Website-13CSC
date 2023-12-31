//################### API Code ######################//
const api_url = "https://retoolapi.dev/rE8Y8d/data";
//initialise_data();
get_api(api_url);

// Gets the data using the API
async function get_api(api_url) {
  // Storing response
  const response = await fetch(api_url);

  // Storing data in form of JSON
  var data = await response.json();

  //data = await initialise_data()
  show(data);
}

// Function to define innerHTML for industries container
function show(data) {
  let element = `<div class='industries-container'>`
  // Loop to access all rows
  for (let r of data) {
    element += `<div class='card`;
    let list_subjects = r.subjects.split(",");
    for (let i = 0; i < list_subjects.length; i++) {
      element += " " + list_subjects[i];
    }
    element += `'>`;
    element += `<img class='ellipse' src='${r.image}'>`;
    element += `<div class='details'>`;
    element += `<p class="industry-name">${r.industry}</p>`;
    element += `<p class="description">${r.description}</p>`;
    element += `<p class="subjects">Recommended Subjects: ${r.subjects}</p>`;
    element += `</div>`;
    element += `</div>`;
  }

  // Setting innerHTML as tab variable
  $("#industries-container").html(element);
  // Call the filterElementsByClass function with the desired parameter (e.g., "all")
  filterSelection("all");
}

async function initialise_data() {
  // Checking whether our API url is newly generated is if it has an item with ID 1 

  // Storing response
  const response = await fetch(api_url);

  // Storing data in form of JSON
  var data = await response.json();

  var has_dummy_data = data.some(function(item) { return item.id == 1 });

  if (has_dummy_data) {
    for (var item of data_setup) {
      console.log(item)
      await fetch(api_url, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
  }
  remove(1)
}

//Showing Data with a parameter
function filter() {
  $.get(api_url + "?id=4", function(data) {
    show(data);
  });
}

/*********************** FILTER FUNCTIONS ***********************/
// Function to filter elements based on a class
function filterSelection(filterClass) {
  var cards = document.getElementsByClassName("card");
  if (filterClass === "all") {
    console.log("Showing all");
    $(".card").addClass("show");
  } else {
    $(".card").removeClass("show")
    $("." + filterClass).addClass("show");
  }
}

// Function to add a class to an element
function addClass(element, className) {
  var currentClasses = element.className.split(" ");
  var classesToAdd = className.split(" ");
  for (var i = 0; i < classesToAdd.length; i++) {
    if (currentClasses.indexOf(classesToAdd[i]) === -1) {
      element.className += " " + classesToAdd[i];
    }
  }
}

// Function to remove a class from an element
function removeClass(element, className) {
  var currentClasses = element.className.split(" ");
  var classesToRemove = className.split(" ");
  for (var i = 0; i < classesToRemove.length; i++) {
    while (currentClasses.indexOf(classesToRemove[i]) > -1) {
      currentClasses.splice(currentClasses.indexOf(classesToRemove[i]), 1);
    }
  }
  element.className = currentClasses.join(" ");
}

// Function to set the active button
function setActiveButton() {
  var buttonContainer = document.getElementById("button-container");
  var buttons = buttonContainer.getElementsByClassName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      var currentActive = document.getElementsByClassName("active");
      currentActive[0].className = currentActive[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

// Call the setActiveButton function to add click event listeners to buttons
setActiveButton();