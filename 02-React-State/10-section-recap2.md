## ![](https://s3.amazonaws.com/python-ga/images/GA_Cog_Medium_White_RGB.png) {.separator}
<h1>React State: Section Recap 2</h1>

---

## Serious...

![react meme](images/react-meme.jpg)

<aside class="notes">


**Teaching Tip**:
- Feel free to swap out the image here.

**Talking Points**:

- Don't worry! While there's a lot to see at first, React is a pretty straightforward framework to use. You can create user interface components that extend from `Component`. These have a built-in life cycle that accepts data and can trigger automatic re-rendering whenever that data is updating. In a React component, an update in either the state or props will trigger the method cascade that can lead to a `render()`.

</aside>

---

## Best Practice 1

- Each component should be in its own file. Don't put multiple components into one JavaScript file.

---

## Best Practice 2

- Do not automatically render elements on the DOM *inside* their own component class definitions.


<aside class="notes">

**Talking Points:**

- If you look through your files, you'll see in your component classes, you define a `render()` method for each component, which is great. That class then is called by `ReactDOM.render()` in **a different place, outside that class definition** (likely index.js).


- In some tutorials or older code, you may find examples of `ReactDOM.render()` inside a component. Avoid this at all costs; this was an older technique used in past versions of React.

</aside>

---

## Best Practice 3

- Remember: State and props are NOT the same thing.

<aside class="notes">

**Talking Points:**

- Remember that state represents the _state_ of your user interface component. Any value in your component that changes will use state.

- State can trigger changes in props, or props can come from parent components.

</aside>

---

## Best Practice 4

- Remember: State can only be changed through `this.setState()`.

<aside class="notes">

**Talking Point:**

- When working with reference data types such as arrays and objects, we must first create a new instance of our data, as React expects our state to be **immutable**.

</aside>

---

## Best Practice 5

- When you are working with components that have no need for state, use a functional component.

<aside class="notes">

**Talking Point:**

- This style of component writing still allows you to receive props, but doesn't come with the bloat of state and life-cycle methods.

- Remember to pass the props as an argument to the functional component.

</aside>

---

## Last Thoughts

Think of a few websites you've seen. Would they benefit from using React?

<aside class="notes">

**Teaching Tip:**

- [Video on When to Use React](https://generalassembly.wistia.com/medias/2qrtla3y8a) (Be sure to open it in a new tab.)

</aside>
