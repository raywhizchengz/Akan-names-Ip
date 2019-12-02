var maleAkanNames = [
  "Kwame",
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi"
];
var femaleAkanNames = [
  "Ama",
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua"
];
// Collecting form data
var formData = document.forms[0];
var day, month, year, gender;

day = parseInt(formData.date.value);
month = parseInt(formData.month.value);
year = parseInt(formData.year.value);

if (formData.gender.value === "male") {
  gender = "male";
} else {
  gender = "female";
}

function dayOfTheWeek() {
  let yearCode, centuryCode;

  yearCode = year % 100;
  centuryCode = parseInt(year / 100);

  if (month < 3) {
    month += 12;
    yearCode -= 1;
  }

  let dayOfWeek =
    (day +
      parseInt(
        2.6 * (month + 1) +
          yearCode +
          parseInt(yearCode / 4) +
          parseInt(centuryCode / 4) +
          5 * centuryCode
      )) %
    7;
  return dayOfWeek;
}

function getAkanName() {
  let dowOfBirth = dayOfTheWeek();

  if (gender == "male") {
    alert("Your male akan name is " + maleAkanNames[dowOfBirth]);
  } else if (gender === "female") {
    alert("Your female akan name is " + femaleAkanNames[dowOfBirth]);
  } else {
    alert("You didnt put your gender");
  }
}
