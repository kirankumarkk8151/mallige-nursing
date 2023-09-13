
const express = require('express');
const Gallery = require('../models/gallery'); // Make sure to provide the correct path
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = file.originalname.split('.').pop();
    cb(null, 'image-' + uniqueSuffix + '.' + ext);
  }
});

const upload = multer({ storage: storage });

// POST request to upload an image along with title and description
router.post('/upload', upload.single('image'), async (req, res) => {
    try {
      const { title, description } = req.body;
      const imageFilename = req.file.filename; // Get the uploaded image filename
  
      // Create a new Image document and save it to the database
      const newImage = new Gallery({
        title,
        description,
        image: imageFilename // Store the image filename in the document
      });
  
      await newImage.save();
  
      res.status(201).json({ message: 'Image uploaded successfully' });
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
// GET request to fetch all image data
router.get('/getimages', async (req, res) => {
    try {
      const images = await Gallery.find();
      res.status(200).json(images);
    } catch (error) {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // DELETE request to delete an image by ID
router.delete('/deleteimage/:id', async (req, res) => {
    try {
      const imageId = req.params.id;
  
      // Check if the image exists
      const existingImage = await Gallery.findById(imageId);
      if (!existingImage) {
        return res.status(404).json({ error: 'Image not found' });
      }
  
      // Delete the image document from the database
      await Gallery.findByIdAndDelete(imageId);
  
      res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
      console.error('Error deleting image:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
module.exports = router;