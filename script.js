const filterContainer = document.querySelector(".filter-container");
const filter = document.querySelector("#filter");
const clearBtn = document.querySelector("#clear");
const joblistings = document.querySelector("#job-listings");

let selectedFilters = [];

(async function () {
  const res = await fetch("./data.json");
  const data = await res.json();
  data.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.classList.add("jobCard");
    jobCard.innerHTML = `
        <div class="heading-container">
          <div>
            <img class="company-logo" src="${job.logo}" alt="company logo"/>
          </div>
          <div>
            <div class="heading">
              <h1>${job.company}</h1>
              <div class="stat"></div>
            </div>
            <p class="jobPosition">${job.position}</p>
            <ul class="availability">
              <li>${job.postedAt}</li>
              <li>${job.contract}</li>
              <li>${job.location}</li>
            </ul> 
           </div> 
        </div>
        <hr>
        <div class="tags"></div>
      `;

    job.languages.forEach((lang) => {
      const langBtn = document.createElement("button");
      langBtn.textContent = lang;
      jobCard.querySelector(".tags").appendChild(langBtn);
    });

    joblistings.appendChild(jobCard);
  });
})();
