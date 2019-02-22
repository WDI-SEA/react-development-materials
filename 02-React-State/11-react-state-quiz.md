# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Quiz: React State

**Notes**:

- Reminder that the quizzes are delivered on the myGA platform. Students should log in to their myGA accounts and access the React Practice learning path (not the Pre-Work learning path).

- Approximate time to complete quiz: 20 min

- Approximate time for discuss/review quiz: 20 min

- At the end of the quiz, you can share [this review guide](https://git.generalassemb.ly/react-development/react-development-course-materials/blob/master/Additional-Resources/Review%20Guides/react-state-review-guide.md). 

- Here is a link to the quiz for your reference. Please do not share this link with students. [React State Quiz](https://my.generalassemb.ly/preview?lessonURL=https://ga-create-api.s3.amazonaws.com/quiz-react-state-3504.json)
### Questions:
- Answers marked with asterisks are correct.

_Prompt_: In older version of React, where does `constructor()` go, and when do you need it?


_Choices_:

1. At the top of the component class; you always need it for accurate setup of that class.
2. At the top of the component class; you only need it if you are changing any initial configurations for that class. *
3. In the component class's `render()` method; you always need it for accurate setup of that class.
4. In the component class's `render()` method; you only need it if you are changing any initial configurations for that class.

_Explanation_: `constructor()` is only necessary if you're changing initial setup — like setting a `state`. It is its own method and goes at the top of the component class, not inside the `render()` method.

-----------------------------------

_Prompt_: What happens when you call `setState()`?

_Choices_:

1. The new `state` will be passed into the current `state` of the component. The virtual DOM tree is updated. A `diff` is run between the virtual DOM tree and the regular DOM tree. Only the corresponding elements in the regular DOM tree will update. *
2. The virtual DOM tree is updated. A `diff` is run between the virtual DOM tree and the regular DOM tree. The new `state` will be passed into the current `state` of the component. Only the corresponding elements in the regular DOM tree will update.
3. The virtual DOM tree is updated. The new `state` will be passed into the current `state` of the component. Only the corresponding elements in the regular DOM tree will update.
4. The new state will be passed into the current state of the component. Only the corresponding elements in the regular DOM tree will update.

_Explanation_: `setState()` first updates the `state` of the component; this causes the virtual DOM to be updated, which in turn triggers React to compare the virtual DOM and the regular DOM. Only the elements that have changed will update.

-----------------------------------

_Prompt_: If we have the code below inside of the `Painting` component, will `dinosaur` be treated as a `prop` or a `state`?

```html
<Painting dinosaur="velociraptor" />
```

_Choices_:

1. Prop *
2. State

_Explanation_: Elements that are passed in to a component are treated as a `prop` within that component. For `dinosaur` to be considered a `state` within `Painting`, it would need to be a new element declared within `Painting`'s `constructor()` — not passed in to `Painting`.

----------------------------------

_Prompt_: What is wrong with the code below? Select all that apply.

```js
class Compliment extends Component {
  constructor () {
    state = {
      compliment = "You're so awesome!"
    }
  }
}
```

_Choices_:

1. You can't have a `state` with the same name as the component.
2. `State` is set with `this.state`, not just state. *
3. `State is set with colons, not equal signs. It should be `compliment: "You're so awesome!". *
4. Constructors need to begin with a call to `super()`. *
5. All of the above.

_Correct response_: Correct! `State` is set with `this.state`, and the name-value pair is separated with a colon, not an equals sign. Lastly, all constructors need to start with a call to `super()` to initialize the default class before modifying it.

_Incorrect response_: Not quite.  A state can have the same name as the component class.

----------------------------------

_Prompt_: What is wrong with the code below? Select all that apply.

```js
class Volcano extends Component {

  erupt() {
    setState({
      lava: flowing
    })
  }

  render() {
    return (
      <h3>Warning: Lava is currently {this.lava}</h3>
      <h3>Warning: Lava is currently {state.lava}</h3>
    )
  }
}

```


_Choices_:

1. `State` is modified with `this.setState()`, not just `setState()`. *
2. The `lava` state was never initialized. *
3. `State` is called by JSX with `{this.state.lava}`, so both the `<h3>` statements need to change. *
4. `State` is called by JSX with `{this.lava}`, so the second `<h3>` statement needs to change.
5. `State` is called by JSX with `{state.lava}`, so the first `<h3>` statement needs to change.

_Correct response_: States need to be declared before they can be used, so there needs to be a `constructor()` method initializing `lava`. Additionally, you call `state` with `this.state.Name` and set state with `this.setState()`.  This code will also error out as react needs a parent tag to render, a solution would be to wrap the h3 tag inside a div tag.

_Incorrect response_: Not quite.

-----------------------------------

_Prompt_: Using React, if you refresh a webpage, you never lose information, as everything is stored in the component or browser state.

_Choices_:

1. True
2. False *

_Explanation_: `state` just represents the state of data on our page. Something that's saved to `state` in React is not automatically saved to a database or to local storage. If you refresh a page, all `state` information is lost.

----------------------------------

_Prompt_: What is `.map()`?

_Choices_:

1. `.map()` is like a `while` loop. With `.map()`, you use an existing iterator to navigate through each item until you break the loop.
2. `.map()` is like a `for` loop. With `.map()`, you use an existing iterator to navigate through each item in an array.
3. `.map()` is like a `for` loop. With `.map()`, you make a new variable and use it to iterate through each item in an array. *
4. `.map()` is like a `while` loop. With `.map()`, you make a new variable and use it to iterate through each item until you break the loop.

_Explanation_: Right! We use `.map()` to iterate over an array, like a `for` loop, and perform an action on each item returning a new array, usually saving this into a new variable.

-----------------------------------

_Prompt_: Is the following syntax for `.map()` correct?

```js
const drinks = ['tea', 'espresso', 'milkshake'];

const myDrinks = drinks.map( (soda, index) => {
  return 'I love' + soda;
})
```

_Choices_:

1. No — `soda` was never initialized.
2. No — `index` is a keyword and cannot be used as a variable.
3. No — the first line of the function should be `let myDrinks = map( (drinks, index)`.
4. Yes. *

_Explanation_: Yes! This is a perfectly valid way to use `.map()` to iterate an array, modify it, and save the modified array into a new variable.

----------------------------------

_Prompt_: Is the following syntax for `.map()` correct if the array is a prop named `Bear`?

```js

const Bears = this.prop.Bear.map( (bearType, index) => {
  return 'I love' + bearType;
})
```

_Choices_:

1. No — the array should be called with `this.props.Bear`, making it `this.props.Bear.map`. *
2. No — the array should be called with `Bear`, making it simply `Bear.map`.
3. No — `bearType` was never initialized.
4. Yes.

_Explanation_: It's not, because while all of the `.map()`-specific syntax is correct, you would call the prop with `this.props.Bear`, with an "s" on `props`.

----------------------------------

_Prompt_: True or false: I can set state when calling the state's component. For example, let's say I have a file called `Tropical.js` that contains a component, `Tropical`, with the `pineapple` state initialized inside of it. In a separate file, `Recipes.js`, I can use this code to change the state of `pineapple` to `delicious` inside of the `Tropical` component.

```js
ReactDOM.render(
  <Tropical pineapple="delicious" />,
  document.getElementById('root')
)
```

_Choices_:

1. True
2. False *

_Explanation_: Right, this is false. If the `pineapple` state is initialized in `Tropical`'s constructor, then the `pineapple` state does not exist in `Recipes.js`. Here, `pineapple` would be passed in as a prop that happens to have the same name as the state initialized in `Tropical.js`. They could each be accessed, respectively, by `this.state.pineapple` and `this.props.pineapple`.
