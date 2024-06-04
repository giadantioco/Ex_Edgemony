import { artistForFun, artistTypes } from "./data/ArtistForFun.js";
import { cardElGen, cardListGen, buttonGen } from "./modules/components.js";



const newArtist = { 
    id: 10,
    name: 'Ben Klock',
    type: 'Techno',
    image: "./img/Klock.webp",
}


document.addEventListener("DOMContentLoaded", function() {
    const cardsSectionEl = document.querySelector('.main');
    const headerElement = document.querySelector('.header');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('infoForm');
    //const btnAdd = document.querySelectorAll(".btn-add");


    const renderListTypeArtist = () => {
        return artistTypes.forEach (type => {
            const btnType = buttonGen(`${type}`,type);
            btnType.addEventListener("click", function (){
            const newArray = artistForFun.filter(artistForFunsingolo =>artistForFunsingolo.type === this.id)
            console.log (newArray.length ? newArray : "Non esiste un'artista con questo tipo");
            updateFilteredCardList(newArray);
        })
            headerElement.append(btnType);
        })
    }
    
    const updateFilteredCardList = (filteredArray) => {
        cardsSectionEl.innerHTML = ""; // Pulisci il contenitore prima di aggiungere nuove card
        const cardList = cardListGen();
    
        // Filtra gli artisti per i tipi desiderati
        const technoHouseArtists = filteredArray.filter(artist => artist.type === 'Tech-House');
        const technoArtists = filteredArray.filter(artist => artist.type === 'Techno');
        
        // Genera le card per gli artisti di tipo Techno
        technoArtists.forEach((artist) => {
            const cardEl = cardElGen(artist);
            cardList.append(cardEl);
        });
    
        // Genera le card per gli artisti di tipo Techno House
        technoHouseArtists.forEach((artist) => {
            const cardEl = cardElGen(artist);
            cardList.append(cardEl);
        });
    
        // Aggiungi la lista di card filtrate alla sezione principale
        cardsSectionEl.append(cardList);
    };
    
    
    
    const renderListCard = () => {
        cardsSectionEl.innerHTML = "";
        const cardList = cardListGen();
        artistForFun.forEach((singleArtist) => {
            const cardEl = cardElGen(singleArtist);
            cardList.append(cardEl); 
        });
        cardsSectionEl.append(cardList);
        
        // Aggiungi listener a tutte le card
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', function() {
                popup.style.display = 'flex';
            });
        });
    };
    
renderListTypeArtist();
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