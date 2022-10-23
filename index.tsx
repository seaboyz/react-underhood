let React = {
    createElement: (tag, props, ...children) =>
    {
        var element = { tag, props: { ...props, children } }
        console.log(element)
        return element
    }
}

const App = () => (
    <div className="react">
        <h1>hello, person!</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam optio modi dolor iure asperiores aut possimus harum quae minima omnis? Molestias inventore, unde veniam expedita placeat sapiente vitae molestiae quasi.</p>
    </div>
)
