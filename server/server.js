var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

// Creating the [Todo] model, mongoose pluralizes the database name in mongodb ([Todos])
var Todo = mongoose.model('Todo', {
    text: { type: String, required: true, minlength: 1, trim: true },
    completed: { type: Boolean, default: false },
    completedAt: { type: Number, default: null }
});

var newTodo = new Todo({
    text: 'test'
}); 

newTodo.save().then( (doc) => {
    console.log('Saved todo', doc);
}, (e)=>{ 
    console.log('Unable to save TODO.');
});

var otherTodo = new Todo({
    text: 'test 2'
});

otherTodo.save().then( (doc) => {
    console.log( JSON.stringify(doc, undefined, 2));
}, (e)=>{ 
    console.log('Unable to save TODO.');
});


// User
// email - require it - trim it - set type - set min length of 1
var User = mongoose.model('User', {
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    }
  });
  
  var user = new User({
    email: 'mario@example.com   '
  });
  
  user.save().then((doc) => {
    console.log('User saved', doc);
  }, (e) => {
    console.log('Unable to save user', e);
  });