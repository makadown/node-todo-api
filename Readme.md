# node-todo-api

Ejercicio de REST Apis con NodeJS & Mongoose. Instruido por Andrew Mead como parte del curso: https://www.udemy.com/the-complete-nodejs-developer-course-2.

## Notas:

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

### Porqué se usa PATCH en lugar de PUT?

Por lo general PUT se usa cuando se reemplaza una entidad completa. Por ejemplo, digamos que tenemos un objeto del siguiente tipo:
```
{
    email: 'test@email.com',
    name: 'John Doe',
    age: 25,
}
```

Cuando usamos PUT, establecemos que reemplazaremos la entidad completa, de modo que se DEBE proveer el objeto con absolutamente los campos email, name, and age al usar PUT.


Sin embargo, con PATCH se puede reemplazar solamente ciertos atributos en una entidad.

De modo que para el mismo objeto mencionado arriba, puedo enviar a PATCH un objeto como el siguiente:
```
{
    email: test2@email.com
}
```
y reemplazara solamente el atributo email del objeto en lugar de todo el objeto.

De todas formas, el uso de PATCH o PUT no deja de ser un tema interesante de discusión debido a que pueden existir casos en que sea mejor utilizar PUT.

### Publicando en Heroku

Al publicar este proyecto en Heroku, el add-on de mLab nos proporciona una variable de entorno muy útil:


MONGODB_URI


Más info en : https://devcenter.heroku.com/articles/mongolab#getting-your-connection-uri