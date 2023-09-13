const express = require('express');
const Application = require('../models/applications'); // Make sure to provide the correct path

const router = express.Router();

// POST request to submit an application
router.post('/apply', async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    await newApplication.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET request to fetch all applications
router.get('/applications', async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Route to delete a contact
router.delete('/deleteapplication/:id', async (req, res) => {
  try {
    const applicationId = req.params.id;

    // Check if the contact exists
    const existingApplication = await Application.findById(applicationId);
    if (!existingApplication) {
      return res.status(404).json({ error: 'Application not found' });
    }

    // Delete the contact
    await Application.findByIdAndDelete(applicationId);

    res.status(200).json({ message: 'Application deleted successfully' });
  } catch (error) {
    console.error('Error deleting Application:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
