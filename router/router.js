const express = require('express');
const router = express.Router();
const Payload = require('../models/payload');

// Define routes
router.get('/payload', (req, res) => {
    Payload.find({})
    .then(response=>{
        res.json({ data: response });
    })
});

router.post('/payload', async (req, res) => {
    const updatedPayload = await Payload.findOneAndUpdate({}, { payload: req.body }, { upsert: true, new: true });

    return res.status(200).json({ message: 'Payload updated successfully', payload: updatedPayload });
});

module.exports = router;