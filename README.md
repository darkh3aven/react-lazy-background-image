# react-lazy-background-image

Since image lazyload doesn't work with background images in React js app because is not possible to change background property throught vanilla javascript, this component is a easy way to do that, simply detect when element is visible and change his status to load image.


## Usage

### React OnVisible required
This component uses [React OnVisible component](https://github.com/dazld/react-on-visible) to detect when an element is in viewport.

### Import component
```jsx
import React from 'react';
import LazyBackgroundImage from './components/LazyBackgroundImage'

function App() {
  return (
    <div className="App">
      <LazyBackgroundImage classes={'my-background'} image={logo} percent={20} />
    </div>
  );
}

export default App;
```

### Send custom prop to children
Send your css class, your image path and your percentage of element to decide when load image.
```jsx
<LazyBackgroundImage
  classes={'my-background'}
  image={logo}
  percent={20} />
```

## Copyright
This component is a Open Source Software. 
For React OnVisible component copyright [See here](https://github.com/dazld/react-on-visible)
