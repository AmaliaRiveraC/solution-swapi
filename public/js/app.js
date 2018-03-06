$('.modal').modal();
const apiLoad = () => {
    fetch(`https://swapi.co/api/films/`, {method: 'GET'})
        .then(function(response) {
            response.json().then(function(result) {
                paintMovies(result.results);
        });
    })
        .catch(function(err) {
            console.log(err);
        });
};

const paintMovies = (detailsMovies) => {
    let containerMovies = document.getElementById('container-list');
    let templateMovies = ``;
    let templateCharacter = ``;
     detailsMovies.forEach((item) => {
        item.characters.forEach((character) => {

            templateCharacter += `<a href="#modal1">
                <li class="character-list" data-url="${character}">${character}</li>
            </a>`;    
        });
        templateMovies += `<div class="col s6 m3" data-url="">
        <div class="card waves">
            <div class= "card-content center-align circle">
                <img class="responsive-img center" src="">
                <h6 style="color: white">Title: ${item.title}</h6>
                <p>Episode id: ${item.episode_id}</p>
                <ul>${templateCharacter}</ul>
            </div>
        </div>`; 
    });

    containerMovies.innerHTML = templateMovies;
    let coleccionHTML = document.getElementsByClassName('character-list');
    giveEventLis(coleccionHTML);
    
};

const giveEventLis = (coleccionHTML) => {
    let listCharacters = Array.from(coleccionHTML);
    listCharacters.forEach(li => {
        li.addEventListener('click', getDetailsCharacter);
        //li.onclik = getDetailsCharacter
    });
};

const getDetailsCharacter = (e) => {
    e.preventDefault;
    //e.target.dataset.url
    //e.target.getAttribute('data-url')
    let url = e.target.innerText;
    fetch(url, {method: 'GET'})
        .then(response => {
            response.json().then(result => {
                painModal(result);
            });
        });
};

const painModal = (detailCharacter) => {
    console.log(detailCharacter);
    
    $('#character-name').html(detailCharacter.name);
    $('#birth-year').html(detailCharacter.birth_year);
    $('#hair-color').html(detailCharacter.hair_color);
    $('#mass').html(detailCharacter.mass);
    $('#height').html(detailCharacter.height);
    $('#skin-color').html(detailCharacter.skin_color);
    $('#eye-color').html(detailCharacter.eye_color);










};
apiLoad();