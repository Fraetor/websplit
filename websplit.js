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
}

function close_split(clickedElement) {
    console.log("Closing split")
    const element = clickedElement.parentElement.parentElement.parentElement
    const split = element.parentElement;
    const parent = split.parentElement;
    parent.replaceChild(element, split)
}

function load_page(clickedElement) {
    const url = clickedElement.previousElementSibling.value
    const frame = websplit_frame.cloneNode(true)
    frame.setAttribute("src", url)
    clickedElement.parentElement.parentElement.replaceWith(frame)
}

// Add initial websplit to page.
document.querySelector("#websplits").replaceChildren(empty_websplit.cloneNode(true))
