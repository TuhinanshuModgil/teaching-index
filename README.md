# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Learned Things
1. How to use the react-select dependency 
2. To add custom width sizes or custom sizes to any component use the format w-[300px] where 300px reresents the custom value with unit
## react-select dependency
1. We have to pass the options to the select component as an array that need to have two fields value and label 
2. The label fied is the one that will be displayed as the options in the list 
3. The value field can be used to search the list 
4. We can also add other key value pairs besides the value and label but they are a must have

# AcademicicYear Comoponent
1. The component uses the react-select to create a dropdown menu to choose the academic year
2. It takes the alreay setted academic year and the setAcademic year as its props to be able to change the academic year when a new academic year is selected

# User Sign up
At the time of the sign up the user fills a username a pass and an email. These information can later be changed 

# FireStore Usage
## References
To correctly preform the required operations to the database we need to create references to the place that we want to store the data
To create references we can use various methods 
1. To create reference to collections
```
const userRef  = collection(db,"users")
// Reference to a collection at root

const userRef  = collection(db,"users", "Tuhinanshu", "hobbies")
// Reference to a collection Hobbies inside document Tuhinanshu inside collection users

```
2. Creating references to Documents
```
const tuhinanshuRef  = doc(db,"users", "Tuhinanshu")
// Reference to Tuhinahsu document inside collection users
// You can go multilevel deep with it using same syntax as in collectons


```

## Adding Data
Now lets see how you add data
There are too many fucking ways to add data and each have their own usecases
1. "addDoc" using firestore generated ID :  it takes two parameter 

first is the reference to the collection that you want to add the doc to. If the collection dosent exists then its created and then the document is add
Second argument is an object that tells the content of the document that you want to add




# Featues To Implement
## Changing Username and pasword and email
Create a profile section that will be under the currently displayed username
that will allow the functionality to change the usename and all

## Creating the user in database as soom as he sign ups
Attach a function to .then in sign up so that the user is registered in the database itself
