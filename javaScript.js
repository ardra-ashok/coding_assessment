if (true)
{
 var varVariable = 'this is true';
}
var varVariable = 'this is false' // this is possible with var.
console.log(varVariable);

if (true) {
 let letVariable = 'this is true'
}
console.log(letVariable);

// var is function scoped.
// let is block scoped
/* The main difference between let and var is that scope of a variable defined with let is limited to the block in which it is declared while variable declared with var has the global scope. So we can say that var is rather a keyword which defines a variable globally regardless of block scope. */