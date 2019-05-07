// So, the best way to think about things is that all declarations, both variables and functions, are processed first, before any part of your code is executed.

// When you see var a = 2;, you probably think of that as one statement. But JavaScript actually thinks of it as two statements: var a; and a = 2;. The first statement, the declaration, is processed during the compilation phase. The second statement, the assignment, is left in place for the execution phase.

// Our first snippet then should be thought of as being handled like this:

// var a;
// a = 2;

// console.log( a );
// ...where the first part is the compilation and the second part is the execution.

// Similarly, our second snippet is actually processed as:

// var a;
// console.log( a );

// a = 2;
// So, one way of thinking, sort of metaphorically, about this process, is that variable and function declarations are "moved" from where they appear in the flow of the code to the top of the code. This gives rise to the name "Hoisting".

// In other words, the egg (declaration) comes before the chicken (assignment).

// Note: Only the declarations themselves are hoisted, while any assignments or other executable logic are left in place. If hoisting were to re-arrange the executable logic of our code, that could wreak havoc.

// It's also important to note that hoisting is per-scope. En cada scope se realiza el hoisting o levantamiento, se mueven arriba las variables al compilar.

// Function declarations are hoisted, as we just saw. But function expressions are not.

// foo(); // not ReferenceError, but TypeError!

// var foo = function bar() {
// 	// ...
// };


// Functions First
// Both function declarations and variable declarations are hoisted. But a subtle detail (that can show up in code with multiple "duplicate" declarations) is that functions are hoisted first, and then variables.


// While multiple/duplicate var declarations are effectively ignored, subsequent function declarations do override previous ones.

// foo(); // 3

// function foo() {
// 	console.log( 1 );
// }

// var foo = function() {
// 	console.log( 2 );
// };

// function foo() {
// 	console.log( 3 );
// }


// it's probably best to avoid declaring functions in blocks.
































































