async function getPeople(){
    let response = await fetch("http://localhost:5050/api/people/", {
        method: 'GET'
    });
    if (response.ok) {
        let json = await response.json()
        let i = 0
        while (i < json.count) {
            let div = document.createElement('div')
            div.classList.add('block')
            let name = document.createElement('p')
            let date = document.createElement('p')
            let address = document.createElement('p')
            let lat = document.createElement('p')
            let lon = document.createElement('p')
            let dist = document.createElement('p')
            name.innerHTML = 'Имя: ' + json.rows[i].name
            date.innerHTML = 'Дата посл. входа: ' + json.rows[i].date
            address.innerHTML = 'Адрес: ' +json.rows[i].address
            lat.innerHTML = 'Широта: ' + json.rows[i].latitude
            lon.innerHTML = 'Долгота: ' + json.rows[i].longitude
            dist.innerHTML = 'Расстояние до Алисы: ' + json.rows[i].distance.toFixed(2) + ' км'
            div.appendChild(name)
            div.appendChild(date)
            div.appendChild(address)
            div.appendChild(lat)
            div.appendChild(lon)
            div.appendChild(dist)
            document.querySelector('.cards').appendChild(div)
            i++
        }
    } else {
        alert("Ошибка HTTP: " + response.status);
    }

}

getPeople()