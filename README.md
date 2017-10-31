# Liad.js

Like `document.querySelector`, but returns a promise. If you want to do something with an element but can't guarantee that it exists yet, call `liad.fetchElement(query, waitTime)` and handle the result with whatever async js tool you prefer. The `query` argument accepts whatever you can pass into `querySelector`, and the `waitTime` argument accepts a time in ms until liad will give up and reject the promise. By default, `waitTime` is set to five seconds.

Try it out [here](https://sgoedecke.github.io/liad/).

## Installation

Run `npm install liad` or include `liad.js` in a script tag.

## Example

To fetch a div with id 'target' and set its content to "Got you!":

```
liad.fetchElement('#target').then((e) => {
  e.innerHTML = 'Got you!'
}).catch((err) => {
  console.error(err)
})
```

## How it works

The core of `liad.fetchElement` is a recursive function that loops until the element is found. The main trick involes using `requestAnimationFrame` to schedule the next recursion. If we have to wait for the page to load, then this function will only recurse once, no matter how long it takes. Big thanks to [swizec](https://github.com/Swizec) for this idea, which I read in his blog post [here](https://swizec.com/blog/how-to-properly-wait-for-dom-elements-to-show-up-in-modern-browsers/swizec/6663). The rest is just wrapping it in a promise that resolves when the element is found and rejects after a timeout specified by the user.

## Contribution

Liad works but is still in a very early stage. I'm particularly keen on improving error handling and adding unit tests, but I'm happy to consider new features as well. Issues and PRs are welcome.
