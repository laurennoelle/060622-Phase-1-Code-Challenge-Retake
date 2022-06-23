// 1.See the first movie's details, including its poster, title, runtime, showtime, and available tickets when the page loads. The number of available tickets will need to be derived by subtracting the number of tickets_sold from the theater's capacity. You will need to make a GET request to the following endpoint to retrieve the film data:

const flatdangoApi = 'http://localhost:3000/films'
const filmListElement = document.getElementById('films');
const filmTitle = document.getElementsByClassName('film-item');
const ticketNum = document.getElementById('ticket-num');
const filmPoster = document.getElementById('poster')
const filmName = document.getElementById('film-title')
const filmRuntime = document.getElementById('runtime')
const filmShowTime = document.getElementById('showtime')


fetch('http://localhost:3000/films/1')
.then(res => res.json())
.then(renderfirstFilm);

//need to append showing info to the div #card for stuff to appear on page
function renderfirstFilm(data) {
    const showingInfo = document.getElementById('showing')
    const cardMovie = document.getElementById('card')
    filmPoster.src = data.poster;
    filmName.textContent = data.title;
    filmRuntime.textContent = data.runtime;
    filmShowTime.textContent = data.showtime;
    ticketNum.textContent = `${data.capacity - tickets_sold} remaining tickets `;
    filmShowTime.append(cardMovie)
};



// 2.See a menu of all movies on the left side of the page in the ul#films element when the page loads. (optional: you can style each film in the list by adding the classes film item to each li element.) There is a placeholder li in the ul#films element that is hardcoded in the HTML — feel free to remove that element by editing the HTML file directly, or use JavaScript to remove the placeholder element before populating the list. You will need to make a GET request to the following endpoint to retrieve the film data:

fetch(flatdangoApi)
.then(res => res.json())
.then(renderFilms);

function renderFilms (films) {
    films.forEach(renderTitle);
}

function renderTitle (filmObj) {
    filmTitle.textContent = filmObj.title;
    filmListElement.append(filmTitle);
}


// 3. Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should see the number of available tickets decreasing on the frontend. I should not be able to buy a ticket if the showing is sold out (if there are 0 tickets available).
    //Write an if...else statement?

const buyTicketButton = document.getElementById('buy-ticket')

buyTicketButton.addEventListener('click', buyTicket);

function buyTicket() {
    const ticketSubtraction = parseInt(ticketNum.textContent.split(" ")[0]);
    ticketNum.textContent =`${ticketSubtraction - 1} remaining tickets`;
    
}