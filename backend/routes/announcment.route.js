const express = require('express');
const Announcment = require('../models/announcments'); // Make sure to provide the correct path
const multer = require('multer');
const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/events');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = file.originalname.split('.').pop();
      cb(null, 'image-' + uniqueSuffix + '.' + ext);
    }
  });
  
  const upload = multer({ storage: storage });

  
// POST request to submit an application
router.post('/announcment', upload.single('image'), async (req, res) => {
  try {
    const { title, description, date, month, year, startTime, endTime } = req.body;
    
    let imageFilename = ''; // Define the imageFilename variable outside the if condition

    if (req.file && req.file.filename) {
      imageFilename = req.file.filename; // Assign the filename if file exists
    }
    
    const newAnnouncments = new Announcment({
      title,
      description,
      date,
      month,
      year,
      startTime,
      endTime,
      image: imageFilename // Store the image filename in the document
    });

    await newAnnouncments.save();
    res.status(201).json({ message: 'Announcement added successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// GET request to fetch all applications
router.get('/getAnnouncment', async (req, res) => {
  try {
    const Announcments = await Announcment.find();
    res.status(200).json(Announcments);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to delete a Announcment
router.delete('/deleteAnnouncment/:id', async (req, res) => {
  try {
    const AnnouncmentId = req.params.id;

    // Check if the Announcment exists
    const existingAnnouncment = await Announcment.findById(AnnouncmentId);
    if (!existingAnnouncment) {
      return res.status(404).json({ error: 'Announcment not found' });
    }

    // Delete the Announcment
    await Announcment.findByIdAndDelete(AnnouncmentId);

    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Error deleting Message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to edit an Announcement
router.put('/editAnnouncement/:id', async (req, res) => {
    try {
      const announcementId = req.params.id;
      const { title, description, date, month,year,startTime, endTime } = req.body;
  
      // Check if the Announcement exists
      const existingAnnouncement = await Announcment.findById(announcementId);
      if (!existingAnnouncement) {
        return res.status(404).json({ error: 'Announcement not found' });
      }
  
      // Update the Announcement fields
      existingAnnouncement.title = title;
      existingAnnouncement.description = description;
      existingAnnouncement.date = date;
      existingAnnouncement.month = month;
      existingAnnouncement.year = year;
      existingAnnouncement.startTime = startTime;
      existingAnnouncement.endTime = endTime;
  
      // Save the updated Announcement
      const updatedAnnouncement = await existingAnnouncement.save();
  
      res.status(200).json(updatedAnnouncement);
    } catch (error) {
      console.error('Error editing Announcement:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

module.exports = router;
