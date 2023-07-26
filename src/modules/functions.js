import Leaderboard from './leaderboard';
import printUsersAndScores from './printLeaderboard';
import { nameInpt, scoreInpt } from './ids';

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

export { start, getUserAndScores, postForm };