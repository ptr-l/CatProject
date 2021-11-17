# CatProject
Phase One Cat Project


Basic story: Cat Rater, rate some cats! Take a break from your busy day to scroll through some cute cats and leave ratings and comments on their pictures. (Eventually, this has potential to turn into some sort of cat adoption Tinder-like app).
Color Coding: Red/CSS+HTML, Green: Javascript

Core features:
Fetch a list of cat images from an API and display them on the page
Fetch call
Watcher on page load
Stretch: add buttons to paginate API / load additional cats
Allow users to leave a rating 1-5 on each cat picture
Generate li HTML element 1-5, add rating based on clicked list item
Watcher on click
Allow users to leave a comment on each cat picture
Watcher for form submission
Display any existing comments
Fetch from API once stored on server
Stretch: allow users to search for photos by inputting a random tag of their choice
Subgoal: Offer a list of tags (possibly on request via a click event or other similar method?)  
Stretch: minimize rated images and display provided rating on minimized header. Clicking on the minimized header should reopen the image.

API data:
We’ll be using the CATAAS (Cat as a service) open API: https://cataas.com/#/
This API will be used to generate images for our application by fetching from https://cataas.com/cat
Stretch goal -- allow users to input a tag and fetch cats from https://cataas.com/cat/[tag]

Expected challenges:
Eve: I always find clicking on specific list items to be a bit of a tricky thing to do, so that will be fun to work on!
Eve + Peter: I know I’m not the strongest at planning layout, and CSS is a definite weak point for me, so it will be a challenge to get the page layout the way I’d like it. (Are we allowed to utilize external tools like Figma or does this all need to be done by hand?)

How are requirements being met:
We’re using the CATAAS API to meet the API data requirements, and will be leveraging HTML and CSS for our page layout.
This is expected to be a single scrollable page, without redirects. To allow for better UI, we’re planning to collapse elements as a stretch goal.
App will have DOMContentLoaded, click, and submit event listeners.
Users are expected to be able to click on each image to rate and leave comments. As a stretch goal, users can click to collapse.
We will aim to reduce redundancy as much as possible as we code.
