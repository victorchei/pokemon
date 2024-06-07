import getCardTemplate from "./card-template";
import newsApiService from "./newsApiService";

export function initNews() {
  const form = document.getElementById("form-news");
  const nextBtn = document.querySelector(".next-btn");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = form.querySelector("input[name='query']");
    const inputValue = input?.value;

    newsApiService
      .fetchArticles({ searchWord: inputValue, page: 1})
      .then((data) => {
        updateCardList(data);
      })
      .catch((error) => {
        console.log(error);
        updateCardList();
      });
  });

  nextBtn?.addEventListener("click", () => {
    newsApiService
      .nextPage()
      .then((data) => {
        updateCardList(data);
      })
      .catch((error) => {
        console.log(error);
        updateCardList();
      });
  });

  function updateCardList(data) {
    const listContainer = document.getElementById("news-card-container");

    const list = data
      ? data.map((article) => getCardTemplate(article)).join("")
      : "Немає новин по вашому запиту";

    listContainer.innerHTML = list;
  }
}
