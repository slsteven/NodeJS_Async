# NodeJS Asynch #

Testing different ways to ensure functions do not execute before mulitple asynchronous operations finish because of NodeJS non-blocking feature.

## Development ##

Install Node packages
`$ npm install`

Start development server
`$ node server.js`

## How to Use ##

1. last function runs before asynchronous operatons finish
  * `http://localhost:8000/query1`
2. Used npm module Async.each() to wait until async operations are complete
  * `http://localhost:8000/query2`
3. No library, just used simple if-check with counter to check if operations are complete
  * `http://localhost:8000/query3`
4. Other possible methods: Promises or Step.js

## Example result ##
Samsung Galaxy J3 (2016) 5"...

Black Touch Screen Digitizer...

NEW DEWALT DCS361M1 CORDLESS...

PlayStation 4 500GB Console...

Alcatel Onetouch Fierce 2 Android...

Apple 12" MacBook 256GB...

White LCD Display+Touch Screen...

Done query2

