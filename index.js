// Importing all the records from the data folder

import car from "./data/car.json" assert { type: "json" }
import cilka from "./data/cilka.json" assert { type: "json" }
import davy from "./data/davy.json" assert { type: "json" }
import em from "./data/em.json" assert { type: "json" }
import gayle from "./data/gayle.json" assert { type: "json" }
import loy from "./data/loy.json" assert { type: "json" }
import nataline from "./data/nataline.json" assert { type: "json" }
import nico from "./data/nico.json" assert { type: "json" }
import patricia from "./data/patricia.json" assert { type: "json" }
import travus from "./data/travus.json" assert { type: "json" }

// Forming an array of all the variables imported above

let allFiles = [
  car,
  cilka,
  davy,
  em,
  gayle,
  loy,
  nataline,
  nico,
  patricia,
  travus,
]

// Getting the target Element, where the data goes

const informationListing = document.querySelector("#information-listing")

// Running a map and join function upon the array and passing dynamic data into the DOM, ultimately forming an HTML structure, consisting of many sections with class "card", also containing UL and LI elements respectively.

let finalOutput = allFiles
  .map(
    (item) =>
      `<section class="card">
            <ul>
              <li>
                <span class="tag">First Name</span>
                <span class="value">${item.first_name}</span>
              </li>
              <li>
                <span class="tag">Last Name</span>
                <span class="value">${item.last_name}</span>
              </li>
              <li>
                <span class="tag">Email</span>
                <span class="value">${item.email}</span>
              </li>
              <li>
                <span class="tag">ID</span>
                <span class="value">${item.id}</span>
              </li>
              <li>
                <span class="tag">Gender</span>
                <span class="value">${item.gender}</span>
              </li>
              <li>
                <span class="tag">IP Address</span>
                <span class="value">${item.ip_address}</span>
              </li>
            </ul>
          </section>`
  )
  .join("")

// Inserting the HTML generated into the DOM

informationListing.innerHTML = finalOutput

// Basic Animations via GSAP

gsap.from(".card", {
  y: 50,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.1,
})

gsap.from("h1", {
  y: 50,
  duration: 0.5,
  delay: 0.45,
})
