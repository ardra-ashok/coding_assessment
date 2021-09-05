# version control system
Its a system that keeps track of all changes made to a file or set of data so that a specific version can be reverted if necessary. this can ensure that everyone in the team is working on the most recent version of the file. 

# Difference between centralized and distributed version control system
Centralized 
- Uses a central server to store all versions of files.
- No developer has a copy of all the files in the local system.
- if the central server crashes entire data of the project will be lost.
Distributed
- Every developer has a copy of all the versions of the code on their system 
- Improves the ability to work offline an doesnot rely on single location for backups
- there is no threat even if the server crashes.

# Difference between Git Push and Git pull
Git Push is used to push the local repo changes to a a remote repo. After a local repo has been modified a push is executed to share the modification with the remote team members.
Git Pull is used to fetch and merge changes from the remote repo to the local repo.
Git pull is a combination of two commands, git fetch followed by a git merge.

# few git commands
git config - configure the username and email address
git init - initialize a local git repository
git add - add one or more files to the staging area.
git diff - view the changes made to the file.
git commit - commit changes to head but not to remote repo.
Git reset - undo local changes to the state of a git repo
git status - display the state of the working directory and staging area.
git merge - merge a branch init

# difference btw SASS, LESS, and stylus
SASS - Syntactically Awesome Stylesheets, ex: $font-color
LESS - Leaner Stylesheets ex: @font-color
Stylus offers a great deal of flexibility in writing syntax. it doesnot use @ or $ for defining variables.
font color

# Explain box sizing property
Box sizing property defines how the height and width of a box are calculated.
Content box: the default width and height apply only to the element's content. Padding and border are added outside the box.
Padding-box: the dimensions are added to both elements content and padding. The border is added outside the box. 
Border-box: the dimensions are added to the content, padding and the border.

# hide an element in css
display: none, hides the content and doesn't store it in the dom 
visibility: hidden, the element is added to the DOM and takes up space. However its not visible to the user.
position : absolute, the element can be made to appear outside the screen.

# 'important' in css
the 'important' keyword indicates the highest precedence, it overrides the cascading property.

# CSS sprites 
Since each image sendsout a HTTP request req seperately, a web page with a higher number of photos takes longer to load.CSS sprites are used to minimize the loading time of a web page by combining multiple small pictures into a single image. It decreases the amount of http req, and as a result, the time it takes for the page to load.

# Properties used to underline, strikethrough , and overlinetext
text-decoration

# what is closure?
A closure is a feature where an inner function has access to the outer function's variables.
 ex: function outer()
 {
  var b= 10;
  function inner(){
  alert(b)
  }
  return innervalue;
 }
 let innerfunc = outer();
 innerfunc();
 
 # What is JSX
 Javascript syntax extension. Its used with React to describe what the User Interface should look like. '
 By using JSX, you can write HTML structures in the same file that contains JS code.
 JSX helps in making the code easier to understand and debug as it avoids usage of JS DOM structures which are rather complex.

# React Extensions
React Flux and React Native.

# What is an event in React?
An event is an action that can be triggered by a User, or any system event like pressing a key, mouse click, etc. 

# What are components in React JS?
Components are the building blocks of any React application, and a single app usually consist of multiple components.
It splits the user interface into independent reusable pieces that can be processed seperately. A component is essentially a piece of information.

# What is state in react?
A state is an object in react that stores the values of properties belonging to a component that could change over a period of time.
Note: A state can be modified based on the user action or network changes. 
A state object can store multiple properties.
Everytime the state object changes , react rerenders the component to the browser. 
the state object is initialized in constructor
the state can store multiple properties. 
this.setState() is used to change the value of the state object.
setState() functions performs a shallow merge btwn new and the previous state.

# what is higher order component?
A higher order component is a function that takes a component and returns a new component. It facilitate the reusing of component logic.

# 

