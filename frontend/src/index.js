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
    
    if (finalPlayer1[0].position === "QB" && finalPlayer2[0].position === "QB") {
      
        let qbGamesPlayed = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].games_played, key: 0, title: "Games Played"},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].games_played, key: 1, title: "Games Played"}
        ]
        
        
        let qbAttempts = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].passing.attempts, key: 0, title: "Passing Attempts & Completions"},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].passing.attempts, key: 1, title: "Passing Attempts & Completions"},
            {playername: `${finalPlayer1[0].name} `, value: finalPlayer1[0].passing.completions, key: 0, title: "Passing Attempts & Completions"},
            {playername: `${finalPlayer2[0].name} `, value: finalPlayer2[0].passing.completions, key: 1, title: "Passing Attempts & Completions"}
        ]
        
        let qbCompletion = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].passing.cmp_pct, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].passing.cmp_pct, key: 1}
        ]

        let qbPassingYards = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].passing.yards, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].passing.yards, key: 1}
        ]

        let qbPassingTD = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].passing.touchdowns, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].passing.touchdowns, key: 1},
        ]

        let qbInterceptions = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].passing.interceptions, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].passing.interceptions, key: 1}
        ]

        let qbRushingAttempts = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].rushing.attempts, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].rushing.attempts, key: 1},
        ]

        let qbRushingYards = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].rushing.yards, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].rushing.yards, key: 1},
        ]

        let qbRushingTD = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].rushing.touchdowns, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].rushing.touchdowns, key: 1}
        ]

        
        let d1Button = document.createElement("button")
        d1Button.onclick = () => {update(qbGamesPlayed)}
        d1Button.textContent = "Games Played"

        let d2Button = document.createElement("button")
        d2Button.onclick = () => {update(qbAttempts)}
        d2Button.textContent = "Passing Attempts/Completion"

        let d3Button = document.createElement("button")
        d3Button.onclick = () => {update(qbCompletion)}
        d3Button.textContent = "Passing Completion %"

        let d4Button = document.createElement("button")
        d4Button.onclick = () => {update(qbPassingYards)}
        d4Button.textContent = "Passing Yards"
        
        let d5Button = document.createElement("button")
        d5Button.onclick = () => {update(qbPassingTD)}
        d5Button.textContent = "Passing TD's"
        
        let d6Button = document.createElement("button")
        d6Button.onclick = () => {update(qbInterceptions)}
        d6Button.textContent = "Interceptions"

        let d7Button = document.createElement("button")
        d7Button.onclick = () => {update(qbRushingAttempts)}
        d7Button.textContent = "Rushing Attempts"

        let d8Button = document.createElement("button")
        d8Button.onclick = () => {update(qbRushingYards)}
        d8Button.textContent = "Rushing Yards"

        let d9Button = document.createElement("button")
        d9Button.onclick = () => {update(qbRushingTD)}
        d9Button.textContent = "Rushing TD's"

        let graph = document.getElementsByClassName("graphcontainer")[0]
        // debugger
        graph.appendChild(d1Button)
        graph.appendChild(d2Button)
        graph.appendChild(d3Button)
        graph.appendChild(d4Button)
        graph.appendChild(d5Button)
        graph.appendChild(d6Button)
        graph.appendChild(d7Button)
        graph.appendChild(d8Button)
        graph.appendChild(d9Button)

        const margin = { top: 50, bottom: 50, left: 50, right:50 }
        const width = 800 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;
        
        const svg = d3.select('#d3-container')
            .append('svg')
                .attr('height', height + margin.top + margin.bottom)
                .attr('width', width + margin.left + margin.right )
            .append("g")
                .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");
        
        const x = d3.scaleBand()
            .range([0, width])
            .padding(0.2);
        const xAxis = svg.append("g")
            .attr("transform", "translate(0, " + height + ")")
        
        const y = d3.scaleLinear()
            .range([height, 0])
        const yAxis = svg.append("g")
            .attr("class", "myYaxis")

        svg.append("text")
            .attr("x", (width / 2))
            .attr("y", 0 - margin.top / 2)
            .attr("text-anchor", "middle")
            .style("font-size", "16px")
            .style("text-decoration", "underline")
            .text("Value vs Date Graph");
        
        function update(data) {

            let tooltip = d3.select("rect")
                .append("div")
                .style("position", "absolute")
                .style("z-index", "10")
                .style("visibility", "hidden")
                .style("background", "#000")
                .text(function(d) {return d.value});

            x.domain(data.map(function(d) { return d.playername; }))
            xAxis.call(d3.axisBottom(x))

            y.domain([0, d3.max(data, function(d) { return d.value }) ]);
            yAxis.transition().duration(1000).call(d3.axisLeft(y));

            svg.selectAll("text")
                .data(data)
                .enter()
                .attr("x", (width / 2))
                .attr("y", 0 - margin.top / 2)
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .style("text-decoration", "underline")
                .text(function(d) {return d.title});

            const barChart = svg.selectAll("rect")
            .data(data)

            barChart
                .enter()
                .append("rect")
                .text(function(d) {return d.value})
                .merge(barChart)
                .transition()
                .duration(1000)
                .attr("x", function(d) {return x(d.playername); })
                .attr("y", function(d) {return y(d.value); })
                .attr("width", x.bandwidth())
                .attr("height", function(d) {return height - y(d.value); })
                .attr("fill", function(d) {
                    // debugger
                    if (d.key === 0) {
                        return '#e41a1c'
                    } else {
                        return '#377eb8'
                    }
                })
                .on("mouseover", function(d){tooltip.text(d.value); return tooltip.style("visibility", "visible");})
                    .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
                    .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
                    

            barChart
                .exit()
                .remove()

        }

        update(qbGamesPlayed)

        // return svg.node();

    } else if (finalPlayer1[0].position === "RB" && finalPlayer2[0].position === "RB") {
        
        let rbGamesPlayed = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].games_played, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].games_played, key: 1}
        ]

        let rbRushingAttempts = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].rushing.attempts, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].rushing.attempts, key: 1},
            {playername: `${finalPlayer1[0].name} `, value: finalPlayer1[0].rushing.redzone_attempts, key: 0},
            {playername: `${finalPlayer2[0].name} `, value: finalPlayer2[0].rushing.redzone_attempts, key: 1}
        ]

        let rbRushingYards = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].rushing.yards, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].rushing.yards, key: 1},
            {playername: `${finalPlayer1[0].name} `, value: finalPlayer1[0].rushing.yards_after_contact, key: 0},
            {playername: `${finalPlayer2[0].name} `, value: finalPlayer2[0].rushing.yards_after_contact, key: 1}
        ]

        let rbAvgYards = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].rushing.avg_yards, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].rushing.avg_yards, key: 1},
        ]

        let rbRushingTouchDowns = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].rushing.touchdowns, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].rushing.touchdowns, key: 1},
        ]

        let rbReceivingTargets = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].receiving.targets, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].receiving.targets, key: 1},
            {playername: `${finalPlayer1[0].name} `, value: finalPlayer1[0].receiving.redzone_targets, key: 0},
            {playername: `${finalPlayer2[0].name} `, value: finalPlayer2[0].receiving.redzone_targets, key: 1}
        ]

        let rbReceptions = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].receiving.receptions, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].receiving.receptions, key: 1},
        ]

        let rbReceivingYards = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].receiving.yards, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].receiving.yards, key: 1},
            {playername: `${finalPlayer1[0].name} `, value: finalPlayer1[0].receiving.yards_after_contact, key: 0},
            {playername: `${finalPlayer2[0].name} `, value: finalPlayer2[0].receiving.yards_after_contact, key: 1}
        ]

        let rbReceivingTouchDowns = [
            {playername: finalPlayer1[0].name, value: finalPlayer1[0].receiving.touchdowns, key: 0},
            {playername: finalPlayer2[0].name, value: finalPlayer2[0].receiving.touchdowns, key: 1},
        ]

        let d1Button = document.createElement("button")
        d1Button.onclick = () => {update(rbGamesPlayed)}
        d1Button.textContent = "Games Played"

        let d2Button = document.createElement("button")
        d2Button.onclick = () => {update(rbRushingAttempts)}
        d2Button.textContent = "Rushing Attempts"

        let d3Button = document.createElement("button")
        d3Button.onclick = () => {update(rbRushingYards)}
        d3Button.textContent = "Rushing Yards"

        let d4Button = document.createElement("button")
        d4Button.onclick = () => {update(rbAvgYards)}
        d4Button.textContent = "Avg Yards"
        
        let d5Button = document.createElement("button")
        d5Button.onclick = () => {update(rbRushingTouchDowns)}
        d5Button.textContent = "Rushing TD's"
        
        let d6Button = document.createElement("button")
        d6Button.onclick = () => {update(rbReceivingTargets)}
        d6Button.textContent = "Receiving Targets"

        let d7Button = document.createElement("button")
        d7Button.onclick = () => {update(rbReceptions)}
        d7Button.textContent = "Receptions"

        let d8Button = document.createElement("button")
        d8Button.onclick = () => {update(rbReceivingYards)}
        d8Button.textContent = "Receiving Yards"

        let d9Button = document.createElement("button")
        d9Button.onclick = () => {update(rbReceivingTouchDowns)}
        d9Button.textContent = "Receiving TD's"

        let graph = document.getElementsByClassName("graphcontainer")[0]
        // debugger
        graph.appendChild(d1Button)
        graph.appendChild(d2Button)
        graph.appendChild(d3Button)
        graph.appendChild(d4Button)
        graph.appendChild(d5Button)
        graph.appendChild(d6Button)
        graph.appendChild(d7Button)
        graph.appendChild(d8Button)
        graph.appendChild(d9Button)

        const margin = { top: 50, bottom: 50, left: 50, right:50 }
        const width = 800 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;
        
        const svg = d3.select('#d3-container')
            .append('svg')
                .attr('height', height + margin.top + margin.bottom)
                .attr('width', width + margin.left + margin.right )
            .append("g")
                .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");
        
        const x = d3.scaleBand()
            .range([0, width])
            .padding(0.2);
        const xAxis = svg.append("g")
            .attr("transform", "translate(0, " + height + ")")
        
        const y = d3.scaleLinear()
            .range([height, 0])
        const yAxis = svg.append("g")
            .attr("class", "myYaxis")
        
        function update(data) {

            x.domain(data.map(function(d) { return d.playername; }))
            xAxis.call(d3.axisBottom(x))

            y.domain([0, d3.max(data, function(d) { return d.value }) ]);
            yAxis.transition().duration(1000).call(d3.axisLeft(y));

            
            const barChart = svg.selectAll("rect")
                .data(data)

            barChart
                .enter()
                .append("rect")
                .merge(barChart)
                .transition()
                .duration(1000)
                    .attr("x", function(d) {return x(d.playername); })
                    .attr("y", function(d) {return y(d.value); })
                    .attr("width", x.bandwidth())
                    .attr("height", function(d) {return height - y(d.value); })
                    .attr("fill", function(d) {
                        // debugger
                        if (d.key === 0) {
                            return '#e41a1c'
                        } else {
                            return '#377eb8'
                        }
                    })
                    

            barChart
                .exit()
                .remove()

        }

        update(rbGamesPlayed)
    }
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const resetbutton = document.getElementById('reset-btn');
resetbutton.addEventListener("click",(e) => {
    document.getElementById('position-dropdown').selectedIndex=0;
    document.getElementById('team1-dropdown').selectedIndex=0;
    // document.getElementById('player1-dropdown').selectedIndex=0;
    const player1dropdown = document.getElementById('player1-dropdown')
    while (player1dropdown.childNodes.length > 1) {
        debugger
        player1dropdown.removeChild(player1dropdown.lastChild);
    }
    // const player1dropdown = document.querySelector('#player1-dropdown')
    // removeAllChildNodes(player1dropdown)
    document.getElementById('team2-dropdown').selectedIndex=0;
    // document.getElementById('player2-dropdown').selectedIndex=0;
    const player2dropdown = document.getElementById('player2-dropdown')
    while (player2dropdown.childNodes.length > 1) {
        player2dropdown.removeChild(player2dropdown.lastChild);
    }
    // const player2dropdown = document.querySelector('#player2-dropdown')
    // removeAllChildNodes(player2dropdown)
    const graph = document.getElementsByClassName("graphcontainer")[0]
    removeAllChildNodes(graph)
    d3.selectAll('svg').remove();
})


document.addEventListener('DOMContentLoaded', () => {

    // const baseURL = 'http://api.sportradar.us/nfl/official/trial/v6/en/seasons/2020/REG/teams'
    
})












    