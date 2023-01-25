let index = 0;

const div = document.createElement('div')

const timer = localStorage.getItem('score')

let score = document.createElement('h1')
score.innerText =  `Score: ${timer}`

document.querySelector('p').innerText = `Timer: ${timer}`;

const main = document.querySelector('main')

main.appendChild(score)

main.appendChild(div)

const result = JSON.parse(localStorage.getItem('result'))


if (!result){window.location.href = './index.html';}

for (const property in result) {
    h2 = document.createElement('h2')
    h2.innerText = property
    div.appendChild(h2)
    p = document.createElement('p')
    const res = result[property]
    p.innerText = `Result: ${res.result} | Correct answer: ${res.correct_answer} | You answer: ${res.your_answer} | Answered: ${res.answered}`;
    if (res.result === 'Wrong'){
        p.style.backgroundColor = 'red'
    }
    div.appendChild(p)
  }


div.appendChild(score)

const save = document.createElement('button');
save.innerText = 'Save your result';
div.appendChild(save);
const go_back = document.createElement('button');
go_back.innerText = 'Go Back';
div.appendChild(go_back);

save.onclick = () => {
    window.location.href = './initials.html';
}

go_back.onclick = () => {
    localStorage.removeItem('result');
    localStorage.removeItem('score');
    localStorage.removeItem('question_number')
    window.location.href = './index.html';
}
