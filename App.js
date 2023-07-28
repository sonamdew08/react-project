/**
 * <div>
 *      <div>
 *          <h1></h1>
 *      </div>
 * </div>
 * 
 */

const parent = React.createElement(
    'div',
    {id: "parent"}, 
    [
        React.createElement(
            'div', 
            {id: "child2"}, 
            [React.createElement('h1', {key: 'heading1'}, 'I am an h1 tag'), 
            React.createElement('h2', {key: 'heading2'}, 'I am an h2 tag')]),
        React.createElement(
            'div', 
            {id: "child2"}, 
            [React.createElement('h1', {key: 'heading1'}, 'I am an h1 tag'), 
            React.createElement('h2', {key: 'heading2'}, 'I am an h2 tag')])
    ]
)


// first argument is tag element, 2nd is for defining attibute and 3rd your children
const heading = React.createElement('h1', {id: 'heading'}, "Hello world from React!")

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)