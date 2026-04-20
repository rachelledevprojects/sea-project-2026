// Snap SEA 2026 Project 
// by Rachelle Martinez
// This project show manipulation of data in array and objects

function showAllBooks() {
  filteredResult = data.books;
  showBooks(data.books);
}

function showBooks(books) {
  const container = document.getElementById("card-container");
  const template = document.getElementById("card-template");
  const resultCount = document.getElementById("result-count");

  resultCount.textContent = "Showing " + books.length + " Results..";

  container.innerHTML = "";
  books.forEach(book => {
    //console.log(book);
    
    //create new card for every book
    const card = template.cloneNode(true);
    card.removeAttribute("id");
    card.style.display = "block";

    card.querySelector(".book-title").textContent = book.title;
    card.querySelector(".book-author").textContent = "by "+book.author;
    card.querySelector(".book-subjects span").textContent = book.subjects.join(", ");
    card.querySelector(".book-grades span").textContent = book.gradeLevels.join(", ");

    showCurriculum(card, book.curriculumIds);
    showResources(card, book.resourceIds);

    //append the card to the container;
    container.appendChild(card);
  });
}

//function to show curriculums associated with the book
function showCurriculum(card, curriculumcIds) {
  const curriculums = data.curriculums;
  let cnames = "";

  curriculumcIds.forEach(id => {
    const curriculum = curriculums.find(c => c.id == id);
    cnames = cnames + curriculum.name + " "
  });

  card.querySelector(".book-curriculums span").textContent = cnames;
    //console.log(curriculum);
}

//function to show resources associated with the book
function showResources(card, resourceIds) {
  const resources = data.resources;
  const resourceList = card.querySelector(".resource-list");
  resourceList.innerHTML = "";

  resourceIds.forEach(id => {
    const resource = resources.find(r => r.id == id);
    const li = document.createElement("li");
    li.textContent = resource.title;
    resourceList.appendChild(li);
  });  
}

//triggered when search button is clicked
function findAll() {
  const searchVal = document.getElementById('search-input').value.toLowerCase();
  //console.log(searchVal);

  //find based on curriculum name
  const cIds = data.curriculums
              .filter(c => c.name.toLowerCase().includes(searchVal))
              .map(c => c.id);
  //console.log(cIds); 

  //find based on resource name
  const rIds = data.resources
              .filter(r => r.title.toLowerCase().includes(searchVal))
              .map(r => r.id);
  //console.log(rIds); 

  //find by book title, author, subject, curriname, resource
  //assign it to gloval var to be able to delete later
  filteredResult = data.books.filter(b=> 
    b.title.toLowerCase().includes(searchVal)
    || b.author.toLowerCase().includes(searchVal)
    || b.subjects.some(s => s.toLowerCase().includes(searchVal))
    || b.curriculumIds.some(c => cIds.includes(c))
    || b.resourceIds.some(r => rIds.includes(r))
  );

  //console.log(filteredResult.length);
  showBooks(filteredResult);
  document.getElementById("delete-shown-btn").disabled = false;
  //document.getElementById("restore-btn").disabled = false;
}

//delete result shown
function deleteResult() {
  const confirmDelete = confirm("Are your sure you want to delete the data?");
  if (confirmDelete) {
    console.log(filteredResult);
    data.books = data.books.filter(b => 
      !filteredResult.some(f => f.id == b.id)
    );
    console.log("books deleted!");
    console.log(data);
    alert(filteredResult.length + " filtered books successfully deleted.");
    //refresh list
    document.getElementById("sort-select").value = "";
    document.getElementById("sort-select").selectedIndex = 0;
    showAllBooks();
    document.getElementById("search-input").value = "";
    document.getElementById("delete-shown-btn").disabled = true;
    document.getElementById("restore-btn").disabled = false;
  }
}

//function restore data
function restoreData() {
  const confirmRestore = confirm("Are you sure you want to restore the original data?");
  if (confirmRestore) {
    data = structuredClone(original);
    filteredResult = data.books;
    //console.log(data.books);
    document.getElementById("sort-select").value = "";
    document.getElementById("sort-select").selectedIndex = 0;
    showBooks(data.books);
    alert("Books restored!");
    document.getElementById("restore-btn").disabled = true;
  }
  
}

//sort data and refresh book list view
function dataSort() {
  //console.log(filteredResult);
  const sortValue = document.getElementById("sort-select").value;
  //console.log(sortValue);

  switch(sortValue) {
    case "title-asc":
      filteredResult.sort((a,b) => a.title.localeCompare(b.title));
      break;
    case "title-desc":
      filteredResult.sort((a,b) => b.title.localeCompare(a.title));
      break;
      
  }

  
  showBooks(filteredResult);
}


import { original } from "./data.js";
let data = structuredClone(original);
let filteredResult = [];
document.addEventListener("DOMContentLoaded", showAllBooks);
document.getElementById("search-btn").addEventListener("click", findAll);
document.getElementById("delete-shown-btn").addEventListener("click", deleteResult);
document.getElementById("restore-btn").addEventListener("click", restoreData);
document.getElementById("sort-select").addEventListener("change", dataSort)