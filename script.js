/*jshint esversion: 6 */
document.getElementById('survey-form').addEventListener('submit', function (event) {
  event.preventDefault();   // Thank you https://stackoverflow.com/questions/21338476/addeventlistener-on-form-submit
  showResults();
});

function showResults() {
  /* Remove the form and title */
  document.getElementById('title').style.display = 'none';
  document.getElementById('introQuote').style.display = 'none';
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
  { name: 'The Matrix', value: '', poster: 'img/matrix.jpg',
    trailer: 'https://www.imdb.com/title/tt0133093/videoplayer/vi1032782617?ref_=tt_ov_vi',
    free: '', },
  { name: 'Revolver', value: '', poster: 'img/revolver.jpg',
    trailer: 'https://www.imdb.com/title/tt0365686/videoplayer/vi1621033241?ref_=tt_ov_vi',
    free: '', },
  { name: 'V for Vendetta', value: '', poster: 'img/vendetta.jpg',
    trailer: 'https://www.imdb.com/title/tt0434409/videoplayer/vi4276093209?ref_=tt_ov_vi',
    free: '', },
  { name: 'Zeitgeist', value: '', poster: 'img/zeitgeist.jpg',
    trailer: 'https://www.youtube.com/watch?v=Ge8HWuTjh4M',
    free: 'https://www.youtube.com/watch?v=OrHeg77LF4Y', },
  { name: 'Alphabet', value: '', poster: 'img/alphabet.jpg',
    trailer: 'https://www.youtube.com/watch?v=3kfYHarExbw',
    free: 'https://www.youtube.com/watch?v=CTw2cQbAwSo', },
  { name: 'Tomorrow', value: '', poster: 'img/tomorrow.jpg',
    trailer: 'https://www.youtube.com/watch?v=0SI-Kyam_Jk',
    free: '', },
  { name: 'Thrive', value: '', poster: 'img/thrive.jpg',
    trailer: 'https://www.youtube.com/watch?v=OibqdwHyZxk',
    free: 'https://www.youtube.com/watch?v=lEV5AFFcZ-s', },
  { name: 'Cowspiracy', value: '', poster: 'img/cowspiracy.jpg',
    trailer: 'https://www.youtube.com/watch?v=nV04zyfLyN4',
    free: 'http://watchdocumentaries.com/cowspiracy-the-sustainability-secret/', },
  { name: 'The Corporation', value: '', poster: 'img/corporation.jpg',
    trailer: 'https://www.youtube.com/watch?v=exY4u0XsEGI',
    free: 'https://www.youtube.com/watch?v=KMNZXV7jOG0', },
  { name: 'A Plastic Ocean', value: '', poster: 'img/plastic.jpg',
    trailer: 'https://www.youtube.com/watch?v=wLjkbVusxGk',
    free: '', },
  { name: 'The Choice is Ours', value: '', poster: 'img/choice.jpg',
    trailer: 'https://www.youtube.com/watch?v=RWEeNu2GC_o',
    free: 'https://www.youtube.com/watch?v=Yb5ivvcTvRQ', },
  { name: 'H.O.P.E', value: '', poster: 'img/hope.jpg',
    trailer: 'https://www.youtube.com/watch?v=wLjkbVusxGk',
    free: 'https://www.youtube.com/watch?v=pDg7tlEJD64', },
  { name: 'Inhabitat', value: '', poster: 'img/inhabitat.jpg',
    trailer: 'https://vimeo.com/93538443',
    free: '', },
  { name: 'Earthlings', value: '', poster: 'img/earthlings.jpg',
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

/* Get the movies not watched yet */
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

  for (let i = 0; i < toWatch.length; i++) {
    const forFree = toWatch[i].free !== '' ? 'Watch for Free' : '';
    tr = document.createElement('tr');
    tr.innerHTML = `
      <th scope="row">${toWatch[i].name}</th>
      <td>
        <img class="poster img-fluid" src="${toWatch[i].poster}" alt="poster of ${toWatch[i].name}">
      </td>
      <td>
        <a href="${toWatch[i].trailer}" target="_blank">Trailer</a><br>
        <a href="${toWatch[i].free}" target="_blank">${forFree}</a>
      </td>
    `;
    table.appendChild(tr);
  }
}
