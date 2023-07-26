import './style.css';

// Id's
const nameInpt = document.getElementById('nameInpt');
const scoreInpt = document.getElementById('scoreInpt');
const listContainer = document.getElementById('listContainer');
const form = document.getElementById('form');
const refreshBtn = document.getElementById('refreshBtn');

// Leaderboard Class setting
class Leaderboard {
  constructor() {
    this.URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }

  // Start the API method
  start = async (game) => {
    const response = await fetch(this.URL, {
      method: 'POST',
      body: JSON.stringify({
        name: game,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  }

  // Get the Users and Scores from the API method
  getUserAndScores = async (apiId) => {
    const response = await fetch(`${this.URL}${apiId}/scores/`);
    const data = await response.json();
    return data;
  }

  // Post the User and his score from the form
  postForm = async (user, score, apiId) => {
    const response = await fetch(`${this.URL}${apiId}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = response.json();
    return data;
  }
}

// Initialize the Class and set the ApiId
const leaderboard = new Leaderboard();
let apiId;

// Function to start the API
const start = () => {
  leaderboard
    .start('Leaderboard Project')
    .then((response) => response.result.split(' '))
    .then((res) => {
      [apiId] = [res[3]];
    });
};

// Funtion to print the Users in the HTML
const printUsersAndScores = (data) => {
  listContainer.innerHTML = '';
  data.forEach((el) => {
    listContainer.innerHTML += `
      <li class="scores__list">${el.user}: ${el.score}</li>
    `;
  });
};

// Function to get the Users and Scores
const getUserAndScores = () => {
  leaderboard.getUserAndScores(apiId).then((response) => printUsersAndScores(response.result));
};

// Function to post the User and his Score
const postForm = () => {
  leaderboard.postForm(nameInpt.value, scoreInpt.value, apiId);
  nameInpt.value = '';
  scoreInpt.value = '';
};

// Event Listeners
document.addEventListener('DOMContentLoaded', start);
refreshBtn.addEventListener('click', getUserAndScores);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  postForm();
});