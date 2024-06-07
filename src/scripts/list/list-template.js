const getListTemplate = (arr) =>
  arr.map((item) => `<li class='list-card'>${item.name}</li>`).join("");

export default getListTemplate;
