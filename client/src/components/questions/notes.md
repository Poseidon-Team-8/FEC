## Setup Q & A section

  - [x] get product ID from props
  - [x] setup axios GET requests for questions information
  - [x] Get: question results (an array) and update state
  - [x] create component for individual questions
    - [x] add question from props
    - [x] sort data from GET response by helpfulness descending
  - [x] create component for individual answers
    - [x] setup axios GET request for answers data
    - [x] add answers component
    - [x] add hooks to manage answers data state
    - [x] sort answers by seller answered questions first then by descending by helpfulness
  - [x] add helpful section to question
  - [x] add add answer button to question
  - [x] add who answer is by to answer section
  - [x] add data of answer to answer section
  - [x] add helpful section to a
  - [x] add report button to answer section

  ## Build out 'Load More Answers'

  - [x] refactor map function
    - [x] slice the first 2 answers from the answers array
  - [x] add useState to manage state of how many answers to display
  - [x] add useState to manage button text between 'see more answers' and 'collapse answers'
  - [x] add function that manages button text through useState function  and toggles the amount of answers to display through useState
  - [x] add button to report an inappropraite answer
    - [x] add useState to manage button disabled value
    - [x] write ternary which toggles text of button between disabled and disable

  ## Build out 'More Answered Questions'

  - [x] refactor map function
  - [x] map over the first 2 questions in questions array using slice by default
  - [x] set the second parameter of slice to a variable with initial state of 2
  - [x] add setQuestion function which increases questionAmount in state by 2
  - [x] pass setQuestion to onClick in 'More Answered Questions' button
  - [x] if no more questions to display, switch button to collapse and have it go back to 2 questions

  ## Build out Helpfulness component for Answers

  - [x] send a PUT request increasing helpfulness count by one
  - [x] set disabled property to allow only one click per user
  - [x] update local state of helpfulness by 1
  - [x] send a PUT request inside of PUT handler for report
    - [x] write axios put request
    - [x] add endpoint
    - [x] add headers with authorization

  ## Build out Report component for Answers

  - [x] send a PUT request for Report
  - [x] set disabled property to allow only one click per user
  -[x] send a PUT request inside of PUT handler for report
    - [x] write axios put request
    - [x] add endpoint
    - [x] add headers with authorization

  ## Build out Helpfulness component for Questions

  - [x] send a PUT request increasing helpfulness count by one
  - [x] set disabled property to allow only one click per user
  - [x] update local state of helpfulness by 1
  - [x] send a PUT request inside of PUT handler for helpfulness
    - [x] write axios put request
    - [x] add endpoint
    - [x] add headers with authorization

## Setup AddAnswer modal

- [x] pass productId and question body down from questions component
- [x] add GET request to pull down product Name
- [x] add Title (H2) 'Submit your Answer'
- [x] add subtitle: 'Product Name: Question Body'
- [x] add Your Answer input field
- [x] add What is your nickname input field
- [x] add Your email input field
- [] add Upload your photos field **not required
- [x] add Submit answer button
- [x] add hooks for answer, name, email
- [x] invoke hooks with onChange for answer, name, email
- [x] write function to handle submit which invokes a POST request
- [x] write POST request handler which invoke another POST request to database
- [x] form needs to be validated
  - [x] error occurs if:
    - [x] any mandatory field is blank
    - [x] email is not valid format
    - [] images selected are invalid or can't upload
- [x] write a condition to display a button if isClicked is false,
and display the add answer form when isClicked is true

- [x] setup modal through styles.css file

## Setup AddQuestion modal

- [x] pass productId and question body down from questions component
- [x] add GET request to pull down product Name
- [x] add Title (H2) 'Submit your Question'
- [x] add subtitle: 'About the [Product Name Here]'
- [x] add Your Question input field
- [x] add What is your nickname input field
- [x] add Your email input field
- [x] add Upload your photos field **not required
- [x] add Submit question button
- [x] add hooks for question, name, email
- [x] invoke hooks with onChange for question, name, email
- [x] write function to handle submit which invokes a POST request
- [x] write POST request handler which invoke another POST request to database
- [x] form needs to be validated
  - [x] error occurs if:
    - [x] any mandatory field is blank
    - [x] email is not valid format
    - [x] images selected are invalid or can't upload
- [x] write a condition to display a button if isClicked is false,
and display the add answer form when isClicked is true
- [x] setup modal through styles.css file

## Setup Search bar to filter questions


- [] write onChange handler in questions (parent) for Search component
- [] use filter to filter questions using includes and passing in the onChange value
- [] update state of productQuestions
- [] pass function down with props
- [] add onChange for input field in Search component calling onChange handler
- []