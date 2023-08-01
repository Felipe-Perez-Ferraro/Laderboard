import Leaderboard from './leaderboard';
import printUsersAndScores from './printLeaderboard';
import { nameInpt, scoreInpt } from './ids';

// Initialize the Class and set the ApiId
const leaderboard = new Leaderboard();

// Function to get the Users and Scores
const getUserAndScores = () => {
  leaderboard.getUserAndScores().then((response) => printUsersAndScores(response.result));
};

// Function to post the User and his Score
const postForm = () => {
  leaderboard.postForm(nameInpt.value, scoreInpt.value);
  nameInpt.value = '';
  scoreInpt.value = '';
};

export { getUserAndScores, postForm };