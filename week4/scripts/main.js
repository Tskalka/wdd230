let footerContent = document.querySelector(".footer-content");
let header = document.querySelector("header");
let currentDate = document.querySelector(".current-date");

let date = new Date;
//Using a date object
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	date
);
//Adding the current date to the header
currentDate.innerHTML += fulldate;

//Addding the date last modified.
let lastModified = document.lastModified;
let modifiedText = " Date of last update: \n"

footerContent.innerHTML += date.getFullYear();
footerContent.innerHTML += " Rexburg Chamber of Commerce |";
footerContent.innerHTML += " Tyler Skalka |";
footerContent.innerHTML += " WDD 230 Project |";
footerContent.innerHTML += modifiedText;
footerContent.innerHTML += lastModified;

//Responsive menu

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.main-links')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

