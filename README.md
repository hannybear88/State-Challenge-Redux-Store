# State-Challenge-Redux-Store
Challenge #22: Extra Credit Assignment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)]()


## Description

In this module, we learned how to manage global state using React’s Context API. The Context API is quickly gaining traction as a worthy alternative or perhaps even successor to other libraries that manage global state in tandem with React, such as Flux or MobX. Nonetheless, the open source JavaScript library Redux remains the industry standard for managing complex state in a large-scale React application, and you’ll likely encounter it on the job.

Our challenge this week is to refactor the e-commerce platform from [Activity 26](../01-Activities/26-Stu_Actions-Reducers/Unsolved) so that it uses [Redux](https://redux.js.org/). We won’t need to make sweeping changes to the code, but we will need to read through the Redux documentation on our own to find the information we need. Some guidelines have been provided in the Getting Started section to point us in the right direction. If we haven't yet, download the [e-commerce platform code from Activity 26](http://static.fullstack-bootcamp.com/fullstack-ground/unit-22/26-Stu_Actions-Reducers.zip).

**On the Job**: Web developers frequently have to immerse themselves in a new technology to solve a problem, with only that tool’s documentation for help. They must sift through it to find the information that matches the specific problem they’re trying to solve. This assignment will allow us to practice a skill that we’ll use many times over the course of our career.


## Table of Contents
* [Installation](#installation)
* [Tests](#Tests)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Mock Up](#Mock-Up)
* [Getting Started](#Getting-Started)
* [Usage](#Usage)
* [Demo](#Demo)
* [Technologies Used](#Technologies-Used)
* [Support](#Support)
* [Credits](#Credits)
* [Contributors](#Contributors)

## Installation 


## Tests 

## User Story

- AS a senior engineer working on an e-commerce platform
- I WANT my platform to use Redux to manage global state instead of the Context API
- SO THAT my website's state management is taken out of the React ecosystem


## Acceptance Criteria

- GIVEN an e-commerce platform that uses Redux to manage global state
- WHEN I review the app’s store
- THEN I find that the app uses a Redux store instead of the Context API
- WHEN I review the way the React front end accesses the store
- THEN I find that the app uses a Redux provider
- WHEN I review the way the app determines changes to its global state
- THEN I find that the app passes reducers to a Redux store instead of using the Context API
- WHEN I review the way the app extracts state data from the store
- THEN I find that the app uses Redux instead of the Context API
- WHEN I review the way the app dispatches actions
- THEN I find that the app uses Redux instead of the Context API

## Mock-Up

This section reviews the web application's general appearance and functionality.

The following animation shows how a user can register using the Signup page and then navigate to the Products page:

![A user registers on the Signup page and then navigates to the Products page, which displays images and descriptions of products.](./Assets/22-state-homework-demo-01.gif)

The following animation shows how the user can select a category, choose a product, view details about it on the product page, and add and remove it from their shopping cart:

![The user selects a category, chooses a product, views details about it on the product page, and adds it to and removes it from their shopping cart.](./Assets/22-state-homework-demo-02.gif)

Finally, the user can check out by going to their shopping cart, as shown in the following animation:

![The user checks out by going to their shopping cart.](./Assets/22-state-homework-demo-03.gif)

## Getting Started

For instructions to add Redux to your application, refer to the [Redux Fundamentals basic tutorial](https://redux.js.org/basics/basic-tutorial). Note that the documentation will refer to additional packages that you'll need to complete this implementation.

Be sure to review ALL of the documentation, because there are newer methods that can make these tools much easier to implement. React has gone through several iterations; as such, some React-and-Redux tutorials will assume that you aren't using Hooks.

You'll use the Stripe API to process payments, which includes making front-end and back-end changes. Don't worry, Stripe provides test credentials, so you won't need to use a real credit card to try it out. Refer to the [Stripe docs on testing your integration](https://stripe.com/docs/testing).

**Important**: The Challenge requires a specific version `(>=7.0)` of `npm` in order to install peer dependencies like GraphQL when deploying to Heroku. By default, Heroku uses `npm 6.x`, which may cause some issues. Be sure to refer to the [Heroku Docs on Specifying an NPM Version](https://devcenter.heroku.com/articles/nodejs-support#specifying-an-npm-version) to ensure your `package.json` file is set up correctly, as shown in the following snippet:

  ```json
  {
    "engines": {
      "npm": "7.x"
    }
  }
  ```

  ## Usage 

  

  ## Demo

![Deploy](https://www.herokucdn.com/deploy/button.svg)]()

Screenshots

<!-- - Below is the screenshot of the text editor "Just Another Text Editor (J.A.T.E)" deployed on Heroku

![deployed to Heroku screenshot](/Assets/images/pwa_JATE_deployedonheroku_screenshot.png)

- Screenshot of J.A.T.E deployed on Heroku with content
![Text Editor deployed with content](/Assets/images/pwa_JATE_app_installed_with_content_screenshot.png)

- JATE app installation prompt pops up after the user clicks install

![JATE app installation prompt](/Assets/images/pwa_JATE_install_app_prompt_screenshot.png)

- JATE app shows on the desktop

![icon on the desktop](/Assets/images/pwa_JATE_icon_on_desktop_screenshot.png)

- J.A.T.E. app is downloaded
![JATE app intalled](/Assets/images/pwa_JATE_app_installed_screenshot.png)

- J.A.T.E. app is downloaded with content 

![J.A.T.E. app installed with content](/Assets/images/pwa_JATE_app_installed_with_content_screenshot.png) -->

  ## Technologies Used
<!-- ![Technologies](https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Technologies](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white)
![Technologies](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![Technologies](https://img.shields.io/badge/npm%20package-moment-%3CCOLOR%3E?style=flat-square&logo=npm)
![Technologies](https://img.shields.io/badge/npm%20package-express-green?style=flat-square&logo=npm)
![Technologies](https://img.shields.io/badge/npm%20package-mongoose-purple?style=flat-square&logo=npm) 
![Technologies](https://img.shields.io/badge/Database-MongoDB-yellow?style=flat-square&logo=mongoDB) 
![Technologies](https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Technologies](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white)
![Technologies](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![Technologies](https://img.shields.io/badge/npm%20package-moment-%3CCOLOR%3E?style=flat-square&logo=npm)
![Technologies](https://img.shields.io/badge/npm%20package-express-green?style=flat-square&logo=npm)
![Technologies](https://img.shields.io/badge/npm%20package-mongoose-purple?style=flat-square&logo=npm) 
![Technologies](https://img.shields.io/badge/Database-MongoDB-yellow?style=flat-square&logo=mongoDB)  -->

  ## Support

  If you need support or have any questions about the repo, please [open an issue](https://github.com/hannybear88/Model-View-Controller--MVC--Challenge-Tech-Blog/issues) or contact me via email at hannahkchung88@gmail.com. You can find more of my work on my GitHub, [hannybear88](https://github.com/hannybear88/).

  ## Credits

- Starter code provided by UCSD 
- Code by Hannah Chung

  ## Contributors 

- Starter code provided by UCSD 
- Code by Hannah Chung


