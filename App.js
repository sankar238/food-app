const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World! from React"
);

// console.log(heading) // returns object with type=h1,props= attributes+children;
const root = ReactDOM.createRoot(document.getElementById("root"));
//render is responsible for converting reactelement into html and put it into dom.
// root.render(heading)

{/* 
    <div id="parent">
        <div id="child1">
             <h1>i'm h1 tag</h1>
             <h2>i'm h2 tag </h2>
        </div>
        <div id="child2">
             <h1>i'm h1 tag</h1>
             <h2>i'm h2 tag </h2>
        </div>
    </div> 
*/}

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child1" },
        [React.createElement(
            "h1", {},
            "i am h1 tag"
        ), React.createElement(
            "h2", {},
            "i am h2 tag"
        )]
    ), React.createElement(
        "div",
        { id: "child2" },
        [React.createElement(
            "h1", {},
            "i am h1 tag"
        ), React.createElement(
            "h2", {},
            "i am h2 tag"
        )]
    )]
)
console.log(parent)
root.render(parent)