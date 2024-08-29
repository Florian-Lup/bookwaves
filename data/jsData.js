// jsData.js
const jsData = [
    {
        name: "JavaScript",
        children: [
            {
                name: "Data Types",
                children: [
                    { name: "String", children: [{ description: "Strings represent text in JavaScript." }] },
                    { name: "Number", children: [{ description: "Numbers represent numeric values in JavaScript." }] },
                    { name: "Boolean", children: [{ description: "Booleans represent true/false values in JavaScript." }] },
                    { name: "Array", children: [{ description: "Arrays are used to store multiple values in a single variable." }] },
                    { name: "Object", children: [{ description: "Objects are collections of properties and methods." }] },
                    { name: "Function", children: [{ description: "Functions are reusable blocks of code that perform a specific task." }] },
                    { name: "null", children: [{ description: "null represents the intentional absence of any object value." }] },
                    { name: "undefined", children: [{ description: "undefined means a variable has been declared but has not yet been assigned a value." }] }
                ]
            },
            {
                name: "Control Structures",
                children: [
                    { name: "if", children: [{ description: "The if statement executes a block of code if a specified condition is true." }] },
                    { name: "else", children: [{ description: "The else statement executes a block of code if the condition in the if statement is false." }] },
                    { name: "switch", children: [{ description: "The switch statement executes one of many blocks of code based on different cases." }] },
                    { name: "for", children: [{ description: "The for loop iterates a block of code a number of times." }] },
                    { name: "while", children: [{ description: "The while loop executes a block of code as long as a specified condition is true." }] },
                    { name: "do-while", children: [{ description: "The do-while loop also executes a block of code as long as a specified condition is true, but it will run the block once before checking the condition." }] },
                    { name: "break", children: [{ description: "The break statement terminates the loop, switch, or label statement." }] },
                    { name: "continue", children: [{ description: "The continue statement skips the rest of the code in the current iteration of a loop and starts the next iteration." }] }
                ]
            },
            {
                name: "Functions",
                children: [
                    { name: "Function Declaration", children: [{ description: "A function declaration defines a function with the specified parameters." }] },
                    { name: "Function Expression", children: [{ description: "A function expression defines a function inside an expression." }] },
                    { name: "Arrow Function", children: [{ description: "Arrow functions provide a concise syntax to write function expressions." }] },
                    { name: "Callback Function", children: [{ description: "A callback function is a function passed into another function as an argument." }] },
                    { name: "Anonymous Function", children: [{ description: "An anonymous function is a function without a name, often not accessible after its initial creation." }] }
                ]
            },
            {
                name: "DOM Manipulation",
                children: [
                    { name: "getElementById", children: [{ description: "The getElementById method returns the element with the specified id." }] },
                    { name: "querySelector", children: [{ description: "The querySelector method returns the first element that matches a CSS selector." }] },
                    { name: "querySelectorAll", children: [{ description: "The querySelectorAll method returns all elements that match a CSS selector." }] },
                    { name: "createElement", children: [{ description: "The createElement method creates an element node with the specified name." }] },
                    { name: "appendChild", children: [{ description: "The appendChild method appends a node as the last child of a node." }] },
                    { name: "removeChild", children: [{ description: "The removeChild method removes a child node from the DOM." }] },
                    { name: "innerHTML", children: [{ description: "The innerHTML property sets or returns the HTML content of an element." }] },
                    { name: "textContent", children: [{ description: "The textContent property sets or returns the text content of an element." }] }
                ]
            },
            {
                name: "Events",
                children: [
                    { name: "addEventListener", children: [{ description: "The addEventListener method attaches an event handler to an element." }] },
                    { name: "Event Object", children: [{ description: "The Event object represents an event that takes place in the DOM." }] },
                    { name: "Event Bubbling and Capturing", children: [{ description: "Event Bubbling and Capturing are two phases of event propagation in the DOM." }] },
                    { name: "Mouse Events", children: [
                        { name: "click", children: [{ description: "The click event occurs when an element is clicked." }] },
                        { name: "dblclick", children: [{ description: "The dblclick event occurs when an element is double-clicked." }] },
                        { name: "mouseover", children: [{ description: "The mouseover event occurs when the pointer is moved onto an element." }] }
                    ] },
                    { name: "Keyboard Events", children: [
                        { name: "keydown", children: [{ description: "The keydown event occurs when a key is pressed." }] },
                        { name: "keyup", children: [{ description: "The keyup event occurs when a key is released." }] }
                    ] }
                ]
            },
            {
                name: "Asynchronous JavaScript",
                children: [
                    { name: "setTimeout", children: [{ description: "The setTimeout function calls a function or evaluates an expression after a specified number of milliseconds." }] },
                    { name: "setInterval", children: [{ description: "The setInterval function calls a function or evaluates an expression at specified intervals (in milliseconds)." }] },
                    { name: "Promises", children: [{ description: "A Promise is an object representing the eventual completion or failure of an asynchronous operation." }] },
                    { name: "async/await", children: [{ description: "The async/await syntax allows writing asynchronous code that looks synchronous." }] },
                    { name: "Fetch API", children: [{ description: "The Fetch API provides an interface for fetching resources (e.g., across the network)." }] },
                    { name: "XMLHttpRequest", children: [{ description: "The XMLHttpRequest object is used to interact with servers." }] }
                ]
            },
            {
                name: "Error Handling",
                children: [
                    { name: "try", children: [{ description: "The try statement allows you to define a block of code to be tested for errors while it is being executed." }] },
                    { name: "catch", children: [{ description: "The catch statement allows you to define a block of code to be executed if an error occurs in the try block." }] },
                    { name: "finally", children: [{ description: "The finally statement lets you execute code, after try and catch, regardless of the result." }] },
                    { name: "throw", children: [{ description: "The throw statement allows you to create a custom error." }] }
                ]
            },
            {
                name: "ES6+ Features",
                children: [
                    { name: "let and const", children: [{ description: "let and const are block-scoped variables introduced in ES6." }] },
                    { name: "Arrow Functions", children: [{ description: "Arrow functions provide a concise syntax for writing function expressions." }] },
                    { name: "Template Literals", children: [{ description: "Template literals allow embedded expressions and multiline strings." }] },
                    { name: "Destructuring", children: [{ description: "Destructuring assignment syntax allows extracting values from arrays or properties from objects." }] },
                    { name: "Spread and Rest Operators", children: [{ description: "The spread operator (...) allows an iterable to expand in places where multiple arguments or elements are expected." }] },
                    { name: "Classes", children: [{ description: "Classes are a template for creating objects in ES6." }] },
                    { name: "Modules", children: [{ description: "Modules allow for modular programming by importing and exporting pieces of code." }] },
                    { name: "Default Parameters", children: [{ description: "Default parameters allow named parameters to be initialized with default values if no value or undefined is passed." }] }
                ]
            }
        ]
    }
];
