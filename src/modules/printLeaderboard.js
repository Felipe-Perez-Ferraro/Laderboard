import { listContainer } from './ids';

const printUsersAndScores = (data) => {
  listContainer.innerHTML = '';
  data.forEach((el) => {
    listContainer.innerHTML += `
      <li class="scores__list">${el.user}: ${el.score}</li>
    `;
  });
};

export default printUsersAndScores;