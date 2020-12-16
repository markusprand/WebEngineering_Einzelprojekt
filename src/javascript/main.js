import {requestDataforGlobal, requestDataForCountry, 
    requestDataForCountryList, requestDataForCountryWatchList} from './apiHandler.js';
import {renderRequestedDataForDashboard, renderRequestedDataCasesList, renderRequestedDataCountryList} from './renderDashboard.js';

    'use strict'; // execute javascript in strict mode. Eg: usage of undeclared variables is not allowed.

    // const proxyurl ='' ;
    // //const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = 'https://corona-api.com/';
    // const urlGlobalTimeline = proxyurl + url + 'timeline';
    // const urlCounties = proxyurl + url + 'countries';
    // const urlCountry = urlCounties + '/';

    let initDashboard = function() {
        requestDataforGlobal().then(function(requestedData){
            renderRequestedDataForDashboard('Global', requestedData);
        } );
        
        requestDataForCountryList().then(function(requestedData){
            renderRequestedDataCasesList(requestedData);
        });
    }

    let initDashboardForCountry = function(countryId) {
        let requestedData = requestDataForCountry(countryId);
        let country = requestedData.name;
        renderRequestedDataForDashboard(country, requestedData.timeline);
    }

    let initSelectCountry = function() {
        requestDataForCountryWatchList();
    }




    // let requestDataforGlobal = function(){
    //     console.log('Get Global Data');
    //     fetch(urlGlobalTimeline, { mode: 'cors'})
    //         .then(function(response) {
    //             if(response.status !== 200){
    //                 console.log("Error: " + response.status);
    //                 return;
    //             }
    //             return response.json();//  Get the text in the response
    //         })
    //         .then(function(responseText) {
    //             console.log('Global Data Request successful');
    //             //console.log(responseText);
    //             let country = 'Global';
    //             renderRequestedDataForDashboard(country, responseText.data);
    //         })
    //         .catch(function(error) {
    //             console.log('Global Data Request failed', error)
    //         });
    // }


    // let requestDataForCountry = function(countryId){
    //     console.log("Selected countryId: " + countryId);
    //     let urlSelectedCountry = urlCountry + countryId;
    //     console.log("url: " + urlSelectedCountry);
    //     fetch(urlSelectedCountry, { mode: 'cors'})
    //         .then(function(response) {
    //             if(response.status !== 200){
    //                 console.log("Error: " + response.status);
    //                 return;
    //             }
    //             return response.json();//  Get the text in the response
    //         })
    //         .then(function(responseText) {
    //             console.log('Country Request successful');
    //             //console.log(responseText);
    //             let country = responseText.data.name;
    //             renderRequestedDataForDashboard(country, responseText.data.timeline);
    //         })
    //         .catch(function(error) {
    //             console.log('Country Request failed', error)
    //         });
    // }

    // let requestDataForCountryList = function(){
    //     console.log('Get all countries for list');
    //     fetch(urlCounties, { mode: 'cors'})
    //         .then(function(response) {
    //             if(response.status !== 200){
    //                 console.log("Error: " + response.status);
    //                 return;
    //             }
    //             return response.json();//  Get the text in the response
    //         })
    //         .then(function(responseText) {
    //             console.log('Country-List Request successful');
    //             renderRequestedDataCasesList(responseText);
    //         })
    //         .catch(function(error) {
    //             console.log('Country-List Request failed', error)
    //         });
    // }

    // let requestDataForCountryWatchList = function(){
    //     console.log('Get all countries for Watchlist');
    //     fetch(urlCounties, { mode: 'cors'})
    //         .then(function(response) {
    //             if(response.status !== 200){
    //                 console.log("Error: " + response.status);
    //                 return;
    //             }
    //             return response.json();//  Get the text in the response
    //         })
    //         .then(function(responseText) {
    //             console.log('Country-Watchlist Request successful');
    //             renderRequestedDataCountryList(responseText);
    //         })
    //         .catch(function(error) {
    //             console.log('Country-Watchlist Request failed', error)
    //         });
    // }

    // let renderRequestedDataForDashboard = function(country, dataset){
    //     //render Cases Info
    //     let selectedCountry = document.getElementById("selected-country");
    //     let confirmed = document.getElementById("confirmed-cases");
    //     let active = document.getElementById("active-cases");
    //     let recovered = document.getElementById("recovered-cases");
    //     let deaths = document.getElementById("deaths");

    //     console.log(dataset);
    //     selectedCountry.innerHTML = country;
    //     confirmed.innerHTML = dataset[0].confirmed;
    //     active.innerHTML = dataset[0].active;
    //     recovered.innerHTML = dataset[0].recovered;
    //     deaths.innerHTML = dataset[0].deaths;

    //     //render Histroy-Data
    //     let ctx = document.getElementById('myChart').getContext('2d');
    //     let data = {
    //         labels: [],
    //         datasets: [{
    //             label: 'Confirmed Cases',
    //             data: []
    //         }]
    //     };
    //     let options = {
    //         scales: {
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero: true
    //                 }
    //             }]
    //         }
    //     };
    //     const xLength = Object.keys(dataset).length;
    //     var x = xLength;
    //     for (var key in dataset) {
    //         data.labels[x] = dataset[key].date;
    //         data.datasets[0].data[x] = dataset[key].new_confirmed;
    //         x--;
    //     }
    //     var myChart = new Chart(ctx, {
    //         type: 'line',
    //         data: data,
    //         options: options
    //     });
    // }

    // let renderRequestedDataCasesList = function(data) {
    //     let countryList = document.getElementById("country-list");
    //     for(let key in data.data){
    //         let tableItem = _createCasesTableItem(key, data);
    //         countryList.append(tableItem);
    //     }
    // }

    // let renderRequestedDataCountryList = function(data) {
    //     let countryList = document.getElementById("country-list-all");
    //     for(let key in data.data){
    //         let tableItem = _createAllCountryTableItem(key, data, "+");
    //         countryList.append(tableItem);
    //     }
    // }

    

    // /**
    //  * Creates a list element with specific text content and btn text
    //  * Returns the created element
    //  */
    // let _createCasesTableItem = function(key, data){

    //     let tr = document.createElement("tr");
    //     let tdCountry = document.createElement("td");
    //     let tdCountryId = document.createElement("td");
    //     let tdConfirmed = document.createElement("td");
    //     let tdActive = document.createElement("td");
    //     let tdRecovered = document.createElement("td");
    //     let tdDeaths = document.createElement("td");

    //     tdCountry.textContent = data.data[key].name;
    //     tdCountryId.textContent = data.data[key].code;
    //     tdConfirmed.textContent = data.data[key].latest_data.confirmed;
    //     tdRecovered.textContent = data.data[key].latest_data.recovered;
    //     tdDeaths.textContent = data.data[key].latest_data.deaths;
    //     tdActive.textContent = data.data[key].latest_data.confirmed - data.data[key].latest_data.recovered - data.data[key].latest_data.deaths;
    //     tr.addEventListener("click", function(){app.initDashboardForCountry(data.data[key].code);});

    //     tr.append(tdCountry, tdCountryId, tdConfirmed, tdActive, tdRecovered, tdDeaths); 
    //     return tr;
    // }

    let _createAllCountryTableItem = function(key, data, btnText){

        let tr = document.createElement("tr");
        let tdCountry = document.createElement("td");
        let tdCountryId = document.createElement("td");
        let tdBtn = document.createElement("td");
        let btn = document.createElement("btn");
        
        tdCountry.textContent = data.data[key].name;
        tdCountryId.textContent = data.data[key].code;
        btn.textContent = btnText;
        btn.addEventListener("click", function(){app.addCountryToWatchlist(this);});

        tdBtn.append(btn);
        tr.append(tdCountry, tdCountryId, tdBtn); 
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

    // let searchCountryList = function() {
    //     // Declare variables
    //     var input, filter, table, tr, td, i, txtValue;
    //     input = document.getElementById("country-search");
    //     filter = input.value.toUpperCase();
    //     table = document.getElementById("country-list");
    //     tr = table.getElementsByTagName("tr");
      
    //     console.log(tr);
    //     // Loop through all table rows, and hide those who don't match the search query
    //     for (i = 0; i < tr.length; i++) {
    //       td = tr[i].getElementsByTagName("td")[0];
    //       if (td) {
    //         txtValue = td.textContent || td.innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //           tr[i].style.display = "";
    //         } else {
    //           tr[i].style.display = "none";
    //         }
    //       }
    //     }
    //   }


    // //public functions and variables
    // return {
    //     requestDataForCountry: requestDataForCountry,
    //     requestDataforGlobal: requestDataforGlobal,
    //     addCountryToWatchlist: addCountryToWatchlist,
    //     searchCountryList: searchCountryList,
    //     initDashboard: initDashboard,
    //     initDashboardForCountry: initDashboardForCountry,
    //     initSelectCountry: initSelectCountry,
    //     initAbout: initAbout
    // }


export {
    initDashboard,
    initDashboardForCountry,
    initSelectCountry
};