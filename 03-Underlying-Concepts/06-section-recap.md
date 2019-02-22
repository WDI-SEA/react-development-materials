## ![](https://s3.amazonaws.com/python-ga/images/GA_Cog_Medium_White_RGB.png) {.separator}
<h1>Underlying Concepts: Section Recap</h1>

---

##

In this section, we dove deeper into React. Here's what we covered:

---

## The Component Life Cycle

React class components have life-cycle methods that are invoked at certain stages of their "lives" on the DOM. Some of the life-cycle methods you'll use frequently include:

  - `constructor()`: Initializes state, binds methods. _Note that the newer syntax does not require a constructor, but it's important to learn to understand legacy code you might encounter._
  - `componentDidMount()`: Makes AJAX requests, gets DOM refs, binds event listeners, sets `state` if necessary.
  - `componentWillUnmount()`: Unbinds event listeners, performs other clean-up.
  - `componentDidUpdate()`: Updates `state` based on changes in components.
  - `render()`: Returns markup/UI.

---

## Unidirectional Data Flow

In React, data flows from the top down. Keep your data higher in your component tree so it's available to sibling/children components that need it.

---

## Declarative vs. Imperative Programming

  - Imperative programming is a more classical "line-by-line" approach to programming.
  - Declarative programming expresses the logic of a computation without describing its control flow.
