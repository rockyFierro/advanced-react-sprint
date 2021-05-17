# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional class?
 a stateful class holds state, it retains a shape based on it's current state, a functional class will always act the same way without any state. 
2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount is called twice, once on the client and once on the server...it's depricated and componentDidMount is now used; DidMount is called once on the client side, it is called after the initial render. componentDidUpdate is not called on the initial render but rather any time a render is made i.e. state changes
3. Define stateful logic.
logic that has to do with controlling state.

4. What are the three step of creating a successful test? What is done in each phase?
arrange - set up the application
act - query the dom on what we are expecting to see and happen in the browser
assert - the final test part, where we tell our tester what we expected and what has happened.