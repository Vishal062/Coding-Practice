# Memoization

- Memoization is a technique where all the previously computed results are stored, and they can be used whenever the same result is needed. Memoized function is an optimization technique to improve the performance of your code when you have to do certain computations again and again so it’s best that the result is cached or stored for later use which reduces the cost of extra computations.

>- Is memoization the same as caching?

Yes, memoization is a specific type of caching, it involves storing the return values of a function while caching refers to any storing technique (like HTTP caching).

## When To memoize a function?
- It works with recursive functions, which perform heavy operations. like GUI renderings etc.
- It works best with heavy computations.
- It works best when we know a set of inputs will produce a certain output.
- It should be implemented on pure functions means functions that return the same output with a particular input.

## Conclusion:
In memoization, we prevent our functions from calling functions which re-calculates the same output over and over again. So, memoization helps to reduce the amount of time taken in the execution of programs.