async function getJSON() {
    lap = document.getElementsByName('lap')[0].value
    year = document.getElementsByName('year')[0].value

    await fetch(`https://ergast.com/api/f1/${year}/${lap}/driverStandings.json`)
        .then(data => data.json())
        .then(rawData => {
            for (let i = 0; i < 8; i++) {

                let position_number = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position
                let name = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
                let nationality = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
                let constructor_name = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
                let points = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
                document.getElementById(`position${i.toString()}`).innerHTML = position_number
                document.getElementById(`name${i.toString()}`).innerHTML = name
                document.getElementById(`nationality${i.toString()}`).innerHTML = nationality
                document.getElementById(`sponsor${i.toString()}`).innerHTML = constructor_name
                document.getElementById(`points${i.toString()}`).innerHTML = points
            }
        })
}