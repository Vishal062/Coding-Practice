# Q1. What is React.StricMode?

>=> React.StricMode is a helper functinality of the JavaScript that helps us to write a cleaner code in a react. It gives feedback in the form of warning if we do not follow React guidelines.

>## What is react?
>React js is an open source javascript libary, is used to building User Interface in single page application, react is used for building UI in mobile and web apps.React is not a framework its just a library.

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

# Q7. What is State?


>=> State is a plain JavaScript object which is used to represent that current situation of the components.State is used to create components own data and manage that data.

# Q8. What is pure components?

>=> Pure components are the components which are not re-renders if the previous props or state are same. Pure components restricts the re-rendering and ensuring the higher performance of the components.

# Q9. What are keys in React?

>=> Key are unique identifiers in the React that hepls us to identify which components is updated, deleted or changed in the list. Key also helps to determine which components should re-render instead of re-rendering the whole lists.

# Q10. What are hooks?

>=> Hooks are the new introduced in react 16.8 version. React hooks are used in functional components to use state or other featires of the react without writing a class. Hooks are the functions which allows us to use the lifecycle features of the React. And it does not works in Class Components.

## Rules of Hools:
1. It should be call at the top level of the components.
2. Only calls in the functional components.

# Q11. What is prop Drilling?

>=> Prop drilling is the process in React app in which props are passed from one part of the tree to the anther by going through the others part which do not actually need data but helping in passing the data through tree. 

# Q12. What are Higher order components?

>=> Higher order components are the components which takes components as an argumnets and returns a new components.


# Q13. What is webpack?

>=> Webpack is a module bundler, its main purpose is to bundles the JavaScript files for using in a browser. It takes desperate dependencies, create modules for them and bundles them in a managerial files. It is generally useful in SPAs.

