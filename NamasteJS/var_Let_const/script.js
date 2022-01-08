console.log(a);

var a = 10;     //undefined
//Because memory has allocated to var a but not initialized till line 1 if you console
//after line 3 then it will give you 10;

const a = 10;   //let and const both giving you refrence error because of TDZ
let a = 10;     //cannot access a before Initialization(new message with error);

console.log(x); //refrence error its nothing present in our code.

//Ex 2 

/*****************************BLOCKE SCOPE*************************************************/
/*
First Love your explanation with examples Akshay sir, videos are exact on point!!!
For Revision:
Q) What is block in JavaScript?
> multiple js statements formed in a group enclosed in brackets and it forms a block

Q) What is need of a block/Grouping?
> JavaScript sometimes expect to run a single statement to run, but we need to run 
commands with multiple statements which is only possible by block

eg. on 4:14

write a simple function:
even empty script is perfectly valid js script, what about empty brackets!!
{
 var a = 10;
 let b = 20;
 const c =30; 
}

When a js script get hoisted (a Global Execution Context) gets created 'var' listed 
towards 'Global environment' and other variables 'let' and 'const' declarations go to 
the 'Block environment' 

This become especially important when deciding the scope of a particular variable, 
since b and c are located in 'Block environment' and for a as we know exists in 'Global 
environment' any statement out of the "Block" can access 'a' ie.  ' Variable in Global environment' 
and other are not!

so when we understand the extent of Global and local environment variables and their 'Scopes' == Environment 
that forms the lexical hierarchy of 'Scopes' and 'Scopes' have Levels like 'Scope inside scope'

see script in 7:03

 var a = 100;
{
 var a = 10;
 let b = 20;
 const c =30; 
 console.log(a);
 console.log(b);
 console.log(c);
}
 console.log(a);
 console.log(b);
 console.log(c);

So in block " var a = 10;" influences the value within the block hence  
console.log(a); >> 10 and outside of the block 'Variable in Global environment' 
influences value of a hence console.log(a); >> 100

Illegal shadowing:

let a = 200;
{
 var a =20;
}

as 'var' declaration goes to 'Global environment' and sets in Memory context, 
it cannot be set using 'Block environment' value Hence:    
Uncaught SyntaxError: Identifier 'a' has already been declared

*/