import './style.css';
import { form, refreshBtn } from './modules/ids';
import { start, getUserAndScores, postForm } from './modules/functions';

// Event Listeners
document.addEventListener('DOMContentLoaded', start);
refreshBtn.addEventListener('click', getUserAndScores);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  postForm();
});