"use strict";

module.exports = function mineIsBigger() {
  let maxZIndexFound = 0;

  // get all the html on the page, once everything has loaded
  let pageSource = document.documentElement.innerHTML;

  // match z-index: 0 or more whitespace, 1 or more integers, capture the integers
  const matchedZIndices = pageSource.match(/z-index:\s*(\d+)/g);

  // loop through every z-index value, and keep track of the max
  for (const item of matchedZIndices) {
    const zIndexValue = item.split(":")[1].replace(/\s/g, "");

    const castZIndexValue = +zIndexValue;

    if (castZIndexValue === 2147483647) {
      maxZIndexFound = 2147483647;
    }
    if (castZIndexValue > maxZIndexFound) {
      maxZIndexFound = castZIndexValue + 1;
    }
  }

  // if they think they bein clever and are using the biggest possible z-index,
  //  set that shit to 0 to teach em a lesson
  const matchedBiggest = /(2147483647)/g;
  let match;
  let matchedBool = false;

  while ((match = matchedBiggest.exec(pageSource))) {
    matchedBool = true;
    const index = match.index;

    document.documentElement.innerHTML =
      pageSource.slice(0, index) + "0" + pageSource.slice(index + 10);
  }

  if (matchedBool) {
    pageSource = document.documentElement.innerHTML;
  }

  return String(maxZIndexFound);
};
