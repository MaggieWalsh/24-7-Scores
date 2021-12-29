"use strict"
const standings = document.getElementById("stan");
const season = document.getElementById("seas");
const table = document.getElementById("leagueTable");
let choice = "PL";

let myHeaders = new Headers();
myHeaders.append("X-Auth-Token", "cf95d946bbcd4b9fa296bf4682767907");

let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

const apiUrl =
    `https://api.football-data.org/v2/competitions/${choice}/standings`;

function getData() {
    fetch(apiUrl, requestOptions)
        .then((response) => response.json())
        .then((response) => {
            console.log(response.standings[0].table);
            standings.textContent = standings;
            season.textContent = season;

            for (let team of response.standings[0].table) {
                addRow(team);
            }
        });
}
getData();

function addRow(item) {
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);

    let cell1 = row.insertCell(0);
    let element1 = document.createElement("p");
    element1.textContent = item.position;
    cell1.appendChild(element1);

    let cell2 = row.insertCell(1);
    let element2 = document.createElement("p");
    element2.textContent = item.team.name;
    cell2.appendChild(element2);

    let cell3 = row.insertCell(2);
    let element3 = document.createElement("img");
    element3.src = item.team.crestUrl;
    cell3.appendChild(element3);

    let cell4 = row.insertCell(3);
    let element4 = document.createElement("p");
    element4.textContent = item.playedGames;
    cell4.appendChild(element4);

    let cell5 = row.insertCell(4);
    let element5 = document.createElement("p");
    element5.textContent = item.won;
    cell5.appendChild(element5);

    let cell6 = row.insertCell(5);
    let element6 = document.createElement("p");
    element6.textContent = item.lost;
    cell6.appendChild(element6);

    let cell7 = row.insertCell(6);
    let element7 = document.createElement("p");
    element7.textContent = item.draw;
    cell7.appendChild(element7);

    let cell8 = row.insertCell(7);
    let element8 = document.createElement("p");
    element8.textContent = item.goalDifference;
    cell8.appendChild(element8);

    let cell9 = row.insertCell(8);
    let element9 = document.createElement("p");
    element9.textContent = item.points;
    cell9.appendChild(element9);
}