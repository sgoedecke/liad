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

## Contribution

Liad works but is still in a very early stage. I'm particularly keen on improving error handling and adding unit tests, but I'm happy to consider new features as well. Issues and PRs are welcome.
