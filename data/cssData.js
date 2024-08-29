// cssData.js
const cssData = [
    {
        name: "CSS",
        children: [
            {
                name: "Selectors",
                children: [
                    { name: "Class Selector", children: [{ description: "The class selector selects elements with a specific class attribute." }] },
                    { name: "ID Selector", children: [{ description: "The ID selector selects an element based on its id attribute." }] },
                    { name: "Attribute Selector", children: [{ description: "The attribute selector selects elements based on an attribute or attribute value." }] },
                    { name: "Pseudo-classes", children: [
                        { name: ":hover", children: [{ description: "The :hover pseudo-class applies while the user designates an element (with some pointing device), but does not activate it." }] },
                        { name: ":focus", children: [{ description: "The :focus pseudo-class applies while an element has the focus (accepts keyboard or mouse input)." }] },
                        { name: ":nth-child", children: [{ description: "The :nth-child() pseudo-class matches elements based on their position in a group of siblings." }] }
                    ] },
                    { name: "Pseudo-elements", children: [
                        { name: "::before", children: [{ description: "The ::before pseudo-element inserts content before an element's content." }] },
                        { name: "::after", children: [{ description: "The ::after pseudo-element inserts content after an element's content." }] }
                    ] }
                ]
            },
            {
                name: "Box Model",
                children: [
                    { name: "Margin", children: [{ description: "The margin property defines the space around an element, outside of its border." }] },
                    { name: "Padding", children: [{ description: "The padding property defines the space between an element's content and its border." }] },
                    { name: "Border", children: [{ description: "The border property defines the border around an element." }] },
                    { name: "Content", children: [{ description: "The content area is the portion inside the padding, border, and margin of an element." }] }
                ]
            },
            {
                name: "Layout",
                children: [
                    { name: "display", children: [
                        { name: "block", children: [{ description: "The block value displays an element as a block-level element." }] },
                        { name: "inline", children: [{ description: "The inline value displays an element as an inline element." }] },
                        { name: "inline-block", children: [{ description: "The inline-block value displays an element as an inline-level block container." }] },
                        { name: "flex", children: [{ description: "The flex value displays an element as a flex container." }] },
                        { name: "grid", children: [{ description: "The grid value displays an element as a grid container." }] }
                    ] },
                    { name: "position", children: [
                        { name: "static", children: [{ description: "The static value positions an element according to the normal flow of the document." }] },
                        { name: "relative", children: [{ description: "The relative value positions an element relative to its normal position." }] },
                        { name: "absolute", children: [{ description: "The absolute value positions an element relative to the nearest positioned ancestor." }] },
                        { name: "fixed", children: [{ description: "The fixed value positions an element relative to the browser window." }] },
                        { name: "sticky", children: [{ description: "The sticky value positions an element based on the user's scroll position." }] }
                    ] },
                    { name: "z-index", children: [{ description: "The z-index property specifies the stack order of an element." }] },
                    { name: "float", children: [{ description: "The float property is used for positioning and formatting content (e.g., allowing text to wrap around an image)." }] },
                    { name: "clear", children: [{ description: "The clear property specifies on which sides of an element floating elements are not allowed to float." }] },
                    { name: "overflow", children: [{ description: "The overflow property specifies what happens if content overflows an element's box." }] }
                ]
            },
            {
                name: "Flexbox",
                children: [
                    { name: "display: flex", children: [{ description: "The display: flex; declaration makes the container a flex container." }] },
                    { name: "flex-direction", children: [{ description: "The flex-direction property specifies the direction of the flexible items." }] },
                    { name: "justify-content", children: [{ description: "The justify-content property aligns the flex items along the main axis." }] },
                    { name: "align-items", children: [{ description: "The align-items property aligns the flex items along the cross axis." }] },
                    { name: "flex-wrap", children: [{ description: "The flex-wrap property specifies whether the flex items should wrap or not." }] }
                ]
            },
            {
                name: "Grid",
                children: [
                    { name: "display: grid", children: [{ description: "The display: grid; declaration makes the container a grid container." }] },
                    { name: "grid-template-columns", children: [{ description: "The grid-template-columns property defines the number and size of columns in a grid layout." }] },
                    { name: "grid-template-rows", children: [{ description: "The grid-template-rows property defines the number and size of rows in a grid layout." }] },
                    { name: "grid-gap", children: [{ description: "The grid-gap property defines the space between grid items." }] },
                    { name: "justify-items", children: [{ description: "The justify-items property aligns grid items along the inline (row) axis." }] },
                    { name: "align-items", children: [{ description: "The align-items property aligns grid items along the block (column) axis." }] }
                ]
            },
            {
                name: "Typography",
                children: [
                    { name: "font-family", children: [{ description: "The font-family property specifies the font for an element." }] },
                    { name: "font-size", children: [{ description: "The font-size property specifies the size of the font." }] },
                    { name: "font-weight", children: [{ description: "The font-weight property specifies the weight (boldness) of the font." }] },
                    { name: "line-height", children: [{ description: "The line-height property specifies the height of a line." }] },
                    { name: "text-align", children: [{ description: "The text-align property specifies the horizontal alignment of text." }] },
                    { name: "text-decoration", children: [{ description: "The text-decoration property specifies the decoration added to text." }] },
                    { name: "color", children: [{ description: "The color property specifies the color of the text." }] }
                ]
            },
            {
                name: "Colors and Backgrounds",
                children: [
                    { name: "color", children: [{ description: "The color property specifies the color of the text." }] },
                    { name: "background-color", children: [{ description: "The background-color property specifies the background color of an element." }] },
                    { name: "background-image", children: [{ description: "The background-image property specifies one or more background images for an element." }] },
                    { name: "background-size", children: [{ description: "The background-size property specifies the size of the background images." }] },
                    { name: "background-position", children: [{ description: "The background-position property specifies the position of the background images." }] }
                ]
            },
            {
                name: "Transitions and Animations",
                children: [
                    { name: "transition", children: [{ description: "The transition property is a shorthand property for setting the four transition properties into a single property." }] },
                    { name: "animation", children: [{ description: "The animation property is a shorthand property for setting six of the animation properties into a single property." }] },
                    { name: "keyframes", children: [{ description: "The @keyframes rule specifies the animation code." }] }
                ]
            }
        ]
    }
];
