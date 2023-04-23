
//grab and define variables from the html
const submitBtn = document.getElementById("submit-btn");
const editBtn= document.getElementById("edit-btn");
const updateBtn= document.getElementById("update-btn")
const editFields= document.getElementById("edit-fields")
const inputFields = document.getElementById("input-fields");
const publishBtn = document.getElementById("publish-btn");
const tableBody = document.querySelector("#Tbl1 tbody");

// event listener for submit button, when clicked it unhides the input fields for the publish button and hides the fields for the update button if they are currently displayed
submitBtn.addEventListener("click", () => {
  editFields.style.display = "none";
  inputFields.style.display = "block";
});
// event listener for the edit button, when clicked it unhides the input fields for the update button and hides the fields for the publish button if they are currently displayed
editBtn.addEventListener("click", () => {
    inputFields.style.display = "none";
    editFields.style.display = "block";
});

//event listener for update button 
updateBtn.addEventListener("click", () => {
  //get the input values
  const imageEdit = document.getElementById("image-edit").value;
  const titleEdit = document.getElementById("title-edit").value;
  const mediumEdit = document.getElementById("medium-edit").value;
  const dateEdit = document.getElementById("date-edit").value;
  const rowId = document.getElementById("row-id").value;
  // get the table row to be edited
  const row = document.getElementById("tableRow" + rowId);
  
  // update the table cells with the input values
  row.cells[1].innerHTML = `<img src="${imageEdit}">`;
  row.cells[2].innerHTML = titleEdit;
  row.cells[3].innerHTML = mediumEdit;
  row.cells[4].innerHTML = dateEdit;

});

// event listener for publish button 
publishBtn.addEventListener("click", () => {
  //assign cell tags to variables  
  const newRow = document.createElement("tr");
  const idCell = document.createElement("td");

  //assigns the text content of the idCell element to be the length of the tableBody children (the number of rows in the table) plus 1. This is often used to assign unique IDs to table rows or other HTML elements.
  idCell.textContent = tableBody.children.length + 1;

  //appends the idCell element as a child node of the newRow element. This adds the idCell element as the first cell in the new row.
  newRow.appendChild(idCell);

  //This creates a new td element that will hold the image.
  const imageCell = document.createElement("td");
  //This creates a new img element that will display the image.
  const imgElement = document.createElement("img");
  // This sets the src attribute of the img element to the value of the image-input field in the form, which contains the URL of the image to be displayed.
  imgElement.src = document.getElementById("image-input").value;
  //sets the alt attribute of the img element to an empty string. This attribute provides alternative text for the image in case it cannot be displayed for some reason.
  imgElement.alt = "";
  //appends the img element to the td element.
  imageCell.appendChild(imgElement);
  // appends the td element containing the image to a new table row, which will be added to the table later.
  newRow.appendChild(imageCell);

  //same thing, makes a new cell, adds the content of the title field, appends the cell to the new row
  const titleCell = document.createElement("td");
  titleCell.textContent = document.getElementById("title-input").value;
  newRow.appendChild(titleCell);


  //makes a new cell, adds the content of the medium field, appends the cell to the new row
  const mediumCell = document.createElement("td");
  mediumCell.textContent = document.getElementById("medium-input").value;
  newRow.appendChild(mediumCell);

  //makes a new cell, adds the content of the date field, appends the cell to the new row, ideally i would make this one a date input field 
  const dateCell = document.createElement("td");
  dateCell.textContent = document.getElementById("date-input").value;
  newRow.appendChild(dateCell);

  //add the new row to the table
  tableBody.appendChild(newRow);

});
