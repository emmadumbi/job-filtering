const container = document.querySelector(".job-container")
//console.log(container)//

async function fetchdata(){
    try{
        const response = await fetch('data.json');

        if(!response.ok){
            throw new Error('failed to load data.')
        }
        const data= await response.json()
        displaydata(data)
    }  
    catch(err){
        console.error(err)
    }
}

fetchdata()

function displaydata(fetchedData){
    let html =""
    fetchedData.forEach((data)=>{
        html +=`
         <div class="jobs">
          <div class="left">
            <div class="image">
                <img src="${data.logo}">
            </div>
            <div class="job-description">
                <div class="top">
                    <p class="name">${data.company}</p>
                    ${ data.new?'<p class="new type">NEW!</p>':''}
                    ${ data.featured?'<p class="featured type">FEATURED</p>':''}
                </div>
                <div class="position">
                    <h3>${data.position}</h3>
                </div>
                <div class="bottom">
                    <ul>
                    <li class="time"><p>${data.postedAt}</p></li>
                    <li class="mode item"><p>${data.contract}</p></li>
                    <li class="location item"><p>${data.location}</p></li>
                    </ul>
                </div>
            </div>
          </div>
          <div class="right">
            ${data.languages.map((language)=>{
                return`
                <p class="skills">${language}</p>`
            }).join('')
        }

        <p class="skills">${data.level}</p> 

            ${data.tools.map((tool) => {
                return `
            <p class="skills">${tool}</p>`}).join('')
            }
          </div>
        </div>
        `
    })
    container.innerHTML = html
}