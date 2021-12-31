// from data.js
var tableData = data;


// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");


// Iterate through each student/grade pair
data.forEach(({ datetime, city, state, country, shape, durationMinutes, comments }) => {

  //   // Append one table row per student/grade
  var row = tbody.append("tr");

  //   // append one cell for the student and one cell for the grade
  row.append("td").text(datetime);
  row.append("td").text(city);
  row.append("td").text(state);
  row.append("td").text(country);
  row.append("td").text(shape);
  row.append("td").text(durationMinutes);
  row.append("td").text(comments);
});

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var tbody = d3.select("tbody");
  tbody.selectAll("tr").remove();
  // Use D3 to select the table
  var table = d3.select("table");

  // Use D3 to set the table class to `table table-striped`
  table.attr("class", "table table-striped");
  
  //run if statement
  if (inputValue != "") {

    console.log(inputValue);
    var filteredData = data.filter(data => data.datetime === inputValue);
    console.log(filteredData)
    filteredData.forEach(({ datetime, city, state, country, shape, durationMinutes, comments }) => {

      var row = tbody.append("tr");
      // append the searched data 
      row.append("td").text(datetime);
      row.append("td").text(city);
      row.append("td").text(state);
      row.append("td").text(country);
      row.append("td").text(shape);
      row.append("td").text(durationMinutes);
      row.append("td").text(comments);
    });
  } else {
    
    data.forEach(({ datetime, city, state, country, shape, durationMinutes, comments }) => {

      //   // Append one table row per student/grade
      var row = tbody.append("tr");

      //   // append one cell for the student and one cell for the grade
      row.append("td").text(datetime);
      row.append("td").text(city);
      row.append("td").text(state);
      row.append("td").text(country);
      row.append("td").text(shape);
      row.append("td").text(durationMinutes);
      row.append("td").text(comments);
    });
  };
};