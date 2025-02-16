let SchoolName = "DMACC";
let FirstName = "Patrick";
let LastName = "Foy";
let totalSales = 3435.6;
const rosterInfo = document.querySelector("#RosterName");
const result = document.querySelector("#result");

function displayName() {
  alert("Student Name: " + FirstName + " " + LastName);
}

function displaySchool() {
  alert("School Name: " + SchoolName);
  inValue = prompt("Please enter a number: ");
  console.log(inValue);
}

function formatRosterName() {
  studentName = LastName + ", " + FirstName;
  return studentName;
}

function printSchoolRoster() {
  let rosterName = formatRosterName(FirstName, LastName);
  let detailLine = rosterName + " " + SchoolName;
  rosterInfo.innerHTML += `<h3>Student Name: ${detailLine}</p>`;
  return detailLine;
}
printSchoolRoster();

function printName() {
  let nameLine = FirstName + " " + LastName;
  console.log(nameLine);
}
printName();

function formatCurrency() {
  let inNumberString = prompt("Please enter a number");
  let inNumber = parseFloat(inNumberString);
  let currencyNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(inNumber);
  return (result.textContent = currencyNumber);
}
