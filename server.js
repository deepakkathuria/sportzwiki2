const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const app = express();
app.use(bodyParser.json());
const post = require('./models')
const db = require('./models');


// Connect to the database
// const sequelize = new Sequelize( {
//   dialect: 'postgres',
//   "database": "postgres",
//     "username": "postgres",
//     "password": "Gaurav1234",
//     "host": "sportzwiki.czlcygqhxc57.ap-south-1.rds.amazonaws.com",
//     "dialect": "postgres",
//     "pool": {
//       "max": 10,
//       "min": 0,
//       "idle": 10000
//     }
// });

// Define a model
// const User = sequelize.define('user', {
//   name: Sequelize.STRING,
//   email: Sequelize.STRING,
// });


  
// const Test1 = sequelize.define('test1', {
//     name: Sequelize.STRING,
//     email: Sequelize.STRING,
//     phone:Sequelize.STRING
//   });
  

  // db.sequelize.sync({alter:true});

  
// const Post = db.sequelize.define('post', {
//     name: Sequelize.STRING,
//     email: Sequelize.STRING,
//     phone:Sequelize.STRING
//   });
  



// Create the table
// db.sequelize.sync()
//   .then(() => console.log('Users table created successfully'))
//   .catch(err => console.error('Error creating users table: ', err));

// Create a new user
// app.post('/users', (req, res) => {
//   const { name, email } = req.body;

//   User.create({ name, email })
//     .then(user => res.json(user))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// Get all users
app.get('/posts', (req, res) => {
  db.post.findAll()
    .then(posts => res.json(posts))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
