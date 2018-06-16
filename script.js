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
}
