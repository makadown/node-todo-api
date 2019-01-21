# node-todo-api

Ejercicio de REST Apis con NodeJS & Mongoose. Instruido por Andrew Mead como parte del curso: https://www.udemy.com/the-complete-nodejs-developer-course-2.


### Notas:

En package.json hay diferencias, pa que se pongan truchas.

En windows: 
```
"scripts": {
    "start": "node server/server.js",
    "test": "SET NODE_ENV=test && mocha server/**/*.test.js",
    "test-watch": "nodemon --exec \"npm test\""
  },
```

En Linux:
```
"scripts": {
    "start": "node server/server.js",
    "test": "export NODE_ENV=test && mocha server/**/*.test.js",
    "test-watch": "nodemon --exec 'npm test'"
  },
```