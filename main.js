let addShoppingButton = document.getElementById('addShopping');
let shoppingContainer = document.getElementById('shoppingContainer');
let inputField = document.getElementById('inputField');

addShoppingButton.addEventListener('click', function () {
  var paragraph = document.createElement('p');
  paragraph.innerText = inputField.value;
  shoppingContainer.appendChild(paragraph);
  inputField.value = '';
  paragraph.addEventListener('click', function () {
    paragraph.style.textDecoration = 'line-through';
  });
  paragraph.addEventListener('dblclick', function () {
    toDoContainer.removeChild(paragraph);
  });
});
