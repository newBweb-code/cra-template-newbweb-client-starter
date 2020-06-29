# newbweb-client-starter

React Client Starter to follow along with newBweb's "Serverless React for Newbies" course.

## Installation
Make sure you ran the following command after using Create React App, or you will be missing some dev dependencies!

```sh
node addDevDependencies.js
npm install
```

## Usage

To start the React Client
```sh
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser & follow along!

## Unit Tests

The Client Starter is configured to use Jest and Enzyme for unit testing. We have provided some example unit tests with 100% code coverage. Keep it clean! :)

To run the tests, type
```sh
npm test
```

To check test coverage, type
```sh
npm test -- --coverage
```

## Included Packages

The Client Starter comes pre-packaged with all the features required to follow along newBweb's "Serverless React for Newbies" course. Additions to Create React App's default packages include:

* **@date-io/moment**, Interface to moment library required by Material-UI DatePicker
* **@material-ui/core**,  Material-UI
* **@material-ui/icons**,  Standardized Material packaged as SVG icons
* **@material-ui/pickers**, Better Date & Time pickers
* **aws-amplify**, AWS Amplify library to communicate with certain AWS services, i.e. Cognito
* **aws-sdk**, SDK used to communicate with AWS, i.e. Parameter Store
* **axios**, Popular Promise-based HTTP request library for external API calls
* **clsx**, A library to use multiple, conditional classNames
* **enzyme**, A JavaScript Testing utility for React
* **enzyme-adapter-react16**, Enzyme Adapter for React 16
* **enzyme-to-json**, Convert Enzyme wrappers to be compatible with Jest snapshots
* **lodash**, A very popular JavaScript utility library
* **moment**, Another very popular date library, we use this one with our API
* **node-sass**, A library that allows native compilation of .scss files
* **prop-types**, Offers type checking for React props
* **react-cookie**, A React-based cookie library
* **react-helmet**, A React Component that lets you change the document head
* **react-markdown**, Converts Markdown into React Components
* **react-router-dom**, A popular React Router
* **recoil**, A State management library for React, currently in experimental stages but very promising!
* **uuid**, A library to create UUIDs

Dev-only packages include (if you ran `node addDevDependencies.js`):

* **eslint-config-airbnb**, Airbnb configuration for ESLint
* **eslint-plugin-import**, Import syntax support for ESLint
* **eslint-plugin-jsx-a11y**, Helps identity accessbility issues with React elements
* **eslint-plugin-react**, React linting rules for ESLint
* **eslint-plugin-react-hooks**, Enforces ESLint rules for React Hooks

## About newBweb

newBweb is an online school that teaches technology for newbies.

For more info, please visit [newBweb](https://www.newbweb.com "newBweb")!

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
