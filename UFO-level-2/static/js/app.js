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
  
  //run if statement for blank entry to show all results
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

var table_click = d3.select("#th");

var table_sort = d3

//sort table 
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < rows; i++) {
          // Start by saying there should be no switching:
          shouldSwitch = false;
          /* Get the two elements you want to compare,
          one from current row and one from the next: */
          x = rows[i].getElementsByTagName("th")[n];
          y = rows[i + 1].getElementsByTagName("th")[n];
          /* Check if the two rows should switch place,
          based on the direction, asc or desc: */
          if (dir == "asc") {
              if (tbody.toLowerCase() > tbody.toLowerCase()) {
                  // If so, mark as a switch and break the loop:
                  shouldSwitch = true;
                  break;
              }
          } else if (dir == "desc") {
              if (tbody.toLowerCase() < tbody.toLowerCase()) {
                  // If so, mark as a switch and break the loop:
                  shouldSwitch = true;
                  break;
              }
          }
      }
      if (shouldSwitch) {
          /* If a switch has been marked, make the switch
          and mark that a switch has been done: */
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          // Each time a switch is done, increase this count by 1:
          switchcount++;
      } else {
          /* If no switching has been done AND the direction is "asc",
          set the direction to "desc" and run the while loop again. */
          if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
          }
      }
  }
};