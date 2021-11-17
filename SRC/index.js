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
//