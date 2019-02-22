## ![](https://s3.amazonaws.com/python-ga/images/GA_Cog_Medium_White_RGB.png) {.separator}
<h1>React Key Concepts:<br/> Section Recap</h1>

---

## Learning Objectives We've Covered So Far:

* What is **React**?

* What is a **component**?

<aside class="notes">

**Talking Points**:

- It is time to stop and review all of the topics that we've discussed so far. At first, React may seem confusing thanks to all of the jargon, so let's break it down:
- React is a framework created by the developers at Facebook. Its aim is to be the "view" of your JavaScript application. It focuses on creating a component-based architecture.
- A component is an independent, reusable piece of your user interface.

</aside>

---

## What Is a **Nested Component**?


![nested components chart](https://ga-instruction.s3.amazonaws.com/json/REACT/assets/unit1/nested_components_chart.jpg)

<aside class="notes">

**Talking Points**:

- A nested component is a component called inside another component (such as calling `Comment` components within a blog `Post`). Here is a diagram of the flow of information for a `Comment` component nested inside (called by!) a `Post` component.

</aside>

---

## What is the **Virtual DOM**?

<aside class="notes">

**Talking Points**:

- The virtual DOM is a virtual representation, or abstraction, of the DOM. React doesn't apply your changes to the DOM directly. While it creates and manipulates elements, it does so through custom React objects. The results of that manipulation are then rendered to the DOM. This prevents you from having to focus on constantly changing the state of a `<div>` tag.

- Your virtual DOM is compared to the regular DOM, and only the element specified in `ReactDOM.render()` on the page updates.
</aside>

---

## What is **JSX**?


<aside class="notes">

- JSX is a standard that React uses to represent HTML elements as XML tags. It looks like a template language but is much more powerful. Each JSX tag represents a React element, and a React class is composed of multiple elements. You express your visual user interface through nested JSX tags that can render additional components. JSX is not required for React, but it is incredibly useful.

- JSX can look just like HTML, with `<h1>Hello, World!</h1>`, but it can also get far more complicated.

</aside>

---

## What Are **Props**?


  For example, your `App.js` could have:

```js
  ReactDOM.render(
  <Hello name={"Nick"} />,
  document.getElementById('root')
)
```

And your `Hello.js` component could have:

```js
class Hello extends Component {
  render () {
    return (
      <h1>Hello {this.props.name}!</h1>
    )
  }
}
```

<aside class="notes">

**Teaching Tip**:

One fun activity to do as part of this review is a [Kahoot](https://create.kahoot.it/details/react-1-17/dc18ba75-295e-4aee-a989-7e4c945ca66a). It takes about two minutes to have everyone join; 10 questions at roughly 20 seconds each will only take about five minutes to complete. Once the review is done, you will be able to provide additional clarity on any lingering concepts. And, the activity is guaranteed to be a crowd-pleaser!

**Talking Points**:

- Props are arguments passed into a component as though they were arguments to a function. The component can then use this data to render something or pass the data to another component.
</aside>
