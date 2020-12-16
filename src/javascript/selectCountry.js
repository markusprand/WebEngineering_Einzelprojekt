import {initSelectCountry} from './main.js';

let renderRequestedDataCountryList = function(data) {
    let countryList = document.getElementById("country-list-all");
    for(let key in data.data){
        let tableItem = _createAllCountryTableItem(key, data, "+");
        countryList.append(tableItem);
    }
}

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


initSelectCountry();
