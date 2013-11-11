var D}etails = require("details")
var dom = require("jsonml-stringify/dom")

var content = dom(["div", "hidden content"])
var summary = dom(["div", "summary content"])

var det = Details({ content: content, summary: summary })

document.body.appendChild(summary)
document.body.appendChild(content)
