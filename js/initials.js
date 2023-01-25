const timer = localStorage.getItem('score')


const formElement = document.getElementById('form1'); 

let score = document.createElement('h1')
score.innerText =  `Score: ${timer}`

document.querySelector('p').innerText = `Timer: ${timer}`;

function save_result(form) {
    let form_value = form.initials.value
    console.log(form_value);
    if(form_value === ''){
        let h1 = document.querySelector('h1')
        h1.innerText = 'Try again. You have to send you initials to save your result!'
        h1.style.color = 'red';

        let h3 = document.createElement('h3')
        h3.innerText = 'You sent empty value'
        document.querySelector('main').appendChild(h3)
    }else{
        const date = new Date()
        let records_ = JSON.parse(localStorage.getItem('history_result'));
        const records = records_ ? records_ : []
        console.log(records);
        records.push({initials: form_value, score: timer})
        localStorage.setItem('history_result', JSON.stringify(records));
        localStorage.removeItem('result');
        localStorage.removeItem('score');
        window.location.href = './history_result.html';
       
    }
}

document.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode === 13) {
       document.getElementById('button').click()
    }
    return false
}

    
