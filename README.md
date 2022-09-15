# Find Da Note

A small game for improving music theory calculations.

[See project live](https://main--effortless-licorice-e5157b.netlify.app/)

---

## About the development

The main technology used in this project is [React](https://reactjs.org/).

For the styling I used [Stayled Components](https://styled-components.com/).

The file structure of the components is based on [BEM](http://getbem.com/) methodology.

The general structure of the "component" folder is: 

```
.
├── blocks
│   ├── BlockName1
│   │   ├── ElementName1.js
│   │   ├── ElementName2.js
│   │   └── index.js
│   ├── BlockName2
│   │   ├── ElementName1.js
│   │   ├── ElementName2.js
│   │   └── index.js
│   └── BlockName3
│       ├── ElementName1.js
│       ├── ElementName2.js
│       └── index.js
├── elements
│   ├── ElementName1
│   │   └── index.js
│   ├── ElementName2
│   │   └── index.js
│   └── ElementName3
│       └── index.js
└── ui
    ├── UiComponentName1
    │   └── index.js
    ├── UiComponentName2
    │   └── index.js
    └── UiComponentName3
        └── index.js
```

---

## Feature requests

- Add a "hint" button and a UI for the hint
- When choose wrong note, draw on it the sign X
- When choose correct note, draw on it the sign V
- Add more intervals
- Make the keyboard playable
- Make it responsive
- Add small animations on click for every button

---

## Bugs fixing requests

- Align better the names in the black keys
- Make the size of all element fixed
