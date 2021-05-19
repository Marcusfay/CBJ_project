export default component(node => {
    const stories = [...node.querySelectorAll('li.js-story-item')]
    const storyList = node.querySelector('.js-story-list')
    let storyLinks = []
    let data = []

    // Get the cookie from the user's device
    const storiesVisited = localStorage.getItem("iu_st_seen")
    
    // This is a function that is run at line 40
    const highlightStories = (() => {
        const storiesVisited = localStorage.getItem("iu_st_seen")

        storyLinks = stories.map((story) => (story.querySelector('a').href))

        // Loop over each story
        for (var i = 0; i < stories.length; i++) {

            // See if the story has been visited, and add class to it if it has
            if(storiesVisited && storiesVisited.includes(stories[i].querySelector('a').href)) {
                stories[i].classList.add('visited')
                // Move the story to the end of the list of stories
                storyList.appendChild(stories[i])
            }
            
            // Add the class "loaded" to the list of stories which makes them visible after shuffling them around
            stories[i].classList.add('loaded')
        }
    })

    // Check if any stories has been visited
    if(storiesVisited !== null) {
        data = JSON.parse(storiesVisited)  
        // If the story you're on right now is not included in our list of visited stories, then add it to the list
        if(!storiesVisited.includes(window.location.href)) data.push(window.location.href)
    } else {
        // Add the current story if there is no stories in the list of visited stories
        data.push(window.location.href)
    }
        
    
    // Update localStorage cookie with new array
    localStorage.setItem("iu_st_seen", JSON.stringify(data))
    
    highlightStories()
});
