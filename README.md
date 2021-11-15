# City Finder

## Table of Contents

- [Abstract](#Abstract)
- [Technologies](#Technologies)
- [Code Architecture](#Code-Architecture)
- [Install and Set Up](#Install-and-Set-Up)
- [Illustrations](#Illustrations)
- [Wins](#Wins)
- [Challenges](#Challenges)
- [Contributors](#Contributors)
- [Project Specs](#Project-Specs)

## Abstract

Web application that helps the user compare cities to move in.
The goal of this project was to demonstrate proficiency with react.js library by creating an intuitive and easy to use frontend application, allowing the user to search for different cities by size, to see an overview of any selected city, and see a comparison chart of up to 3 cities. 

## Technologies

- Javascript
- HTML
- CSS
- React
- React Router
- ContextAPI
- Hooks
- Cypress
- Express.js
- Material UI

## Install and Set Up

You can see this application on the following link:

[City Finder](https://city-finder-2107.herokuapp.com/)

To run Cypress tests:

1. Clone down the Readme repo
2. Cd into `readme`
3. Run `npm install`
4. Run `npm start`
5. Your browser will open the website.
6. In a separate terminal, run `npx cypress open`
7. Cypress browser will load, choose a test and see the results


## Code Architecture

The architecture of the app is based  on 5 main components with 2 MUI components, using context API to access and store cities in the comparison chart wit a reducer function to manage the state updates, using local storage. 

## Illustrations
![city-finder-desktop](https://user-images.githubusercontent.com/81398850/141854319-2315f669-2e44-4ef5-b672-498a6fb11f81.gif)

![city-finder-mobile](https://user-images.githubusercontent.com/81398850/141854345-2383998b-ceb3-4755-a129-1dc2fe4166cd.gif)


## Wins

- Implementation of Material UI components
- Achieved an intuitive and easy to use user interface

## Challenges

- I had challenges getting an managing the data from 3 different APIs

## Future Features

- Change data source for city overview and images

## Contributors

- [Carlos Gomez](https://github.com/karmacarlos)

## Project Specs

- The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html)
