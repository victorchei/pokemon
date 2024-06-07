const getCardTemplate = (card) => {
  const { author, title, urlToImage, description } = card;

  return `
  <li>
      <article>
        <img src="${urlToImage}" alt="" width="480">
        <h3>${title}</h3>
        <p>Posted by: ${author}</p>
        <p>${description}</p>
      </article>
  </li>
  `;
};

export default getCardTemplate;
