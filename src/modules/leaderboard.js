export default class Leaderboard {
  constructor() {
    this.URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    this.API = 'luf2eRQ3AvnQOJNDWRPw';
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
  getUserAndScores = async () => {
    const response = await fetch(`${this.URL}${this.API}/scores/`);
    const data = await response.json();
    return data;
  }

  // Post the User and his score from the form
  postForm = async (user, score) => {
    const response = await fetch(`${this.URL}${this.API}/scores/`, {
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