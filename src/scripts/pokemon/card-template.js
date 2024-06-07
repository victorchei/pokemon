const getAbilityTemplate = ({ ability }) => {
  return `
    <li class="list-group-item">${ability.name}</li>
  `;
};

const getCardTemplate = (card) => {
  const { name, weight, height, abilities, sprites } = card;

  const abilitiesList = abilities.map(getAbilityTemplate).join("");

  return `
  <div class="card">
  <div class="card-img-top">
    <img src="${sprites.front_default}" alt="{{name}}">
  </div>
  <div class="card-body">
    <h2 class="card-title">Ім'я: ${name}</h2>
    <p class="card-text">Вага: ${weight}</p>
    <p class="card-text">Зріст: ${height}</p>
    <p class="card-text"><b>Вміння</b></p>
    <ul class="list-group"></ul>
    ${abilitiesList}
    </ul>
  </div>
</div>
  `;
};

export default getCardTemplate;
