let taskName = document.querySelector('#taskName');
let desc = document.querySelector('#desc');
let duration = document.querySelector('#duration');
let steps = document.querySelector('#steps');
const send = document.querySelector('#send');
const section = document.querySelector('#section');
let err = document.querySelector('#err');
let articleIds = [];
let nuberArticles = 0;

send.addEventListener('click', () => {
    if(taskName.value === "" || desc.value === "" || duration.value === "") {
        alert('Err! Tout les champs ne sont pas valides...');
    } else {
        const article = document.createElement('article');
        let articleId = 'article' + (articleIds.length + 1);
        article.id = articleId;
        section.appendChild(article);
        const header = document.createElement('header');
        article.appendChild(header);
        const footer = document.createElement('footer');
        article.appendChild(footer);

        let h3 = document.createElement('h3');
        h3.textContent = taskName.value;
        header.appendChild(h3);
        let descP = document.createElement('p');
        descP.textContent = desc.value;
        header.appendChild(descP);
        let durationP = document.createElement('p');
        durationP.textContent = 'Durée: ' + duration.value;
        durationP.classList.add('duration');
        header.appendChild(durationP);

        let edit = document.createElement('button');
        edit.textContent = 'Modifier';
        edit.classList.add('edit');
        footer.appendChild(edit);
        let drop = document.createElement('button');
        drop.textContent = 'Supprimer';
        drop.classList.add('drop');
        footer.appendChild(drop);

        articleIds.push(articleId);

        nuberArticles++;
        if(nuberArticles === 26) {
            send.disabled = true;
        } else if(nuberArticles < 26) {
            send.disabled = false;
        }
    }

});