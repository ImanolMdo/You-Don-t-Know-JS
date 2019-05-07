// Let's just say, for simplicity's sake, that any snippet of JavaScript has to be compiled before (usually right before!) it's executed. So, the JS compiler will take the program var a = 2; and compile it first, and then be ready to execute it, usually right away.

// The Cast
// Let's meet the cast of characters that interact to process the program var a = 2;, so we understand their conversations that we'll listen in on shortly:

// Engine: responsible for start-to-finish compilation and execution of our JavaScript program.

// Compiler: one of Engine's friends; handles all the dirty work of parsing and code-generation (see previous section).

// Scope: another friend of Engine; collects and maintains a look-up list of all the declared identifiers (variables), and enforces a strict set of rules as to how these are accessible to currently executing code.

// For you to fully understand how JavaScript works, you need to begin to think like Engine (and friends) think, ask the questions they ask, and answer those questions the same.


// Engine/Scope Conversation
// function foo(a) {
// 	console.log( a ); // 2
// }

// foo( 2 );
// Let's imagine the above exchange (which processes this code snippet) as a conversation. The conversation would go a little something like this:

// Engine: Hey Scope, I have an RHS reference for foo. Ever heard of it?

// Scope: Why yes, I have. Compiler declared it just a second ago. He's a function. Here you go.

// Engine: Great, thanks! OK, I'm executing foo.

// Engine: Hey, Scope, I've got an LHS reference for a, ever heard of it?

// Scope: Why yes, I have. Compiler declared it as a formal parameter to foo just recently. Here you go.

// Engine: Helpful as always, Scope. Thanks again. Now, time to assign 2 to a.

// Engine: Hey, Scope, sorry to bother you again. I need an RHS look-up for console. Ever heard of it?

// Scope: No problem, Engine, this is what I do all day. Yes, I've got console. He's built-in. Here ya go.

// Engine: Perfect. Looking up log(..). OK, great, it's a function.

// Engine: Yo, Scope. Can you help me out with an RHS reference to a. I think I remember it, but just want to double-check.

// Scope: You're right, Engine. Same guy, hasn't changed. Here ya go.

// Engine: Cool. Passing the value of a, which is 2, into log(..).



// Nested Scope

// The simple rules for traversing nested Scope: Engine starts at the currently executing Scope, looks for the variable there, then if not found, keeps going up one level, and so on. If the outermost global scope is reached, the search stops, whether it finds the variable or not.


// Scope is the set of rules that determines where and how a variable (identifier) can be looked-up. This look-up may be for the purposes of assigning to the variable, which is an LHS (left-hand-side) reference, or it may be for the purposes of retrieving its value, which is an RHS (right-hand-side) reference.

// LHS references result from assignment operations. Scope-related assignments can occur either with the = operator or by passing arguments to (assign to) function parameters.

// The JavaScript Engine first compiles code before it executes, and in so doing, it splits up statements like var a = 2; into two separate steps:

// First, var a to declare it in that Scope. This is performed at the beginning, before code execution.

// Later, a = 2 to look up the variable (LHS reference) and assign to it if found.

// Both LHS and RHS reference look-ups start at the currently executing Scope, and if need be (that is, they don't find what they're looking for there), they work their way up the nested Scope, one scope (floor) at a time, looking for the identifier, until they get to the global (top floor) and stop, and either find it, or don't.

// Unfulfilled RHS references result in ReferenceErrors being thrown. Unfulfilled LHS references result in an automatic, implicitly-created global of that name (if not in "Strict Mode" [^note-strictmode]), or a ReferenceError (if in "Strict Mode" [^note-strictmode]).


// Lex-time
// As we discussed in Chapter 1, the first traditional phase of a standard language compiler is called lexing (aka, tokenizing). If you recall, the lexing process examines a string of source code characters and assigns semantic meaning to the tokens as a result of some stateful parsing.

// It is this concept which provides the foundation to understand what lexical scope is and where the name comes from.

// To define it somewhat circularly, lexical scope is scope that is defined at lexing time. In other words, lexical scope is based on where variables and blocks of scope are authored, by you, at write time, and thus is (mostly) set in stone by the time the lexer processes your code.

// In other words, no bubble for some function can simultaneously exist (partially) inside two other outer scope bubbles, just as no function can partially be inside each of two parent functions.

// Scope look-up stops once it finds the first match. The same identifier name can be specified at multiple layers of nested scope, which is called "shadowing" (the inner identifier "shadows" the outer identifier). Regardless of shadowing, scope look-up always starts at the innermost scope being executed at the time, and works its way outward/upward until the first match, and stops.

// No matter where a function is invoked from, or even how it is invoked, its lexical scope is only defined by where the function was declared.

// cheating lexical scope leads to poorer performance.

// Two mechanisms in JavaScript can "cheat" lexical scope: eval(..) and with. The former can modify existing lexical scope (at runtime) by evaluating a string of "code" which has one or more declarations in it. The latter essentially creates a whole new lexical scope (again, at runtime) by treating an object reference as a "scope" and that object's properties as scoped identifiers.

// The downside to these mechanisms is that it defeats the Engine's ability to perform compile-time optimizations regarding scope look-up, because the Engine has to assume pessimistically that such optimizations will be invalid. Code will run slower as a result of using either feature. Don't use them.

































































