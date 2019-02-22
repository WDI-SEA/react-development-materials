## ![](https://s3.amazonaws.com/python-ga/images/GA_Cog_Medium_White_RGB.png) {.separator}
<h1>Immutable Data Types</h1>

---

## Learning Objectives

*After this lesson, you will be able to:*

- Define the meaning of immutable data.
- List common mutable and immutable data types.

---

## What Is Immutable?

![Immutable Meme](images/oops-tattoo.jpg)

<aside class="notes">

**Talking Point:**

- Means "unchanging," "permanent," "forever."

</aside>

---

## What Is Immutable Data?


```javascript
const anObject = {
  foo: 'bar',
};

anObject.foo = 'barrrrrrr';
```

<aside class="notes">

**Talking Points:**

- Something that is **immutable** is something that cannot be changed. In JavaScript, objects and arrays are mutable — they _can_ be changed. Seen here is a simple example of object mutation. (Note that I declare the object as a `const`, but it is still mutated)

- In the example above, I changed `anObject`'s value — I mutated it. This happens because JavaScript assigns objects to variables by **reference**. Changing their properties does not change their reference, and so they are mutated.  Explain the concept of pass by value vs. pass by reference.

**Teaching Tips:**

- Spend some time breaking down the word mutable (mutate) versus immutable. The jargon can sometimes be jarring for students, but relating it to more commonly used language can demystify the terms.

- Make sure to emphasize that the concept of immutability only applies to object data types. This is irrelevant to primitive data types such as strings and numbers.

</aside>

---

## Arrays Can Mutate!

```javascript
const anArray = ['oneFish', 'two fish', 'red fish', 'blue fish']
anArray.pop() // new value of anArray is ['oneFish', 'two fish', 'red fish']
```

<aside class="notes">

**Talking Points:**

- Arrays are also an object data type, meaning they can be mutated.

- Here is an example of mutating an array.

</aside>

---

## Other Array Methods That Can Mutate The Array That Calls Them

- `push()`
- `reverse()`
- `unshift()`
- `splice()`

<aside class="notes">

**Teaching Tip:**

- Here is an additional resource you can share: https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa

</aside>

---

## Immutable Data in React

**Don't Do**:

```javascript
handleChange = (event) => {
  this.state.myPieceOfState = event.target.value;
}
```

<aside class="notes">

**Talking Points:**

- In React, we should treat components' states and props as immutable. But wait! We have to change the state, right? Yes, yes we do. But, we should never do it by mutating the state directly.

- This method _directly_ mutates the component's state. When state is updated, we want our components to re-render with the new data. When we attempt to mutate our state like in the example above, React may _not_ be aware of the change, and re-rendering may not occur.

**Teaching Tip:**

- If you have a React app currently running, use this as an opportunity to show what happens when you try to directly set state.

</aside>

---

## Immutable Data in React

**Do**:

```javascript
handleChange = (event) => {
  this.setState({
    myPieceOfState: event.target.value
  });
}
```

<aside class="notes">

**Talking Point:**

- The good news is that you already know how to avoid this. React makes it easy: Components have a `setState()` method that allows us to update the state without mutating it. Behind the scenes, React is returning a fresh copy of the state (with a new reference) with the updated data when you use `setState()`.

</aside>

---

## Immutable Data and Props

Component props should not (and cannot) be changed within a component.

<aside class="notes">

**Talking Points:**

- There is no `setProps()` method. Props that change will always be referring to some piece of state that's higher on the component tree.

- This is a concept called unidirectional data flow. We'll discuss it later in the course.

- Treating data as immutable makes application development easier. Data mutations can be hard to track (say, in a debugger). Although vanilla JavaScript does not have immutable object and array types, you can still develop JavaScript applications that treat data as immutable.

</aside>

---

## Immutable Methods

To `pop()` an array without mutating it, you could do this:

```javascript
const newArray = anArray.filter((item, index, originalArray) => index !== originalArray.length - 1);
```

<aside class="notes">

**Talking Point:**

- As mentioned above, `array.pop()` mutates the array. However, you can achieve the same effect without mutating the array.
- The array methods `.map()`, `.filter()`, and `.reduce()` return new modified copies of the array and _don't_ mutate the originals.

</aside>

---

## Immutable Methods

```javascript
const newObject = Object.assign({}, anObject, { foo: 'barrrrr' })
```

<aside class="notes">

**Talking Points:**

- Similarly, there are ways to change data in objects that don't mutate the originals. `Object.assign()` is great for this.

- Notice that the first argument to `Object.assign()` is an empty object literal — this means that the keys from `anObject` and the third argument will be copied to a brand-new object (with a new reference), which will be returned as the value of `newObject`.

</aside>

---

## Array and Object Spread

The **spread** operator: `...`

<aside class="notes">

**Talking Points:**

- In addition to the methods above that can create brand-new arrays and objects, JavaScript recently debuted a fantastic feature called the **spread** operator.

- The spread operator, `...`, looks like an ellipsis and allows you to easily clone, add, and concatenate data.

</aside>

---

## Cloning Arrays Using the Spread Operator

```js
const original = ["hello", "bonjour", "guten tag"];

const notCloned = original;

original === notCloned;
// Evaluates to true.

const cloned = [...original];

original === cloned;
// Evaluates to false.

```

<aside class="notes">

**Talking Point:**

- In the example here, we can see that, if we create a second variable for the array, it by default references the already-existing piece of data. When we use `...` in the `cloned` variable, it creates a brand-new array and copies the data into that array.

</aside>

---

## Pushing Data to an Array Using the Spread Operator

```js
const arrayOne = ["a", "b", "c"];
const arrayTwo = [1, 2, 3];

const newArray = [...arrayOne, ...arrayTwo, "More Data!"];
// newArray equals ["a", "b", "c", 1, 2, 3, "More Data"]

const withoutSpread = [arrayOne, arrayTwo];
// withoutSpread equals [["a", "b", "c"], [1, 2, 3]]

```

<aside class="notes">

**Talking Point:**

- We can also use the spread operator to easily concatenate the data from multiple arrays into one. Notice the difference between `newArray` and `withoutSpread`.

</aside>

---

## Cloning and Adding Data in an Object Using the Spread Operator

```js
const exampleObject = {
  name: "Jim",
  hometown: "Atlanta"
}

const clonedObject = {
  ...exampleObject,
  favoriteFood: "Pizza"
}

// Cloned object now contains name, hometown, AND favoriteFood.

const moreData = {
  specialty: "React",
  laptop: "Macbook Pro"
}

const lotsOfData = {
  ...clonedObject,
  ...moreData
}

// This object contains name, hometown, favoriteFood, specialty, and laptop.
```

<aside class="notes">

**Talking Point:**

- The spread operator also works for objects! By using the `...` operator, we can create a new object and copy the values for an existing piece of data into it. You can also use spread multiple times to combine your objects together!

- Note that this is a shallow copy and not a deep copy.  The spread operator will copy one level deep.

</aside>

---

## Immutable Libraries


Immutable.js provides `List`, `Stack`, `Map`, `OrderedMap`, `Set`, `OrderedSet` and `Record` — along with methods for making changes to your data like `set()`, `get()`, `delete()`, `update()`, **etc**.


<aside class="notes">

**Talking Points:**

- While we've seen several ways to write vanilla JavaScript applications and maintain immutable data types, it can get tedious. If you're not careful, you can still accidentally mutate your data!

- Thankfully, there are several mature JavaScript libraries that provide immutable data types and/or immutable methods that can make maintaining immutable data types trivial. One of the most popular is [Immutable.js from Facebook](https://facebook.github.io/immutable-js/), which provides immutable data types found in other programming languages.

- Immutable.js provides `List`, `Stack`, `Map`, `OrderedMap`, `Set`, `OrderedSet`, and `Record` — along with methods for making changes to your data like `set()`, `get()`, `delete()`, `update()`, etc.

- With a library like Immutable.js, you don't have to think about immutability — just use the types and methods provided and the library takes care of it for you.

</aside>


---

## Additional Resources:

- [JavaScript Immutable Libraries](https://gist.github.com/jlongster/bce43d9be633da55053f)
