const proxyurl ='' ;
//const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'https://corona-api.com/';
const urlGlobalTimeline = proxyurl + url + 'timeline';
const urlCounties = proxyurl + url + 'countries';
const urlCountry = urlCounties + '/';

let requestDataforGlobal = function(){
    console.log('Get Global Data');
    return fetch(urlGlobalTimeline, { mode: 'cors'})
        .then(function(response) {
            if(response.status !== 200){
                console.log("Error: " + response.status);
                return;
            }
            return response.json();//  Get the text in the response
        })
        .then(function(responseText) {
            console.log('Global Data Request successful');
            //console.log(responseText);
            return responseText.data;
        })
        .catch(function(error) {
            console.log('Global Data Request failed', error)
        });
} 

let requestDataForCountry = function(countryId){
    console.log("Selected countryId: " + countryId);
    let urlSelectedCountry = urlCountry + countryId;
    console.log("url: " + urlSelectedCountry);
    return fetch(urlSelectedCountry, { mode: 'cors'})
        .then(function(response) {
            if(response.status !== 200){
                console.log("Error: " + response.status);
                return;
            }
            return response.json();//  Get the text in the response
        })
        .then(function(responseText) {
            console.log('Country Request successful');
            //console.log(responseText);
            return responseText.data;
        })
        .catch(function(error) {
            console.log('Country Request failed', error)
        });
}

let requestDataForCountryList = function(){
    console.log('Get all countries for list');
    return fetch(urlCounties, { mode: 'cors'})
        .then(function(response) {
            if(response.status !== 200){
                console.log("Error: " + response.status);
                return;
            }
            return response.json();//  Get the text in the response
        })
        .then(function(responseText) {
            console.log('Country-List Request successful');
            return(responseText);
        })
        .catch(function(error) {
            console.log('Country-List Request failed', error)
        });
}

let requestDataForCountryWatchList = function(){
    console.log('Get all countries for Watchlist');
    return fetch(urlCounties, { mode: 'cors'})
        .then(function(response) {
            if(response.status !== 200){
                console.log("Error: " + response.status);
                return;
            }
            return response.json();//  Get the text in the response
        })
        .then(function(responseText) {
            console.log('Country-Watchlist Request successful');
            return(responseText);
        })
        .catch(function(error) {
            console.log('Country-Watchlist Request failed', error)
        });
}


export{
    requestDataforGlobal,
    requestDataForCountry,
    requestDataForCountryList,
    requestDataForCountryWatchList
} ;
