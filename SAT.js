var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
if(this.readyState == 4 && this.status == 200)
{
document.getElementById("demo").innerHTML =this.responseText;
}
};
xhttp.open("GET","SAT.php",true);
xhttp.send();
// Define an empty array to store the SAT results
let satResults = [];

// Function to insert data into the satResults array
function insertData() {
  // Get the form data
  const name = document.querySelector('#insert-data #name').value;
  const address = document.querySelector('#insert-data #address').value;
  const city = document.querySelector('#insert-data #city').value;
  const country = document.querySelector('#insert-data #country').value;
  const pincode = document.querySelector('#insert-data #pincode').value;
  const score = Number(document.querySelector('#insert-data #score').value);

  // Calculate whether the student passed or failed
  const passed = score > 30;

  // Create a new object to represent the SAT result
  const satResult = { name, address, city, country, pincode, score, passed };

  // Add the new SAT result to the satResults array
  satResults.push(satResult);

  // Clear the form fields
  document.querySelector('#insert-data #name').value = '';
  document.querySelector('#insert-data #address').value = '';
  document.querySelector('#insert-data #city').value = '';
  document.querySelector('#insert-data #country').value = '';
  document.querySelector('#insert-data #pincode').value = '';
  document.querySelector('#insert-data #score').value = '';

  // Show a success message
  alert('Data inserted successfully');
}

// Function to view all the data in JSON format
function viewAllData() {
  // Get the pre element to display the data
  const dataEl = document.querySelector('#view-all-data #data');

  // Convert the satResults array to JSON format
  const jsonData = JSON.stringify(satResults, null, 2);

  // Display the data in the pre element

  dataEl.textContent = jsonData;

}

// Function to get the rank of a student by name
function getRank() {
  // Get the form data
  const name = document.querySelector('#get-rank #name').value;

  // Find the student in the satResults array
  const student = satResults.find(s => s.name === name);

  // If the student is not found, show an error message
  if (!student) {
    alert('Student not found');
    return;
  }

  // Calculate the rank of the student based on the score
  const rank = satResults.filter(s => s.score > student.score).length + 1;

  // Display the rank on the page
  document.querySelector('#get-rank #rank').textContent = rank;
}

// Function to update the score of a student by name
function updateScore() {
  // Get the form data
  const name = document.querySelector('#update-score #name').value;
  const newScore = Number(document.querySelector('#update-score #score').value);

  // Find the student in the satResults array
  const student = satResults.find(s => s.name === name);

  // If the student is not found, show an error message
  if (!student) {
    alert('Student not found');
    return;
  }

  // Update the student's score
  student.score = newScore;
  student.passed = newScore > 30;

  // Show a success message
  alert('Score updated successfully');
}

// Function to delete a record by name
function deleteRecord() {
  // Get the form
const name = document.querySelector('#delete-record #name').value;

// Find the index of the student in the satResults array
const index = satResults.findIndex(s => s.name === name);

// If the student is not found, show an error message
if (index === -1) {
alert('Student not found');
return;
}

// Remove the student from the satResults array
satResults.splice(index, 1);

// Show a success message
alert('Record deleted successfully');
}

// Add event listeners to the form submissions
document.querySelector('#insert-data').addEventListener('submit', e => {
e.preventDefault();
insertData();
});

document.querySelector('#view-all-data').addEventListener('submit', e => {
e.preventDefault();
viewAllData();
});

document.querySelector('#get-rank').addEventListener('submit', e => {
e.preventDefault();
getRank();
});

document.querySelector('#update-score').addEventListener('submit', e => {
e.preventDefault();
updateScore();
});

document.querySelector('#delete-record').addEventListener('submit', e => {
e.preventDefault();
deleteRecord();
});