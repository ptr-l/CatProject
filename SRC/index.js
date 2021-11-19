document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    fetchCats();
}
// fetch data
let catSkip = 1
function fetchCats() {
    fetch(`http://localhost:3000/cats?_page=${catSkip}&_limit=1`)
    //API notes: skip=[integer] is the formatting for paging through the results - persumably if we want to page it'll be a 10skip per buttton press.
    .then((response) => response.json())
    .then((cats) => renderCat(cats))
}

// mapping onto HTML file
const catCard = document.querySelector('#image-container')
const catImage = document.querySelector("#card-image");
const catTitle = document.querySelector("#card-title")
const catTags = document.querySelector('#image-tags')
const catLikes = document.querySelector('.rating')
const ratingAverage = document.querySelector(".average-rating")
const ratingCaption = document.querySelector("#ratings-caption")
const commentForm = document.querySelector('#comment-form')
const catComments = document.querySelector("#comments-list")
const commentInput = document.querySelector("#comment")
const nextButton = document.querySelector('#next-button')
const prevButton = document.querySelector('#previous-button')

const averageLikes = []

// using to generate averages
const avgMath = (likes) => {
    const total = likes.reduce((acc, c) => acc + c, 0);
    avg = total / (likes.length)
    return avg.toFixed(2)
}

// rendering cat object on page
function renderCat(cats) {
    cats.forEach(cat=> {
        catImage.src = "https://cataas.com/cat/" + cat.id;
        catImage.dataset.id = cat.id
        catComments.innerHTML = ""
        ratingCaption.innerHTML = "You have not selected a rating!"
        cat.tags.forEach((tag) => {
            let li = document.createElement("li");
            li.innerText = `${tag} `;
            catTags.appendChild(li);
        }) 
        if (typeof(cat.ratings) == 'object'){
            ratingAverage.innerHTML = `This cat's average rating is ${avgMath(cat.ratings)}`;
        }
        if (typeof(cat.comments) == 'object')
            {cat.comments.forEach((comment) => {
                let li = document.createElement("li");
                li.innerText = `${comment}`
                catComments.appendChild(li);
            })
        } else {
            let li = document.createElement("li");
            li.innerText = "There are no comments here yet, leave one with your rating!"
            catComments.appendChild(li);
        }
    })
}

//render next cat
nextButton.onclick = function() {
    catSkip = catSkip + 1
    catTags.innerHTML = ""
    catLikes.reset();
    fetchCats()
}

//render previous cat
prevButton.onclick = function() {
    if (catSkip > 1) {
        catSkip = catSkip - 1 
        catTags.innerHTML = ""
        catLikes.reset();
        fetchCats()
    }
}

// Updating ratings caption when value is changed
catLikes.onchange =  function likesClicked() {
    let likesClick = document.querySelector ('input[name="like"]:checked');
    if(likesClick != null) {
        ratingCaption.innerHTML = `You are rating this cat a ${likesClick.value}/5`
    }
}

//Server persistence for updates to ratings and comments on a specific cat object
document.addEventListener("submit", function (e) {
    e.preventDefault()
    let newRating = parseInt(document.querySelector('input[name="like"]:checked').value);
    let newComment = commentInput.value;
        let li = document.createElement("li");
        li.textContent = newComment;
        catComments.appendChild(li);
    fetch(`http://localhost:3000/cats/${catImage.dataset.id}`)
    .then((response) => response.json())
    .then((cat) => {
        if (typeof (cat.comments) == 'object') {cat.comments.push(newComment)
        } else {cat.comments = [newComment]}
        if (typeof (cat.ratings) == 'object') {cat.ratings.push(newRating)
        } else {cat.ratings = [newRating]}
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cat)
        }
        fetch(`http://localhost:3000/cats/${catImage.dataset.id}`, configObj)
        .then((response) => response.json()
        .then((updatedCat) => {
            e.preventDefault()
            console.log(updatedCat)
            
        }))
        
    })
    commentForm.reset();
})