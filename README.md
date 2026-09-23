# jsdoc-query

Wrapper for getElementById with JSDoc types

## Usage:
```JavaScript
import { $ } from "./jsdoc-query.js";

const myBtn = $("my-btn").button;   // type casted to HTMLButtonElement
const h1Header = $("h1-header").h;  // type casted to HTMLHeadingElement
```
