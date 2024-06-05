import { artistForFun } from "./data/ArtistForFun.js";
import { cardElGen, cardListGen } from "./modules/components.js";

const newArtist = { 
    id: 10,
    name: 'Ben Klock',
    type: 'Techno',
    image: "./img/Klock.webp",
}

document.addEventListener("DOMContentLoaded", function() {

    const cardsSectionEl = document.querySelector('.main')
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('infoForm');

    const renderListCard = () => {
        cardsSectionEl.innerHTML = "";
        const cardList = cardListGen();
        artistForFun.forEach((singleArtist) => {
            const cardEl = cardElGen(singleArtist);
            cardList.append(cardEl); 
        });
        cardsSectionEl.append(cardList);

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', function() {
                popup.style.display = 'flex';
            });
        });
    };

    renderListCard();

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('inputName').value;
        const email = document.getElementById('inputEmail').value;
        const link = document.getElementById('inputLink').value;
        const message = document.getElementById('inputMessage').value;

        if (name === '' || email === '' || link === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        alert(`Thank you, ${name}! Your information has been submitted.`);

        form.reset();

        popup.style.display = 'none';
    });

    const btnAdd = document.querySelector('.btn-add');

    btnAdd.addEventListener("click", function () {
        const isEqual = artistForFun.some(i => i.id === newArtist.id);
        if (isEqual) {
            console.log("Artista esiste già");
        } else {
            artistForFun.push(newArtist);
            renderListCard();
        }
    });
});