"use strict";
const table = document.getElementById("leagueTable");
const loader = document.getElementById("loader");
const error = document.getElementById("error");

let myHeaders = new Headers();
myHeaders.append("X-Auth-Token", "cf95d946bbcd4b9fa296bf4682767907");

let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

const apiUrl =
    'https://api.football-data.org/v2/competitions/PL/standings';


/**
 * Retrieves data from API
 */
function getData() {
    loader.classList.remove("hide");
    fetch(apiUrl, requestOptions)
        .then((response) => response.json())
        .then((response) => {
            for (let team of response.standings[0].table) {
                addRow(team);
            }
            loader.classList.add("hide");
            table.classList.remove("hide");
        }).catch((e) => {
            console.log(e);
            loader.classList.add("hide");
            error.classList.remove("hide");
        });
}
getData();

/**
 * Uses retrieved data to create table
 */
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
    let element3 = document.createElement("p");
    element3.textContent = item.playedGames;
    cell3.appendChild(element3);

    let cell4 = row.insertCell(3);
    let element4 = document.createElement("p");
    element4.textContent = item.won;
    cell4.appendChild(element4);

    let cell5 = row.insertCell(4);
    let element5 = document.createElement("p");
    element5.textContent = item.lost;
    cell5.appendChild(element5);

    let cell6 = row.insertCell(5);
    let element6 = document.createElement("p");
    element6.textContent = item.draw;
    cell6.appendChild(element6);

    let cell7 = row.insertCell(6);
    let element7 = document.createElement("p");
    element7.textContent = item.goalDifference;
    cell7.appendChild(element7);

    let cell8 = row.insertCell(7);
    let element8 = document.createElement("p");
    element8.textContent = item.points;
    cell8.appendChild(element8);
}