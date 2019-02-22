# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

## Review Guide: APIs, Programming Types, and Heroku
Below, you'll find key terms and definitions, key code snippets, and further reading. All cover the basics of APIs, imperative and declarative programming, and Heroku.

### Key Terms and Definitions


* **API**
  * Stands for "application program interface."
  * A service that provides raw data for public use — usually in JSON or XML.
  * For example, you can call the ISS API to get a list of all astronauts currently aboard the ISS by sending a request to `http://api.open-notify.org/astros.json`.
  - Not all APIs are open; some require an API key (which isn't always free!). The API call will not work without it.
    - For example, this API call will not work: `http://api.openweathermap.org/data/2.5/weather?zip=60614,us`.
    - However, if we add a key at the end, this call will: `http://api.openweathermap.org/data/2.5/weather?zip=60614,us&appid=052f26926ae9784c2d677ca7bc5dec98`.

* **Declarative programming**
  - As compared to imperative programming.
  - When writing a program, you focus on just one thing: the result.
  - Any asynchronous JavaScript techniques rely on declarative programming for ease of readability.
  - React is a JavaScript framework that uses a declarative approach.
  - Refer to the **Key Code Snippets** section for an example.

* `fetch()`
  - A request to a server — imagine literally requesting to "fetch" data.
  - You call an API in a program using the `fetch()` method.
  - In React, your `fetch()` requests will be made in the `componentDidMount()` method.
  - Refer to the **Key Code Snippets** section for `fetch()` examples.

* **Heroku**
  - Heroku is a cloud platform that allows developers to quickly deploy applications to the internet.
  - It's free for your first five apps and an excellent way to deploy an application live.

* **Imperative programming**
  - As compared to declarative programming.
  - An approach to programming in which you write out every single thing that happens.
  - Focuses on the _why_, _how_, _where_, and _when_ of a program.
  - It allows for precise control over your code and line-by-line code execution.
  - Commonly found in object-oriented programming environments.
  - Refer to the **Key Code Snippets** section for an example.

* **JSON**
  * Stands for "JavaScript Object Notation."
  * A universal standard for serializing native data structures for transmission.
  * It is lightweight, easy to read, and quick to parse.
  * Information is separated with curly braces (`{}`) and commas:

```json
  {
    "users": [
      {"name": "Superman", "id": 0},
      {"name": "Wonder Woman", "id": 1},
      {"name": "Black Panther", "id": 2}
    ]
  }
```

* **XML**
  * Stands for "Extensible Markup Language."
  - While difficult to read, it remains a major format because of legacy usage across the web.
  - XML uses opening and closing tags, just like HTML. It looks like this:

```html
<users>
  <user id="0">
    <name>Superman</name>
  </user>
  <user id="1">
    <name>Wonder Woman</name>
  </user>
  <user id="2">
    <name>Black Panther</name>
  </user>
</users>
```


### Key Code Snippets

* **`fetch()`**

**`fetch()` Skeleton Code**

```js

// In plain JavaScript:
fetch(url)
  .then(function(response) {
    // Here you get the data to modify or display as you please.
    })
  })
  .catch(function(ex) {
    // If there is any error, you will catch it here.
  });


// Using ES6:

fetch(url)
  .then((response) => {
    // Here you get the data to modify or display as you please.
    })
  })
  .catch((ex) => {
    // If there is any error, you will catch it here.
  });
```

**An actual `fetch()` example (using ES6) to return a list of astronauts currently on the ISS:**

```js
let issApi = 'http://api.open-notify.org/astros.json'; /* What API are we calling? We get this URL from the ISS server.*/
fetch(issApi)     // Call fetch() on that API URL.
  .then((response) => {     // Take the response provided by the server
    return response.json()  //  and return it as JSON.
  }).then((json) => {       // Take that JSON.
    console.log('JSON from the ISS', json)   // Log it to the console.
  }).catch((ex) => {    // If an error occurs, catch it.
    console.log('An error occurred while parsing!', ex)    // Log the error to the console.
  });
```

**Declarative and Imperative Programming**

To execute the following pseudocode:

```
ask everyone in the room to line up
for every person in the line
  ask each person to come to the front of the room
  ask each person to speak their name
```

In each programming method:

```js

let room = ['Miguel', 'Katie', 'Susana', 'Shakira'];

// With declarative programming:

room.forEach((person) => {
  console.log("Declarative way: " + person);
});

// Conversely, with imperative programming:

for (let i = 0; i < room.length; i++) {
  let person = room[i];
  console.log("Imperative way: " + person);
}
```


### Further Reading

The links below are optional, but they're great resources for you to reinforce and augment the learning here.

- [Can I Use?](https://caniuse.com/)
  - An excellent website that allows you to search for a programming feature (such as `fetch()` or `CSS Transforms`) and returns which browsers support it.

**APIs:**

- [`fetch()` on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
  - It is important to note that, while this is an ES6 standard, [some browsers](http://caniuse.com/#search=fetch) do not support it, including Internet Explorer (although Edge does).
  - You may need a polyfill for live projects. If you need one for a production project, [GitHub's polyfill](https://github.com/github/fetch) is a very popular option.

- [React Documentation on `componentDidMount()`](https://facebook.github.io/react/docs/react-component.html#componentdidmount)
  - If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

- [Programmable Web API Directory](http://www.programmableweb.com/apis/directory)
  - A list of open APIs.

- [JSON View Plugin](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
  - A Google Chrome plugin that renders JSON in a more readable format.


**Ways to Deploy an App and CORS:**
  - [Heroku Docs](https://blog.heroku.com/deploying-react-with-zero-configuration#new-zero-configuration-experience)
  - [`create-react-app` Docs](https://github.com/facebookincubator/create-react-app)
  - [Heroku Buildpack for `create-react-app`](https://github.com/mars/create-react-app-buildpack#quick-start)
  - [URLs With React Router](https://github.com/mars/create-react-app-buildpack#routing-clean-urls)
    - So users have clean URLs.
  - [MDN CORS Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
