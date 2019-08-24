"use strict"

module.exports = function mineIsBigger() {
  window.onload = function () { 
    let maxZIndex = 0

    // get all the html on the page, once everything has loaded
    const pageSource = document.documentElement.innerHTML
    // match z-index: 0 or more whitespace, 1 or more integers, capture the integers
    const matchedZIndices = pageSource.match(/z-index:\s*(\d+)/g);

    // loop through every z-index value, and keep track of the max
    for (const item of matchedZIndices) {
      const zIndexValue = item
        .split(':')[1]
        .replace(/\s/g,'')

      if (zIndexValue > maxZIndex) {
        maxZIndex = zIndexValue;
      };
    }

    console.log(maxZIndex)
    return maxZIndex;
  }
}