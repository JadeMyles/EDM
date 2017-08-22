var config = {
    apiKey: "AIzaSyCZ7chAeB6bz4l6ZONqHTaviTK4h4sX7A4",
    authDomain: "edm-database.firebaseapp.com",
    databaseURL: "https://edm-database.firebaseio.com",
    projectId: "edm-database",
    storageBucket: "",
    messagingSenderId: "385705953457"
  };
  
  firebase.initializeApp(config);

  var database = firebase.database();


$("#button_submit").on("click", function() {

    var name = $("#name").val();
    var role = $("#role").val();
    var startDate = $("#startDate").val();
    var monthlyRate = $("#monthlyRate").val();

	database.ref().push({
		"name" : name,
		"role" : role,
		"startDate" : startDate,
		"monthlyRate" : monthlyRate
	});

});

var lastEmployee = function()