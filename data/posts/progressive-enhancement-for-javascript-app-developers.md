---
title: Progressive Enhancement for JavaScript App Developers
date: 2016-06-14
author: Jasper
---

You use a JavaScript framework to build your apps? Smart. It's probably helping you and your team to build amazing things without having to worry about all the cross-browser inconsistencies. Popular JavaScript frameworks have extensive documentation, demos, tooling and a community to help you out. [JavaScript frameworks do come at a cost](https://aerotwist.com/blog/the-cost-of-frameworks/). But I'll assume you're already past that consideration.

So let's instead discuss techniques and best practices to get the most out of your JavaScript app. How can you get the best experience across browsers and devices? Some good old basics help create widely useable apps. And while JavaScript apps run in the browser, you can already prep server-side. Finally, we can go even further and enhance our JavaScript apps into native-like apps using Progressive Web App technology.

## The basics still apply

JavaScript enables us to create rich interactive web apps. But we still need to cover our basics to ensure it works everywhere.

### Accessible content

Content should always be meaningful. So regardless of your JavaScript framework, you should use the appropriate markup: headings, paragraphs, captions and so on. And [consider HTML5 section elements](https://www.smashingmagazine.com/2013/01/the-importance-of-sections/) to make your content more descriptive.

Users should also be able to easily reach your content. The URL is one of the most powerful features of the web. Use it to make content easily accessible. Your JavaScript app may not have traditional pages, but you can still use the [history API](http://html5doctor.com/history-api/) to link to specific states of the app.

### Interactive elements

Sure, you're building a highly interactive app. HTML has you covered. Instead of letting your users find and click on ``s and ``s, use the HTML elements made for interaction: anchors, buttons and form elements. These elements have all interactive states - focus, hover, disabled and more - [built-in](https://www.smashingmagazine.com/2016/05/developing-dependency-awareness/#not-all-buttons-are-created-equal).

Can users only interact with an element using JavaScript, then use a ``. Should your user be able to navigate somewhere? Use an anchor with the appropriate URL as `href`. Not ``, not ``, but ``. Then, you can animate the navigation, get the content asynchronously or create another rich experience. But cover the basics first.

### Useful forms

Using form elements for user input? There's a few things to keep in mind. [Each input should have an associated label](https://www.christianheilmann.com/2015/12/04/a-quick-reminder-on-how-and-why-to-use-labels-in-forms-to-make-them-more-accessible/): `username `. You can enhance the experience with icons, floating labels and other patterns. But always keep the label accessible. Don't use the `placeholder` attribute instead of the label. Placeholders don't have the same meaning, are only initially visible and are not supported in every browser.

Also ensure you wrap all your form elements in a ``. This helps browsers and other technologies understand the inputs belong together. Mobile devices adapt their head-up keyboards accordingly. Also consider setting the form's `action` attribute and handling submissions server-side for support regardless of JavaScript. User input is valuable and we should do our best to accept it.

Is your single page application framework capable of complex form validation and constraints? Great! But have you considered first trying to use [native browser form features](http://www.html5rocks.com/en/tutorials/forms/html5forms/)? Using the correct input type (like `email` or `url`) lets the browser validate input for you. In addition combining attributes like `required`, `min`, `max` and `pattern` let you set advanced constraints on your input elements. Meaning you get all that for free.

With the basics in place you can use your JavaScript framework to further enhance the experience of your app.

## Render strategically

Not all HTML is created equally. Surely your JavaScript framework has a smart way to generate HTML. Maybe it's using Virtual DOM to optimise updates. Such techniques are great to do instant updates in your app. But there are two problems which they don't always solve for you. Initially the page will be blank until the framework renders the initial HTML. And only after all JavaScript is executed is all the app's functionality available.

A way to get an initial view on the page sooner, is pre-rendering HTML on the server. This is generally a good start as it prevents users staring at white screens. This solves our first issue.

Yet this can also lead to a state where the app looks ready, but the user can't interact with it yet. For instance, the initial HTML may contain buttons which don't do anything yet when you click them. This happens because the JavaScript required for the interaction isn't executed yet. You may solve part of this by using anchors and forms. As these basics already work before JavaScript is done. Other parts may be more difficult to get working initially. Sometimes you won't find a basic approach. In that case you could consider initially hiding those functionalities and revealing them only after JavaScript has enabled them. You could also keep the initial page small and asynchronously load extra features.

Paul Lewis ([@aerotwist](https://twitter.com/aerotwist)) illustrates these [different rendering techniques in a tweet](https://twitter.com/aerotwist/status/729712502943174657):

![JS-based render initially takes long to render (wasted time). Server-side rendering gets an initial view sooner but still takes time before JS behaviour kicks in (Uncanny Valley). Progressive rendering delivers functional view early and enhances incrementally.](https://www.voorhoede.nl/assets/images/js-render-techniques.jpg "JS-based render initially takes long to render (wasted time). Server-side rendering gets an initial view sooner but still takes time before JS behaviour kicks in (Uncanny Valley). Progressive rendering delivers functional view early and enhances incrementally.")

The best rendering strategy depends on your app. Can you easily integrate your own rendering strategy? There's a trend of server-side pre-rendering and routing extensions for popular JavaScript frameworks. These are commonly referred to as [Universal or Isomorphic JavaScript](https://medium.com/@ghengeveld/isomorphism-vs-universal-javascript-4b47fb481beb#.fwirp2e6w) techniques. Truly progressive rendering where functionality is incrementally added is still in its infancy. HTTP/2, Web Components and native support for JavaScript modules will stimulate a progressive approach.

## Enhance to Progressive Web App

The latest browser technology lets us take our JavaScript apps one step further. It lets us enhance our JavaScript app living it the browser, into an installable native-like app. You can free your app from the browser tab. Make it instantly available. And resilient to flaky internet connections. JavaScript apps successfully applying these features are called [Progressive Web Apps](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/).

The core technology behind Progressive Web Apps is the ServiceWorker API. The ServiceWorker can run in the background of the browser, even when your page is closed. It can intercept network requests and responses, and use the Cache API. You can use this to get your app to function even with flaky or no network connection. The ServiceWorker can also receive Server Push Events and trigger native notifications. [Browser support for ServiceWorkers](https://jakearchibald.github.io/isserviceworkerready/) is quickly improving but not ready in all browsers yet. You should therefore use ServiceWorkers as an enhancement to your JavaScript app.

There's one last step to make your JavaScript app installable: add a manifest. A manifest file contains your app name, icon(s), theme colors and display mode to start the app in. You can define if your app should start in browser, standalone or fullscreen and in a specific orientation. Though you should [consider setting display to browser as otherwise your app loses the power of the URL](https://adactio.com/journal/10708). If a user visits your app frequently, he or she will be prompted to install your app. In addition users can manually install your app to their home screen. During Google I/O 2016 Addy Osmani presented [Progressive Web Apps across popular JavaScript frameworks](https://www.youtube.com/watch?v=srdKq0DckXQ). His article will help you [get started with Progressive Web Apps](https://addyosmani.com/blog/getting-started-with-progressive-web-apps/).

That's it. Cover your basics. Make sure you start with a functional page using a fitting rendering strategy. Then enhance your JavaScript app into a fast, resilient and installable app.