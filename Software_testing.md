# Software Testing?
is the process of assessing the  completeness and quality of a computer software.

# Two types of software testing:
- Manual 
- Automated testing

# What is a Bug? 
A bug is an error, fault or flaw in software that makes a system behaves in unexpected ways.

# Manual testing
A form of testing that is done through the human interaction with the system. for Ex: by dragging, checking, clicking a link or button and typing through a webpage.

# Automated testing 
Use of softwares to control the execution of the tests and comparison of actual behavior with the expected behaviour.

Advantages
 - faster than manual
 - More Reliable : easy to find error than human
 - Maintanable: we can review, edit, and extend the collection test.

# Test Suite
A collection of tests for a web application is called a test suite.

# Documentation
Any content thats seperate from implementation code that explains a software that how it works or how to use it.

# Regression
When adding a new feature to the product, its possible that something will break. If that breaks happened with in a featured that developed earlier that is called regression.

# describe and it blocks
describe() takes two arguments, the first is the name of the test group, and the second is a callback function.
it() should be written as if you were saying it out loud: “It should equal zero”, “It should log the user in”, etc. it() takes two arguments, a string explaining what the test should do, and a callback function which contains our actual test:
describe('string name', function(){
 it('should blah blah blah', function(){
  // Test case goes here
})
}

# Setup, Excercise and Verify
- Setup : create objects, variables, and set conditionala that your test depends on.
- Excercise: execute the functionality that you are testing
- Verify: Check your expectation against the result of the excercise phase.( using assert library)
- teardown: some tests  require a fourth phase called teardown. Teardown reset any conditions that were changed during the test.

# Advantages of a good test framework
Fast, complete, reliable, maintanable, expressive - easy to read and descriptive, isolatesd

# difference between assert.ok and assert.equal and assert.strictEqual?
assert.equal is used for comparing the values.
assert.strictEqual is for comparing the type of the values
assert.ok() method tests if a given expression is true or not.
assert.deepEqual() method tests if two objects, and their child objects, are equal, using the == operator.
assert.deepStrictEqual  assert.deepStrictEqual() method tests if two objects, and their child objects, are equal, using the === operator. If the two objects are not equal, an assertion failure is being caused, and the program is terminated.The === operator tests if the values and the types are equal.

# What is TDD?
Test Driven Development is a programming technique where you write the testcode before implementation. 
Red - write a failing test before writing any code.
Green - make the test pass.
Refactor - Clean up and optimise code following characteristics of a good test.

# Edge Case
That is a problem or situation that occurs only at an extreme operating parameter. Some special cases that you need to account for. 