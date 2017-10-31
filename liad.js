"use strict";

function fetchElement(query, waitTime) {
  waitTime = waitTime || 5000;
  return new Promise(function(resolve, reject) {

    window.setTimeout(function() {
      reject('Could not find element matching ' + query + ' in ' + waitTime + ' ms');
    }, waitTime);

    (function loop() {
      var target = document.querySelector(query);
      if (target) {
        resolve(target);
      } else {
        window.requestAnimationFrame(loop);
      }
    })()
  })
}

var exports = {
  fetchElement: fetchElement
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = exports;
} else {
  window.liad = exports;
}
