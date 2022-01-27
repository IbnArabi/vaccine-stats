fetch('https://covid-api.mmediagroup.fr/v1/vaccines?status=confirmed&country=Pakistan')
    .then(response => {return response.json()})
    .then (data => {
    console.log(data)
    var vacc = document.getElementById("vaccine").innerHTML = `
    <h1 class="main-header">Vaccine Report - ${data.All.country}</h1><br>
    <h1 class="last-update">Last Updated: ${data.All.updated} <span class="set-float-right">Information is from third party sites</span>
<br>
    <h1 class="all-class">Population <br> ${data.All.population}</h1>
    <h1 class="all-class">Partially Vaccinated <img src="vacc_partial.png" alt="" class="images"><Br>${data.All.people_partially_vaccinated}</h1>
    <h1 class="all-class">Fully Vaccinated <img src="vacc_full.png" alt="" class="images"><br>${data.All.people_vaccinated}</h1>
    <h1 class="all-class">Total Administered <img src="vacc_people.png" alt="" class="images"><br>${data.All.administered}</h1>
    <h1 class="all-class">Life Expectancy<br>${data.All.life_expectancy} years</h1>
`
})