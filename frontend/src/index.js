import "./styles/index.scss";
import "./styles/reset.scss";
import "./images/football_field.jpg";
const axios = require('axios');

let selectedPosition = ""
const positiondropdown = document.getElementById("position-dropdown")
    positiondropdown.addEventListener("change", (e) => {
        selectedPosition = e.currentTarget.value
        console.log(selectedPosition)
    })

const team1_id = {
    "Arizona Cardinals": "de760528-1dc0-416a-a978-b510d20692ff", 
    "Atlanta Falcons": "e6aa13a4-0055-48a9-bc41-be28dc106929", 
    "Baltimore Ravens": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c", 
    "Buffalo Bills": "768c92aa-75ff-4a43-bcc0-f2798c2e1724", 
    "Carolina Panthers": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314", 
    "Chicago Bears": "7b112545-38e6-483c-a55c-96cf6ee49cb8", 
    "Cincinnati Bengals": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123", 
    "Cleveland Browns": "d5a2eb42-8065-4174-ab79-0a6fa820e35e", 
    "Dallas Cowboys": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060", 
    "Denver Broncos": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0", 
    "Detroit Lions": "c5a59daa-53a7-4de0-851f-fb12be893e9e", 
    "Green Bay Packers": "a20471b4-a8d9-40c7-95ad-90cc30e46932", 
    "Houston Texans": "82d2d380-3834-4938-835f-aec541e5ece7", 
    "Indianapolis Colts": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9", 
    "Jacksonville Jaguars": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de", 
    "Kansas City Chiefs": "6680d28d-d4d2-49f6-aace-5292d3ec02c2", 
    "Las Vegas Raiders": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576", 
    "Los Angeles Chargers": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5", 
    "Los Angeles Rams": "2eff2a03-54d4-46ba-890e-2bc3925548f3", 
    "Miami Dolphins": "4809ecb0-abd3-451d-9c4a-92a90b83ca06", 
    "Minnesota Vikings": "33405046-04ee-4058-a950-d606f8c30852", 
    "New England Patriots": "97354895-8c77-4fd4-a860-32e62ea7382a", 
    "New Orleans Saints": "0d855753-ea21-4953-89f9-0e20aff9eb73", 
    "New York Giants": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d", 
    "New York Jets": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3", 
    "Philadelphia Eagles": "386bdbf9-9eea-4869-bb9a-274b0bc66e80", 
    "Pittsburgh Steelers": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398", 
    "San Francisco 49ers": "f0e724b0-4cbf-495a-be47-013907608da9", 
    "Seattle Seahawks": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8", 
    "Tampa Bay Buccaneers": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69", 
    "Tennessee Titans": "d26a1ca5-722d-4274-8f97-c92e49c96315", 
    "Washington Football Team": "22052ff7-c065-42ee-bc8f-c4691c50e624", 
}

const team1dropdown = document.getElementById("team1-dropdown")

Object.entries(team1_id).forEach(([teamname, teamid]) => {
    // console.log(`${teamname}: ${teamid}`)
    team1dropdown.appendChild(new Option(`${teamname}`, `${teamid}`))
})

let selectedTeam1 = "";
let selectedTeam1Players = [];
let team1player1results = [];
const player1 = document.getElementById("player1-dropdown")
team1dropdown.addEventListener('change', (e) => {
    selectedTeam1 = e.target.value;
    console.log(selectedTeam1)
    
    axios.get(`/teams/${selectedTeam1}`)
    .then((response) => {
         selectedTeam1Players = response.data.players
         console.log(selectedTeam1Players)

         team1player1results = selectedTeam1Players.filter(player => {
            return player.position === selectedPosition
         })
         console.log(team1player1results)

        team1player1results.forEach(player => {
            player1.appendChild(new Option(`${player.name}`, `${player.name}`))
        })
    })
    .catch(function (error) {
        // debugger
        console.log(error);
    })
})
    
let player1name = ""
let finalPlayer1;
player1.addEventListener("change", (e) => {
    // debugger
    player1name = e.currentTarget.value
    finalPlayer1 = team1player1results.filter(player => {
        return player.name === player1name
    })
    console.log(finalPlayer1)
})

const team2_id = {
    "Arizona Cardinals": "de760528-1dc0-416a-a978-b510d20692ff", 
    "Atlanta Falcons": "e6aa13a4-0055-48a9-bc41-be28dc106929", 
    "Baltimore Ravens": "ebd87119-b331-4469-9ea6-d51fe3ce2f1c", 
    "Buffalo Bills": "768c92aa-75ff-4a43-bcc0-f2798c2e1724", 
    "Carolina Panthers": "f14bf5cc-9a82-4a38-bc15-d39f75ed5314", 
    "Chicago Bears": "7b112545-38e6-483c-a55c-96cf6ee49cb8", 
    "Cincinnati Bengals": "ad4ae08f-d808-42d5-a1e6-e9bc4e34d123", 
    "Cleveland Browns": "d5a2eb42-8065-4174-ab79-0a6fa820e35e", 
    "Dallas Cowboys": "e627eec7-bbae-4fa4-8e73-8e1d6bc5c060", 
    "Denver Broncos": "ce92bd47-93d5-4fe9-ada4-0fc681e6caa0", 
    "Detroit Lions": "c5a59daa-53a7-4de0-851f-fb12be893e9e", 
    "Green Bay Packers": "a20471b4-a8d9-40c7-95ad-90cc30e46932", 
    "Houston Texans": "82d2d380-3834-4938-835f-aec541e5ece7", 
    "Indianapolis Colts": "82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9", 
    "Jacksonville Jaguars": "f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de", 
    "Kansas City Chiefs": "6680d28d-d4d2-49f6-aace-5292d3ec02c2", 
    "Las Vegas Raiders": "7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576", 
    "Los Angeles Chargers": "1f6dcffb-9823-43cd-9ff4-e7a8466749b5", 
    "Los Angeles Rams": "2eff2a03-54d4-46ba-890e-2bc3925548f3", 
    "Miami Dolphins": "4809ecb0-abd3-451d-9c4a-92a90b83ca06", 
    "Minnesota Vikings": "33405046-04ee-4058-a950-d606f8c30852", 
    "New England Patriots": "97354895-8c77-4fd4-a860-32e62ea7382a", 
    "New Orleans Saints": "0d855753-ea21-4953-89f9-0e20aff9eb73", 
    "New York Giants": "04aa1c9d-66da-489d-b16a-1dee3f2eec4d", 
    "New York Jets": "5fee86ae-74ab-4bdd-8416-42a9dd9964f3", 
    "Philadelphia Eagles": "386bdbf9-9eea-4869-bb9a-274b0bc66e80", 
    "Pittsburgh Steelers": "cb2f9f1f-ac67-424e-9e72-1475cb0ed398", 
    "San Francisco 49ers": "f0e724b0-4cbf-495a-be47-013907608da9", 
    "Seattle Seahawks": "3d08af9e-c767-4f88-a7dc-b920c6d2b4a8", 
    "Tampa Bay Buccaneers": "4254d319-1bc7-4f81-b4ab-b5e6f3402b69", 
    "Tennessee Titans": "d26a1ca5-722d-4274-8f97-c92e49c96315", 
    "Washington Football Team": "22052ff7-c065-42ee-bc8f-c4691c50e624",  
}

const team2dropdown = document.getElementById("team2-dropdown")
Object.entries(team2_id).forEach(([teamname, teamid]) => {
    team2dropdown.appendChild(new Option(`${teamname}`, `${teamid}`))
})

let selectedTeam2 = "";
let selectedTeam2Players = [];
let team2player2results = [];
const player2 = document.getElementById("player2-dropdown")
team2dropdown.addEventListener('change', (e) => {
    selectedTeam2 = e.target.value;
    console.log(selectedTeam2)
    
     axios.get(`/teams/${selectedTeam2}`)
     .then((response) => {
        //  debugger
        //  console.log(response.data);
         selectedTeam2Players = response.data.players
         console.log(selectedTeam2Players)

         team2player2results = selectedTeam2Players.filter(player => {
             return player.position === selectedPosition
         })

        team2player2results.forEach(player => {
            player2.appendChild(new Option(`${player.name}`, `${player.name}`))
        })

     })
     .catch(function (error) {
        //  debugger
         console.log(error);
     })
})

let player2name = ""
let finalPlayer2 = {};
player2.addEventListener("change", (e) => {
    player2name = e.currentTarget.value
    finalPlayer2 = team2player2results.filter(player => {
        return player.name === player2name
    })
    console.log(finalPlayer2)
})


const button = document.getElementById('compare-btn');
button.addEventListener("click",(e) => {
    // debugger
    //********************TESTINGSTART******* */
    window.finalPlayer1 = finalPlayer1
    window.finalPlayer2 = finalPlayer2
    //********************TESTINGEND******* */
    

    // const DUMMY_DATA = [
    //     playerdata
    //     // { id: 'd1', name: 'Titans', market: 'Tennessee'},
    //     // { id: 'd2', name: 'Falcons', market: 'Atlanta'},
    //     // { id: 'd3', name: 'Giants', market: 'New York'},
    //     // { id: 'd4', name: 'Dolphins', market: 'Miami'},
    // ];

    // const container = d3.select('#d3-container')
    //     .selectAll('p')
    //     .data(DUMMY_DATA)
    //     .enter()
    //     .append('p')
    //     .text(dta => dta.receptions);  //function probably map to display data


})





// const DUMMY_DATA = [
//     { id: 'd1', name: 'Titans', market: 'Tennessee'},
//     { id: 'd2', name: 'Falcons', market: 'Atlanta'},
//     { id: 'd3', name: 'Giants', market: 'New York'},
//     { id: 'd4', name: 'Dolphins', market: 'Miami'},
// ];

// const container = d3.select('#d3-container')
//     .selectAll('p')
//     .data(DUMMY_DATA)
//     .enter()
//     .append('p')
//     .text(dta => dta.name);  //function probably map to display data


// TUTORIAL #1
// const data = [
//     // playerdata
//     {name: "Simon", score: 80},
//     {name: "Mary", score: 90},
//     {name: "John", score: 60}
// ];

// const width = 800;
// const height = 400;
// const margin = { top: 50, bottom: 50, left: 50, right:50 }

// const svg = d3.select('#d3-container')
//     .append('svg')
//     .attr('height', height - margin.top - margin.bottom)
//     .attr('width', width - margin.left - margin.right )
//     .attr('viewBox', [0, 0, width, height])

// const x = d3.scaleBand()
//     .domain(d3.range(data.length))
//     .range([margin.left, width - margin.right])
//     .padding(0.1);

// const y = d3.scaleLinear()
//     .domain([0,100])
//     .range([height - margin.bottom, margin.top])

// svg
//     .append('g')
//     .attr('fill', 'royalblue')
//     .selectAll('rect')
//     // .data(data.sort((a,b) => d3.descending(a.score, b.score))) SORTS DESCENDING
//     .data(data)
//     .join('rect')
//         .attr('x', (d, i) => x(i))
//         .attr('y', (d) => y(d.score))
//         .attr('height', (d) => y(0) - y(d.score))
//         .attr('width', x.bandwidth())

//     function xAxis(g) {
//         g.attr('transform', `translate(0, ${height - margin.bottom})`)
//         .call(d3.axisBottom(x).tickFormat(i => data[i].name))
//         .attr('font-size', '15px')
//         .attr('color', 'black')
//     }

//     function yAxis(g) {

//     }

// svg.append('g').call(xAxis);
// svg.node();

document.addEventListener('DOMContentLoaded', () => {

    const baseURL = 'http://api.sportradar.us/nfl/official/trial/v6/en/seasons/2020/REG/teams'
    
})












    