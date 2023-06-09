//Fetching

const API_KEY = 'api_key=1cbb271eeb4c2f074e2249e572ec46b5';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('main');
      container.innerHTML = '';

      data.results.forEach(movie => {
        const { title,poster_path } = movie;

        const movies = document.createElement('div');
        movies.classList.add('movie');

        movies.innerHTML = `
        <div class="movie-cont">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img class="poster" src="${IMG_URL}${poster_path}" alt="${title} Poster">
                <div class="details">
                <div class="star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                </div>
                <div class="title">${title}</div>
              </div>
            </div>
          </div>
        <div>
        `;
        container.appendChild(movies);
      });
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
//SearchBar

const sButton = document.querySelector('.sbar button');
sButton.addEventListener('click', searchMovies);

function searchMovies() {
  const searchInput = document.querySelector('.sbar input').value;
  const searchUrl = `${BASE_URL}/search/movie?${API_KEY}&query=${searchInput}`;

  getMovies(searchUrl);
}
