/* jshint esversion: 6 */

document.getElementById('survey-form').addEventListener('submit', function (event) {
  event.preventDefault();   // Thank you https://stackoverflow.com/questions/21338476/addeventlistener-on-form-submit
  showResults();
});

function showResults() {

  /* Remove the form and title */
  document.getElementsByTagName('header')[0].style.display = 'none';
  document.getElementById('survey-form').style.display = 'none';
  scroll(0, 0);

  /* Show the results */
  document.getElementById('results').style.display = 'block';
  document.getElementById('title').innerText = 'Your Answers';
  document.getElementById('description').innerText = '';

  getAnswers();
}

function getAnswers() {
  const theGender = document.querySelector('input[name=inlineRadioOptions]:checked').value;
  const theName = document.getElementById('name').value;
  const theAge = document.getElementById('number').value;
  const theEmail = document.getElementById('email').value;
  const thePreference = document.getElementById('dropdown').value;
  const theContribution = document.getElementById('yourContribution').value;

  document.getElementById('resGender').innerText = theGender;
  document.getElementById('resName').innerText = theName;
  document.getElementById('resAge').innerText = theAge;
  document.getElementById('resEmail').innerText = theEmail;
  document.getElementById('resPreference').innerText = thePreference;
  document.getElementById('resContribution').innerText = theContribution;

  getMovies();
}

const movies = [
  { name: 'The Matrix', value: '',
    poster: 'https://res.cloudinary.com/dxx26hhtx/image/upload/v1530436813/movie-posters/matrix.jpg',
    trailer: 'https://www.imdb.com/title/tt0133093/videoplayer/vi1032782617?ref_=tt_ov_vi',
    free: 'notAvailable', },
  { name: 'Revolver', value: '',
    poster: 'https://res.cloudinary.com/dxx26hhtx/image/upload/v1530436813/movie-posters/revolver.jpg',
    trailer: 'https://www.imdb.com/title/tt0365686/videoplayer/vi1621033241?ref_=tt_ov_vi',
    free: 'notAvailable', },
  { name: 'V for Vendetta', value: '',
    poster: 'http://res.cloudinary.com/dxx26hhtx/image/upload/v1530436813/movie-posters/vendetta.jpg',
    trailer: 'https://www.imdb.com/title/tt0434409/videoplayer/vi4276093209?ref_=tt_ov_vi',
    free: 'notAvailable', },
  { name: 'Zeitgeist', value: '',
    poster: 'https://res.cloudinary.com/dxx26hhtx/image/upload/v1530436813/movie-posters/zeitgeist.jpg',
    trailer: 'https://www.youtube.com/watch?v=Ge8HWuTjh4M',
    free: 'https://www.youtube.com/watch?v=OrHeg77LF4Y', },
  { name: 'Alphabet', value: '',
    poster: 'https://res.cloudinary.com/dxx26hhtx/image/upload/v1530436813/movie-posters/alphabet.jpg',
    trailer: 'https://www.youtube.com/watch?v=3kfYHarExbw',
    free: 'https://www.youtube.com/watch?v=CTw2cQbAwSo', },
  { name: 'Tomorrow', value: '',
    poster: 'https://res.cloudinary.com/dxx26hhtx/image/upload/v1530436813/movie-posters/tomorrow.jpg',
    trailer: 'https://www.youtube.com/watch?v=0SI-Kyam_Jk',
    free: 'notAvailable', },
  { name: 'Thrive', value: '',
    poster: 'https://res.cloudinary.com/dxx26hhtx/image/upload/v1530436813/movie-posters/thrive.jpg',
    trailer: 'https://www.youtube.com/watch?v=OibqdwHyZxk',
    free: 'https://www.youtube.com/watch?v=lEV5AFFcZ-s', },
  { name: 'Cowspiracy', value: '',
    poster: 'https://res.cloudinary.com/dxx26hhtx/image/upload/v1530436813/movie-posters/cowspiracy.jpg',
    trailer: 'https://www.youtube.com/watch?v=nV04zyfLyN4',
    free: 'notAvailable', },
  { name: 'The Corporation', value: '',
    poster: 'https://res.cloudinary.com/dxx26hhtx/image/upload/v1530436812/movie-posters/corporation.jpg',
    trailer: 'https://www.youtube.com/watch?v=exY4u0XsEGI',
    free: 'https://www.youtube.com/watch?v=KMNZXV7jOG0', },
  { name: 'A Plastic Ocean', value: '',
    poster: 'https://res.cloudinary.com/dxx26hhtx/image/upload/v1530436813/movie-posters/plastic.jpg',
    trailer: 'https://www.youtube.com/watch?v=6zrn4-FfbXw',
    free: 'notAvailable', },
  { name: 'The Choice is Ours', value: '',
    poster: 'https://res.cloudinary.com/dxx26hhtx/image/upload/v1530436812/movie-posters/choice.jpg',
    trailer: 'https://www.youtube.com/watch?v=RWEeNu2GC_o',
    free: 'https://www.youtube.com/watch?v=Yb5ivvcTvRQ', },
  { name: 'H.O.P.E', value: '',
    poster: 'https://res.cloudinary.com/dxx26hhtx/image/upload/v1530436813/movie-posters/hope.jpg',
    trailer: 'https://www.youtube.com/watch?v=wLjkbVusxGk',
    free: 'https://www.youtube.com/watch?v=pDg7tlEJD64', },
  { name: 'Inhabitat', value: '',
    poster: 'https://res.cloudinary.com/dxx26hhtx/image/upload/v1530436813/movie-posters/inhabitat.jpg',
    trailer: 'https://vimeo.com/93538443',
    free: 'notAvailable', },
  { name: 'Earthlings', value: '',
    poster: 'https://res.cloudinary.com/dxx26hhtx/image/upload/v1530436813/movie-posters/earthlings.jpg',
    trailer: 'https://www.youtube.com/watch?v=Hm7Babs_FJU',
    free: 'https://vimeo.com/209647801', },
];

/* Add the movie checkboxes to the HTML on page load */
(function () {

  let checkboxGroup = document.getElementById('checkboxes');

  for (var i = 0; i < movies.length; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'form-check form-check-inline checkbox');
    div.innerHTML = `
      <input class="form-check-input" type="checkbox" id="inlineCheckbox${i}" value="option${i}">
      <label class="form-check-label" for="inlineCheckbox${i}">${movies[i].name}</label>`;
    checkboxGroup.appendChild(div);
    movies[i].value = `option${i}`;
  }
})();

/* Get the movies not watched yet and add them to the page */
function getMovies() {
  let arr = [];
  const checked = document.querySelectorAll('input[type=checkbox]:checked');

  for (let i = 0; i < checked.length; i++) {
    arr.push(checked[i].value);
  }

  const toWatch = movies.filter(x => !(arr.includes(x.value)));

  let table = document.getElementById('resultsTable'); // https://stackoverflow.com/questions/28010666/adding-row-to-a-table-with-javascript

  let tr = document.createElement('tr');
  tr.innerHTML = `
    <td scope="row" colspan="3">
      <blockquote class="blockquote text-center">
        <p class="mb-0">"If you think we can't CHANGE the WORLD, it just means you're not one of those that will."</p>
        <footer class="blockquote-footer">Jacque Fresco, <cite title="Source Title"><a href="https://www.thevenusproject.com/" target="_blank">The Venus Project</a></cite></footer>
      </blockquote>
      <hr>
      <p class="header-watch">Your watchlist to start being the change:</p>
    </td>
  `;
  table.appendChild(tr);

  let moviesContainer = document.getElementById('moviesContainer');

  for (let i = 0; i < toWatch.length; i++) {
    let divGrid = document.createElement('div');
    divGrid.setAttribute('class', 'grid-container');

    divGrid.innerHTML = `
      <div class="name">${toWatch[i].name}</div>
      <div class="cover">
        <img class="poster"
             src="${toWatch[i].poster}"
             alt="Poster of the movie toWatch[i].name">
      </div>
      <div class="links">
        <a href="${toWatch[i].trailer}"
           target="_blank"
           class="btn-sm btn-primary"
           role="button">Trailer
        </a>
        <br><br>
        <a href="${toWatch[i].free}"
           target="_blank"
           class="btn-sm btn-success free-watch"
           role="button">Watch for free
        </a>
      </div>
    `;

    moviesContainer.appendChild(divGrid);
  };

  /* get elements with no free link and remove the respective link*/
  let btnsFree = document.getElementsByClassName('free-watch');

  for (let i = 0; i < btnsFree.length; i++) {
    if (/notAvailable/.test(btnsFree[i].href)) {
      btnsFree[i].setAttribute('class', 'hidden');
    }
  }

  /* Need to run a second time as one free without link is not captured
     in the first run above ????? No clue why this happens...*/
  for (let i = 0; i < btnsFree.length; i++) {
    if (/notAvailable/.test(btnsFree[i].href)) {
      btnsFree[i].setAttribute('class', 'hidden');
    }
  }
}
