## ![](https://s3.amazonaws.com/python-ga/images/GA_Cog_Medium_White_RGB.png) {.separator}
<h1>Code-Along: Idea Board</h1>

---

##

Let's build an idea board!

<aside class="notes">

**Teaching Tips**:

- This is a brief interactive lecture that introduces the six-hour idea board code-along.

- To run on local, open your terminal or command prompt and follow the commands below:
1. `git clone { remote git folder url }`
2. `npm install`
3. `npm run dev`

- The last command should run the server and the React application.


**Talking Point**:

- A lot of modern JavaScript is focused on knowing the right tools for the job. Today, we'll be pulling in everything we've learned about React to build a full-stack application.

</aside>

-------

## Idea Board

We're going to build our own idea board using `create-react-app` with a pre-built back-end server. This allows us to fully understand our application and prevents us from introducing code we haven't written and don't understand.

</aside>

---

##

![idea board](https://slack-imgs.com/?c=1&url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1600%2F1*SMKZC-Ej73wFOmqNT-JQ7Q.gif)

<aside class="notes">

**Talking Point**:

- We'll build an app where a user can write different ideas and save them to a database. This app will have two models: users and ideas (which will live inside the user model).


**Teaching Tip**:

- The image of the solution is provided here so the class can see the end product and get an idea of what they're building.

</aside>

---

## Data Model Brainstorm

Work with your classmates to:

- Write three user stories.
- Sketch two wireframes.
- Illustrate what your data model might look like. Think about the API routes required. What components do you think you'll need? What routes should be available to the React app?


<aside class="notes">

**Teaching Tips**:

- Read through the activity directions.
- Send students off in their groups.
- Walk around and observe, help out, answer questions, and provide input.


</aside>

---

##

![you got this](assets/you-got-this-meme.png)

<aside class="notes">

**Teaching Tip**:

- The remainder of this document serves as the instructor notes for the React idea board app. **Do not project or share the remainder of this document.**

</aside>

---

## Getting Started

This code-along guides students through building a React application using `create-react-app`. The estimated class time required to complete the code-along is six hours.

You can have students start the project in GitHub instead of locally to show an alternative way of getting a project up and running. If you do this, you can start the code-along like so:

- Create a repo on GitHub called `idea-board`. Make sure to include a `README` file.

- After creating the repo, clone it locally into your `class-exercises` folder.

---

## Integrate `create-react-app`

Before we start building our models and controllers, let's first connect our server to React. Use `create-react-app` to get your UI up and running.

```bash
# Inside idea-board
create-react-app client
cd client
```

---

## Set up the Server

We'll use a mock server to run our basic React app. Create a copy of the server.

```
# Copy and paste into the main client folder we just created with create-react-app.
git clone {github link to server.js} or download from github
npm install express
```
We'll be using this file as a mock server for our React application.

Your folder structure should now look like this:

```
|- node_modules
|- public
|- src
  |- App.js
|- package.json
|- server.js
|- ...
...
```

This will create a new React application for us to begin building our board.

---

## Set up the Server

Let's start our application. Webpack uses port 3000 when starting an application. Our server will be running on port 3001. To run both servers at the same time, we can start our server in one window and our React app in another. However, we can also use a tool to run both servers within the same window.

---

## Using `concurrently`

To run both our server and our app at the same time, we'll use an `npm` library called [`concurrently`](https://www.npmjs.com/package/concurrently). `concurrently` allows us to run both our API server and our Webpack server simultaneously.

```bash
# Inside idea-board directory.
npm i concurrently
```

```json
// Inside package.json
...
"scripts": {
  "start": "react-scripts start",
  "dev": "concurrently \"node server.js\" \"npm start\" ",
  "test": "echo \"Error: no test specified\" && exit 1"
},
...
```

We can now run the `npm run dev` command and our application will start on both port 3000 and 3001. Let's verify that by visiting each port in the browser.

> COMMIT

---

##

If we check our route at `localhost:3001/api/users`, we should get a JSON object back. We can get this JSON object by using `res.json` instead of `.render` or `.send`.

We can then retrieve the user that we previously created. This gives us enough to get started on building the UI for our idea board.

---

## Scaffolding for the Idea Board UI

For our idea board UI, let's start by building a client-side router using `react-router`. We'll also install other dependencies that can be used for styling.

```bash
# Inside the client directory.
npm i react-router-dom styled-components
```
Our app will have three separate views:
  - `HomePage`
  - `LogInPage`
  - `IdeaPage`

Create a `components` folder, as well as a basic component for each route. Once these are created, we can add React Router to the `App.js` component.

```jsx
  import React, { Component } from 'react';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import HomePage from './components/HomePage';
  import LogInPage from './components/LogInPage';
  import IdeaPage from './components/IdeaPage';

  class App extends Component {
    render () {
      return (
        <Router>
          <div style={{ textAlign: 'center'}}>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/login" component={LogInPage}/>
              <Route path="/user/:userId" component={IdeaPage}/>
            </Switch>
          </div>
        </Router>
      )
    }
  }

  export default App
```
---

## `Route` Parameters in React Router

We can add `Route` parameters to our client-side routes. The value defined will be passed in props. For example, the above `Route` parameter will be available as `props.match.params.userId`.

> COMMIT

---

## Creating the Home Page and Login Page Routes

We'll start with the home page. This is the page users see when they first load the app. On this page, we want to encourage a user to visit the login or ideas pages. We'll start making API calls once we build the login page.

---

## Home Page

Create the home page with a greeting and a `Link` to the login component. Make sure to also add a `Link` back to the home page on the login page.

---

## Login Page

To make API calls, we'll use `fetch()`.

```jsx
  import React, { Component } from 'react';
  import { Redirect } from 'react-router-dom';

  class LogIn extends Component {
    state = {
      users: [],
      user: null,
      redirectToHome: null
    }

    getAllUsers = () => {
        fetch('/api/users', { method: 'get' })
        .then((res) => {
            return res.json();
        }).then((json) => {
            this.setState({users: json.data});
        }).catch((err) => {
            console.log('error getting users', err);
        })
    }

    render () {
      return (
        <div>
          <h1>Log In</h1>
          <h3>Please Select an Existing User</h3>
          {this.state.users.map(user => (
            <div key={user._id}>
                <Link to={`/user/${user._id}`}>
                    {user.userName}
                </Link>
            </div>
          ))}
        </div>
      )
    }
  }

  export default LogIn
```

Unfortunately, we get an error when we load our UI.

```text
XMLHttpRequest cannot load localhost:3001/api/users. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
```

This is an example of a CORS (cross-origin resource sharing) error.

---

## CORS

CORS is a mechanism that restricts API calls from a domain outside the one from which the resource was initially served. This acts as a layer of protection for servers, as it prevents unwanted use of an API.

There are several ways to handle CORS requests. For our app, we'll take advantage of the tools provided by `create-react-app`. We can add a proxy server to our React application, which will allow us to make requests that look like they're coming from our current server but actually hit the server we define in `package.json`.

```json
...
"proxy": "http://localhost:3001",
...
```

**Note**: When you add this proxy, you have to restart your server. The automatic refresh won't pick up on the proxy addition.

> COMMIT

---

## Adding Sign-up

Now that we can communicate between the server and the client, let's expand our `UserController` and give it the ability to `post` a new user.

Let's add a sign-up form to the login page.

```js
  createUser = () => {
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(this.state.user),
      headers: { "Content-Type": "application/json; charset=utf-8" }
    }).then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({redirectToHome: true, users: json.data, user: null});
    }).catch((err) => {
      console.log('error creating user', err);
    })
  }

  handleChange = (e) => {
    const user = {...this.state.user};
    user[e.target.name] = e.target.value;
    this.setState({user});
  }

  handleSignUp = (e) => {
    e.preventDefault();
    this.createUser();
  }
...
  <div>
    <h1>Sign Up</h1>
    <form onSubmit={this.handleSignUp}>
      <div>
        <label htmlFor="userName">User Name</label>
        <input onChange={this.handleChange} name="userName" type="text" value={this.state.userName}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input onChange={this.handleChange} name="password" type="text" value={this.state.password}/>
      </div>
      <button>Sign Up</button>
    </form>
  </div>
```

Finally, we need to create a conditional that will handle a redirect after a user is successfully saved.

> COMMIT

---

## Building a Static Idea Board

Now that we can navigate to `IdeaPage`, let's focus on building a few static views. We'll create some mock data in the initial state and write a starter JSX.

```jsx
  import React, { Component } from 'react';
  import styled from 'styled-components';

  class IdeaView extends Component {
    state = {
      user: {
        userName: 'Bob'
      },
      ideas: [{
        id: 1,
        title: 'hello',
        description: 'world'
      }, {
        id: 2,
        title: 'hola',
        description: 'mundo'
      }, {
        id: 3,
        title: 'goodnight',
        description: 'moon'
      }, {
        id: 4,
        title: 'greetings',
        description: 'earthlings'
      }]
    }

    render () {
      return (
        <div>
          <div>
            <h1>{this.state.user.userName}'s Idea Board</h1>
            <button>New Idea</button>
          </div>
          <div>
            {ideas.map(idea => (
                <div>
                  <input type="text" name="title"/>
                  <textarea name="description"/>
                  <button>Delete Idea</button>
                </div>
            ))}
          </div>
        </div>
      )
    }
  }

  export default IdeaView
```

---

## Add Styling

We have the static starter code, so let's clean things up and add styling. Take the code above and refactor it into smaller components. Then, use `styled-components` to add some styling to the page. As a reminder, we ideally want our app to look like this:

![idea board](https://slack-imgs.com/?c=1&url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1600%2F1*SMKZC-Ej73wFOmqNT-JQ7Q.gif)

> COMMIT

---

## Bring in User Info

We now have complete static code that's styled and living in small components, with props passed down from `IdeaPage` to `IdeaView`. Next, we need to connect the info from our API to the state.

Because we're using React Router to create a route that matches `/user/:userId`, we can take advantage of props passed down from the library in the form of `props.match.params.userId`. Let's tell React to call our API if the props are passed down correctly.


```js
...
  componentDidMount() {
      this.getUser();
  }

  getUser = () => {
    fetch(`/api/users/${this.props.match.params.userId}`, { method: 'get' })
    .then((res) => {
      return res.json()
    }).then((json) => {
      this.setState({user: json.data})
    }).catch((err) => {
      console.log('error getting user', err);
    })
  }
...
```

As long as our props are passed down properly, we should see info coming in from our API.

> COMMIT
> DEPLOY

---

## Adding a Click Event for a New Idea

Next, let's add a click event to the `New Idea` button.

```js
  createIdea = () => {
    fetch(`/api/users/${this.state.user._id}/ideas`, { method: 'post' })
    .then((res) => {
        return res.json();
    }).then((json) => {
        this.setState({user: json.data});
    }).catch((err) => {
        console.log('error creating idea', err);
    })
  }
  ...
  <button onClick={this.createIdea}>New Idea</button>
```

---

## Write Code to Delete an Idea

We'll write similar code to delete an idea. Work with students to write a custom method and pass it down through props.

Hint: You'll need one argument.

```js
  deleteIdea = (idea) => { /*Your code here*/ }
```

> COMMIT

---

## Handling Form Changes

Our next task involves updating information and saving it to our server. That means we'll need to work with forms.

Let's focus on creating a `handleChange` event to update our local state in `IdeaView`. We'll use life-cycle hooks to update `IdeaView` every time our state changes in the parent component.

```js
...
  state = {
      ideas: this.props.user.ideas
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.ideas !== this.state.ideas) {
        this.setState({ideas: nextProps.user.ideas});
    }
  }

  // We need to pass in multiple arguments here. The first is the object of the specific idea that's being changed.
  // The event object is the special event listener object that has information about the value and name.
  handleChange = (idea, event) => {
    const newIdeas = [...this.state.ideas] // We use the spread operator here to clone the array.

    // Map through this cloned state and transform the specific idea that has been updated.
    const ideas = newIdeas.map((savedIdea) => {
      if (savedIdea._id === idea._id) {
        // We're using bracket syntax instead of dot notation to transform a specific property.
        // More info on bracket syntax here:
        // https://medium.com/@prufrock123/js-dot-notation-vs-bracket-notation-797c4e34f01d
        savedIdea[event.target.name] = event.target.value
      }
      return savedIdea
    })
    this.setState({ideas: ideas})
  }
...
```

---

##


```js
<input onChange={(e) => handleChange(idea, e)}
  type="text" name="title" value={idea.title}/>
```

---

## Triggering an Update

The last step in building our app is creating functionality to update an idea.

We'll add a method to trigger the patch and update the local state. This is similar to our last method.

```js
  updateIdea = (idea, e) => {
    // PATCH is case sensitive
    fetch(`/api/users/${this.state.user._id}/ideas/${idea._id}`,
        { method: 'PATCH',
        body: JSON.stringify(idea),
        headers: { "Content-Type": "application/json; charset=utf-8" }
    }).then((res) => {
        return res.json();
    }).then((json) => {
        this.setState({user: json.data});
    }).catch((err) => {
        console.log('error getting user', err);
    })
  }
```

Finally, let's tie this event to an individual idea. We could attach it to a button and add the usual `onClick` event, but let's try something different.

---

## Check Documentation

Check out the [`SyntheticEvent` documentation](https://reactjs.org/docs/events.html) and find the event that allows us to trigger an update whenever a user leaves an input.

> COMMIT
> DEPLOY

We did it! We now have an app that updates our ideas in real time. And by using React, we built it in a scalable and easy-to-read way.

---

## Deploying the App

Now that we have a basic React app, let's deploy it. This will be similar to how we previously deployed server-rendered apps, but with a few additional steps.

---

## Building a Production React App

When we develop React apps, we use some extra tools (auto-reloading, error messaging, dev server, and more) that are unnecessary for a production environment. When we're ready to push our app into production, we can use a special script to get a production-ready version of our app.

Within our `client` folder, we can run a command called `npm run build`. This will take all the code we've been running through Webpack and bundle it into a minified build ready for production deployment. This will live inside a `build` directory.

After we build the app, we can test it by running `node server.js`. If our app looks as we intended, then we can proceed with deploying it.

Let's update `package.json` to help Heroku understand our app. We'll add a script called `postbuild` that will instruct Heroku to execute the same steps we took to prepare the app manually.

```js
...
  // Set the Heroku version of Node to the most recent available.
  "engines": {
    "node": "8.6.0"
  },
...
// Postbuild will install the client packages and build the minified UI in Heroku.

  "scripts": {
    "start": "node server.js",
    "dev": "concurrently \"node server.js\" \"npm start\" ",
    "test": "echo \"Error: no test specified\" && exit 1",
    "heroku-postbuild": "npm --production=false && npm run build"
  },
...
```

We can now proceed with our Heroku deployment as usual.

```bash
heroku create inclass-idea-board
git add -A
git commit -m "commit message"
git push heroku master
```

The application is now deployed!

> COMMIT
> DEPLOY

---

## Further Reading

* [How to Get `create-react-app` to Work With Your API](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/)
* [Ninety-Four Examples of Full-Stack React Apps](https://react.rocks/tag/FullStack)
