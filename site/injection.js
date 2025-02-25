let inject_button = document.getElementById("inject");
let url_input = document.getElementById("url"); 
let js_input = document.getElementById("js");

inject_button.addEventListener("click", () => {
    let js = js_input.value;
    
    // Open a new window and inject the JavaScript code
    let win = window.open();
    let script = win.document.createElement("script");
    script.innerHTML = js;
    win.document.body.appendChild(script);
})
