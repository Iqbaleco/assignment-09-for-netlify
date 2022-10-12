import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card w-fluid bg-cyan-300 shadow-xl m-10">
                <div className="card-body">
                    <h2 className="font-bold text-lg">What is React Router?</h2>
                    <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                        React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                </div>
            </div>
            <div className="card w-fluid bg-cyan-300 shadow-xl m-10">
                <div className="card-body">
                    <h2 className="font-bold text-lg">How does context api works?</h2>
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                        Context API is a kind of new feature added in version 16.3 of React that allows one to share state across the entire app or part of it lightly and with ease.
                        React.createContext '()' is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page</p>
                </div>
            </div>
            <div className="card w-fluid bg-cyan-300 shadow-xl m-10">
                <div className="card-body">
                    <h2 className="font-bold text-lg">How does useRef works in React?</h2>
                    <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;