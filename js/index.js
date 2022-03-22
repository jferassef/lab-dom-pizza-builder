// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((mush) => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  });

  //});
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((greenPep) => {
    if (state.greenPeppers) {
      greenPep.style.visibility = 'visible';
    } else {
      greenPep.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  const whiteSa = document.querySelector('.sauce-white');
  if (state.whiteSauce) {
    whiteSa.style.visibility = 'visible';
  } else {
    whiteSa.style.visibility = 'hidden';
  }
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  const crustGlutenFree = document.querySelector('.crust-gluten-free');
  if (state.glutenFreeCrust) {
    crustGlutenFree.style.visibility = 'visible';
  } else {
    crustGlutenFree.style.visibility = 'hidden';
  } // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // activar cada botón
  const pepButton = document.querySelector('.btn-pepperoni');
  const mushButton = document.querySelector('.btn-mushrooms');
  const greenButton = document.querySelector('.btn-green-peppers');
  const sauceButton = document.querySelector('.btn-sauce');
  const crustButton = document.querySelector('.btn-crust');
  if (state.pepperoni) {
    pepButton.classList.add('active');
  } else {
    pepButton.classList.remove('active');
  }
  if (state.mushrooms) {
    mushButton.classList.add('active');
  } else {
    mushButton.classList.remove('active');
  }
  if (state.greenPeppers) {
    greenButton.classList.add('active');
  } else {
    greenButton.classList.remove('active');
  }
  /*  if (!state.whiteSauce) {
    sauceButton.classList.add('active');
  } else {
    sauceButton.classList.remove('active');
  }
  if (!state.glutenFreeCrust) {
    crustButton.classList.add('active');
  } else {
    crustButton.classList.remove('active');
  } */
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const li = document.querySelector('.price ul');
  const totalPrice = document.querySelector('.price strong');

  totalPrice.innerHTML = basePrice;
  li.innerHTML = '';

  if (state.pepperoni) {
    li.innerHTML += `<li>${'$' + ingredients.pepperoni.price} ${
      ingredients.pepperoni.name
    } </li>`;
    totalPrice.innerHTML =
      parseInt(totalPrice.innerHTML) + ingredients.pepperoni.price;
  }
  if (state.mushrooms) {
    li.innerHTML += `<li>${'$' + ingredients.mushrooms.price} ${
      ingredients.mushrooms.name
    }</li>`;
    totalPrice.innerHTML =
      parseInt(totalPrice.innerHTML) + ingredients.mushrooms.price;
  }
  if (state.greenPeppers) {
    li.innerHTML += `<li>${'$' + ingredients.greenPeppers.price} ${
      ingredients.greenPeppers.name
    }</li>`;
    totalPrice.innerHTML =
      parseInt(totalPrice.innerHTML) + ingredients.greenPeppers.price;
  }
  if (state.whiteSauce) {
    li.innerHTML += `<li>${'$' + ingredients.whiteSauce.price} ${
      ingredients.whiteSauce.name
    }</li>`;
    totalPrice.innerHTML =
      parseInt(totalPrice.innerHTML) + ingredients.whiteSauce.price;
  }
  if (state.glutenFreeCrust) {
    li.innerHTML += `<li>${'$' + ingredients.glutenFreeCrust.price} ${
      ingredients.glutenFreeCrust.name
    }</li>`;
    totalPrice.innerHTML =
      parseInt(totalPrice.innerHTML) + ingredients.glutenFreeCrust.price;
  } else {
    li.innerHTML += '';
  }
  // Iteration 4: change the HTML of `<aside class="panel price">` */
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document
  .querySelector('.btn.btn-sauce.active')
  .addEventListener('click', function () {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document
  .querySelector('.btn.btn-crust.active')
  .addEventListener('click', function () {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
  });
