// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const port = 3000;

// const uri = "mongodb+srv://ahmedawsaf:AwsafisKing@travelcluster.p1ggd6r.mongodb.net/tour?retryWrites=true&w=majority";

// mongoose.connect(uri)
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Start your Express server
//     app.listen(port, () => {
//       console.log(`Server is listening at http://localhost:${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Failed to connect to MongoDB:', error);
//   });

// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const tour = require('./routes/tour');
const guide = require('./routes/guide');
const transaction = require('./routes/transaction')

const app = express();
const PORT = 4000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/tour', tour);
app.use('/api/auth', authRoutes);
app.use('/guide', guide);
app.use('/transaction', transaction);


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
