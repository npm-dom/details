module.exports = Details

function Details(elems) {
    if (!elems) {
        return
    }

    if (elems.content && elems.summary) {
        elems = { main: elems }
    }

    Object.keys(elems).forEach(function (key) {
        var details = elems[key]
        var hidden = true

        if (!details.summary) {
            return
        }
      
        renderDetails(details, false)

        details.summary.addEventListener("click", function () {
            hidden = !hidden

            renderDetails(details, hidden)
        })
    })
}

function renderDetails(details, hidden) {
    details.summary.textContent = hidden ?
		"Detailed description" : "Hide description"
    details.content.style.display = hidden ? "none" : "block"
}
