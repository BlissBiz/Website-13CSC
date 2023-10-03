//################### API Code ######################//
const api_url = "https://retoolapi.dev/qVoSBo/data";
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

// Function to define innerHTML for HTML table
function show(data) {
  let element = "<industries-container'>"
  // Loop to access all rows
  for (let r of data) {
    element += `<div class='card'>`
    element += `<img class='ellipse' src='${r.image}'>`
    element += `<div class='description'>`
    element += `<p class="industry-name">${r.industry}</p>`;
    element += `<p class="description">${r.description}</p>`;
    element += `<p class="subjects">${r.subjects}</p>`;
    element += `</div>`;
    element += `</div>`;
  }

  // Setting innerHTML as tab variable

  document.getElementById("industries-container").innerHTML = element;
}

async function initialise_data() {
  // Our basis for checking whether our API url is newly generated is if it has an item with ID 1 (the dummy data generated by the tool)

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
}

function remove() {
  // TODO: REPLACE /1 with the id of the row you want to delete
  fetch(api_url + "/1", {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }
  )
}


function filter() {
  // TODO: REPLACE ?name=Sharlene Aery with the parameters of your filter
  // Example: ?id=3
  fetch(api_url + "?name=Sharlene Aery", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json())
    .then((json) => show(json));
}