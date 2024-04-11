async function getClues(){
    let response = await fetch("http://localhost:5050/api/clue/", {
        method: 'GET'
    });
    if (response.ok) {
        let json = await response.json()
        json.rows.forEach((motives)=>{
            let div = document.createElement('div')
            div.classList.add('block')
            let personId = document.createElement('p')
            let evidence = document.createElement('p')
            let witness_statements = document.createElement('p')
            let alibi = document.createElement('p')
            let statements = document.createElement('p')
            personId.innerHTML = 'ID подозреваемого: ' + motives.personId
            witness_statements.innerHTML = 'Свидетельские показания: ' +motives.witness_statements
            alibi.innerHTML = 'Алиби: ' + motives.alibi
            statements.innerHTML = 'Показания: ' + motives.statements
            evidence.innerHTML = 'Улики: ' + motives.evidence
            div.appendChild(personId)
            div.appendChild(evidence)
            div.appendChild(witness_statements)
            div.appendChild(alibi)
            div.appendChild(statements)
            document.querySelector('.cards').appendChild(div)
        })
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
    document.querySelector('#submit').addEventListener('click', function(){
        setTimeout(()=> location.reload(), 10)

    })
}

getClues()
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