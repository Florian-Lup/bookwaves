// htmlData.js
const htmlData = [
    {
        name: "HTML",
        children: [
            {
                name: "Elements",
                children: [
                    {
                        name: "Headings",
                        children: [
                            { name: "h1", children: [{ description: "The <h1> element represents the main heading in a document." }] },
                            { name: "h2", children: [{ description: "The <h2> element represents a subheading in a document." }] },
                            { name: "h3", children: [{ description: "The <h3> element represents a sub-subheading in a document." }] },
                            { name: "h4", children: [{ description: "The <h4> element represents a smaller subheading." }] },
                            { name: "h5", children: [{ description: "The <h5> element represents a small subheading." }] },
                            { name: "h6", children: [{ description: "The <h6> element represents the smallest subheading." }] }
                        ]
                    },
                    {
                        name: "Text Content",
                        children: [
                            { name: "p", children: [{ description: "The <p> element represents a paragraph of text." }] },
                            { name: "a", children: [{ description: "The <a> element represents a hyperlink." }] },
                            { name: "span", children: [{ description: "The <span> element is an inline container for text." }] },
                            { name: "strong", children: [{ description: "The <strong> element is used for strong emphasis, typically bold." }] },
                            { name: "em", children: [{ description: "The <em> element is used for emphasized text, typically italicized." }] }
                        ]
                    },
                    {
                        name: "Lists",
                        children: [
                            { name: "ul", children: [{ description: "The <ul> element represents an unordered (bulleted) list." }] },
                            { name: "ol", children: [{ description: "The <ol> element represents an ordered (numbered) list." }] },
                            { name: "li", children: [{ description: "The <li> element represents an item in a list." }] }
                        ]
                    },
                    {
                        name: "Tables",
                        children: [
                            { name: "table", children: [{ description: "The <table> element represents a table." }] },
                            { name: "tr", children: [{ description: "The <tr> element represents a table row." }] },
                            { name: "th", children: [{ description: "The <th> element represents a table header cell." }] },
                            { name: "td", children: [{ description: "The <td> element represents a table data cell." }] }
                        ]
                    },
                    {
                        name: "Forms",
                        children: [
                            { name: "input", children: [
                                { description: "The <input> element is used to create input fields." },
                                { name: "text", children: [{ description: "The text input creates a single-line text field." }] },
                                { name: "password", children: [{ description: "The password input creates a field that masks the text." }] },
                                { name: "email", children: [{ description: "The email input is used for input fields that should contain an e-mail address." }] },
                                { name: "number", children: [{ description: "The number input creates a field for numeric input." }] }
                            ] },
                            { name: "button", children: [{ description: "The <button> element represents a clickable button." }] },
                            { name: "textarea", children: [{ description: "The <textarea> element represents a multi-line input field." }] },
                            { name: "select", children: [{ description: "The <select> element represents a drop-down list." }] },
                            { name: "label", children: [{ description: "The <label> element represents a caption for an item in a user interface." }] },
                            { name: "form", children: [{ description: "The <form> element represents a section of a document that contains interactive controls to submit data." }] }
                        ]
                    },
                    {
                        name: "Images and Media",
                        children: [
                            { name: "img", children: [{ description: "The <img> element embeds an image." }] },
                            { name: "video", children: [{ description: "The <video> element embeds a video." }] },
                            { name: "audio", children: [{ description: "The <audio> element embeds audio content." }] }
                        ]
                    },
                    {
                        name: "Semantics",
                        children: [
                            { name: "header", children: [{ description: "The <header> element represents introductory content or a set of navigational links." }] },
                            { name: "footer", children: [{ description: "The <footer> element represents a footer for its nearest sectioning content or sectioning root." }] },
                            { name: "nav", children: [{ description: "The <nav> element represents a section of a page that links to other pages or to parts within the page." }] },
                            { name: "article", children: [{ description: "The <article> element represents a self-contained composition in a document." }] },
                            { name: "section", children: [{ description: "The <section> element represents a generic section of a document or application." }] },
                            { name: "aside", children: [{ description: "The <aside> element represents content indirectly related to the main content." }] },
                            { name: "main", children: [{ description: "The <main> element represents the dominant content of the <body> of a document." }] }
                        ]
                    }
                ]
            },
            {
                name: "Attributes",
                children: [
                    {
                        name: "class",
                        children: [
                            { description: "The class attribute specifies one or more class names for an element." }
                        ]
                    },
                    {
                        name: "id",
                        children: [
                            { description: "The id attribute specifies a unique id for an element." }
                        ]
                    },
                    {
                        name: "href",
                        children: [
                            { description: "The href attribute specifies the URL of the page the link goes to." }
                        ]
                    }
                ]
            }
        ]
    }
];
