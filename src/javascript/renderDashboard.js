import {} from index.js;
let renderRequestedDataForDashboard = function(country, dataset){
    //render Cases Info
    let selectedCountry = document.getElementById("selected-country");
    let confirmed = document.getElementById("confirmed-cases");
    let active = document.getElementById("active-cases");
    let recovered = document.getElementById("recovered-cases");
    let deaths = document.getElementById("deaths");

    selectedCountry.innerHTML = country;
    confirmed.innerHTML = dataset[0].confirmed;
    active.innerHTML = dataset[0].active;
    recovered.innerHTML = dataset[0].recovered;
    deaths.innerHTML = dataset[0].deaths;

    //render Histroy-Data
    let ctx = document.getElementById('myChart').getContext('2d');
    let data = {
        labels: [],
        datasets: [{
            label: 'Confirmed Cases',
            data: []
        }]
    };
    let options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    const xLength = Object.keys(dataset).length;
    var x = xLength;
    for (var key in dataset) {
        data.labels[x] = dataset[key].date;
        data.datasets[0].data[x] = dataset[key].new_confirmed;
        x--;
    }
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}

let renderRequestedDataCasesList = function(data) {
    let countryList = document.getElementById("country-list");
    for(let key in data.data){
        let tableItem = _createCasesTableItem(key, data);
        countryList.append(tableItem);
    }
}

let renderRequestedDataCountryList = function(data) {
    let countryList = document.getElementById("country-list-all");
    for(let key in data.data){
        let tableItem = _createAllCountryTableItem(key, data, "+");
        countryList.append(tableItem);
    }
}



/**
 * Creates a list element with specific text content and btn text
 * Returns the created element
 */
let _createCasesTableItem = function(key, data){

    let tr = document.createElement("tr");
    let tdCountry = document.createElement("td");
    let tdCountryId = document.createElement("td");
    let tdConfirmed = document.createElement("td");
    let tdActive = document.createElement("td");
    let tdRecovered = document.createElement("td");
    let tdDeaths = document.createElement("td");

    tdCountry.textContent = data.data[key].name;
    tdCountryId.textContent = data.data[key].code;
    tdConfirmed.textContent = data.data[key].latest_data.confirmed;
    tdRecovered.textContent = data.data[key].latest_data.recovered;
    tdDeaths.textContent = data.data[key].latest_data.deaths;
    tdActive.textContent = data.data[key].latest_data.confirmed - data.data[key].latest_data.recovered - data.data[key].latest_data.deaths;
    tr.addEventListener("click", function(){app.initDashboardForCountry(data.data[key].code);});

    tr.append(tdCountry, tdCountryId, tdConfirmed, tdActive, tdRecovered, tdDeaths); 
    return tr;
}

export{
    renderRequestedDataForDashboard,
    renderRequestedDataCasesList,
    renderRequestedDataCountryList
} ;