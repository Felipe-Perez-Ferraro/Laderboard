import './style.css';
import { form, refreshBtn } from './modules/ids';
import { getUserAndScores, postForm } from './modules/functions';

// Event Listeners
document.addEventListener('DOMContentLoaded', getUserAndScores);
refreshBtn.addEventListener('click', getUserAndScores);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  postForm();
});