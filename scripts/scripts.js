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
const strawbGin = document.getElementById('strawb-gin');
const oldFashion = document.getElementById('old-fashioned');
const agavMojito = document.getElementById('agave-mojito');
// cache element using querySelector
const listEl = document.querySelector('li');
// interactive event listeners and handlers
strawbGin.addEventListener("mouseover", function(){
    strawbGin.style.backgroundColor = "transparent";
});
strawbGin.addEventListener("mouseout", function(){
    strawbGin.style.backgroundColor = "pink";
});
// old fashion
oldFashion.addEventListener("mouseover", function(){
    oldFashion.style.backgroundColor = "transparent";
});
oldFashion.addEventListener("mouseout", function(){
    oldFashion.style.backgroundColor = "chocolate";
});
// mojito
agavMojito.addEventListener("mouseover", function(){
    agavMojito.style.backgroundColor = "transparent";
});
agavMojito.addEventListener("mouseout", function(){
    agavMojito.style.backgroundColor = "lightgreen";
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
// event
cBtn.addEventListener('click', addComment);