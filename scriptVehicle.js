// Array to store the vehicles data
const vehicles = [
  {
      brand: "Mercedes-Benz",
      model: "CLS53 AMG",
      price: 56000,
      image: "images/mers.jpg",
      year: 2023,
      engine: "3.0 L, 6 cilindrų, I6",
      horsepower: "435 AG (320 kW)",
      torque: "520 Nm",
      drivetrain: "4MATIC",
      transmission: "9G-TRONIC automatic"
  },
  {
      brand: "Volkswagen",
      model: "Golf GTI MK8",
      price: 42000,
      image: "images/auto2.jpg",
      year: 2023,
      engine: "2.0 L, 4 cilindrų, I4 Turbo",
      horsepower: "245 AG (180 kW)",
      torque: "370 Nm",
      drivetrain: "FWD",
      transmission: "7-speed DSG"
  },
  {
      brand: "Porsche",
      model: "911 Turbo S",
      price: 230000,
      image: "images/porche_911_turboS_2020.webp",
      year: 2020,
      engine: "3.8 L, 6 cilindrų, turbo",
      horsepower: "650 AG (478 kW)",
      torque: "800 Nm",
      drivetrain: "AWD",
      transmission: "8-speed PDK"
  },
  {
      brand: "Volkswagen",
      model: "Scirocco R",
      price: 25000,
      image: "images/2017-volkswagen-scirocco.jpg",
      year: 2017,
      engine: "2.0 L, 4 cilindrų, turbo",
      horsepower: "280 AG (206 kW)",
      torque: "350 Nm",
      drivetrain: "FWD",
      transmission: "6-speed DSG"
  },
  {
      brand: "Toyota",
      model: "GR Supra",
      price: 65000,
      image: "images/ToyotaSupta_GR.jpg",
      year: 2023,
      engine: "3.0 L, 6 cilindrų, turbo",
      horsepower: "340 AG (250 kW)",
      torque: "500 Nm",
      drivetrain: "RWD",
      transmission: "6-speed manual"
  }
];

// Function to display the vehicles
function displayVehicles(filteredVehicles) {
  const container = document.querySelector(".card-container");
  container.innerHTML = "";

  filteredVehicles.forEach(vehicle => {
      const card = `
      <div class="maincontainer">
          <div class="thecard" onclick="flipCard(this)">
              <div class="card_front">
                  <img src="${vehicle.image}" alt="Car Image">
                  <h3>${vehicle.brand} ${vehicle.model}</h3>
              </div>
              <div class="card_back">
                  <h3>${vehicle.brand} ${vehicle.model}</h3>
                  <p>
                      Pagaminimo metai: ${vehicle.year}<br>
                      Variklis: ${vehicle.engine}<br>
                      Galia: ${vehicle.horsepower}<br>
                      Sukimo momentas: ${vehicle.torque}<br>
                      Varantieji ratai: ${vehicle.drivetrain}<br>
                      Pavarų dėžė: ${vehicle.transmission}<br>
                      Kaina: ${vehicle.price} €<br>
                  </p>
                   <div class="card-buttons">
                   <button class="btn-more-info">Plačiau</button>
                   <button class="btn-compare">Įtraukti į palyginimą</button>
                   </div>
              </div>
          </div>
      </div>`;
      container.innerHTML += card;
  });
}


// Function to filter vehicles based on search input
function filterVehicles() {
  const searchQuery = document.getElementById("searchBar").value.toLowerCase();
  const filteredVehicles = vehicles.filter(vehicle => 
      vehicle.brand.toLowerCase().includes(searchQuery) || 
      vehicle.model.toLowerCase().includes(searchQuery)
  );
  displayVehicles(filteredVehicles);
}

// Function to sort vehicles based on the selected option
function sortVehicles() {
  const sortBy = document.getElementById("sortBy").value;
  let sortedVehicles = [...vehicles];

  if (sortBy === "brand") {
      sortedVehicles.sort((a, b) => a.brand.localeCompare(b.brand));
  } else if (sortBy === "model") {
      sortedVehicles.sort((a, b) => a.model.localeCompare(b.model));
  } else if (sortBy === "price") {
      sortedVehicles.sort((a, b) => a.price - b.price);
  }

  displayVehicles(sortedVehicles);
}

// Initially display all vehicles
displayVehicles(vehicles);

// Flip Card function
function flipCard(card) {
  card.classList.toggle("flip");
}

// JavaScript for toggle menu
var navLinks = document.getElementById("navLinks");
var menuButton = document.getElementById("menuButton");
var closeMenu = document.getElementById("closeMenu");
var lastScrollTop = 0;

// Show menu function
function showMenu() {
  navLinks.style.right = "0";
}

// Hide menu function
function hideMenu() {
  navLinks.style.right = "-200px";
}

// Detect scroll direction
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
      // User is scrolling down - hide the menu
      hideMenu();
  } 
  // Update last scroll position
  lastScrollTop = scrollTop;
});

// Hide menu when clicking outside
document.addEventListener("click", function (event) {
  if (!navLinks.contains(event.target) && event.target !== menuButton && event.target !== closeMenu) {
      hideMenu();
  }
});
document.addEventListener("DOMContentLoaded", function () {
document.querySelector(".signup-button").addEventListener("click", function () {
window.location.href = "register/login.html";
});
});

let selectedVehicles = [];

function addToCompare(brand, model, price, year, engine, horsepower, torque, drivetrain, transmission, image) {
// Check if the vehicle is already in the selected vehicles array
const vehicleExists = selectedVehicles.some(vehicle => vehicle.brand === brand && vehicle.model === model);

if (vehicleExists) {
alert("Šis automobilis jau yra palyginimų sąraše.");
return;
}

if (selectedVehicles.length >= 3) {
alert("Galite palyginti tik 3 automobilius vienu metu.");
return;
}

// Add the vehicle to the selectedVehicles array
selectedVehicles.push({ brand, model, price, year, engine, horsepower, torque, drivetrain, transmission, image });
updateCompareIcon();
}

function updateCompareIcon() {
    const compareIcon = document.getElementById("compareIcon");
    compareIcon.style.display = selectedVehicles.length > 0 ? "block" : "none";
}

function showComparisonTable() {
if (selectedVehicles.length === 0) {
alert("Palyginimo sąrašas negali būti tuščias.");
return;
}

document.getElementById("comparisonTableOverlay").style.display = "block";

let tableContent = `
<table border="1">
<tr>
    <th>Detalė</th>
    ${selectedVehicles.map(vehicle => `<th>${vehicle.brand} ${vehicle.model}</th>`).join('')}
</tr>
<tr><td>Metai</td>${selectedVehicles.map(vehicle => `<td>${vehicle.year}</td>`).join('')}</tr>
<tr><td>Variklis</td>${selectedVehicles.map(vehicle => `<td>${vehicle.engine}</td>`).join('')}</tr>
<tr><td>Galia</td>${selectedVehicles.map(vehicle => `<td>${vehicle.horsepower}</td>`).join('')}</tr>
<tr><td>Sukimo momentas</td>${selectedVehicles.map(vehicle => `<td>${vehicle.torque}</td>`).join('')}</tr>
<tr><td>Varantieji ratai</td>${selectedVehicles.map(vehicle => `<td>${vehicle.drivetrain}</td>`).join('')}</tr>
<tr><td>Pavarų dėžė</td>${selectedVehicles.map(vehicle => `<td>${vehicle.transmission}</td>`).join('')}</tr>
<tr><td>Kaina</td>${selectedVehicles.map(vehicle => `<td>${vehicle.price} €</td>`).join('')}</tr>
<tr>
    <td></td>
    ${selectedVehicles.map((_, index) => `<td><button onclick="removeFromCompare(${index})">Pašalinti</button></td>`).join('')}
</tr>
</table>`;

document.getElementById("comparisonTableContent").innerHTML = tableContent;
document.getElementById("comparisonTableContainer").style.display = "block";
}
function removeFromCompare(index) {
selectedVehicles.splice(index, 1);  
updateCompareIcon();  
showComparisonTable();  
}

function closeComparisonTable() {
document.getElementById("comparisonTableContainer").style.display = "none";
document.getElementById("comparisonTableOverlay").style.display = "none"; // Hide the overlay when closing
}


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-compare").forEach(button => {
        button.addEventListener("click", function () {
            const card = this.closest(".thecard");
            const brand = card.querySelector("h3").textContent.split(" ")[0];
            const model = card.querySelector("h3").textContent.split(" ")[1];
            const image = card.querySelector("img").src;
            const details = card.querySelector(".card_back p").innerText.split("\n");
            addToCompare(brand, model, parseInt(details[6].split(": ")[1]), parseInt(details[0].split(": ")[1]), details[1].split(": ")[1], details[2].split(": ")[1], details[3].split(": ")[1], details[4].split(": ")[1], details[5].split(": ")[1], image);
        });
    });
});