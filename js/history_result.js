const records = JSON.parse(localStorage.getItem('history_result'))

const main = document.querySelector('main');

const h3 = document.createElement('h3');
h3.innerText = `Number of players: ${records.length}`
main.appendChild(h3)

function show_result(records){
    records.sort((record, record2) => (record2.score) - (record.score));
    for(let record of records){
        const div = document.createElement('div')
        let h2 = document.createElement('h2')
        h2.innerText = `${record.initials} - ${record.score}`;
        div.appendChild(h2)
        main.appendChild(div)
    }
}

show_result(records)