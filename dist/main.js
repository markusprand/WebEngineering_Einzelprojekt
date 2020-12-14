(()=>{var t=function(){"use strict";const e="https://corona-api.com/countries";let n=function(){console.log("Get Global Data"),fetch("https://corona-api.com/timeline",{mode:"cors"}).then((function(t){if(200===t.status)return t.json();console.log("Error: "+t.status)})).then((function(t){console.log("Global Data Request successful"),a("Global",t.data)})).catch((function(t){console.log("Global Data Request failed",t)}))},o=function(t){console.log("Selected countryId: "+t);let e="https://corona-api.com/countries/"+t;console.log("url: "+e),fetch(e,{mode:"cors"}).then((function(t){if(200===t.status)return t.json();console.log("Error: "+t.status)})).then((function(t){console.log("Country Request successful");let e=t.data.name;a(e,t.data.timeline)})).catch((function(t){console.log("Country Request failed",t)}))},a=function(t,e){let n=document.getElementById("selected-country"),o=document.getElementById("confirmed-cases"),a=document.getElementById("active-cases"),c=document.getElementById("recovered-cases"),l=document.getElementById("deaths");n.innerHTML=t,o.innerHTML=e[0].confirmed,a.innerHTML=e[0].active,c.innerHTML=e[0].recovered,l.innerHTML=e[0].deaths;let s=document.getElementById("myChart").getContext("2d"),d={labels:[],datasets:[{label:"Confirmed Cases",data:[]}]};var r=Object.keys(e).length;for(var u in e)d.labels[r]=e[u].date,d.datasets[0].data[r]=e[u].new_confirmed,r--;new Chart(s,{type:"line",data:d,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})},c=function(t){let e=document.getElementById("country-list");for(let n in t.data){let o=s(n,t);e.append(o)}},l=function(t){let e=document.getElementById("country-list-all");for(let n in t.data){let o=d(n,t,"+");e.append(o)}},s=function(e,n){let o=document.createElement("tr"),a=document.createElement("td"),c=document.createElement("td"),l=document.createElement("td"),s=document.createElement("td"),d=document.createElement("td"),r=document.createElement("td");return a.textContent=n.data[e].name,c.textContent=n.data[e].code,l.textContent=n.data[e].latest_data.confirmed,d.textContent=n.data[e].latest_data.recovered,r.textContent=n.data[e].latest_data.deaths,s.textContent=n.data[e].latest_data.confirmed-n.data[e].latest_data.recovered-n.data[e].latest_data.deaths,o.addEventListener("click",(function(){t.initDashboardForCountry(n.data[e].code)})),o.append(a,c,l,s,d,r),o},d=function(e,n,o){let a=document.createElement("tr"),c=document.createElement("td"),l=document.createElement("td"),s=document.createElement("td"),d=document.createElement("btn");return c.textContent=n.data[e].name,l.textContent=n.data[e].code,d.textContent=o,d.addEventListener("click",(function(){t.addCountryToWatchlist(this)})),s.append(d),a.append(c,l,s),a};return{requestDataForCountry:o,requestDataforGlobal:n,addCountryToWatchlist:function(t){let e=t.closest("tr").cloneNode(!0),n=e.getElementsByTagName("btn")[0];n.textContent="x",n.addEventListener("click",(function(){!function(t){t.closest("tr").remove()}(this)})),document.getElementById("country-list-selected").append(e)},searchCountryList:function(){var t,e,n,o;for(t=document.getElementById("country-search").value.toUpperCase(),e=document.getElementById("country-list").getElementsByTagName("tr"),console.log(e),o=0;o<e.length;o++)(n=e[o].getElementsByTagName("td")[0])&&((n.textContent||n.innerText).toUpperCase().indexOf(t)>-1?e[o].style.display="":e[o].style.display="none")},initDashboard:function(){n(),console.log("Get all countries for list"),fetch(e,{mode:"cors"}).then((function(t){if(200===t.status)return t.json();console.log("Error: "+t.status)})).then((function(t){console.log("Country-List Request successful"),c(t)})).catch((function(t){console.log("Country-List Request failed",t)}))},initDashboardForCountry:function(t){o(t)},initSelectCountry:function(){console.log("Get all countries for Watchlist"),fetch(e,{mode:"cors"}).then((function(t){if(200===t.status)return t.json();console.log("Error: "+t.status)})).then((function(t){console.log("Country-Watchlist Request successful"),l(t)})).catch((function(t){console.log("Country-Watchlist Request failed",t)}))},initAbout:function(){let t=document.createElement("img");t.setAttribute("src","https://media1.tenor.com/images/4324d537dbc06f422b34ae131c7b3e14/tenor.gif?itemid=7755460"),t.setAttribute("height","768"),t.setAttribute("width","1024"),t.setAttribute("alt","Best man"),document.getElementById("image-placeholder").appendChild(t)}}}()})();