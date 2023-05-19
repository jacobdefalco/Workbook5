"use strict";
let categories = [
  { name: "Adventures" },
  { name: "Arts & Crafts" },
  { name: "Local Sports" },
  { name: "Museums" },
  { name: "Wine Tastings" },
  { name: "Other" },
];

const selection = document.querySelector("#categories-ddl"); //grabs drop down
const loadButton = document.querySelector("#load-button"); //grabs load button
const matchingTable = document.querySelector("#matching-activities"); //grabs table as a whole
const matchingActivitieseTblBody = document.querySelector(
  "#matching-activities-tbl-body"
);

function loadChoices() {
  categories.forEach((category) => {
    //loops category array
    let categoryOptions = new Option(category.name); //assigns categories to their own "category"
    selection.appendChild(categoryOptions); //displays categories as options
  });
  loadButton.disabled = true;
  loadButton.innerText = "Load Categories(Disabled)";
}

let activities = [
  {
    category: "Adventures",
    id: "A101",
    name: "Valley Hot Air Balloons",
    description:
      "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
    location: "121 S. Main Street",
    price: 265.0,
  },
  {
    category: "Adventures",
    id: "A102",
    name: "River Runners: Float Trip",
    description:
      "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
    location: "145 FM 103",
    price: 65.0,
  },
  {
    category: "Adventures",
    id: "A103",
    name: "River Runners: Ride the Rapids",
    description:
      "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
    location: "145 FM 103",
    price: 145.0,
  },
  {
    category: "Arts & Crafts",
    id: "AC101",
    name: "Painting with a Twist : Oils",
    description:
      "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
    location: "1991 Paint Drive",
    price: 40.0,
  },
  {
    category: "Arts & Crafts",
    id: "AC102",
    name: "Painting with a Twist : Watercolor",
    description:
      "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
    location: "1991 Paint Drive",
    price: 40.0,
  },
  {
    category: "Museums",
    id: "M101",
    name: "Bravings Airship Museum",
    description:
      "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
    location: "101 Airfield Drive",
    price: 10.0,
  },
  {
    category: "Museums",
    id: "M102",
    name: "Forks and Spoons Museum",
    description:
      "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
    location: "1056 Lost Knives Court",
    price: 3.0,
  },
  {
    category: "Museums",
    id: "M103",
    name: "Steenges Computing Museum",
    description:
      "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
    location: "103 Technology Way",
    price: 0.0,
  },
  {
    category: "Wine Tastings",
    id: "WT-101",
    name: "Hastings Winery Tours and Tastings",
    description:
      "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
    location: "10987 FM 1187",
    price: 12.0,
  },
  {
    category: "Wine Tastings",
    id: "WT-102",
    name: "Lone Oak Winery",
    description:
      "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
    location: "121 Burleson Court",
    price: 100.0,
  },
  {
    category: "Other",
    id: "OTH101",
    name: "Fire Department: Ride Along",
    description:
      "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
    location: "10 Redline Drive",
    price: 25.0,
  },
  {
    category: "Other",
    id: "OTH102",
    name: "Homes For Our Neighbors",
    description:
      "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
    location: "Call (555) 555-5555",
    price: 0.0,
  },
];

function buildActivityRow(tbody, activity) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = activity.name;

  let cell2 = row.insertCell(1);
  cell2.innerText = activity.description;

  let cell3 = row.insertCell(2);
  cell3.innerText = "$" + activity.price.toFixed(2);

  let cell4 = row.insertCell(3);
  cell4.innerText = activity.location;

  let cell5 = row.insertCell(4);
  cell5.innerText = activity.id;
}

function filterActivities() {
  return activities.filter((a) => a.category == selection.value);
}

function displayMatchingActivitiesTable(matchingActivity) {
  matchingActivitieseTblBody.innerHTML = "";
  for (let i = 0; i < matchingActivity.length; i++) {
    buildActivityRow(matchingActivitieseTblBody, matchingActivity[i]);
  }
}

function filterAndDisplay() {
  matchingActivitieseTblBody.innerHTML = "";
  let filteredActivities = filterActivities();
  displayMatchingActivitiesTable(filteredActivities);
}

function clearTableBody() {
  matchingActivitieseTblBody.innerHTML = "";
  selection.value = "Please Select One...";
  selection.innerHTML = "";
  let defaultOption = new Option("Please Select Image...");
  selection.appendChild(defaultOption);
  loadButton.disabled = false;
  loadButton.innerText = "Load Choices";
}
