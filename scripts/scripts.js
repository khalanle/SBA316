// cache elements using getElementById
const mainTitle = document.getElementById('main-title');
const drinkTitle = document.getElementById('drink-title');
const ingredients = document.getElementById('ingredient-list');
const instructions = document.getElementById('instruction-list');
// comment section
const cList = document.getElementById('commentList');
const cInput = document.getElementById('commentInput');
const cBtn = document.getElementById('addCommentBtn');
// cocktails
const strawbGin = document.getElementById('straw-gin');
const oldFashion = document.getElementById('old-fashioned');
const agavMojito = document.getElementById('agave-mojito');
const recipeCard = document.getElementsByClassName('cocktail');
// cache element using querySelector
const listEl = document.querySelector('li');

// change recipe card on click function
document.addEventListener('DOMContentLoaded', () => {
    const recipeCard = document.getElementById('straw-gin');
    recipeCard.addEventListener('click', () => {
        recipeCard.style.backgroundImage = 'url("https://www.pexels.com/photo/cold-drink-with-slice-of-strawberry-5817635/")';
        recipeCard.style.backgroundSize = 'cover';
        recipeCard.style.backgroundPosition = 'center';
        recipeCard.textContent = '';
    });
});


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
    cBtn.removeEventListener('click', addComment);
}
// call function
cBtn.addEventListener('click', addComment);