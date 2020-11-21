var app = (function(){
    'use strict'; // execute javascript in strict mode. Eg: usage of undeclared variables is not allowed.

    var url = 'https://covid-api.mmediagroup.fr/v1/cases';

    let initDashboard = function() {
        requestDataForCountry('Global');
        requestDataForCountryList();
    }

    let initSelectCountry = function() {
        requestDataForCountryList();
    }

    let requestDataForCountry = function(country){
        console.log("Selected country: " + country);
        let urlCountry = url + '?country=' + country;
        //console.log("url: " + url);
        fetch(urlCountry)
            .then(function(response) {
                if(response.status !== 200){
                    console.log("Error: " + response.status);
                    return;
                }
                return response.json();//  Get the text in the response
            })
            .then(function(responseText) {
                console.log('Country Request successful');
                renderRequestedDataCases(country, responseText);
            })
            .catch(function(error) {
                console.log('Country Request failed', error)
                // do something with error message
            });
    }

    let requestDataForCountryList = function(){
        //console.log("url: " + url);
        fetch(url)
            .then(function(response) {
                if(response.status !== 200){
                    console.log("Error: " + response.status);
                    return;
                }
                return response.json();//  Get the text in the response
            })
            .then(function(responseText) {
                console.log('Country-List Request successful');
                //console.log(responseText);
                var path = window.location.pathname;
                var page = path.split("/").pop();
                console.log( page );
                if (page == "index.html") {
                    renderRequestedDataCasesList(responseText);
                } else if (page == "selectCountry.html") {
                    renderRequestedDataCountryList(responseText);
                }

                
            })
            .catch(function(error) {
                console.log('Country-List Request failed', error)
                // do something with error message
            });
    }


    let renderRequestedDataCases = function(country,data){
        let selectedCountry = document.getElementById("selected-country");
        let confirmed = document.getElementById("confirmed-cases");
        let active = document.getElementById("active-cases");
        let recovered = document.getElementById("recovered-cases");
        let deaths = document.getElementById("deaths");

        selectedCountry.innerHTML = country;
        confirmed.innerHTML = data.All.confirmed;
        recovered.innerHTML = data.All.recovered;
        deaths.innerHTML = data.All.deaths;
        active.innerHTML = data.All.confirmed - data.All.recovered - data.All.deaths;
    }

    let renderRequestedDataCasesList = function(data) {
        let countryList = document.getElementById("country-list");
        for(let key in data){
            let tableItem = _createCasesTableItem(key, data);
            //console.log(key);
            countryList.append(tableItem);
        }
    }

    let renderRequestedDataCountryList = function(data) {
        let countryList = document.getElementById("country-list-all");
        for(let key in data){
            let tableItem = _createAllCountryTableItem(key, "+");
            //console.log(key);
            countryList.append(tableItem);
        }
    }

    /**
     * Creates a list element with specific text content and btn text
     * Returns the created element
     */
    let _createCasesTableItem = function(country, data){

        let tr = document.createElement("tr");
        let tdCountry = document.createElement("td");
        let tdConfirmed = document.createElement("td");
        let tdActive = document.createElement("td");
        let tdRecovered = document.createElement("td");
        let tdDeaths = document.createElement("td");

        tdCountry.textContent = country;
        tdConfirmed.textContent = data[country].All.confirmed;
        tdRecovered.textContent = data[country].All.recovered;
        tdDeaths.textContent = data[country].All.deaths;
        tdActive.textContent = data[country].All.confirmed - data[country].All.recovered - data[country].All.deaths;
        tr.addEventListener("click", function(){app.requestDataForCountry(country);});

        tr.append(tdCountry, tdConfirmed, tdActive, tdRecovered, tdDeaths); 
        return tr;
    }

    let _createAllCountryTableItem = function(country, btnText){

        let tr = document.createElement("tr");
        let tdCountry = document.createElement("td");
        let tdBtn = document.createElement("td");
        let btn = document.createElement("btn");
        
        tdCountry.textContent = country;
        btn.textContent = btnText;
        btn.addEventListener("click", function(){app.addCountryToWatchlist(this);});

        tdBtn.append(btn);
        tr.append(tdCountry, tdBtn); 
        return tr;
    }

    let addCountryToWatchlist = function(btnElement){
        let parentListItem = btnElement.closest("tr");
        let clonedItem = parentListItem.cloneNode(true);

        let btn = clonedItem.getElementsByTagName("btn")[0];
        btn.textContent = "x";
        btn.addEventListener("click", function(){ removeItemFromList(this); })

        document.getElementById("country-list-selected").append(clonedItem);
    }

    let removeItemFromList = function(btnElement){
        btnElement.closest("tr").remove();
    }

    let searchCountryList = function() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("country-search");
        filter = input.value.toUpperCase();
        table = document.getElementById("country-list");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }

    //public functions and variables
    return {
        requestDataForCountry: requestDataForCountry,
        addCountryToWatchlist: addCountryToWatchlist,
        initDashboard: initDashboard,
        initSelectCountry: initSelectCountry,
        searchCountryList: searchCountryList
    }
}());

