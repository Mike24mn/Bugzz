# Node & Express Bug Hunt!

**READ ALL INSTRUCTIONS BEFORE STARTING**

There are 10 bugs in total, can you find them all? There are hints throughout (???), you should only need to make minor modifcations to 10 lines of code.

**Don't race through the files looking for the issues!** They should all have a console log or error that help you identify them. Read the console so that you know what error will cause each bug. The last one is tricky since it doesn't throw any errors. Document the error, line number and your fix in this README for each of the bugs.

## Setup
```
npm install
npm start
```

> NOTE: A couple of bugs prevent the server from starting.

## Error List

Bug #1 in client.js 

lines 16 through 24 in the client.js contained several errors, including loop variable outside of the loop and the wrong tags, it was using a p tag originally

Bug # 2 in client.js

line 41, axios post method did not use right data type, it should be an object type.
 
// End client.js and index.html fixes (2 total bugs)

 Bug # 3 type in the router.js file, changed quoteslist to quotelist as there was a type/mispelling, also missing /quotes in argument

Bug # 4 Changed quoteList to array type with proper [] syntax
and added body parser via app.use above quote list.

// End router.js fixes (4 total bugs)

Bug # 7

Missing server 

TODO: Add the error here followed by the line of code you fixed.

### Bug 0

`ReferenceError: app is not defined`

Fixed `quote.router.js` line 28: switch `app` to `router`. _This is the solution to the first bug._

### Bug 1

...

## Extra Practice (Optional)

Complete the JS debugging exercises at:

- https://education.launchcode.org/intro-to-professional-web-dev/chapters/errors-and-debugging/exercises.html
