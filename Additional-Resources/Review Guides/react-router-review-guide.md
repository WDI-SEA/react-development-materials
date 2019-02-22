# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

## Review Guide: React Router

Below, you'll find key terms and definitions and key code snippets. All cover the basics of browser history mechanics and React Router.

### Key Terms and Definitions


* **Browser history mechanics**
  - Operations designed to track history as users move between different pages.
  - For example, the JavaScript functions `window.history.back()` and `window.history.forward()`.
  - HTML5 introduced `.pushState()` and `.replaceState()` for single-page applications, called modern browser history mechanics.

* **`exact`**
  - A special attribute when defining paths.
  - The `exact` attribute means the component associated with the route will only be shown if users are at exactly that URL path.
  - Otherwise, partial matches will also be shown. For example, if no `exact` keyword is used, when someone navigates to `/courses`, they will actually see two components, as `/` is a partial match for `/courses`.
  - Example: `<Route exact path="/" component={HomePage} />`.

* **`Link`**
  - A component that creates `<a>` tags and automatically integrates modern HTML5 browser history mechanics for single-page applications.
  - `link` has one attribute: `to`.
    - `to` designates what path to navigate to when the user clicks the link.
    - This takes a *path* for a value, **not** a component.
  - For example, `<Link to="/procedures">See Our Procedures</Link>`.

* **Path**
  - The path of a URL is everything after the domain name.
  - For example, if the URL is `https://myPage.com/pandas`, the path is `/pandas`.
  - The `/` path is a special path called the root. It loads the home page. For example, `https://myPage.com/`.

* **React Router**
  - A third-party library that makes it easy for programmers to route URLs.
  - It dynamically loads different components on the same page.
  - It automatically manages browser history when the user navigates between content.
  - You install React Router with `npm install --save react-router-dom`.
  - React Router is configured using `<Route>` components.

* **`<Route>` components**
  - Components provided by the React Router library.
  - Each `<Route>` component has two pieces:
    - `path`: Defines the URL path that leads to the component.
    - `component`: Defines what component users will see when they navigate to the path.
  - All together, a `<Route>` component looks like this: `<Route path="/courses" component={CoursesPage} />`.

* **Single-page applications (SPAs)**
  - Websites that serve only one web page and then change the content of that page dynamically, without refreshing or sending the user to a separate page.

* **URL routing**
  - Defines what content is displayed when someone visits a certain URL.


### Key Code Snippets

**A Complete Component File Using `<Route>` and `<Link>`**

- This assumes the components referenced are correctly imported:

```js
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Go to Home Page</Link>{' '}
            <Link to="/procedures">See Our Procedures</Link>{' '}
            <Link to="/contact">Contact Us!</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/procedures" component={Procedures} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
```


**An Example of Using Props Within a Route**

```js
<Route path="/blog" component={
    () => (<Blog title={post.title}
              author={post.author}
              body={post.body}
              comments={post.comments} />
)}/>
```
