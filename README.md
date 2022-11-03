# Smart TV Application

- We want you to create a production ready, Smart TV Application that will allow you to navigate through a number of photos from different topics (e.g wallpapers, nature, etc) using the Unsplash API, and when a menu item (topic) is selected, it retrieves topic photos from an API and displays it in a horizontally scrolling grid.

## Guidelines

The goal of this test is not to give you step by step guidance on how the app should function in every aspect. We are giving you base requirements and mockups, so be creative in your approach.

Columns in the grid should shift left or right ONE column at a time.

To get information about the API Endpoints that you are required to pull data from, you can go to:

- https://unsplash.com/developers
  (You will need to register as a developer on unsplash and add an “App”)

To get a list of available topics:

- https://api.unsplash.com/topics

To get a list of related topic photos per topic :

- https://api.unsplash.com/topics/<topic_name>/photos

## Platform Support

This will be run in a Smart TV environment, for the purposes of this test you can assume that if the app runs in latest versions of Safari, Firefox and Chrome it will run on the TV. The app will run at a screen resolution of 1920 x 1080. (This can be fixed, but our preference is responsive)

## Available Scripts

Before you run this App, please create a .evn.local file in the root project and provide the following environment variables:

- REACT_APP_API_BASE_URL=https://api.unsplash.com
- REACT_APP_API_ACCESS_KEY= << unsplash access key>>

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
