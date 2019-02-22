# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Optional Lab: Dad Jokes 


The [Dad Jokes API](https://icanhazdadjoke.com/api) includes an endpoint for [getting a random dad joke](https://icanhazdadjoke.com/api#fetch-a-random-dad-joke). Your task is to build an app using React that displays a random dad joke from the API with the push of a button!

![Dad wearing Groucho glasses](./assets/dad-joke.png)<br>
<sup> [Image Credit: Spencer Wilson for the Washington Post](https://www.washingtonpost.com/news/arts-and-entertainment/wp/2016/06/17/did-you-get-your-hair-cut-readers-share-their-favorite-ridiculously-awful-dad-jokes/?noredirect=on&utm_term=.297ac211fffc) <sup>


<aside class="notes">

**Teaching Tip**:

This lab is NOT PART OF THE CORE CURRICULUM. It is optional practice working APIs and the component life-cycle methods in React. 

Assign it to individuals who are caught up with their work and looking for a further challenge. Or, do it with the whole class if time permits and you feel that students would benefit from it.

</aside>

---

## Prerequisites

Students should be familiar with: 

-   React and React components
-   State and props
-   The component life-cycle methods
-   Working with an API

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Install dependencies.
1.  Fulfill the listed requirements.
1.  Make a pull request to submit your work.

The starter code provided here is based on Create React App. 

## Requirements

Your application should display a large button that, when clicked, fetches a random dad joke from the Dad Jokes API and displays it to the user. It should look as similar as possible to the image provided below. You could, as a bonus, have a random dad joke appear when the app loads.

![Dad Jokes app mock](./assets/dad-jokes.png)

## Bonus

Build a queue that stores the 10 most recently retrieved dad jokes! Additionally, add some buttons that let you scroll back and forth through the queue.

You should have:

* One button to get a new joke (append to queue). If there are 10+ jokes in the queue, drop the oldest one.
* One button to advance to the next joke.
* One button to revert to the previous joke.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
