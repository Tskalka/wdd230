let yearDate = new Date().getFullYear();
let footer = document.querySelector("footer");
footer.innerHTML += yearDate;

//Addding the date last modified.
let lastModified = document.lastModified;
let modifiedText = " Date of last update: \n"
footer.innerHTML += modifiedText;
footer.innerHTML += lastModified;