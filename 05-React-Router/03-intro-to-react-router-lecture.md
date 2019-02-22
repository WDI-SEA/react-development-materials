## ![](https://s3.amazonaws.com/python-ga/images/GA_Cog_Medium_White_RGB.png) {.separator}
<h1>Introduction to React Router</h1>

---

## Learning Objectives

*After this lesson, you will be able to:*

* Describe React Router's main features: routing, components, history
* Use React Router to map URLs to components
* Use React Router to create links to different pages

---

## React Router

![logo](assets/small-react-router-logo.png)


<aside class="notes">

**Talking Points**:

It's great that HTML5 introduced new browser history mechanics to make it easier
for us as developers to build Single Page Applications, and it's important to know what's going on under the hood.

However, on an important note - we're actually not going to
be using these new features directly ourselves!

Instead, we'll use a tool called **React Router**, which bundles everything together so we don't have to worry about it.



**Teaching Tips**:

* Play the intro to React Router [video](https://generalassembly.wistia.com/medias/tep72w77ir)

</aside>

---

## React Router is:

A third party library that makes it easy for us to route URLs - not to different pages, but by dynamically loading different components on the same page as the user navigates to different URLs.

**React Router provides**:

* **Routing:** easily define what content is associated with what URLs.
* **History:** automatically manage browser history when the user navigates between content.

<aside class="notes">

**Talking Points**:

* React Router is actually a **third-party** library. "Third-party" means it's not built by React and not built by ourselves; it was written by some other "third-party" group of developers.
* Even though React Router is third-party
software, it's extremely useful, trustworthy, and popular - don't be afraid to use it. With more than 20,000 stars on Github, it’s safe to assume React Router is here to stay.
* Once we define how the URLs are routed to the components, **React Router** will manage our Single Page App's browser history automatically.

</aside>
