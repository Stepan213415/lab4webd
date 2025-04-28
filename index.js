let planes = 
[
    { id: 1, number: "A320", brand: "Airbus", seats: 180, speed: "840 км/год", range: "6000 км" },
    { id: 2, number: "B737", brand: "Boeing", seats: 160, speed: "820 км/год", range: "5500 км" },
    { id: 3, number: "E195", brand: "Embraer", seats: 120, speed: "780 км/год", range: "4200 км" }
];

let flights = 
[
    { id: 1, plane: "A320", departure: "2025-04-10 14:00", arrival: "2025-04-10 18:00", tickets: 150 },
    { id: 2, plane: "B737", departure: "2025-04-11 09:30", arrival: "2025-04-11 13:45", tickets: 130 },
    { id: 3, plane: "E195", departure: "2025-04-12 07:00", arrival: "2025-04-12 11:15", tickets: 100 }
];

let routes = 
[
    { id: 1, from: "Івано-Франківськ", to: "Цюріх", distance: "1560км", duration: "12 год" },
    { id: 2, from: "Цюріх", to: "Бухарест", distance: "1800км", duration: "14год XB" }
];

let planesLastId = 3;
let flightsLastId = 3;
let routesLastId = 2;

function displayPlanes() 
{
    const planeTab = document.getElementById('planes');
    let planeTabContent = `
        <h3>Літаки</h3>
        <button id="addPlanes" class="btn btn-success" data-toggle="modal" data-target="#planeModal">Додати</button>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Номер</th>
                    <th>Марка</th>
                    <th>Кількість місць</th>
                    <th>Швидкість</th>
                    <th>Максимальна дальність</th>
                    <th>Дії</th>
                </tr>
            </thead>
            <tbody>
    `;
    for (let i = 0; i < planes.length; i++) 
    {
        planeTabContent += `
                <tr>
                    <td>${planes[i].number}</td>
                    <td>${planes[i].brand}</td>
                    <td>${planes[i].seats}</td>
                    <td>${planes[i].speed}</td>
                    <td>${planes[i].range}</td>
                    <td>
                        <button data-id="${planes[i].id}" class="edit-plane btn btn-warning">Редагувати</button>
                        <button data-id="${planes[i].id}" class="delete-plane btn btn-danger">Видалити</button>
                    </td>
                </tr>
        `;
    }
    planeTabContent += `</tbody></table>`;
    planeTab.innerHTML = planeTabContent;
}

function displayFlights() 
{
    const flightTab = document.getElementById('flights');
    const flightSelect = document.getElementById('flightPlaneInput');
    let flightSelectContent = ``;
    let flightTabContent = `
        <h3>Рейси</h3>
        <button id="addFlights" class="btn btn-success" data-toggle="modal" data-target="#flightModal">Додати</button>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Літак</th>
                    <th>Дата, час вильоту</th>
                    <th>Дата, час прибуття</th>
                    <th>Кількість проданих квитків</th>
                    <th>Дії</th>
                </tr>
            </thead>
            <tbody>
    `;
    for (let i = 0; i < flights.length; i++) 
    {
        flightTabContent += `
                <tr>
                    <td>${flights[i].plane}</td>
                    <td>${flights[i].departure}</td>
                    <td>${flights[i].arrival}</td>
                    <td>${flights[i].tickets}</td>
                    <td>
                        <button data-id="${flights[i].id}" class="edit-flight btn btn-warning">Редагувати</button>
                        <button data-id="${flights[i].id}" class="delete-flight btn btn-danger">Видалити</button>
                    </td>
                </tr>
        `;
    }
    flightTabContent += `</tbody></table>`;
    flightTab.innerHTML = flightTabContent;

    for (let i = 0; i < planes.length; i++) 
    {
        flightSelectContent += `<option value="${planes[i].number}">${planes[i].number}</option>`;
    }
    flightSelect.innerHTML = flightSelectContent;
}

function displayRoutes() 
{
    const routeTab = document.getElementById('routes');
    let routeTabContent = `
        <h3>Маршрути</h3>
        <button id="addRoutes" class="btn btn-success" data-toggle="modal" data-target="#routeModal">Додати</button>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Пункт вильоту</th>
                    <th>Пункт призначення</th>
                    <th>Відстань</th>
                    <th>Тривалість</th>
                    <th>Дії</th>
                </tr>
            </thead>
            <tbody>
    `;
    for (let i = 0; i < routes.length; i++) 
    {
        routeTabContent += `
                <tr>
                    <td>${routes[i].from}</td>
                    <td>${routes[i].to}</td>
                    <td>${routes[i].distance}</td>
                    <td>${routes[i].duration}</td>
                    <td>
                        <button data-id="${routes[i].id}" class="edit-route btn btn-warning">Редагувати</button>
                        <button data-id="${routes[i].id}" class="delete-route btn btn-danger">Видалити</button>
                    </td>
                </tr>
        `;
    }
    routeTabContent += `</tbody></table>`;
    routeTab.innerHTML = routeTabContent;
}

displayPlanes();
displayFlights();
displayRoutes();

document.addEventListener('click', function (e) 
{
    if (e.target.classList.contains('delete-plane')) 
    {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < planes.length; i++) 
        {
            if (elementId == planes[i].id) 
            {
                planes.splice(i, 1);
                break;
            }
        }
        displayPlanes();
    } else if (e.target.classList.contains('delete-flight')) 
    {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < flights.length; i++) 
        {
            if (elementId == flights[i].id) 
            {
                flights.splice(i, 1);
                break;
            }
        }
        displayFlights();
    } else if (e.target.classList.contains('delete-route')) 
    {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < routes.length; i++) 
        {
            if (elementId == routes[i].id) 
            {
                routes.splice(i, 1);
                break;
            }
        }
        displayRoutes();
    } else if (e.target.classList.contains('edit-plane')) 
    {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < planes.length; i++) 
        {
            if (elementId == planes[i].id) 
            {
                document.getElementById('planeIdInput').value = planes[i].id;
                document.getElementById('planeNumberInput').value = planes[i].number;
                document.getElementById('planeBrandInput').value = planes[i].brand;
                document.getElementById('planeSeatsInput').value = planes[i].seats;
                document.getElementById('planeSpeedInput').value = planes[i].speed;
                document.getElementById('planeRangeInput').value = planes[i].range;
                document.getElementById('addPlanes').click();
                break;
            }
        }
    } else if (e.target.classList.contains('edit-flight')) 
    {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < flights.length; i++) 
        {
            if (elementId == flights[i].id) 
            {
                document.getElementById('flightIdInput').value = flights[i].id;
                document.getElementById('flightPlaneInput').value = flights[i].plane;
                document.getElementById('flightDepartureInput').value = flights[i].departure;
                document.getElementById('flightArrivalInput').value = flights[i].arrival;
                document.getElementById('flightTicketsInput').value = flights[i].tickets;
                document.getElementById('addFlights').click();
                break;
            }
        }
    } else if (e.target.classList.contains('edit-route')) 
    {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < routes.length; i++) 
        {
            if (elementId == routes[i].id) 
            {
                document.getElementById('routeIdInput').value = routes[i].id;
                document.getElementById('routeDepartureInput').value = routes[i].from;
                document.getElementById('routeArrivalInput').value = routes[i].to;
                document.getElementById('routeDistanceInput').value = routes[i].distance;
                document.getElementById('routeDurationInput').value = routes[i].duration;
                document.getElementById('addRoutes').click();
                break;
            }
        }
    }
});

document.addEventListener('submit', function (e) 
{
    if (e.target.id == "planeForm") 
    {
        e.preventDefault();
        let id = document.getElementById('planeIdInput').value;
        let number = document.getElementById('planeNumberInput').value;
        let brand = document.getElementById('planeBrandInput').value;
        let seats = document.getElementById('planeSeatsInput').value;
        let speed = document.getElementById('planeSpeedInput').value;
        let range = document.getElementById('planeRangeInput').value;
        if (id == "") 
        {
            let newPlane = 
            {
                id: ++planesLastId,
                number: number,
                brand: brand,
                seats: parseInt(seats),
                speed: speed,
                range: range
            };
            planes.push(newPlane);
        } else {
            for (let i = 0; i < planes.length; i++) 
            {
                if (id == planes[i].id) 
                {
                    planes[i].number = number;
                    planes[i].brand = brand;
                    planes[i].seats = parseInt(seats);
                    planes[i].speed = speed;
                    planes[i].range = range;
                    break;
                }
            }
        }
        displayPlanes();
        document.getElementById('planeIdInput').value = "";
        document.getElementById('planeForm').reset();
        document.getElementById('closePlaneModal').click();
    } else if (e.target.id == "flightForm") 
    {
        e.preventDefault();
        let id = document.getElementById('flightIdInput').value;
        let plane = document.getElementById('flightPlaneInput').value;
        let departure = document.getElementById('flightDepartureInput').value;
        let arrival = document.getElementById('flightArrivalInput').value;
        let tickets = document.getElementById('flightTicketsInput').value;
        if (id == "") 
        {
            let newFlight = 
            {
                id: ++flightsLastId,
                plane: plane,
                departure: departure,
                arrival: arrival,
                tickets: parseInt(tickets)
            };
            flights.push(newFlight);
        } else 
        {
            for (let i = 0; i < flights.length; i++) 
            {
                if (id == flights[i].id) 
                {
                    flights[i].plane = plane;
                    flights[i].departure = departure;
                    flights[i].arrival = arrival;
                    flights[i].tickets = parseInt(tickets);
                    break;
                }
            }
        }
        displayFlights();
        document.getElementById('flightIdInput').value = "";
        document.getElementById('flightForm').reset();
        document.getElementById('closeFlightModal').click();
    } else if (e.target.id == "routeForm") 
    {
        e.preventDefault();
        let id = document.getElementById('routeIdInput').value;
        let from = document.getElementById('routeDepartureInput').value;
        let to = document.getElementById('routeArrivalInput').value;
        let distance = document.getElementById('routeDistanceInput').value;
        let duration = document.getElementById('routeDurationInput').value;
        if (id == "") 
        {
            let newRoute = 
            {
                id: ++routesLastId,
                from: from,
                to: to,
                distance: distance,
                duration: duration
            };
            routes.push(newRoute);
        } else {
            for (let i = 0; i < routes.length; i++) 
            {
                if (id == routes[i].id) 
                {
                    routes[i].from = from;
                    routes[i].to = to;
                    routes[i].distance = distance;
                    routes[i].duration = duration;
                    break;
                }
            }
        }
        displayRoutes();
        document.getElementById('routeIdInput').value = "";
        document.getElementById('routeForm').reset();
        document.getElementById('closeRouteModal').click();
    }
});