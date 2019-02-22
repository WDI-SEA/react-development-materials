## ![](https://s3.amazonaws.com/python-ga/images/GA_Cog_Medium_White_RGB.png) {.separator}
<h1>Exercise: Creating a Newsfeed Component</h1>

<aside class="notes">
This exercise is meant to provide students with additional practice creating reusable React components.
</aside>

---

## Instructions

**Estimated Time:** 45 min

<iframe height='500' scrolling='no' title='React - Creating A NewFeed Component - Starter' src='https://codepen.io/jkeohan/embed/PBvxvY/?height=500&theme-id=0&default-tab=css,resultundefined&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/jkeohan/pen/PBvxvY/'>React - Creating A NewFeed Component - Starter</a> by Joe (<a href='https://codepen.io/jkeohan'>@jkeohan</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## Instructions

1. In the HTML, look for a section element with an ID of `main`. Nested within it, you will find three articles.
2. Using the sources array (defined below), create an app component that will recreate the section elements.

In the [Creating a Newsfeed Component](https://codepen.io/jkeohan/pen/PBvxvY?editors=0010) CodePen, you will find three article elements within the HTML section generating the newsfeed articles visible on the page.

Perform the following to complete the lab:

- Create an array called `newsFeedData` that will contain three objects with the following properties: `title`, `tags`, `image`, and `impressions`.
- Populate those objects based on those values assigned in the HTML.
- Create a `NewsFeed` component and pass it the `newsFeedData` array as `props`.
- The `NewsFeed` component will then render three `articles` based on properties of the objects in the `newsFeedData` array.

<aside class="notes">
  Solution: https://codepen.io/GAmarketing/pen/WYjmgx
</aside>
