async function getMotives(){
    let response = await fetch("http://localhost:5050/api/motives/", {
        method: 'GET'
    });
    if (response.ok) {
        let json = await response.json()
        json.rows.forEach((motives)=>{
            let div = document.createElement('div')
            div.classList.add('block')
            let personId = document.createElement('p')
            let date = document.createElement('p')
            let relationship = document.createElement('p')
            let quarrels = document.createElement('p')
            let motive = document.createElement('p')
            personId.innerHTML = 'ID подозреваемого: ' + motives.personId
            relationship.innerHTML = 'Отношения: ' +motives.relationship
            quarrels.innerHTML = 'Ссоры: ' + motives.quarrels
            motive.innerHTML = 'Мотив: ' + motives.motive
            date.innerHTML = 'Дата посл. пересечения: ' + motives.date
            div.appendChild(personId)
            div.appendChild(relationship)
            div.appendChild(quarrels)
            div.appendChild(motive)
            div.appendChild(date)
            document.querySelector('.cards').appendChild(div)
        })
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
    document.querySelector('#submit').addEventListener('click', function(){
        setTimeout(()=> location.reload(), 100)

    })
}

getMotives()
async function getNames(){
    let response = await fetch("http://localhost:5050/api/people/", {
        method: 'GET'
    })
    let json = await response.json()
    json.rows.forEach((person)=>{
        let option = document.createElement('option')
        option.setAttribute('value', person.id)
        option.innerHTML = person.name
        document.getElementById('personId').appendChild(option)
    })
}

getNames()