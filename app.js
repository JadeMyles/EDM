// Configure Firebase
var config = {
    apiKey: "AIzaSyCZ7chAeB6bz4l6ZONqHTaviTK4h4sX7A4",
    authDomain: "edm-database.firebaseapp.com",
    databaseURL: "https://edm-database.firebaseio.com",
    projectId: "edm-database",
    storageBucket: "",
    messagingSenderId: "385705953457"
};
  
firebase.initializeApp(config);

// Create a variable for easy reference
var database = firebase.database();

// When the user clicks on Submit
$("#button_submit").on("click", function() {
  // I get the information from the broswer
  var name = $("#name").val();
  var role = $("#role").val();
  var startDate = $("#startDate").val();
  var monthlyRate = $("#monthlyRate").val();

  // Add the information to the database
	database.ref().push({
		"name" : name,
		"role" : role,
		"startDate" : startDate,
		"monthlyRate" : monthlyRate
	});

  // Display the employees on the browser
  displayEmployees();
});


var displayEmployees = function() {
  // Execute this function once
  database.ref().once("value", function(snapshot) {
    // Get the database
    var employees = snapshot.val();

    // For each employee
    $.each(employees, function(index, value) {
      // Create a new table row and display the employee's information
      
      // TODO: fix append so that we don't repeatedly display the employee's information
      $("tbody").append(`<tr>
                           <td>${value.name}</td>
                           <td>${value.role}</td>
                           <td>${value.startDate}</td>
                           <td></td>
                           <td>${value.monthlyRate}</td>
                           <td></td>
                         </tr>`);
    });
  });
}