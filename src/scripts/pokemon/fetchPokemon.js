const API_URL = "https://pokeapi.co/api/v2";

class fetchPokemon {
  constructor() {
    this.listPagination = {
      limit: 10,
      offset: 0,
    };

    this.getPrevUrl = "";
    this.getNextUrl = "";

    this.getById = this.getById.bind(this);
    this.getAllItems = this.getAllItems.bind(this);
    this.getNext = this.getNext.bind(this);
  }

  getById(id) {
    // якщо ввели пустий рядок або пробіли то повернути пустий проміс
    if (!id.trim()) {
      return Promise.resolve();
    }

    return fetch(`${API_URL}/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }

  getAllItems() {
    const searchParams = new URLSearchParams({
      limit: this.listPagination.limit,
      offset: this.listPagination.offset,
    });

    return fetch(`${API_URL}/pokemon?${searchParams.toString()}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.getPrevUrl = data.previous;
        this.getNextUrl = data.next;

        return data.results;
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }

  getNext() {
    if (!this.getNextUrl) {
      return Promise.resolve();
    }

    return fetch(this.getNextUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.getPrevUrl = data.previous;
        this.getNextUrl = data.next;

        return data.results;
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }

  getPrev() {
    if (!this.getPrevUrl) {
      return Promise.resolve();
    }

    return fetch(this.getPrevUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.getPrevUrl = data.previous;
        this.getNextUrl = data.next;

        return data.results;
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }
}

const fetchPokemonApi = new fetchPokemon();

export default fetchPokemonApi;
