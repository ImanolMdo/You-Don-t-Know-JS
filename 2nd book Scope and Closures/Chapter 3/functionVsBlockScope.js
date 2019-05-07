
// Hiding In Plain Scope

// The traditional way of thinking about functions is that you declare a function, and then add code inside it. But the inverse thinking is equally powerful and useful: take any arbitrary section of code you've written, and wrap a function declaration around it, which in effect "hides" the code.

// The practical result is to create a scope bubble around the code in question, which means that any declarations (variable or function) in that code will now be tied to the scope of the new wrapping function, rather than the previously enclosing scope. In other words, you can "hide" variables and functions by enclosing them in the scope of a function.

// Why would "hiding" variables and functions be a useful technique?

// There's a variety of reasons motivating this scope-based hiding. They tend to arise from the software design principle "Principle of Least Privilege" [^note-leastprivilege], also sometimes called "Least Authority" or "Least Exposure". This principle states that in the design of software, such as the API for a module/object, you should expose only what is minimally necessary, and "hide" everything else.

// This principle extends to the choice of which scope to contain variables and functions. If all variables and functions were in the global scope, they would of course be accessible to any nested scope. But this would violate the "Least..." principle in that you are (likely) exposing many variables or functions which you should otherwise keep private, as proper use of the code would discourage access to those variables/functions.

// Collision Avoidance

// Another benefit of "hiding" variables and functions inside a scope is to avoid unintended collision between two different identifiers with the same name but different intended usages. Collision results often in unexpected overwriting of values.


// Global "Namespaces"

// A particularly strong example of (likely) variable collision occurs in the global scope. Multiple libraries loaded into your program can quite easily collide with each other if they don't properly hide their internal/private functions and variables.

// Such libraries typically will create a single variable declaration, often an object, with a sufficiently unique name, in the global scope. This object is then used as a "namespace" for that library, where all specific exposures of functionality are made as properties of that object (namespace), rather than as top-level lexically scoped identifiers themselves.


// Note: The easiest way to distinguish declaration vs. expression is the position of the word "function" in the statement (not just a line, but a distinct statement). If "function" is the very first thing in the statement, then it's a function declaration. Otherwise, it's a function expression.

// Anonymous vs. Named

// You are probably most familiar with function expressions as callback parameters, such as:

// setTimeout( function(){
// 	console.log("I waited 1 second!");
// }, 1000 );
// This is called an "anonymous function expression", because function()... has no name identifier on it. Function expressions can be anonymous, but function declarations cannot omit the name -- that would be illegal JS grammar.

// Anonymous function expressions are quick and easy to type, and many libraries and tools tend to encourage this idiomatic style of code. However, they have several draw-backs to consider:

// Anonymous functions have no useful name to display in stack traces, which can make debugging more difficult.

// Without a name, if the function needs to refer to itself, for recursion, etc., the deprecated arguments.callee reference is unfortunately required. Another example of needing to self-reference is when an event handler function wants to unbind itself after it fires.

// Anonymous functions omit a name that is often helpful in providing more readable/understandable code. A descriptive name helps self-document the code in question.

// Inline function expressions are powerful and useful -- the question of anonymous vs. named doesn't detract from that. Providing a name for your function expression quite effectively addresses all these draw-backs, but has no tangible downsides. The best practice is to always name your function expressions:

// setTimeout( function timeoutHandler(){ // <-- Look, I have a name!
// 	console.log( "I waited 1 second!" );
// }, 1000 );



// let

// The let keyword attaches the variable declaration to the scope of whatever block (commonly a { .. } pair) it's contained in. In other words, let implicitly hijacks any block's scope for its variable declaration.

// var foo = true;

// if (foo) {
// 	let bar = foo * 2;
// 	bar = something( bar );
// 	console.log( bar );
// }

// console.log( bar ); // ReferenceError


// However, declarations made with let will not hoist to the entire scope of the block they appear in. Such declarations will not observably "exist" in the block until the declaration statement.

// {
//    console.log( bar ); // ReferenceError!
//    let bar = 2;
// }

// let Loops
// A particular case where let shines is in the for-loop case as we discussed previously.

// for (let i=0; i<10; i++) {
// 	console.log( i );
// }

// console.log( i ); // ReferenceError
// Not only does let in the for-loop header bind the i to the for-loop body, but in fact, it re-binds it to each iteration of the loop, making sure to re-assign it the value from the end of the previous loop iteration.


// const
// In addition to let, ES6 introduces const, which also creates a block-scoped variable, but whose value is fixed (constant). Any attempt to change that value at a later time results in an error.


// Lo que tiene let es que lo metes dentro de unos brackets y su scope está solo ahi, aunque sean brackets de if o lo que sea. Si fuera var el scope también sería de fuera.













































































