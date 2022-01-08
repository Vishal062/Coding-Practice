# what is function...


## Function statement / Function Declaration :

>the function is normally defined and can be used later on.

## Function expression : 

>the function is first created and assigned to a variable so that it can be called by its variable name and unless it is defined, it cannot be executed otherwise it throws out "Uncaught TypeError"

## Diffrence between F Statement and F expression :

>If we call function before initializing then in function statement it gives correct output but in function expression its gives you error because that is treated like undefined initially untill the code reached the function line itself.

## Anonymous function : 

>function where there is no need to define name for the function, it just can be assigned to variable

## Named function : 

>Normal function with its name assigned to a variable !!In this case you cannot call function by its name in outer scope!! (Scope Chain) like:
```
var b = function xyz(){
    console.log("Weird behavior of Named Function")
}
b();
```

> first class Functions / first class citizens : 
1) used as values
2) can be passed as argument
3) can be executed inside a closured function
4) can be taken as return