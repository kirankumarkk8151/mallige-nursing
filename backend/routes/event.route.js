const express = require('express');
const Event = require('../models/events'); // Make sure to provide the correct path

const router = express.Router();

// POST request to submit an application
router.post('/event', async (req, res) => {
  try {
    const newEvents= new Event(req.body);
    await newEvents.save();
    res.status(201).json({ message: 'Event added successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET request to fetch all applications
router.get('/getEvent', async (req, res) => {
  try {
    const Events = await Event.find();
    res.status(200).json(Events);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to delete a Event
router.delete('/deleteEvent/:id', async (req, res) => {
  try {
    const EventId = req.params.id;

    // Check if the Event exists
    const existingEvent = await Event.findById(EventId);
    if (!existingEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // Delete the Event
    await Event.findByIdAndDelete(EventId);

    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Error deleting Message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// Route to edit an Announcement
router.put('/editEvent/:id', async (req, res) => {
    try {
      const eventId = req.params.id;
      const { title, description, date, month,year } = req.body;
  
      // Check if the Announcement exists
      const existingEvent = await Event.findById(eventId);
      if (!existingEvent) {
        return res.status(404).json({ error: 'Announcement not found' });
      }
  
      // Update the Announcement fields
      existingEvent.title = title;
      existingEvent.description = description;
      existingEvent.date = date;
      existingEvent.month = month;
      existingEvent.year = year;
  
      // Save the updated Announcement
      const updatedevent = await existingEvent.save();
  
      res.status(200).json(updatedevent);
    } catch (error) {
      console.error('Error editing Announcement:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;
