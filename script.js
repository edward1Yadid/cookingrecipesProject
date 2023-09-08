//dom
const formSerch = document.querySelector(".formSearch");
const inputsearch = document.getElementById("search");
const resultDiv = document.getElementById("result");
const moreResults = document.getElementById("moreResults");
const resultForTerm = document.getElementById("resultForTerm");
const singlemeal = document.getElementById("single-meal");
const buttonSearch = document.getElementById("buttonSearch");
let mealS = "";

const numbersPattern = /[0-9]+/;

/////////////////////////////////////////////////fetch the recipes//////////////////////////////////////////////
formSerch.addEventListener("submit", searchRecipes);
const search = document.getElementById("search");
async function searchRecipes(event) {
  //if searching again i want to clear the screens
  resultDiv.innerHTML = "";
  singlemeal.innerHTML = "";
  event.preventDefault();

  if (numbersPattern.test(inputsearch.value)) {
    alert("It is not possible to write a number.");
    inputsearch.value = "";
  }

  try {
    const httpRespone = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`
    );

    const data = await httpRespone.json();

    resultForTerm.innerHTML = `<h2> Search result for recipes's: ${search.value}</h2>`;
    data.meals.forEach((meals) => {
      mealS += `<div class=meal>
          <h3>${meals.strMeal}</h3>
      <img src="${meals.strMealThumb}" id="${meals.idMeal}" alt="strMealThumb">
      <div class="meal-info"></div>
  
      </div>`;
    });
  } catch {
    alert("your term you try to search in not valid");
    console.error("your term you try to search in not valid");
    search.value = "";
  }

  resultDiv.innerHTML = mealS;

  if (search.value.trim() == "") {
    alert("please enter a search term");
    resultDiv.innerHTML = "";
  }
}

////////////////////////////////////show the recipes//////////////////////////////////////////////
let idOfmeal = "";
resultDiv.addEventListener("click", (event) => {
  idOfmeal = event.target.id;

  getIdOfmeal(idOfmeal);
});

async function getIdOfmeal(idOfmeal) {
  const httpRespone = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idOfmeal}`
  );

  const data = await httpRespone.json();
  const meal = data.meals[0];
  const ingredients = [];

  for (i = 0; i < 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    }
  }

  const PreparationInstructions = meal.strInstructions;

  resultDiv.innerHTML = "";
  singlemeal.innerHTML = `


  <div class="singleMealShow">
  <div id="details">
  <div><h2>${meal.strMeal}</h2>
        <img id="image" src="${meal.strMealThumb}" alt="${meal.strMeal}">
    
        </div>

     <div id="flexIngredients">
          <h2 id="Ingredients">Ingredients</h2>
        <ol>
          ${ingredients.map((ing) => `<li class="list" >${ing}</li>`).join("")}
        </ol>
        </div>
     </div>
             <h3>Preparation Instructions: ${meal.strMeal}</h3>
       <p>${PreparationInstructions}</p>
       <button class="back">back</button>
</div>

`;
}
if (!singlemeal.innerHTML == 0) {
  document.querySelector(".back").addEventListener("click", () => {
    singlemeal.innerHTML = "";
  });
}
