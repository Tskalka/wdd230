//Adding the year in the footer
let yearDate = new Date().getFullYear();
let footer = document.querySelector("footer");
footer.innerHTML += yearDate;

//Addding the date last modified.
let lastModified = document.lastModified;
let modifiedText = " Last updated: \n"
let myName = " Tyler Skalka "

footer.innerHTML += myName;
footer.innerHTML += modifiedText;
footer.innerHTML += lastModified;