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

