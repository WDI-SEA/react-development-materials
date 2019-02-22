# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

## Review Guide: React Key Concepts
Below, you'll find key terms and definitions, key code snippets and tools, best practices, and further reading. All cover the basics of React.

### Key Terms and Definitions


* **React**
  * A framework created by developers at Facebook. Its aim is to be the "view" of your JavaScript application. It focuses on creating a component-based architecture.

* **Component**
  * An independent, reusable piece of your user interface. A basic component looks like this:
```js
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>Howdy</h1>
      </div>
    )
  }
}
```


* **JSX**
  * A standard that React uses to represent HTML elements as XML tags. It looks like a template language but is much more powerful. Each JSX tag represents a React element, and a React class is composed of multiple elements. You express your visual user interface through nested JSX tags that can render additional components. JSX is not required for React, but it is incredibly useful.
  * JSX can look just like HTML with `<h1>Hello, World!</h1>`, but it can also get far more complicated.

* **Nested component**
  - Components called inside another component (e.g., calling `Comment` components within a blog `Post` component). Here is a diagram of the flow of information for a `Comment` component nested inside (called by!) a `Post` component:

  ![nested components chart](https://ga-instruction.s3.amazonaws.com/json/REACT/assets/unit1/nested_components_chart.jpg)


* **Props**
  * Arguments passed into a component as though they were arguments to a function. The component can then use this data to render something or pass that data on to another component. For example, your `App.js` could have:
  
```js
  ReactDOM.render(
  <Hello name={"Nick"} />,
  document.getElementById('root')
);
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

* **Virtual DOM**
  * A virtual representation, or abstraction, of the DOM. React doesn't apply your changes to the DOM directly. While it creates and manipulates elements, it does so through custom React objects. The results of that manipulation are then rendered to the DOM. This prevents you from having to focus on constantly changing the state of a `<div>` tag.
  * The virtual DOM is automatically updated in React with the `ReactDOM.render()` method.
  * When your `index.js` is processed, your virtual DOM is compared to the regular DOM and only the element specified in `ReactDOM.render()` updates on the page.

![Virtual DOM Diagram](https://ga-instruction.s3.amazonaws.com/json/REACT/assets/unit1/DOM.png)



### Other Key Code Snippets and Tools

* `<Component_Name />`
  * Uses **the name of the component to render**. Inside the `Component_Name` component, you return the content to render (in that component's `render()` method).

* `create-react-app`
  * A tool created by Facebook that will help you set up a barebones React app instantly so you can simply install the package and get to coding.

* `document.getElementById('root')` 
  * Finds **the DOM element to which to append that content**. This argument can be any element on the page. Here, we're simply appending it to an element with the `root` ID.


* `export default`
  * Usages: `export default Hello` or `export default Comment`. There is always a component name that's exported!
  * This call, at the bottom of a file containing at least one component, specifies the default named component to be imported by files. The `default` keyword means that, when there's anything else we try to import from this file that the app can't find, JavaScript instead automatically reverts to importing the named component specified.
  * Only one default export is allowed per file.

* `render()`
  * Every component has, at minimum, a `render()` method. The `render()` method is what renders a component to the screen and therefore controls what's displayed for that component. From the `render()` method, we return what we want to display — for example, some JSX like `<h1>Hello, World!</h1>`.
  * Importantly, each `return()` can only support one outermost element, so often there is a `<div>` wrapping the rest of the JSX.

```js
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>Howdy</h1>
      </div>
    )
  }
}
```

* `ReactDOM.render()`
  - Contained in your topmost file (for example, `index.js`), this defines what will be put on the screen. In the example below, we are rendering what `Component_Name` returns at the `root` element on the page.
  
  * Usage:
```js
  ReactDOM.render(
    <Component_Name />,
    document.getElementById('root')
  )
```

### Best Practices

- Each component should be contained in its own file.
  - Don't put multiple components into one JavaScript file.
- Do not automatically render an element on the DOM *inside* of its own component class definition.
  - If you look through your files, you'll see in your component classes that you define a `render()` method for that component, which is useful for all components.
  - That class is then called by `ReactDOM.render()` in **a different place, outside of that class definition** (likely `index.js`).
  - In some tutorials or older code, you may find examples of `ReactDOM.render()` inside of a component.
  - You should **avoid** this at all costs; this was an older technique used in past versions of React.

### Further Reading

The links below are optional, but they're great resources for reinforcing what you've learned.

* [React.js Conf 2015 Introduction](https://www.youtube.com/watch?v=KVZ-P-ZI6W4&feature=youtu.be&t=510)
  * We'd recommend starting around the 8:35 mark and watching until 16:30.
* [Official React Documentation on JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)
  * This includes tutorials, documentation, and a community.
* [More on the Virtual DOM](https://www.youtube.com/watch?v=-DX3vJiqxm4)
  * A 35-minute in-depth video on everything involving the virtual DOM.
* [React Without JSX](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/).
  * A blog post on using React without JSX, in case you ever find yourself in that scenario.
