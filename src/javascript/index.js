//import {initDashboard} from './main.js';
import {requestDataforGlobal, requestDataForCountryList} from './apiHandler.js';
import {renderRequestedDataForDashboard, renderRequestedDataCasesList} from './renderDashboard.js';

var app = (function(){
    let searchCountryList = function() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("country-search");
        filter = input.value.toUpperCase();
        table = document.getElementById("country-list");
        tr = table.getElementsByTagName("tr");
      
        console.log(tr);
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

    let initDashboard = function() {
        requestDataforGlobal().then(function(requestedData){
            renderRequestedDataForDashboard('Global', requestedData);
        } );
        
        requestDataForCountryList().then(function(requestedData){
            renderRequestedDataCasesList(requestedData);
        });
    }

    let initDashboardForCountry = function(countryId) {
        requestDataForCountry(countryId).then(function(requestedData){
            renderRequestedDataForDashboard(requestedData.name, requestedData.timeline);
        });        
    }

    //public functions and variables
    return {
        searchCountryList: searchCountryList,
        initDashboard: initDashboard,
        initDashboardForCountry: initDashboardForCountry
    }
}());


app.initDashboard();
