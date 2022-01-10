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