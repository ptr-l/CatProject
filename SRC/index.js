//Testing Pull Requests
//JAVASCRIPT TODO:
//On Page Load - Display Cat Images from API (fetch->render)
// Peter Note: It looks like the API doesn't hard limit the # of cats you can grab at once - you have to set your own return limiters in your request. Should decide how many cats to take, probably based on webpage design?
    // Eve: I imagine we'll grab something like... 10? 10 makes sense? And then stretch goal to paginate?
//Allow Rating Beteween 1-5 on any of the loaded cat pictures - Submit Via Clicking Number next to Img (Peter: If I'm understanding the proposed design properly)
    // Eve: Yeah, I'm thinking like a string of numbers underneath the image for the rating.
//Submittable Comment form that will render the comment on the webpage after its submitted + clear the form - 
//      Peter: Is there a way to only have one comment form that can work for every image - or will we have a seperate comment form for each image that loads on the page?
    // Eve: I think we should be okay to include a comment as part of the card itself so that the comment gets tied to the card object, and we wind up with a nested array of comments?
//Stretch: On Submitting Tag- Display Cats with associated submitted tag
//  Stretch for the Stretch: Offer an expandable list of tags so people know what options they can choose from.


// dropping in my JS code from Flatagram, b/c I guess why not? We'll need to:
    // 1. Update to fetch from the right API;
    // 2. Update to run render function on each of the Cats fetched;
    // 3. Change Likes function to Rating function;
    // 4. Consider what element we'd like to toggle to have the picture show/hide


document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    fetchCats();
}
    // fetch data
let catSkip = 0
function fetchCats() {
    fetch(`https://cataas.com/api/cats?skip=${catSkip}&limit=1`)
    //API notes: skip=[integer] is the formatting for paging through the results - persumably if we want to page it'll be a 10skip per buttton press.
    .then((response) => response.json())
    .then((cats) => renderCat(cats))
}
// Peter: If we're going to do a whole card for each object, I think we're going to have to just declare everything within the render function.
// map data onto HTML file 
const catCard = document.querySelector('#image-container')
const catImage = document.querySelector("#card-image");
const catTitle = document.querySelector("#card-title")
const catTags = document.querySelector('#image-tags')
const commentForm = document.querySelector('#comment-form')
const catComments = document.querySelector("#comments-list")
const commentInput = document.querySelector("#comment")
const nextButton = document.querySelector('#next-button')
const prevButton = document.querySelector('#previous-button')

    
function renderCat(cats) {
    cats.forEach(cat=> {
        catImage.src = "https://cataas.com/cat/" + cat.id;
        cat.tags.forEach((tag) => {
            let li = document.createElement("li");
            li.innerText = `${tag} `;
            catTags.appendChild(li);
        }) 
})}

nextButton.onclick = function nextCat() {
        catSkip = catSkip + 1
        catTags.innerHTML = ""
        fetchCats()
}


prevButton.onclick = function priorCat() {
    if (catSkip >=1) {
        catSkip = catSkip - 1 
        catTags.innerHTML = ""
        fetchCats()
    }
}


document.addEventListener("submit", addComment);

function addComment () {
    event.preventDefault();
    let li = document.createElement("li");
    li.textContent = commentInput.value;
    catComments.appendChild(li);
    commentForm.reset()
}

catComments.addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "LI") {
        catComments.removeChild(e.target);
    }
})

// // BONUS: hide+show image when title clicked

// catTitle.addEventListener("click", function(e) {
//     if (catImage.style.display !== "none") {
//         catImage.style.display = "none";
//     } else {
//         catImage.style.display = "block"
//     }
// })
