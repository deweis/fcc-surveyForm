/*jshint esversion: 6 */
function showInput() {
  document.getElementById('title').innerText = 'Your Answers';
  document.getElementById('description').innerText = 'Thank you for submitting!';
  document.getElementById('survey-form').style.display = 'none';
  document.getElementById('results').style.display = 'block';
  document.getElementById('resGender').innerText = 'your Gender'; //document.getElementById("user_input").value;
}
