Bajaj Finserv Health Dev Challenge
Project Overview
A full-stack application built for the Bajaj Finserv Health Dev Challenge. The application processes arrays of data, separating numbers and alphabets, and finding the highest alphabet.
Features

Backend REST API with GET and POST endpoints
Frontend interface with JSON input validation
Multi-select filtering of response data
Responsive design

Tech Stack

Backend: [List your backend technologies, e.g., Node.js, Express, Python/Flask, etc.]
Frontend: [List your frontend technologies, e.g., React, Next.js, etc.]
Deployment: [List your hosting platforms, e.g., Heroku, Vercel, Netlify, etc.]

Live Demo

Backend API: [Your deployed backend URL]/bfhl
Frontend Application: [Your deployed frontend URL]

API Documentation
GET /bfhl
Returns a hardcoded operation code.
Response:
jsonCopy{
  "operation_code": 1
}
POST /bfhl
Processes an array of data, separating numbers and alphabets.
Request Body:
jsonCopy{
  "data": ["M", "1", "334", "4", "B"]
}
Response:
jsonCopy{
  "is_success": true,
  "user_id": "your_name_ddmmyyyy",
  "email": "your_email@college.edu",
  "roll_number": "YOUR_ROLL_NUMBER",
  "numbers": ["1", "334", "4"],
  "alphabets": ["M", "B"],
  "highest_alphabet": ["M"]
}
