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
  { name: 'The Matrix', value: 'option1', poster: '', trailer: 'https://www.youtube.com/watch?v=vKQi3bBA1y8', free: '' },
  { name: 'Revolver', value: 'option2', poster: '', trailer: '', free: '' },
  { name: 'Vendetta', value: 'option3', poster: '', trailer: '', free: '' },
  { name: 'Alphabet', value: 'option4', poster: '', trailer: '', free: '' },
  { name: 'Earthlings', value: 'option5', poster: '', trailer: '', free: '' },
  { name: 'Tomorrow', value: 'option6', poster: '', trailer: '', free: '' },
  { name: 'Thrive', value: 'option7', poster: '', trailer: '', free: '' },
  { name: 'Cowspiracy', value: 'option8', poster: '', trailer: '', free: '' },
  { name: 'The Corporation', value: 'option9', poster: '', trailer: '', free: '' },
  { name: 'H.O.P.E', value: 'option10', poster: '', trailer: '', free: '' },
  { name: 'A Plastic Ocean', value: 'option11', poster: '', trailer: '', free: '' },
  { name: 'The Choice is Ours', value: 'option12', poster: '', trailer: '', free: '' },
];

function getMovies() {
  let arr = [];
  const theDocs = document.querySelectorAll('input[type=checkbox]:checked');
  console.log(theDocs);

  for (let i = 0; i < theDocs.length; i++) {
    arr.push(theDocs[i].value);
  }

  const toWatch = movies.filter(x => !(arr.includes(x.value)));
  console.log(toWatch);
}
