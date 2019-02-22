# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Quiz: APIs, Heroku, and Imperative and Declarative Programming

**Notes**:

- Reminder that the quizzes are delivered on the myGA platform. Students should log in to their myGA accounts and access the React Practice learning path (not the Pre-Work learning path).

- Approximate time to complete quiz: 20 min

- Approximate time for discuss/review quiz: 20 min

- At the end of the quiz, you can share [this review guide](https://git.generalassemb.ly/react-development/react-development-course-materials/blob/master/Additional-Resources/Review%20Guides/apis-heroku-programming-types-review-guide.md). 

- Here is a link to the quiz for your reference. Please do not share this link with students. [APIs, Imperative and Declarative Programming, and Heroku Quiz](https://my.generalassemb.ly/preview?lessonURL=https://ga-create-api.s3.amazonaws.com/quiz-apis-imperative-and-declarative-programming-and-heroku-821.json).

## Questions
- Answers with asterisks are correct.


**Prompt**: You want to embed a Google Map into your website. What do you do?

**Choices**:
1. Host the page on Heroku and point Heroku to the API.
2. Make a `GET` request to the API and `render()` the response in your component. *
3. Send a `fetch()` request to Heroku to host the API and `render()` the response in your component.
4. Put the API URL into the `render()` method of your component — APIs automatically render.

**Explanation**: Making a `GET` request in JavaScript is done with `fetch()`. You make a `GET` request to the API, which returns a map that you can render.

---
**Prompt**: Where should this code go?

```js
const poemApi = 'http://api.open-notify.org/astros.json';
fetch(poemApi)
  .then((response) => {
    return response.json();
  }).then((json) => {
      this.setState({ shakeSpeare: json.poem });
  }).catch((ex) => {
    console.log('An error occurred while parsing!', ex);
  });
}
```

**Choices**:
1. `constructor()`
2. `componentDidMount()` *
3. `componentDidLoad()`
4. `componentWillMount()`

**Explanation**: If you need to load data from a remote endpoint, `componentDidMount()` is where you instantiate the network request.

---
**Prompt**: Which of the following will likely be returned to your application when you call an API? Select all that apply.

**Choices**:
1. JSON *
2. JSX
3. XML *
4. JavaScript

**Explanation**: JSON and XML are two major serialized data formats you will typically encounter when getting information over HTTP.

---
**Prompt**: When writing a program, Sanju writes out every step in pseudocode, then codes each line. For example:

```js
// Ask everyone in the room to line up.
const room = ['Miguel', 'Katie', 'Susana', 'Shakira'];
// For every person in the line...
for (let i = 0; i < room.length; i++) {
// Ask each person to come to the front of the room.
  const person = room[i];
  // Ask each person to speak their name.
  console.log("My name is:" + person);
};
```

Is this imperative or declarative programming?

**Choices**:
1. Imperative *
2. Declarative

**Explanation**: It's imperative. Imperative is the approach to programming in which you write out every single thing that happens.

---
**Prompt**: Does React generally use an imperative or declarative approach to programming?

**Choices**:
1. Imperative
2. Declarative *

**Explanation**: The React framework focuses on simplicity and readability; it uses a declarative approach.

---
**Prompt**: What is Heroku?

**Choices**:
1. A cloud platform that allows developers to quickly deploy applications to the internet. *
2. A cloud platform you can bootstrap your application to that enables the easy routing of URLs.
3. A service that provides raw data for public use — usually in JSON or XML.
4. A service that provides raw data for your application to deploy to the internet.

**Explanation**: Heroku is a cloud platform that allows developers to quickly deploy applications to the internet. It's free for your first five apps.

---
**Prompt**: Ari is trying to call an API, but his program is throwing an error. He's sure that the API URL is correct, he defined the state, and he put the code in the correct place in his program. Looking at his code, what might be a reason that the API call isn't working? Select all that apply.

```js
// fetch an album
const spotifyAPI = 'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy';
fetch(spotifyAPI)
  .then((response) => {
    return response.json();
  }).then((json) => {
      this.setState({ music: json.album });
  }).catch((ex) => {
    console.log('An error occurred while parsing!', ex);
  });
}
```

**Choices**:
1. The API is private and requires an API key. *
2. `album` is not one of the pieces of information returned by the Spotify API. *
3. Ari's code is off — the `catch()` statement is always being called because there's no explicitly defined `if` keyword.
4. Ari's code is off — `fetch()` is its own function and therefore everything after `fetch(spotifyAPI)` should be encased in curly braces.

**Explanation**: If an API call isn't working and you're sure your code is correct, the first thing to check is the API's documentation. Make sure that the API isn't private and is returning the parameters you think it is (like `album`).

---
**Prompt**: Is the following valid JSON?

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

**Choices**:
1. No, this is XML. *
2. No, `users`, `name,` and `user id` all need to be inside quotation marks.
3. No, there should be curly braces surrounding each attribute.
4. No, this is HTML.

**Explanation**: This is XML. XML uses opening and closing tags, just like HTML.

---
**Prompt**: After successfully performing a `fetch()` and before doing any extra processing, Siya now has this JSON in her code. Did Siya define the `name` attribute?

```json
{
  "users": [
    {"name": "Superman", "id": 0},
    {"name": "Wonder Woman", "id": 1},
    {"name": "Black Panther", "id": 2}
  ]
}
```

**Choices**:
1. Yes, Siya defined it when she parsed the serialized data to JSON.
2. Yes, Siya defined it as the field attribute when she called the API; `id` is the only attribute that the API provided.
3. No, `name` is the title of an attribute returned by the API web server. *
4. No, `name` was automatically assigned by the browser when it recognized the value format.

**Explanation**: Parsing the JSON from a `fetch()` call simply returns and formats information from the remote API web server. The `name` attribute was passed into her program by the API web server.

---
**Prompt**: Every browser supports `fetch()`, which is why it's so readily used in JavaScript.

**Choices**:
1. True
2. False *

**Explanation**: Not all browsers support `fetch()`. ES6 is a standard, but it hasn't been universally adopted (notably, Internet Explorer doesn't support it). Confirm which browsers you want to support before using any ES6 syntax or keywords.

---
**Prompt**: When using an API key, you make a standard `fetch()` request to the API. The remote web server then requests the key, which you return in a second `response()` call.

**Choices**:
1. True
2. False *

**Explanation**: When using an API key, you need to include the key in your initial request. For example, if your key to the OpenWeather API is `052f26926ae9784c2d677ca7bc5dec98`, you need to include that in the initial `fetch()` URL: `http://api.openweathermap.org/data/2.5/weather?zip=60614,us&appid=052f26926ae9784c2d677ca7bc5dec98`.
