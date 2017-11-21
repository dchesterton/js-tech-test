# Sky Betting & Gaming Tech Test

## Technologies Used
I used React + Redux to develop the application. I used these technologies as I know you use them
at Sky Bet use and I wanted to showcase my ability. I also believe they're great technologies for
developing complex frontend UI's. I added Facebook's Immutable.js library to make it easier to
manage the state of the application and to ensure components were updated as data changed.

I bootstrapped the app using `create-react-app` as it provides a good starting point for developing
React apps, without having to manually configure Webpack etc.

I used Bootstrap to provide most of the styling as it allows one to quickly prototype layouts and provides attractive styling out of the box.

## Getting Started
The app uses `yarn` although the equivalent `npm` commands should work too.

To install dependencies run `yarn install`. Then run `yarn start` to launch the application and `docker-compose up` to start the API.

Navigate to http://localhost:3000 in a browser to view the application.

Tests can be run with `yarn test`.

## Future Improvements
If given more time, the app could be improved in a few ways:

  * I used the native `fetch` API to perform AJAX requests. For a production app this should have a polyfill to ensure it works on older browsers.
  * Settings such as how to display odds (fractional or decimal) and whether to show primary markets, could be persisted using local storage or cookies.
  * Remove Bootstrap and replace it with something more lightweight.
