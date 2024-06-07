const API_URL = "https://newsapi.org/v2/";
const KEY = "3eea851e9e3b40e7987262aadfbd78ab";

class NewsApiService {
  constructor() {
    this.query = "";
    this.page = 1;
    this.pageSize = 10;
    this.articles = [];

    this.fetchArticles = this.fetchArticles.bind(this);
    this.incrementPage = this.incrementPage.bind(this);
    this.resetPage = this.resetPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  fetchArticles({ searchWord, page }) {
    this.query = searchWord;
    this.page = page;

    if (!this.query.trim()) {
      return Promise.resolve();
    }

    const searchParams = new URLSearchParams({
      q: this.query,
      page: this.page,
      pageSize: this.pageSize,
      apiKey: KEY,
    });

    return fetch(`${API_URL}/everything?${searchParams.toString()}`)
      .then((response) => response.json())
      .then(({ articles }) => {
        const newList = page === 1 ? articles : [...this.articles, ...articles];

        this.articles = newList;

        console.log(newList);

        return newList;
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  nextPage() {
    this.incrementPage();
    return this.fetchArticles({ searchWord: this.query, page: this.page });
  }
}

const newsApiService = new NewsApiService();

export default newsApiService;
