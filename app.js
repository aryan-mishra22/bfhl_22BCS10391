const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Your personal information 
const USER_ID = "Aryan"; 
const EMAIL = "aryankumar22mishra@gmail.com"; 
const ROLL_NUMBER = "22BCS10391"; 

// GET endpoint
app.get('/bfhl', (req, res) => {
  try {
    return res.status(200).json({
      operation_code: 1
    });
  } catch (error) {
    return res.status(500).json({
      is_success: false,
      error: "Internal server error"
    });
  }
});

// POST endpoint
app.post('/bfhl', (req, res) => {
  try {
    // Validate request body
    if (!req.body || !req.body.data || !Array.isArray(req.body.data)) {
      return res.status(400).json({
        is_success: false,
        error: "Invalid request format. Expected a JSON object with a 'data' array."
      });
    }

    const inputData = req.body.data;
    
    // Process the data
    const numbers = inputData.filter(item => !isNaN(item) && item.toString().trim() !== '');
    const alphabets = inputData.filter(item => 
      typeof item === 'string' && 
      item.length === 1 && 
      item.match(/[a-zA-Z]/)
    );
    
    // Find highest alphabet (case insensitive)
    let highestAlphabet = [];
    if (alphabets.length > 0) {
      const sortedAlphabets = [...alphabets].sort((a, b) => 
        a.toLowerCase().localeCompare(b.toLowerCase())
      );
      highestAlphabet = [sortedAlphabets[sortedAlphabets.length - 1]];
    }

    // Return the response
    return res.status(200).json({
      is_success: true,
      user_id: USER_ID,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highestAlphabet
    });
  } catch (error) {
    return res.status(500).json({
      is_success: false,
      error: "Internal server error"
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});