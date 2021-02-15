# Creating conduit

### Basic Informations:

- BASE URL: https://mighty-oasis-08080.herokuapp.com/api/

### API Info:

- List of tags (GET)

  - /api/tags

- Login (POST)
  - /api/user
  - Data Sample: `{user: {email: "a@gmail.com", password: "hello123"}}`
- Signup (POST)

  - /api/users
  - Data Sample: `{user: {email: "a@gmail.com", password: "hello123", username: "test123"}}`

- Signup (POST)

  - /api/users
  - Data Sample: `{user: {email: "a@gmail.com", password: "hello123", username: "test123"}}`

- Verify User (GET)

  - /api/user
  - You need to add `authorization: Token ..`

- Public Articles (GET)
  - /api/articles?limit=10&offset=0

### Tech Stack

- React Hooks
- Formik

### Steps

#### Day 1

- [ ] React + React Router DOM + Formik setup
- [ ] Home Page (Public)
- [ ] Login Page
- [ ] Signup Page
- [ ] Private Articles Page
- [ ] Complete Authentication

> React + React Router DOM + Formik setup

Setup create react app with the following requirements:

- Install `react-router-dom`
- Install `formik`
- Setup `BrowserRouter` in `App` component

> Home Page (Public)

- List of 10 articles with title, description and read more button
- List will be in the form of cards
- Each card will contain tag, title, description (max 120 characters) and author info at the bottom
- Author info will contain image, name and data article is posted

> Login Page

- Email Field
- Password Field
- Login Button
- Each field (email, and password) should contain client side form validation
  - Email should contain `@`
  - Password should be at-least 6 characters
  - Password must contain a letter and a number
  - No fields can be empty

> Signup Page

- Email Field
- Password Field
- Username Field
- Signup Button
- Each field (email, and password) should contain client side form validation

  - Email should contain `@`
  - Password should be at-least 6 characters
  - Password must contain a letter and a number
  - No fields can be empty
  - Username should be at-least 6 characters long

> Private Articles Page

- List of 10 articles with title, description and read more button
- List will be in the form of cards
- Each card will contain tag, title, description (max 120 characters) and author info at the bottom
- Author info will contain image, name and data article is posted

> Complete Authentication

- Flow will be `login => if accurate data => private articles page`
- Flow will be `signup => if account created => private articles page`
- Hard refresh will validate and move to respective pages

#### Day 2

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
