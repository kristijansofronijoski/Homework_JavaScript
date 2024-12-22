/* Create a recipe page from inputs

Ask the user for the name of the recipe
Ask the user how many ingredients do we need for the recipe
Ask the user for the name of every ingredient
Print the name of the recipe in the HTML as heading element, ex: h1-h6
Print all ingredients as an unordered list in the HTML
Extra: Use a table if you want to be fancy :) */


let recipeName = prompt(`What is the name of the recipe?`)

let recipe = document.getElementById("recipe");
recipe.innerHTML += `<p> Thre recipe is called: 
 <b> ${recipeName} </b> 
 </p>`;



 let numberOfIngredients = prompt(`How many ingredients do we need for the recipe ?`);
while(isNaN(numberOfIngredients)){
    numberOfIngredients = prompt(`Please enter number`);
}


 let ingredients = [];
 let quantities = [];
for(let i=0; i < numberOfIngredients; i++){
    ingredients[i] = prompt(`Enter the ingredient`);
    quantities[i] = prompt(`Enter the quantity`);
}

recipe.innerHTML += `<ul>`;

for(let i=0; i < numberOfIngredients; i++){
    recipe.innerHTML += `<li> ${ingredients[i]}</li>`;
}
recipe.innerHTML += `</ul>`;         
                    


recipe.innerHTML += `<p> ${recipeName} </p>`;
let tableString = "";
tableString += 
`<table border="1">
  <thead>
    <th>Ingridients</th>
    <th>Quantity</th>
  </thead>
  <tbody>`;
for(let i=0; i < numberOfIngredients; i++){
    tableString += 
 `<tr>
   <td>${ingredients[i]}</td>
   <td>${quantities[i]}</td>
 </tr>`;
}
tableString += 
`</tbody>
 </table>`;

 recipe.innerHTML += tableString;


