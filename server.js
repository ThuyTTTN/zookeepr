const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//middleware added to server.js; provided a file path to a location in our application; instruced server to make files static resources; all of our front-end code can now be accessed without having a specific server endpoint created for it
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
