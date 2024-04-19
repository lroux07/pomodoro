let taskName = document.querySelector('#taskName');
let infos = document.querySelector('#infos');
let steps = document.querySelector('#steps');
const send = document.querySelector('#send');
const section = document.querySelector('#section');
let numberArticles = 0;

send.addEventListener('click', () => {
    const article = document.createElement('article');
    section.appendChild(article);
    const header = document.createElement('header');
    article.appendChild(header);
    const footer = document.createElement('footer');
    article.appendChild(footer);
    console.log(article);

    let h3 = document.createElement('h3');
    h3.textContent = taskName.value;
    header.appendChild(h3);
    let p = document.createElement('p');
    p.textContent = infos.value;
    header.appendChild(p);

    numberArticles++;

    if(numberArticles < 35) {
        send.disabled = false;
    } else {
        send.disabled = true;
    }
})