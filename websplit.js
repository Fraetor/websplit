// Load templates
const websplit_frame = document.querySelector("#websplit-frame-template").content.firstElementChild
const empty_websplit = document.querySelector("#empty-websplit").content.firstElementChild


function hsplit(clickedElement) {
    console.log("Splitting horizontally")
    const element = clickedElement.parentElement.parentElement.parentElement
    const parent = element.parentElement;
    const wrapper = document.createElement('div');
    wrapper.setAttribute("class", "hsplit")
    // set the wrapper as child (instead of the element)
    parent.replaceChild(wrapper, element);
    // set element as child of wrapper
    wrapper.appendChild(element);
    wrapper.appendChild(empty_websplit.cloneNode(true))
}

function vsplit(clickedElement) {
    console.log("Splitting vertically")
    const element = clickedElement.parentElement.parentElement.parentElement
    const parent = element.parentElement;
    const wrapper = document.createElement('div');
    wrapper.setAttribute("class", "vsplit")
    // set the wrapper as child (instead of the element)
    parent.replaceChild(wrapper, element);
    // set element as child of wrapper
    wrapper.appendChild(element);
    wrapper.appendChild(empty_websplit.cloneNode(true))
}

function pop_out_split() {
    console.log("Popping out split into new tab")
    console.error("Not yet implemented")
    alert("Pop-out not yet implemented")
}

function close_split(clickedElement) {
    console.log("Closing split")
    const element = clickedElement.parentElement.parentElement
    const parent = element.parentElement;
    console.log(element, parent)
    // Prevent removing HTML above the main content.
    if (parent.tagName == "DIV") {
        parent.removeChild(element);
        parent.replaceWith(...parent.childNodes)
    } else {
        parent.replaceChildren(empty_websplit.cloneNode(true))
    }
}

function load_page(clickedElement) {
    const url = clickedElement.previousElementSibling.value
    console.log(`Loading page in split: ${url}`)
    const frame = websplit_frame.cloneNode(true)
    frame.setAttribute("src", url)
    clickedElement.parentElement.parentElement.replaceWith(frame)
}

// Add initial websplit to page.
document.querySelector("main").replaceChildren(empty_websplit.cloneNode(true))
