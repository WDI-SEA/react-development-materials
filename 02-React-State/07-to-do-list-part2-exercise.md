## ![](https://s3.amazonaws.com/python-ga/images/GA_Cog_Medium_White_RGB.png) {.separator}
<h1>Exercise: To-Do List, Part 2</h1>


---

## To-dos change.

So should our list.

<aside class="notes">

**Talking Point:**

- Now we have a to-do list! But it isn't changeable, and we can't just _think about_ eating ice cream and going to the gym forever. At some point, we have to actually eat the ice cream (delete it from the list) and find a gym buddy (add that to the list). In other words, we need to be able to change the list!

</aside>

---

## Let the Refactoring Begin!

<aside class="notes">

**Talking Points:**

- Remember, in a React component, state is just another object, like props. The biggest difference is that state can be changed (Remember, however, to always change it through the method `setState()`). The exception is setting the initial state, which is only done once on the intial render — when initializing a React component. In order to pass items to the `ToDoList` component and make them mutable, we'll need to set the state of our `MyList`.

- This is going to require a lot of refactoring! We're going to be swapping out places where we started using props and replacing them with our changeable state.

</aside>

---

## Clearing the Items

* At the top of the `MyList` component, create an initial `state` object with an attribute called `toDoItemArray`. It should be equal to the initial list that's passed in.
* Don't forget to change the `.map()` call!
* Always check to be sure that your website is accurate (it should still look the same).
* Make a small change, then test to see if it works. Don't change too many things at once!

<aside class="notes">

**Talking Points:**

- We're going to add a button to the list that allows users to clear away everything it contains. First, let's make sure the list is already set up to properly display items. The steps that follow walk you through that process.

- Next, we'll look into making this list changeable. Remember, updating state will involve calling `setState()`. Let's use a simple example with a `clear` button in `MyList`.

</aside>

---

## Define the Function

First, in `MyList`, we define the function the button will call:

```js
clearList = () => {
  this.setState({
    toDoItemArray: []
  });
}
```

---

## Add a Button

Then, add a button after the whole `<ul>` list.

**MyList.js**
```html
<ul>
  ...
</ul>
<button onClick={this.clearList}>Finished the list!</button>
```

---

## So Far So Good

This makes our `MyList` component look like this:

**MyList.js**

```js
class MyList extends Component {

  state = {
      toDoItemArray: ["Buy ice cream.", "Eat ice cream.", "Go to the gym."];
  }

  clearList = () => {
    this.setState({
      toDoItemArray: []
    });
  }

  render() {
    const todoItems = this.state.toDoItemArray.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <button onClick={this.clearList}>Finished the list!</button>
      </div>
    )
  }
}

export default MyList;
```

<aside class="notes">

**Talking Point:**

- Don't forget to try it out!

</aside>

---

## Now, What Will Happen When We Click on the Button?


<aside class="notes">

**Talking Points:**

- Now, when we click on the button, the following will occur:
    - `this.setState()` will set the state, `toDoItemArray`, to be an empty array: `{toDoItemArray: []}`.
    - The `render()` function for `MyList` will be called and re-render the component.
    - We'll feel good about ourselves for going to the gym, even if we ate ice cream first.


</aside>

---

## Sure-Fire Coding

```js
clearList = () => {
  console.log("Clearing list!");
  this.setState({
    toDoItemArray: []
  });
}
```

> Another great way to debug this feature is to use the React Developer Tools. Select the React tab and click on the `MyList` component. Now, you can utilize `$r.clearList()` in the JS console to directly call the method.

<aside class="notes">

**Talking Points:**

- There are lots of things that can go wrong when we try to hook up new functionality to our app. Our button might be set up incorrectly, it might not call the correct function, or the function may contain an error.

- Let's add a `console.log()` statement on the first line in our `clearList` function. This is an excellent debugging practice. Adding `console.log()` proves to us that the function is actually executing. This assures us that there's
nothing wrong with how we hooked up the button and helps narrow our focus in case something else went wrong.

- Let's say you click the button and the list isn't cleared.
    - If you didn't see `"Clearing list!"` in the console, then you know something is
   wrong with the way you hooked up the button. Investigate that.
    - If you did see `"Clearing List!"` in the console and the list still didn't
   clear, then you know you need to investigate the code inside the function
   after the click.

- Adding simple sanity checks like these to your code will make you a productive programmer.

</aside>

---

## Adding Items

* Create an attribute called `newItem` in the state to hold the new item that the user inputs.

<aside class="notes">

**Talking Points:**

- Let's add one more thing to our app: an input field for more items. In order to do this, we'll need a variable to represent the new item we'll be entering.

- Create a new `state` attribute, initializing `newItem` to a blank string. (Hint: Remember that state is just a JavaScript object, so you need a comma between key-value pairs.)

---

## Adding Items

* Create `handleChange`, for when we type characters into an input field and change the value of `newItem`.

    - We'll need to get the current value of the input field and set state accordingly.

> Create this function with an event parameter. Inside the function, change the state of `newItem` to `e.target.value`. This will be the value the user entered into the form.

* Create `addItem`, for when we submit the form.

  * We'll need to make a copy of `toDoItemArray`, push the `newItem`, set state, and finally clear `newItem`.

> Create this function with an event parameter of `e`. Inside the function, create a new variable that's initialized to the value of the array saved in state. Then, use `yourArray.push(<value>)` to push the new item from the state into the array. Set the `newItem` state back to an empty string and the `toDoItemArray` state to your new array.

<aside class="notes">

**Talking Point:**

- We'll also need these two additional functions to represent the following changes in state.

</aside>

---

## Adding Items

```js
<form>
  <input type="text"
    placeholder="Type an item here."
    onChange={this.handleChange}
    value={this.state.newItem}
  />
  <button onClick={this.addItem}>Add it!</button>
</form>
```

<aside class="notes">

**Talking Points:**

- Lastly, we'll need to add a form to our `render()` method.

- We can use `onChange` on the `input` field to trigger an event when the text in the box is changed.

- Any function called when an event occurs (like functions that happen `onClick`, `onSubmit`, or `onChange`) can accept an argument. This argument, typically denoted as `e` or `event`, is the synthetic event object itself. We then pass this into `newItemChange` and `addItem`.

**Teaching Tip:**

- Set the value of the `input` to `this.state.newItem` before adding `handleChange`. This is an opportunity to show why we need an `onChange` event.

</aside>

---

## Debugging Adding Items

```js
addItem(e) {
  // Prevent the event from running the default "submit" event.
  e.preventDefault();

  // Then, the rest of your code.
  // ...
}
```
<aside class="notes">

**Talking Points:**

- If you click "Add it!" and the page doesn't change, but you think you've done
everything right, there's one thing you're probably missing. Here's a good
debugging strategy to figure out what's wrong:

    - Add a `console.log` statement inside your `addItem()` function to make sure the
function is actually being executed. If you don't see simple output in your
console, then there's something wrong with how you hooked up the button to the
`addItem()` function. You need to investigate how the button is attached to the
function.

    - If you click the button and an empty item appears in your list, then you need
to investigate how you're retrieving the text value out of the form input.
Use a console statement to print the value of the text to make sure you're
accessing it correctly.

    - If you see a simple console statement working and the correct text
being printed and still don't see items added to the list correctly, then
there's one last hiccup that causes lots of problems: The button is inside a
form and it triggers a `submit` event. `submit` events make the page reload or
(more accurately) navigate to the URL `action` attribute of the form. If you don't define
an `action` attribute, the page just navigates to itself and reloads.

    - Make sure your `addItem()` function accepts an `e` event parameter and calls
`.preventDefault()` to stop the `submit` event from firing.

</aside>

---

## What's Next?

Can you figure out how to implement some other new features?

<aside class="notes">

**Talking Points:**

- We now have an interactive to-do list! We can add and remove items from our list.
But, this is just the beginning. There are all sorts of features you can add.
Can you figure out how to implement any others?

- Here are some ideas for you to implement:
    1. Remove one item instead of clearing everything.
    2. Add a date to each to-do item and build functionality to arrange items from newest to oldest, and vice versa.
    3. Utilize `localStorage` to save your items to the browser so they will persist on refresh.

</aside>
