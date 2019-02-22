## ![](https://s3.amazonaws.com/python-ga/images/GA_Cog_Medium_White_RGB.png) {.separator}
<h1>React State: Section Recap 1</h1>


---

## Review

```js
class Post extends Component {
  state = {
    body: "Check out this body property!"
  }

  changeBody = () => {
    const newBody = prompt("What should the new body be?");
    this.setState({
      body: newBody
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Author authorList={this.props.allAuthors} />
        <div>
          <p>{this.state.body}</p>
          <button onClick={this.changeBody}>Edit Body</button>
        </div>
        <h3>Comments:</h3>
        <Comment body={this.props.comments} />
      </div>
    )
  }
}
```

<aside class="notes">

**Talking Points**:

- Now that you've wrapped up the blog project, take a moment to review the component lifecycle at a high level.

- Seen here is an example of a `Post` component.

- In the `Post` component above, there are three things to notice:

* `state = {}`
* `changeBody()`
* `render()`

- Upon instantiation of your component, the initial `state` is set. Here we define that our component's `state` contains a `body` attribute whose value will start as the string we define.

</aside>

---

## Data Flow

Let's consider a data flow example.

1. Here's the code that kicks everything off:

  ```js
  <Post />
  ```


2. Inside of this post component, the `state` object is created:


```js
class Post extends Component {
  state = {
    body: "This is my first blog post"
  }
}
```

---

## Data Flow



3. Next, we define a listener in the JSX `<button>` element. This calls the `changeBody()` method using the `.onClick` synthetic event. That is defined here:

```js
  <button onClick={this.changeBody}>
    Edit Body
  </button>
```

4. When the button is clicked, the `changeBody()` method is called.

```js
changeBody = () => {
  const newBody = prompt("What should the new body be?")
  this.setState({
    body: newBody
  });
}
```

<aside class="notes">

**Talking Points:**

- This method uses `prompt` to get a new value from the user (but please do not ever use `prompt` in production — users hate pop-ups!).

- Then, `setState()` is called to update the component's `state`. This will eventually lead to `render` being called to automatically re-render the component with the new data.

- Understanding the component lifecycle is key to being a productive React developer (and it will save you headaches).

</aside>

---

## Check Yourself

When you `setState()`, what methods are fired? How are your `props` and `state` handled in the component?

<aside class="notes">

**Talking Point:**

- Draw this out or comment throughout your code.

</aside>
