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


# Featues To Implement
## Changing Username and pasword and email
Create a profile section that will be under the currently displayed username
that will allow the functionality to change the usename and all

## Creating the user in database as soom as he sign ups
Attach a function to .then in sign up so that the user is registered in the database itself
