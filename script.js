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
  { name: 'The Matrix', value: 'option1', poster: 'img/matrix.jpg', trailer: 'https://www.youtube.com/watch?v=vKQi3bBA1y8', free: '' },
  { name: 'Revolver', value: 'option2', poster: 'img/revolver.jpg', trailer: '', free: '' },
  { name: 'Vendetta', value: 'option3', poster: 'img/vendetta.jpg', trailer: '', free: '' },
  { name: 'Alphabet', value: 'option4', poster: 'img/alphabet.jpg', trailer: '', free: '' },
  { name: 'Earthlings', value: 'option5', poster: 'img/earthlings.jpg', trailer: '', free: '' },
  { name: 'Tomorrow', value: 'option6', poster: 'img/tomorrow.jpg', trailer: '', free: '' },
  { name: 'Thrive', value: 'option7', poster: 'img/thrive.jpg', trailer: '', free: '' },
  { name: 'Cowspiracy', value: 'option8', poster: 'img/cowspiracy.jpg', trailer: '', free: '' },
  { name: 'The Corporation', value: 'option9', poster: 'img/corporation.jpg', trailer: '', free: '' },
  { name: 'H.O.P.E', value: 'option10', poster: 'img/hope.jpg', trailer: '', free: '' },
  { name: 'A Plastic Ocean', value: 'option11', poster: 'img/plastic.jpg', trailer: '', free: '' },
  { name: 'The Choice is Ours', value: 'option12', poster: 'img/choice.jpg', trailer: '', free: '' },
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
    console.log('adding ' + toWatch[i].name);
    tr = document.createElement('tr');
    tr.innerHTML = `
      <th scope="row">${toWatch[i].name}</th>
      <td><img class="poster img-fluid" src="${toWatch[i].poster}" alt="poster of ${toWatch[i].name}"></td>
    `;
    table.appendChild(tr);
  }
}
