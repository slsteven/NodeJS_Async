# NodeJS Asynch #

Testing different ways to resolve waiting for mulitple asynchronous operations to finish before exectuing additional code because of NodeJS non-blocking feature.

## Development ##

Install Node packages
`$ npm install`

Start development server
`$ node server.js`

## How to Use ##

1. last function runs before asynchronous operatons finish
..* `http://localhost:8000/query1`

2. Used npm module Async.each() to wait until async operations are complete
..* `http://localhost:8000/query2`

3. No library, just used simple if-check with counter to check if operations are complete
..* `http://localhost:8000/query3`

4. Other possible methods: Promises or Step.js

