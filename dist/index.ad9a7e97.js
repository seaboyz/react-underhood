let React = {
    createElement: (tag, props, ...children)=>{
        var element = {
            tag,
            props: {
                ...props,
                children
            }
        };
        console.log(element);
        return element;
    }
};
const App = ()=>/*#__PURE__*/ React.createElement("div", {
        className: "react",
        __source: {
            fileName: "index.tsx",
            lineNumber: 11,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("h1", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 12,
            columnNumber: 9
        },
        __self: this
    }, "hello, person!"), /*#__PURE__*/ React.createElement("p", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 13,
            columnNumber: 9
        },
        __self: this
    }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam optio modi dolor iure asperiores aut possimus harum quae minima omnis? Molestias inventore, unde veniam expedita placeat sapiente vitae molestiae quasi."));

//# sourceMappingURL=index.ad9a7e97.js.map
