# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Learned Things
1. How to use the react-select dependency 
## react-select dependency
1. We have to pass the options to the select component as an array that need to have two fields value and label 
2. The label fied is the one that will be displayed as the options in the list 
3. The value field can be used to search the list 
4. We can also add other key value pairs besides the value and label but they are a must have
    
# AcademicicYear Comoponent
1. The component uses the react-select to create a dropdown menu to choose the academic year
2. It takes the alreay setted academic year and the setAcademic year as its props to be able to change the academic year when a new academic year is selected

