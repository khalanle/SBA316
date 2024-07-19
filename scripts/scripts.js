// cache elements using getElementById

// titles and lists
const mainTitle = document.getElementById("main-title");
const drinkTitle = document.getElementById("drink-title");
const ingredients = document.getElementById("ingredient-list");
const instructions = document.getElementById("instruction-list");
// comment section
const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");
// cocktails
const strawbGin = document.getElementById("straw-gin");
const oldFashion = document.getElementById("old-fashioned");
const agavMojito = document.getElementById("agave-mojito");
const recipeCard = document.getElementsByClassName("cocktail");

// cache element using querySelector
const listEl = document.querySelector('li');

// change recipe card on click function
function changeCard(event) {
    document.cocktail.style.backgroundColor = "red";
}

// call functions
recipeCard.addEventListener("click", changeCard);



// addComment function
function addComment(event) {
    const newComment = cInput.value;
    console.log(cInput.value);
    console.log(event)
    if (newComment === "") return;
    // add the value to the comment list element
    const newLi = document.createElement("li");
    newLi.textContent = newComment;
    cList.appendChild(newLi);
    // clear the input element
    cInput.value = "";
    // focus the input element
    cInput.focus();
    cBtn.removeEventListener("click", addComment);
}
// call function
cBtn.addEventListener("click", addComment);