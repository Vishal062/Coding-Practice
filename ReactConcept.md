# 1 what is virtual dom ?

- In simple words, virtual DOM is just a copy of the original DOM kept in the memory and synced with the real DOM by libraries such as ReactDOM.

- Virtual DOM has the same properties that of the Real DOM, but it lacks the power to directly change the content of the screen.

- Think of Virtual DOM as the blueprint of a machine, changes made to the blueprint doesn't reflects on the machine itself.

## How Virtual DOM works ?

So when there is a update in the virtual DOM, react compares the virtual DOM with a snapshot of the virtual DOM taken right before the update of the virtual DOM.

With the help of this comparison React figures out which components in the UI needs to be updated. This process is called diffing. The algorithm that is used for the diffing process is called as the diffing algorithm.

Once React knows which components has been updated, then it replaces the original DOM nodes with the updated DOM node.

> examples:

```Initial DOM```

```
<section>
         <div>
               <h1>Hello React</h1>
         </div>
         <div>
               <h1>Hello React 2</h1>
         </div>
</section>
```

```Updated DOM```

```
<section>
         <div>
               <h1>Hello React</h1>
         </div>
         <div>
               <h1>Hello React 5</h1>
         </div>
</section>
```

- Now here when there is update in the UI then react compares the new virtual DOM with the pre-updated virtual DOM and points out that in the second <div> the content has been changed so it only updates the content of the second div in the real DOM.

- This process is fast as only a single node had to change as opposed the whole repainting of the UI.

## But wait what if the DOM elements are added ?

- In this scenario only a node has been added to the second div so React just adds it to the real DOM.

## RECAP
- Frequent DOM manipulations are expensive.
- Virtual DOM is a virtual representation of DOM in memory.
- Virtual DOM is synced with real DOM with ReactDOM library. This process is called Reconciliation.
- React compares the Virtual DOM and pre-updated Virtual DOM and only marks the sub-tree of components that are updated. This process is called diffing.
- The algorithm behind diffing is called Diffing algorithm.
- React uses keys to avoid unnecessary re-renders.


# 2 What are React Portals?

> React Portal is a first-class way to render child components into a DOM node outside of the parent DOM hierarchy defined by the component tree hierarchy. The Portal's most common use cases are when the child components need to visually break out of the parent container.

## Why do we need it?

> When we use a modal inside a particular element (a parent component), the modal's height and width will be inherited from the component in which the modal resides. So there is a possibility that the modal will be cropped and not be shown properly in the application. A traditional modal will require CSS properties like overflow:hidden and z-index to avoid this issue.

## Conclusion

> React Portal comes in handy when we need to render child components outside the normal DOM hierarchy without breaking the event propagation's default behavior through the React component tree hierarchy. This is useful when rendering components such as modals, tooltips, popup messages, and so much more.

# What is context API?

>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.

-  This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

## React context API: How it works?

> React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.

## How to use Context API?

- Create a folder under your app root named contexts (not required. just a convention)
- Create a file named <your context name>Context.js, e.g. userContext.js
- import and create a context like so:

```
      import React, { createContext } from "react";
      const UserContext = createContext();      
```

- Create a component that will wrap the provider named Provider e.g. UserProvider
Example using React Hooks:

```
      const UserProvider = ({ children }) => {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(1);
  const happyBirthday = () => setAge(age + 1);
  return (
    <UserContext.Provider value={{ name, age, happyBirthday }}>
      {children}
    </UserContext.Provider>
  );
};     
```
- Finally export them

```
export { UserProvider};
```

- And use them however you like

```
ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
```

# How can you memoize components in React?

>Memoization is essentially just caching. Imagine a complex function that is slow to run which takes a as an argument. In order to speed up this function, you can cache the results of running the function so that when the function is run with the same inputs you can use the cached value instead of recomputing the value

- example :

```
export function Movie({ title, releaseDate }) {
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}
export const MemoizedMovie = React.memo(Movie);
```

> React.memo(Movie) returns a new memoized component MemoizedMovie.
MemoizedMovie outputs the same content as the original Movie component, but with one difference — MemoizedMovie render is memoized. React reuses the memoized content as long as title and releaseDate props are the same between renderings


```
// First render - MemoizedMovie IS INVOKED.
<MemoizedMovie 
  title="Heat" 
  releaseDate="December 15, 1995" 
/>
// Second render - MemoizedMovie IS NOT INVOKED.
<MemoizedMovie
  title="Heat" 
  releaseDate="December 15, 1995" 
/>
```

> [`Wanna Go deep Check This Link`](https://dmitripavlutin.com/use-react-memo-wisely/)

## Conclusion

>React.memo() is a great tool to memoize functional components. When applied correctly, it prevents useless re-renderings when the next props equal to previous ones.
Take precautions when memoizing components that use props as callbacks. Make sure to provide the same callback function instance between renderings.

## What is redux?

>Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. With Redux, the state of your application is kept in a store, and each component can access any state that it needs from this store.

[`Redux`](https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/)


## What are the three principles that Redux follows?

>1. Single source of truth: The state of the entire application is stored in an object/ state tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.

>2. State is read-only:The only way to change the state is to trigger an action. An action is a plain JS object describing the change. Just like state is the minimal representation of data, the action is the minimal representation of the change to that data. 

>3. Changes are made with pure functions: In order to specify how the state tree is transformed by actions, you need pure functions. Pure functions are those whose return value depends solely on the values of their arguments.


## What do you understand by “Single source of truth”?

>Redux uses ‘Store’ for storing the application’s entire state at one place. So all the component’s states are stored in the Store and they receive updates from the Store itself. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.

## List down the components of Redux.
> Redux is composed of the following components:
- Action – It’s an object that describes what happened.
- Reducer –  It is a place to determine how the state will change.
- Store – State/ Object tree of the entire application is saved in the Store.
- View – Simply displays the data provided by the Store.

## What is redux persist?
Redux persist is a library  that allows saving redux store in the local storage of an application.

## How do I use redux persist in React?
Install redux persist
Configure redux store


## what is a Generator function ?

>A normal function starts from the very first line of the function, runs until the end until it returns values or the last line of the function, and returns only one, single value.
What if we want to return multiple values and pause a function execution? It’s possible in JavaScript, and we can achieve this with the help of generator functions.

> Key Facts About Generator Functions

- A generator function is quite different from normal functions. To create a generator, we will have to use “function*” as the syntax construct.
Providing an “*” after a function keyword indicates you’re creating a generator function.

> How a Generator Function Works

- Calling generator functions is not similar to calling normal regular functions. To call a generator function, we will need to call it using the “next()” method. When we call a generator function with the next() method, it will run the execution until the nearest yield “<value>” statement. The value can be omitted, and it will return “undefined.” The function execution is paused, and the yielded value returns to the generator’s caller.

- The result of next() is always an object with two properties:
 - Value: the yielded value.
 - Done: true if the function code is finished else will return false.
 
>Example:Id generator>>>

```
function* generateId() {
  let id = 1

  while (true) {
    yield id
    id++
  }
}

const gen = generateId()
console.log(gen.next().value)
// 1
console.log(gen.next().value)
// 2
console.log(gen.next().value)
// 3
```

```
function* steps(){ 
let a=10; let b=20; console.log(a+b); 
yield "first time yield" 
console.log(a*b);
 yield "second time yield" 
console.log(b/a);
 yield "third time yield"
 return 
}
const gen= steps() 
gen.next().value
 gen.next().value

```

## Cookies vs Local Storage vs Session Storage?

>Cookies
- Has different expiration dates (both the server or client can set up expiration date)
- The Client can't access the Cookies if the HttpOnly flag is true
- Has SSL Support
- Data are transferred on each HTTP request
- 4kb limit

>Local Storage
- Has no expiration date
- Client only
- Has no SSL support
- Data are not transferred on each HTTP request
- 5 mb limit (check with the browser)

>Session Storage
- Data is gone when you close the browser tab
- Client only
- Has no SSL support
- Data are not transferred on each HTTP request
- 5-10 mb limit (check with the browser)
