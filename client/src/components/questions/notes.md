## Setup Q & A section

- [x] get product ID from props
- [x] setup axios GET requests for questions information
- [x] Get: question results (an array) and update state
- [x] create component for individual questions
  - [x] add question from props
- [x] create component for individual answers
  - [x] setup axios GET request for answers data
  - [x] add answers component
  - [x] add hooks to manage answers data state
- [x] add helpful section to question
- [x] add add answer button to question
- [] add who answer is by to answer section
-[x] add data of answer to answer section
- [x] add helpful section to a
- [x] add report button to answer section

## Build out 'Load More Answers'

- [x] refactor map function
  - [x] slice the first 2 answers from the answers array
- [x] add useState to manage state of how many answers to display

## Build out 'More Answered Questions'

- [] refactor map function
 - [] map over the first 2 questions in questions array using slice by default
 - [] set the second parameter of slice to a variable with initial state of 2
 - [] add setQuestion function which increases questionAmount in state by 2
 - [] pass setQuestion to onClick in 'More Answered Questions' button
