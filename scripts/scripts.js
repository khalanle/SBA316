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

// cache element using querySelector
const listEl = document.querySelector('li');





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
cBtn.addEventListener("click", addComment);