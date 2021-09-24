

// this is the onlick to pull the data

function getJSON( e ) {
    e.preventDefault();
    /* const form = document.querySelector(`#user-form`)
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let formData = new FormData( document );
        console.log();
    }) */

    let year = document.querySelector('#year').value;
    let round = document.querySelector('#round').value;
    let tbody = document.querySelector('#added-column');
    fetch(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            // This should show the top 7 Drivers 
            for (let i = 0; i < 8; i++) {

                // THis should pull the first and last name then put them together in the list 
                let givenName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
                let familyName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
                let fullName = `${givenName} ${familyName}`;
                document.querySelector(`#name-${i}`).innerHTML = fullName;

                // This should funciton to get the nationality of the drivers and add them to the list if they are in the top 8
                let nationality = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
                document.querySelector(`#nationality-${i}`).innerHTML = nationality;

                // This should pull the sponsor 
                let sponsor = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.Constructors[0].name
                document.querySelector(`#sponsor-${i}`).innerHTML = sponsor;

                // This should pull the points 
                let points = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
                document.querySelector(`#points-${i}`).innerHTML = points

            }
        })
}




/*
// This should create the row
const createRow = (position, firstname, lastname, nationality, sponsor, points) => {
    const htmlRow = `<tr><th scope="row">${position}</th><td><a href=${driver_url}>${firstname} ${lastname}</a></td><td>${nationality}</td><td>${sponsor}</td><td>${points}</td></tr>`
    document.querySelector(`.show-standings`).insertAdjacentHTML(`beforeend`, htmlRow)

}

// this should load the data

const loadData = async () => {
    const standings = await getData();
    document.querySelector(`.show-standings`).innerHtml = ''
    if (standings.MRData.StandingsTable.StandingsLists.length == 0) {
        document.querySelector(`.show-standings`).insertAdjacentHTML(`beforeend`, '<p>Nothing to see here</p>')
    } else {
        const Info = standings.MRData.StandingsTable.StandingsLists[0].DriverStandings
        Info.forEach(element => createRow(
            element.position,
            element.Driver.givenName,
            element.Driver.familyName,
            element.Driver.nationality,
            element.points,
            element.Driver.url))
    }
}
} */