// Objects

// Properties can either be accessed with dot notation (i.e., obj.a) or bracket notation (i.e., obj["a"]). Dot notation is shorter and generally easier to read, and is thus preferred when possible.

// Bracket notation is useful if you have a property name that has special characters in it, like obj["hello world!"] -- such properties are often referred to as keys when accessed via bracket notation. The [ ] notation requires either a variable (explained next) or a string literal (which needs to be wrapped in " .. " or ' .. ').

// The difference between == and === is usually characterized that == checks for value equality and === checks for both value and type equality. However, this is inaccurate. The proper way to characterize them is that == checks for value equality with coercion allowed, and === checks for value equality without allowing coercion; === is often called "strict equality" for this reason.

// To boil down a whole lot of details to a few simple takeaways, and help you know whether to use == or === in various situations, here are my simple rules:

// If either value (aka side) in a comparison could be the true or false value, avoid == and use ===.
// If either value in a comparison could be one of these specific values (0, "", or [] -- empty array), avoid == and use ===.
// In all other cases, you're safe to use ==. Not only is it safe, but in many cases it simplifies your code in a way that improves readability.

// You should take special note of the == and === comparison rules if you're comparing two non-primitive values, like objects (including function and array). Because those values are actually held by reference, both == and === comparisons will simply check whether the references match, not anything about the underlying values.

// For example, arrays are by default coerced to strings by simply joining all the values with commas (,) in between. You might think that two arrays with the same contents would be == equal, but they're not:

// But JavaScript string values can also be compared for inequality, using typical alphabetic rules ("bar" < "foo").

// var a = 41;
// var b = "42";
// var c = "43";

// a < b;		// true
// b < c;		// true
// What happens here? In section 11.8.5 of the ES5 specification, it says that if both values in the < comparison are strings, as it is with b < c, the comparison is made lexicographically (aka alphabetically like a dictionary). But if one or both is not a string, as it is with a < b, then both values are coerced to be numbers, and a typical numeric comparison occurs.

// Variables

// An identifier must start with a-z, A-Z, $, or _. It can then contain any of those characters plus the numerals 0-9.

// reserved words," and include the JS keywords (for, in, if, etc.) as well as null, true, and false.

// If you try to access a variable's value in a scope where it's not available, you'll get a ReferenceError thrown. If you try to set a variable that hasn't been declared, you'll either end up creating a variable in the top-level global scope (bad!) or getting an error, depending on "strict mode" (see "Strict Mode"). Let's take a look:

// In addition to creating declarations for variables at the function level, ES6 lets you declare variables to belong to individual blocks (pairs of { .. }), using the let keyword. Besides some nuanced details, the scoping rules will behave roughly the same as we just saw with functions:


// switch (a) {
// 	case 2:
// 		// do something
// 		break;
// 	case 10:
// 		// do another thing
// 		break;
// 	case 42:
// 		// do yet another thing
// 		break;
// 	default:
// 		// fallback to here
// }
// The break is important if you want only the statement(s) in one case to run. If you omit break from a case, and that case matches or runs, execution will continue with the next case's statements regardless of that case matching. This so called "fall through" is sometimes useful/desired:

// switch (a) {
// 	case 2:
// 	case 10:
// 		// some cool stuff
// 		break;
// 	case 42:
// 		// other stuff
// 		break;
// 	default:
// 		// fallback
// }
// Here, if a is either 2 or 10, it will execute the "some cool stuff" code statements.

// Another form of conditional in JavaScript is the "conditional operator," often called the "ternary operator." It's like a more concise form of a single if..else statement, such as:

// var a = 42;

// var b = (a > 41) ? "hello" : "world";

// // similar to:

// // if (a > 41) {
// //    b = "hello";
// // }
// // else {
// //    b = "world";
// // }
// If the test expression (a > 41 here) evaluates as true, the first clause ("hello") results, otherwise the second clause ("world") results, and whatever the result is then gets assigned to b.

// There's another way to execute a function expression, which is typically referred to as an immediately invoked function expression (IIFE):

// (function IIFE(){
// 	console.log( "Hello!" );
// })();
// // "Hello!"
// The outer ( .. ) that surrounds the (function IIFE(){ .. }) function expression is just a nuance of JS grammar needed to prevent it from being treated as a normal function declaration.

// The final () on the end of the expression -- the })(); line -- is what actually executes the function expression referenced immediately before it.


// If a function has a this reference inside it, that this reference usually points to an object. But which object it points to depends on how the function was called.

// It's important to realize that this does not refer to the function itself, as is the most common misconception.


// If a function has a this reference inside it, that this reference usually points to an object. But which object it points to depends on how the function was called.

// It's important to realize that this does not refer to the function itself, as is the most common misconception.

// Here's a quick illustration:

// function foo() {
// 	console.log( this.bar );
// }

// var bar = "global";

// var obj1 = {
// 	bar: "obj1",
// 	foo: foo
// };

// var obj2 = {
// 	bar: "obj2"
// };

// // --------

// foo();				// "global"
// obj1.foo();			// "obj1"
// foo.call( obj2 );		// "obj2"
// new foo();			// undefined
// There are four rules for how this gets set, and they're shown in those last four lines of that snippet.

// foo() ends up setting this to the global object in non-strict mode -- in strict mode, this would be undefined and you'd get an error in accessing the bar property -- so "global" is the value found for this.bar.
// obj1.foo() sets this to the obj1 object.
// foo.call(obj2) sets this to the obj2 object.
// new foo() sets this to a brand new empty object.

// Bottom line: to understand what this points to, you have to examine how the function in question was called. It will be one of those four ways just shown, and that will then answer what this is.


// The most common non-JavaScript JavaScript you'll encounter is the DOM API.

// The document variable exists as a global variable when your code is running in a browser. It's not provided by the JS engine, nor is it particularly controlled by the JavaScript specification. It takes the form of something that looks an awful lot like a normal JS object, but it's not really exactly that. It's a special object, often called a "host object."

// Moreover, the getElementById(..) method on document looks like a normal JS function, but it's just a thinly exposed interface to a built-in method provided by the DOM from your browser. In some (newer-generation) browsers, this layer may also be in JS, but traditionally the DOM and its behavior is implemented in something more like C/C++.










