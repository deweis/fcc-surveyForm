/*jshint esversion: 6 */
function showInput() {
  /* Change header section */
  document.getElementById('title').innerText = 'Your Answers';
  document.getElementById('description').innerText = 'Thank you for submitting!';

  /* Remove the form */
  document.getElementById('survey-form').style.display = 'none';

  /* Show the results */
  const theGender = document.querySelector('input[name=inlineRadioOptions]:checked').value;
  const theName = document.getElementById('name').value;
  const theAge = document.getElementById('number').value;
  const theEmail = document.getElementById('email').value;

  document.getElementById('results').style.display = 'block';
  document.getElementById('resGender').innerText = theGender;
  document.getElementById('resName').innerText = theName;
  document.getElementById('resAge').innerText = theAge;
  document.getElementById('resEmail').innerText = theEmail;
}
