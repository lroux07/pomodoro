let taskName = document.querySelector('#taskName');
let infos = document.querySelector('#infos');
let steps = document.querySelector('#steps');
const send = document.querySelector('#send');
const section = document.querySelector('#section');
let err = document.querySelector('#err');
let articleIds = [];

send.addEventListener('click', () => {
    if(taskName.value === "" || infos.value === "") {
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
        let p = document.createElement('p');
        p.textContent = infos.value;
        header.appendChild(p);

        let edit = document.createElement('button');
        edit.textContent = 'Modifier';
        edit.classList.add('edit');
        footer.appendChild(edit);
        let drop = document.createElement('button');
        drop.textContent = 'Supprimer';
        drop.classList.add('drop');
        footer.appendChild(drop);

        articleIds.push(articleId);
    }
});