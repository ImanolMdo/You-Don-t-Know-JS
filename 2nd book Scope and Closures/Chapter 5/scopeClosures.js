
// Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.


// Closure is all around you in JavaScript, you just have to recognize and embrace it.

// Closures are not a special opt-in tool that you must learn new syntax and patterns for. No, closures are not even a weapon that you must learn to wield and master as Luke trained in The Force.

// Closures happen as a result of writing code that relies on lexical scope. They just happen. You do not even really have to intentionally create closures to take advantage of them. Closures are created and used for you all over your code. What you are missing is the proper mental context to recognize, embrace, and leverage closures for your own will.

// The enlightenment moment should be: oh, closures are already occurring all over my code, I can finally see them now. Understanding closures is like when Neo sees the Matrix for the first time.


// (Some) joking aside, essentially whenever and wherever you treat functions (which access their own respective lexical scopes) as first-class values and pass them around, you are likely to see those functions exercising closure. Be that timers, event handlers, Ajax requests, cross-window messaging, web workers, or any of the other asynchronous (or synchronous!) tasks, when you pass in a callback function, get ready to sling some closure around!



// Let's try:

// for (var i=1; i<=5; i++) {
// 	(function(){
// 		setTimeout( function timer(){
// 			console.log( i );
// 		}, i*1000 );
// 	})();
// }
// Does that work? Try it. Again, I'll wait.

// I'll end the suspense for you. Nope. But why? We now obviously have more lexical scope. Each timeout function callback is indeed closing over its own per-iteration scope created respectively by each IIFE.

// It's not enough to have a scope to close over if that scope is empty. Look closely. Our IIFE is just an empty do-nothing scope. It needs something in it to be useful to us.

// It needs its own variable, with a copy of the i value at each iteration.

// for (var i=1; i<=5; i++) {
// 	(function(){
// 		var j = i;
// 		setTimeout( function timer(){
// 			console.log( j );
// 		}, j*1000 );
// 	})();
// }
// Eureka! It works!

// A slight variation some prefer is:

// for (var i=1; i<=5; i++) {
// 	(function(j){
// 		setTimeout( function timer(){
// 			console.log( j );
// 		}, j*1000 );
// 	})( i );
// }
// Of course, since these IIFEs are just functions, we can pass in i, and we can call it j if we prefer, or we can even call it i again. Either way, the code works now.

// The use of an IIFE inside each iteration created a new scope for each iteration, which gave our timeout function callbacks the opportunity to close over a new scope for each iteration, one which had a variable with the right per-iteration value in it for us to access.

// Problem solved!

// Block Scoping Revisited
// Look carefully at our analysis of the previous solution. We used an IIFE to create new scope per-iteration. In other words, we actually needed a per-iteration block scope. Chapter 3 showed us the let declaration, which hijacks a block and declares a variable right there in the block.

// It essentially turns a block into a scope that we can close over. So, the following awesome code "just works":

// for (var i=1; i<=5; i++) {
// 	let j = i; // yay, block-scope for closure!
// 	setTimeout( function timer(){
// 		console.log( j );
// 	}, j*1000 );
// }
// But, that's not all! (in my best Bob Barker voice). There's a special behavior defined for let declarations used in the head of a for-loop. This behavior says that the variable will be declared not just once for the loop, but each iteration. And, it will, helpfully, be initialized at each subsequent iteration with the value from the end of the previous iteration.

// for (let i=1; i<=5; i++) {
// 	setTimeout( function timer(){
// 		console.log( i );
// 	}, i*1000 );
// }
// How cool is that? Block scoping and closure working hand-in-hand, solving all the world's problems. I don't know about you, but that makes me a happy JavaScripter.


// Closure seems to the un-enlightened like a mystical world set apart inside of JavaScript which only the few bravest souls can reach. But it's actually just a standard and almost obvious fact of how we write code in a lexically scoped environment, where functions are values and can be passed around at will.

// Closure is when a function can remember and access its lexical scope even when it's invoked outside its lexical scope.

// Closures can trip us up, for instance with loops, if we're not careful to recognize them and how they work. But they are also an immensely powerful tool, enabling patterns like modules in their various forms.

// Modules require two key characteristics: 1) an outer wrapping function being invoked, to create the enclosing scope 2) the return value of the wrapping function must include reference to at least one inner function that then has closure over the private inner scope of the wrapper.

// Now we can see closures all around our existing code, and we have the ability to recognize and leverage them to our own benefit!




























































































