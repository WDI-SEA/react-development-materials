# ![](https://s3.amazonaws.com/python-ga/images/GA_Cog_Medium_White_RGB.png) Quiz: Intro to React.js

<aside class="notes">

**Notes**:

- Reminder that the quizzes are delivered on the myGA platform. Students should log in to their myGA accounts and access the React Practice learning path (not the Pre-Work learning path).

- Approximate time to complete quiz: 20 min

- Approximate time for discuss/review quiz: 20 min

- At the end of the quiz, you can share [this review guide](https://git.generalassemb.ly/react-development/react-development-course-materials/blob/master/Additional-Resources/Review%20Guides/react-key-concepts-review-guide.md).

- Here is a link to the quiz for your reference. Please do not share this link with students. [Intro to React Quiz](https://my.generalassemb.ly/preview?lessonURL=https://ga-create-api.s3.amazonaws.com/quiz-intro-to-react-js-3744.json)

### Questions:
- Answers with an asterisk are correct.

_Prompt_: You have a main component, `Milkshake.js`, which imports and will render UI from a component, `Ingredients.js`. Which file does the code below go in?

```js
ReactDOM.render(
<Ingredients />,
document.getElementById('root')
)
```

_Choices_:

1. `Milkshake.js` *
2. `Ingredients.js`

_Explanation_: When we call the `Ingredients` component with `<Ingredients />`, the `Ingredients` component is going to return the JSX inside its `render()` method. You can't call a component within itself! This would go in `Milkshake.js`, which would actually render the JSX returned by the `Ingredients` component.

-----------------------------------

_Prompt_: A component is passed a prop named `flavor`. What JSX would the component return in its `render()` method to display the prop in a paragraph?

_Choices_:

1. `<p>My favorite ice cream is {this.props.flavor}!</p>` *
2. `<p>My favorite ice cream is {props.this.flavor}!</p>`
3. `<p>My favorite ice cream is {props.flavor}!</p>`
4. `<p>My favorite ice cream is {this.flavor}!</p>`

_Explanation_: You distinguish JavaScript in JSX with curly braces `{}`. The syntax to refer to the prop is `this.props.flavor`, which says: "In *this* file, find a *prop*, named *'flavor'*."

-----------------------------------

_Prompt_: Is this a valid component declaration?

```js
  class Paintings extends Component {
    render () {
      return (
        <h1>Hello World!</h1>
        <h3>It is time for tea.</h3>
      )
    }
  }
```

_Choices_:

1. Yes
2. No *

_Explanation_: No, because the `render()` method can only return one JSX element. To make this valid, the two heading tags need to be wrapped in a single tag. For example, the `render()` method could return a `<div>` with the `<h1>` and `<h3>` elements inside of it.

----------------------------------

_Prompt_: In a file named `Spices.js`, is this a valid way to render the JSX that the `Cinnamon` component returns to the screen?

```js
ReactDOM.render(
<Cinnamon>,
document.getElementById('root')
)
```

_Choices_:

1. Yes
2. No *

_Explanation_: No! Whenever you use a self-closing tag in JSX, you **must** end it with a `/`. The correct syntax is `<Cinnamon />`.

----------------------------------

_Prompt_: What, specifically, happens when the following method is called?

```js
ReactDOM.render(
  <Kangaroos />,
  document.getElementById('root')
)
```

_Choices_:

1. The `ReactDOM.render()` method generates a virtual DOM node containing whatever content the `Kangaroos` component returns and appends that to the element with an ID of `root`. Then, React compares the virtual DOM to the regular DOM and updates on the webpage only those elements that have changed. *

2. The `ReactDOM.render()` method generates a virtual DOM node containing whatever JSX that the `Kangaroos` component returns. React then reloads the entire webpage, changing only the element with an ID of `root`.

3. The `ReactDOM.render()` method returns JSX to the `Kangaroos` component, and the `Kangaroos` component returns a virtual DOM node. React updates on the webpage only those elements specified in `Kangaroos` that have changed.

4. The `ReactDOM.render()` method generates a new element with an ID of `root`, which it populates with the JSX returned from the `Kangaroos` component. React updates the virtual DOM to have this new element, which the browser sees to dynamically change the page with the new element on it.

_Explanation_: The `ReactDOM.render()` method generates a virtual DOM node containing whatever content the `Kangaroos` component returns and appends that to the element with an ID of `root`. Then, React compares the virtual DOM to the regular DOM and updates on the webpage only those elements that have changed.


-----------------------------------

_Prompt_: If you have multiple components written in a single file, you can then have multiple default export statements at the bottom of that file — one for each component.

_Choices_:

1. True
2. False *

_Explanation_: Only one default is allowed per file. The `default` keyword means that, if we try to import anything from this file that the app can't find, JavaScript will automatically revert to importing the component exported as `default` instead. If there are multiple default statements, the app won't know what to do! On a side note, it is a best practice to split different components into their own files, so hopefully you won't run into this issue.

----------------------------------

_Prompt_: What is React.js?

_Choices_:

1. A framework created by the developers at Facebook. Its aim is to be the "view" of your JavaScript application. It focuses on creating a component-based architecture. *
2. A boilerplate that eliminates the need to display JSON retrieved from your server. It updates the model portion of your web application to dynamically render UI.
3. A library of independent, reusable pieces of user interface that you can call upon to add variability to your application.
4. All of the above.

_Explanation_: React is a framework created by the developers at Facebook. Its aim is to be the "view" of your JavaScript application. It focuses on creating a component-based architecture.

-----------------------------------

_Prompt_: Take a look at the following React file. Choose the reason(s) it won't run properly.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';

var groceryList = {
  important: "milk",
  spices: [
    "pepper",
    "salt"
  ]
}

ReactDOM.render(
  <Store
    buy_me={groceryList.milk}
    me_too={groceryList.spices}
  >,
  document.getElementById('root')
)
```

_Choices_:

1. The `Store` component call needs to end with `/>`, not just `>`. *
2. The prop variable names need to match the `groceryList` names: `buy_me={groceryList.milk}` needs to be `buy_me={groceryList.important}`. *
3. The `var groceryList` declaration needs to be inside the `render()` method.
4. When passing the props into `Store`, the syntax is `this.groceryList.important` and `this.groceryList.spices`.


_Explanation_: The component needs to end with `/>` to close the tag. Without adding the props, it would look like `<Store>`, which is not closed. Secondly. `groceryList.milk` does not exist; `milk` is the value of `important`.


----------------------------------


_Prompt_: How could you use `create-react-app` to create a new app called `jungle_maze`?

_Choices_:

1. `create-react-app npm/start jungle_maze`
2. `create-react-app jungle_maze.js`
3. `create-react-app jungle_maze` *
4. `create-react-app index/jungle_maze.js`


_Explanation_: It's simple to create an app using `create-react-app`: Just call the tool with the name you want for your app. In this case, it's `create-react-app jungle_maze`.

----------------------------------

_Prompt_: Assuming that the `Flowers` component is being passed all necessary props and the `Daisy` component is imported and written correctly, is the following syntax valid if I'm displaying multiple nested components?

```js
import React, { Component } from 'react';
import Daisy from './Daisy';

class Flowers extends Component {
  render() {
    let allDaisies = [
      <Daisy body={this.props.spring} />,
      <Daisy body={this.props.rabbits} />
    ]

    return (
      <div>
        <h1>{this.props.favorites}</h1>
        <h3>Daisies:</h3>
        {allDaisies}
      </div>
    )
  }
}
```

_Choices_:

1. Yes *
2. No

_Explanation_: It is! You can pass JavaScript objects into JSX using `{}` curly braces. Just as we can add to the JSX passed in props, we can also add the `allDaisies` variable to the JSX with `{allDaisies}`.

</aside>
