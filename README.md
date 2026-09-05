# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

to start the project

### `npm test`

to test the test cases

### `npm run build`

used to build production ready

# to know the exsistance of an input box we use screen.getByRole("textbox") and expect(checkbox).toBeInTheDocument()

# to test placeholder value we use screen.getByPlaceholderText(/Enter your name/)

# to test name value we use expect(inputbox).toHaveAttribute("name","username")

# to test id value we use expect(inputbox).toHaveAttribute("id","name")

# to test type value we use expect(inputbox).toHaveAttribute("type","text")

# to test name value we use expect(inputbox).toHaveAttribute("value","username")

# How to Run Spacific test file
npm run test filename

# How to grouping of test cases
use describe function to create group on the bases of class,module,features,functionality
# How to skip any describe group 
just write skip after describe keyword like this describe.skip(name of group,()=>{test case 1......})

# How to run  Only one group 
just write only after describe keyword describe.only(name of group,()=>{test case 1......})


# How to create nested describe function means 
one describe function inside other describe function