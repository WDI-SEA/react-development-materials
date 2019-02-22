## ![](https://s3.amazonaws.com/python-ga/images/GA_Cog_Medium_White_RGB.png) {.separator}
<h1>Exercise: Build a Calculator</h1>

---

##

![Calculator Icon](images/calculator.png)

Let's build a calculator — because we can!

<aside class="notes">

**Talking Points:**

- Now it's time for you to check back on everything you've learned. You'll be using React to build a calculator. I'll only be providing minimal instructions — the heavy thinking is on you!

- At first, your calculator will simply add two numbers together when you enter them. For the bonus exercise, you might decide to get more creative.

</aside>

---

## Set Up

`create-react-app calculator`

---

## Step 1

```html
<div className="container">
  <h1>Add with React!</h1>

  <div className="add">
    <input type="text" />
    <span>+</span>
    <input type="text" />
    <span>=</span>
    <h3>Addition results go here!</h3>
  </div>
</div>
```

<aside class="notes">

**Talking Points:**

- Use `create-react-app` to make a new project.

- Then, create a single component file in the `src` directory and name it `Calculator.js`. In this file, create your `Calculator` class. Use the `App.js` as an example of how to create a basic component. Add the following JSX to your calculator's `render()` function.

</aside>

---

## Step 2

- Set up the initial state of your component. What state attributes will you
need to track? With what values should those state items start? Where is that
state displayed in the browser?

- Hint: You will only need one element in your `state`.

---

## Step 3

```js
class Calculator extends Component {
  // ...

  handleClick = (event) => {
    // Event logic here.
  }

  // ...
}
```

<aside class="notes">

**Talking Points:**

- Add an event to the inputs so that you can trigger a function when their values
change. Consider: Should it be a `click` event? A `submit` event? Something else?

- Here's some documentation to help you choose what you want to do and how to do it:

1. [A list of events React supports](https://facebook.github.io/react/docs/events.html#supported-events).
2. [React form documentation](https://facebook.github.io/react/docs/forms.html).
3. [How to handle events](https://facebook.github.io/react/docs/handling-events.html).

- Remember that, when you create an event, the function you call should look something like what is shown here.

- Notice that the "How to handle events" link has an example using the `bind` keyword. This is an alternative, older way to handle events in React.

</aside>

## Step 4

Time to create a new method.

<details>

<summary>Hint: Where should this method go?</summary>
In the same component as it's being used — above the <code>render()</code>.
</details>

> Thought: How will you handle inputs that aren't numbers?

<aside class="notes">

**Talking Point:**

- Once you've chosen how to bind your inputs to an event, you'll need to create a
method. The method should accept the triggered event, get the input values from
your form, add them together, and set part of the state to the new `sum`.

</aside>

---

## Step 5

Et, voilà!

<aside class="notes">

**Talking Point:**

- Once the state of the `sum` has been set, React will re-render the whole
component. Make sure you have a place in your JSX that displays the result.

---

## Bonus

- Make the calculator work with any of the four basic arithmetic operations
  (+, -, \*, /). How will this change your state and your JSX?
