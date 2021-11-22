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
- Node.js
- Material UI
- Heroku

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

If you're interested on seeing the planning and execution of this project you can take a look to the wire frame, architecture diagram and project board:

[Wire Frame](https://www.figma.com/file/GcUUaJsUScjWSct2hHFCF8/City-Finder?node-id=0%3A1)
[Project Board](https://github.com/karmacarlos/city-finder/projects/1)
[Architecture Diagram](https://www.figma.com/file/S5YgTinblZQSlPs6GA3k2A/City-Finder?node-id=0%3A1)

## Illustrations
![city-finder-desktop](https://user-images.githubusercontent.com/81398850/141854319-2315f669-2e44-4ef5-b672-498a6fb11f81.gif)

![city-finder-mobile](https://user-images.githubusercontent.com/81398850/141854345-2383998b-ceb3-4755-a129-1dc2fe4166cd.gif)

![Screen Shot 2021-11-21 at 5 54 46 PM](https://user-images.githubusercontent.com/81398850/142787572-6b2c58e0-6e87-411f-a20b-2ed064868eda.png)


## Wins

- Implementation of Material UI components
- Achieved an intuitive and easy to use UI
- Created a [proxy server](https://github.com/karmacarlos/city-finder-server) to handle all API calls and hide API keys

## Challenges

- I had challenges getting an managing the data from 3 different APIs
- I had challenges troubleshooting a deployed proxy server in heroku

## Future Features

- Change data source for city overview and images

## Contributors

- [Carlos Gomez](https://github.com/karmacarlos)

## Project Specs

- The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html)
