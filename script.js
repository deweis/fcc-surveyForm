/*jshint esversion: 6 */
function showInput() {
  /* Change header section */
  document.getElementById('title').innerText = 'Your Answers';
  document.getElementById('description').innerText = 'Thank you for submitting!';

  /* Remove the form */
  document.getElementById('survey-form').style.display = 'none';

  /* Show the results */
  const theName = document.getElementById('name').value;
  const theAge = document.getElementById('number').value;

  document.getElementById('results').style.display = 'block';
  document.getElementById('resGender').innerText = 'your Gender';
  document.getElementById('resName').innerText = theName;
  document.getElementById('resAge').innerText = theAge;
}