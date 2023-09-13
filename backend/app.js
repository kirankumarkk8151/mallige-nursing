const express = require('express');
const mongoose = require('mongoose'); // Import mongoose
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors'); 


app.use(cors({
    origin: 'http://localhost:4200', // Specify the allowed origin(s)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true // Allow sending cookies in cross-origin requests (if applicable)
  }));
  

// MongoDB connection string
const url = 'mongodb://127.0.0.1:27017/mallige'; // Change to your database name



// Connect to MongoDB using Mongoose
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
  app.use(express.json()); // For parsing JSON
  const authRoutes = require('./routes/user.route.js');
  const applyRoutes = require('./routes/applications.route.js'); 
  const contactRoutes = require('./routes/contact.route.js'); 
  const announcmentRoutes = require('./routes/announcment.route.js'); 
  const eventRoutes = require('./routes/event.route.js'); 
  const galleryRoutes = require('./routes/gallery.route.js'); 
  app.use('/', authRoutes);
  app.use('/', applyRoutes);
  app.use('/', contactRoutes);
  app.use('/', announcmentRoutes);
  app.use('/', eventRoutes);
  app.use('/', galleryRoutes);
  app.use('/uploads', express.static('uploads'));
 
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
