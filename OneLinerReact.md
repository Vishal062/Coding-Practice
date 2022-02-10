# Q1. What is React.StricMode?

>=> React.StricMode is a helper functinality of the JavaScript that helps us to write a cleaner code in a react. It gives feedback in the form of warning if we do not follow React guidelines.

>## What is react?
>React js is an open source javascript libary, is used to building User Interface in single page application, react is used for building UI in mobile and web apps.React is not a framework its just a library.

> ## Main feature of react are :
>It uses the virtual DOM instead of the real DOM.
>It uses server-side rendering.
>It follows uni-directional data flow or data binding.


# Q2. What is JSX?


>=> JSX stands for JavaScript XML. JSX allows us to write HTML directly in the react withing the JavaScript. JSX allows us to write HTML elements without any createElement or appendChild method.

# Q3. What is Babel?


>=> Babel is a free and open-source JavaScript transcompiler that helps us to convert ECMASCRIPT 2015+ code into the backward JavaScript engine compatible code. With the help babel we can use JavaScript newset features into.

# Q4. What is Virtual DOM?


>=> Virtual DOM is virtual representation of the real DOM. When there is any changes in the state the new virtual DOM will created and then it will find the changes and make a note. Then it will find the best possible solution to update those changes in the real DOM. Now only the updated components will get re-rendered.

# Q5. How Virtual DOM Works?

- 1. when there is a update in the virtual DOM, react compares the virtual DOM with a snapshot of the virtual DOM taken right before the update of the virtual DOM.

- 2. With the help of this comparison React figures out which components in the UI needs to be updated. This process is called diffing.

- 3. Once React knows which components has been updated, then it replaces the original DOM nodes with the updated DOM node.

# Q6. What is props?


>=> Props are the short of properties and this is used for passing data from parent components to the child components.

>Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This helps in maintaining the unidirectional data flow and are generally used to render the dynamically generated data

# Q7. What is State?


>=> State is a plain JavaScript object which is used to represent that current situation of the components.State is used to create components own data and manage that data.

>They are mutable (to be changed) unlike the props and create dynamic and interactive components. They are accessed via this.state(), setState() is asynchronous.
- State shouldn’t be modified directly – the setState( ) should be used
- State affects the performance of your app, and therefore it shouldn’t be used unnecessarily.


# Q8. What is the diffrence between State and Props?

- Components receive data from outside with props, whereas they can create and manage their own data with state

- Props are used to pass data, whereas state is for managing data

- Data from props is read-only, and cannot be modified by a component that is receiving it from outside

- State data can be modified by its own component, but is private (cannot be accessed from outside)

- Props can only be passed from parent component to child (unidirectional flow)
Modifying state should happen with the setState ( ) method

>[More details about State](https://www.freecodecamp.org/news/react-js-for-beginners-props-state-explained/)

# Q9. What is pure components?

>=> Pure components are the components which are not re-renders if the previous props or state are same. Pure components restricts the re-rendering and ensuring the higher performance of the components.

- They can replace any component which only has a render(). These components enhance the simplicity of the code and performance of the application.

# Q10. What are keys in React?

>=> Key are unique identifiers in the React that hepls us to identify which components is updated, deleted or changed in the list. Key also helps to determine which components should re-render instead of re-rendering the whole lists.

# Q11. What are hooks?

>=> Hooks are the new introduced in react 16.8 version. React hooks are used in functional components to use state or other featires of the react without writing a class. Hooks are the functions which allows us to use the lifecycle features of the React. And it does not works in Class Components.

## Rules of Hooks:
1. It should be call at the top level of the components.
2. Only calls in the functional components.

## Main Hooks:
> useState , useEffect, useContext, useCallback, useReducer, useLayoutEffect,useMemo, useRef.

# Q12. What is an event in React?

>In React, events are the triggered reactions to specific actions like mouse hover, mouse click, key press, etc. Handling these events is similar to handling events in DOM elements. But there are some syntactical differences like:

- Events are named using camel case instead of just using the lowercase.

- Events are passed as functions instead of strings.


# Q13. What are the synthetic events?

>Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.

- In your memory remember all the onClick(s), onBlur(s), onChange(s) you have ever used in your react components, these are not the real ones, these are react's synthetic events.

# Q11. What is prop Drilling?

>=> Prop drilling is the process in React app in which props are passed from one part of the tree to the anther by going through the others part which do not actually need data but helping in passing the data through tree. 

# Q12. What are Higher order components?

>=> Higher order components are the components which takes components as an argumnets and returns a new components.

- Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components.


# Q13. What is webpack?

>=> Webpack is a module bundler, its main purpose is to bundles the JavaScript files for using in a browser. It takes desperate dependencies, create modules for them and bundles them in a managerial files. It is generally useful in SPAs.

# Q14. How useEffect work?

>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers, useEffect accepts two arguments. The second argument is optional.
useEffect(function, [dependency]). 

## Example :

```
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}
```

>1. No Dependency passed :
```
useEffect(() => {
  //Runs on every render
});
```

>2. An empty array :
```
useEffect(() => {
  //Runs only on the first render
}, []);
```
>3. Props or state values :
```
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

# Q19. What were the major problems with the MVC framework?

- DOM manipulation was very expensive
- Applications were slow and inefficient
- There was huge memory wastage.


# Q20. What is forwardRef ?
The forwardRef method in React allows parent components to move down (or “forward”) refs to their children. ForwardRef gives a child component a reference to a DOM entity created by its parent component in React. This helps the child to read and modify the element from any location where it is used.


# Q21. what is useRef ?

>the useRef is a hook that allow you to create a direct refrence to the dom element in the functional components.
```const ref = useRef(InitialValue)```
the useRef returns a mutable ref object. this object has a property called current.
- the value is persisted in the ref.current property.
- the .current property could be initialized to the passed arguments initialValue.
- useState and useReducer can cause your component to re render each time there is a call to update the functions.
- useRef() hook to keep track of variables withoiut causing re-renders. 


# Q22. What is flux?

>flux is an application design paradigm used as a replacement for the more traditional mvc pattern It is not a framework or library but a new kind of architecture that companies react and the concept of unidirectional data flow.

>The workflow between dispatcher, stores, and views component with distinct inputs and outputs.

# Q23. What is redux DevTool?

>redux devtool is a live editing travel enviroment for redux with hot reloding, action, replay, and customizable Ui.

# Q24. What is the diffrence between Componenet and container in Redux?

- Companent is a part of react Api. A component is a class or function that describe part of a React UI.

- Container is an informal term for a react component that is connected to a redux store. containers receive redux state updates and dispatch actions and they usually dont render dom elements they delegate rendering to presentational child components.

# Q24. What are reducers in redux?

>The reducers is a pure functions that takes the previos state and an action and returns the next state.
```
(previousState, action) => newState
```
- Its called a reducer because its the type of function you would pass to array. ```prototype.reduce(reducer,?initialValue)```.

- Its very Important that the reducer stay pure,Things you should never do inside a reducer.
 - Mututate its arguments.
 - perform side effect like API calls and routing transitions.
 - call non pure functions eg: Date.now() or Math.random().

# Q25. What is redux saga?

>redux-saga is a library that aims to make side effects (i.e: asynchronous things like data fetching and Impure things like accessing the browser cache ) in react/redux applications easire and better.

- its available in NPM as: npm install --save redux-saga

# Q26. what is redux thunk?

>Redux thunk middleware allows you to write actions creators that return a function instead of non action. That thunk can be used to delay the dispatch of an action or to dispatch only if a certain condition is met.The inner function receives the store methods dispatch and getState() as parameter.

# Q27. What is the diffrence between react-context and react-redux?

> you can use Context in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for. Whereas redux is much more powerful and provides a large number of features that the context api doesn't provide.

- Also react redux uses context internally but it doesn't expose this fact in the public API. so you should feel much safer using context via react redux than directly because if it changes, then burden of updating the code will be on react Redux instead developer responsiblity.


# Q28. 