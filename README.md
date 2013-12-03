# details

Create and emulate html5 details tag

## Example

```js
var Details = require("details")
var dom = require("jsonml-stringify/dom")

var content = dom(["div", "hidden content"])
var summary = dom(["div", "summary content"])

var det = Details({ content: content, summary: summary })

document.body.appendChild(summary)
document.body.appendChild(content)
```

## Installation

`npm install details`

## Contributors

 - Raynos

## MIT Licenced
