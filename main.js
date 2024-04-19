let taskName = document.querySelector('#taskName');
let infos = document.querySelector('#infos');
let steps = document.querySelector('#steps');
const send = document.querySelector('#send');
const section = document.querySelector('#section');
let numberArticles = 0;
let err = document.querySelector('#err');

send.addEventListener('click', () => {
    if(taskName.value === "" || infos.value === "" || steps.value === "") {
        alert('Err! Tout les champs ne sont pas valident...');
    } else {
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
    }

    if(numberArticles < 33) {
        send.disabled = false;
        err.classList.remove('err');
    } else {
        send.disabled = true;
        err.textContent = "Err! Vous avez atteint le nombre de tâches qui vous est attibué.";
        err.classList.add('err');
    }
})