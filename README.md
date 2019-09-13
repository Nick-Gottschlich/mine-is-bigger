## mine-is-bigger

Feeling inadequate? Insecure? Some other developer got a bigger z-index than you? Fuck that shit. `mine-is-bigger` will 100% guarantee that you have the biggest z-index out there, guaranteed.

![big honkin weiner](/assets/fuckyomodal.png)

Never again will your beautiful modal be covered by that asshole Joe's garbage ass dropdown. Never again will you lose a few pixels of your perfect component to some bullshit fucking sticky header, probably written by Joe (fuck that guy). Never again will you be sad and lonely. `mine-is-bigger` is the last and biggest package you'll ever need to fix all of your z-index size issues.

Seriously, even if some jerkoff decides to use the biggest possible z-index ("2147483647" btw) `mine-is-bigger` will force their z-index to be 0 just for having the nerve to come at you like that.

## Installation

Simply do

`yarn add mine-is-bigger`

or do `npm install mine-is-bigger` if you're one of those people.

## How to use

In your React Component, adding `mine-is-bigger` is simple:

```javascript
import React, { useEffect, useState } from 'react';
import mineIsBigger from 'mine-is-bigger';

const BigliestComponent = () => {
  const [zIndex, setZIndex] = useState(mineIsBigger());

  // NEVER LET ANYONE BE BIGGER
  useEffect(() => {
    const timer = setInterval(() => {
      setZIndex(mineIsBigger());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ zIndex }}>
      If you or a loved one has been diagnosed with Mesothelioma you may be
      entitled to financial compensation
    </div>
  );
};

export default BigliestComponent;
```

## HOOKS HOOKS HOOKS

```javascript
import React from "react";
import useBiggestZIndex from "mine-is-bigger/useBiggestZIndex";

const BigliestComponent = () => {
  const zIndex = useBiggestZIndex();
  return (
    <div style={{ zIndex }}>
      If you or a loved one has been diagnosed with Mesothelioma you may be
      entitled to financial compensation
    </div>
  );
};

export default BigliestComponent;
```

Not using React? Lol, what's wrong with you?

## Demo

https://codesandbox.io/embed/reverent-brook-evwzr
