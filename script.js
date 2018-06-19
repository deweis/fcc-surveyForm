/*jshint esversion: 6 */
document.getElementById('survey-form').addEventListener('submit', function (event) {
  event.preventDefault();   // Thank you https://stackoverflow.com/questions/21338476/addeventlistener-on-form-submit
  showResults();
});

function showResults() {
  /* Remove the form */
  document.getElementById('survey-form').style.display = 'none';

  /* Show the results */
  document.getElementById('results').style.display = 'block';
  document.getElementById('title').innerText = 'Your Answers';
  document.getElementById('description').innerText = 'Thank you for submitting!';

  getAnswers();
}

function getAnswers() {
  const theGender = document.querySelector('input[name=inlineRadioOptions]:checked').value;
  const theName = document.getElementById('name').value;
  const theAge = document.getElementById('number').value;
  const theEmail = document.getElementById('email').value;
  const thePreference = document.getElementById('dropdown').value;

  document.getElementById('resGender').innerText = theGender;
  document.getElementById('resName').innerText = theName;
  document.getElementById('resAge').innerText = theAge;
  document.getElementById('resEmail').innerText = theEmail;
  document.getElementById('resPreference').innerText = thePreference;
  getMovies();
}

const movies = [
  { name: 'The Matrix', value: 'option1', poster: 'img/matrix.jpg', trailer: 'https://www.imdb.com/title/tt0133093/videoplayer/vi1032782617?ref_=tt_ov_vi', free: '' },
  { name: 'Revolver', value: 'option2', poster: 'img/revolver.jpg', trailer: 'https://www.imdb.com/title/tt0365686/videoplayer/vi1621033241?ref_=tt_ov_vi', free: '' },
  { name: 'V for Vendetta', value: 'option3', poster: 'img/vendetta.jpg', trailer: 'https://www.imdb.com/title/tt0434409/videoplayer/vi4276093209?ref_=tt_ov_vi', free: '' },
  { name: 'Alphabet', value: 'option4', poster: 'img/alphabet.jpg', trailer: 'https://www.youtube.com/watch?v=3kfYHarExbw', free: 'https://www.youtube.com/watch?v=CTw2cQbAwSo' },
  { name: 'Earthlings', value: 'option5', poster: 'img/earthlings.jpg', trailer: 'https://www.youtube.com/watch?v=Hm7Babs_FJU', free: 'https://vimeo.com/209647801' },
  { name: 'Tomorrow', value: 'option6', poster: 'img/tomorrow.jpg', trailer: 'https://www.youtube.com/watch?v=0SI-Kyam_Jk', free: '' },
  { name: 'Thrive', value: 'option7', poster: 'img/thrive.jpg', trailer: 'https://www.youtube.com/watch?v=OibqdwHyZxk', free: 'https://www.youtube.com/watch?v=lEV5AFFcZ-s' },
  { name: 'Cowspiracy', value: 'option8', poster: 'img/cowspiracy.jpg', trailer: 'https://www.youtube.com/watch?v=nV04zyfLyN4', free: 'http://watchdocumentaries.com/cowspiracy-the-sustainability-secret/' },
  { name: 'The Corporation', value: 'option9', poster: 'img/corporation.jpg', trailer: 'https://www.youtube.com/watch?v=exY4u0XsEGI', free: 'https://www.youtube.com/watch?v=KMNZXV7jOG0' },
  { name: 'H.O.P.E', value: 'option10', poster: 'img/hope.jpg', trailer: 'https://www.youtube.com/watch?v=wLjkbVusxGk', free: 'https://www.youtube.com/watch?v=pDg7tlEJD64' },
  { name: 'A Plastic Ocean', value: 'option11', poster: 'img/plastic.jpg', trailer: 'https://www.youtube.com/watch?v=wLjkbVusxGk', free: '' },
  { name: 'The Choice is Ours', value: 'option12', poster: 'img/choice.jpg', trailer: 'https://www.youtube.com/watch?v=RWEeNu2GC_o', free: 'https://www.youtube.com/watch?v=Yb5ivvcTvRQ' },
];

function getMovies() {
  let arr = [];
  const checked = document.querySelectorAll('input[type=checkbox]:checked');

  for (let i = 0; i < checked.length; i++) {
    arr.push(checked[i].value);
  }

  const toWatch = movies.filter(x => !(arr.includes(x.value)));
  console.log(toWatch);

  let table = document.getElementById('resultsTable'); // https://stackoverflow.com/questions/28010666/adding-row-to-a-table-with-javascript
  let tr = document.createElement('tr');
  tr.innerHTML = `
    <th scope="row" colspan="2" class="header-watch">Please consider to watch the following Movies:</th>
  `;
  table.appendChild(tr);

  for (let i = 0; i < toWatch.length; i++) {
    const forFree = toWatch[i].free !== '' ? 'Watch for Free' : '';
    tr = document.createElement('tr');
    tr.innerHTML = `
      <th scope="row">${toWatch[i].name}</th>
      <td><img class="poster img-fluid" src="${toWatch[i].poster}" alt="poster of ${toWatch[i].name}"></td>
      <td>
        <a href="${toWatch[i].trailer}" target="_blank">Trailer</a><br>
        <a href="${toWatch[i].free}" target="_blank">${forFree}</a>
      </td>
    `;
    table.appendChild(tr);
  }
}
