const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemRef = document.querySelector("#ingredients");

const ingredient = ingredients.map((element) => {

  const listRef = document.createElement("li");
  listRef.textContent = element;
  listRef.classList.add("item");

  return listRef;
});

itemRef.append(...ingredient);

