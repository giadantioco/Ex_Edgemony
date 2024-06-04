/*
<div class="card">
    <img class="card__img" src="https://picsum.photos/200/200?grayscale
    " alt="pippo">
    <h3 class="card__title">Nome Artista</h3>
    <span class="card__id"># id</span>
    <p class="card__type">Type: genere</p>
</div>  
*/

/* 
<section class="fav-artist">
    <h3 class="sub-title">artisti preferiti</h3>
    <div class="box-container">
        <i class="fa-sharp fa-solid fa-circle-chevron-left arrow"></i>
        <div class="box">
        <img src="https://picsum.photos/seed/picsum/150/150" alt="img">
        </div>
        <div class="box">
        <img src="https://picsum.photos/seed/picsum/150/150" alt="img">
        </div>
        <div class="box">
        <img src="https://picsum.photos/seed/picsum/150/150" alt="img">
        </div>
        <div class="box">
        <img src="https://picsum.photos/seed/picsum/150/150" alt="img">
        </div>
        <div class="box">
        <img src="https://picsum.photos/seed/picsum/150/150" alt="img">
        </div>
        <div class="box">
        <img src="https://picsum.photos/seed/picsum/150/150" alt="img">
        </div>
        <i class="fa-sharp fa-solid fa-circle-chevron-right arrow"></i>
      </div>
</section> 
*/

        const cardElGen = (obj) => {
            console.log(obj)
            const cardEl = document.createElement('div');
            const imgEl = document.createElement('img');
            const titleEl = document.createElement('h3');
            const idEl = document.createElement('span');
            const typeEl = document.createElement('p');
        
            cardEl.className = 'card';    
            cardEl.classList.add('card', obj.type)
        
            imgEl.src = obj.image;
            imgEl.className = 'card__img';
            imgEl.alt = obj.name;
            
            titleEl.className = 'card__title';
            titleEl.textContent = obj.name;
            
            idEl.className = 'card__id';
            idEl.textContent = `# ${obj.id}`;
            
            typeEl.className = 'card__type'
            typeEl.textContent = obj.type;
        
            cardEl.append(imgEl, titleEl, idEl, typeEl)
            return cardEl
        }
        
        const cardListGen = () => {
            const cardEl = document.createElement('div');
        
            cardEl.className = 'card-list';
        
            return cardEl;
        }

        const buttonGen = (text,id) => {
            const button = document.createElement("button");
            button.className = 'btn-add'
            button.textContent = text;
            button.id= id;
            return button
            }
        
        export {
            cardElGen,
            cardListGen,
            buttonGen
        }