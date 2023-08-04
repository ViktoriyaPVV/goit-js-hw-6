const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const listItem = ingredients.map(ingredient => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = ingredient;
  ingredientsEl.classList.add('item');
  return ingredientsEl;
});
//  console.log(listItem);
list.append(...listItem);
