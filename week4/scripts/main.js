let footer = document.querySelector("footer");
let header = document.querySelector("header");
let section = document.querySelector("section")

let date = new Date;
//Using a date object
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	date
);
//Adding the current date to the header
section.innerHTML += fulldate;

//Addding the date last modified.
let lastModified = document.lastModified;
let modifiedText = " Date of last update: \n"
footer.innerHTML += date.getFullYear();

footer.innerHTML += " Rexburg Chamber of Commerce |";
footer.innerHTML += " Tyler Skalka |";
footer.innerHTML += " WDD 230 Project |";
footer.innerHTML += modifiedText;
footer.innerHTML += lastModified;

//Responsive menu
