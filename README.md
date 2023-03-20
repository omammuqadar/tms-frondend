
# `Training Management System`

## `For Khyber Pakhtoonkhwa Youth Employement Program`

Introduction
The Training Management System for Khyber Pakhtunkhwa Employment Program (KPYEP) is a web-based platform designed to facilitate the administration of training sessions, assignments, and user interactions. The system accommodates three roles: Students/Participants, Trainer, and Admins/Management.
Key features include:
Secure login for different user roles
Creation, reading, and updating of training sessions and programs
Assignment uploading, viewing, and marking
Daily feedback for select trainees
Recording of short videos covering all participants during sessions
Daily updates and short reports sharing
Generation of the best participants list at the end of the session
 Admins will create a training session, and its length(e.g. 15 days). Assignments are also created by the admins(most probably students would have daily assignments, so if it is 15 days training, there would be 15 assignments), assignments are checked and marked by the trainer. Students would be able to see there marks. Assignments could be in any format like pdf or image format, trainers should be able to see it without downloading. Assignments could also be uploaded in zip format(trainers would only download to check the assignments
The system is built using the MERN stack (MongoDB, Express, React, and Node.js) with a responsive and user-friendly frontend, and a robust backend handling data storage and manipulation.
The database architecture includes collections for Users, Programs, Sessions, Assignments, Feedback, Videos, Updates, and Reports, with each collection containing relevant data attributes for efficient data management. Example code is provided for setting up Mongoose schema, models, and API routes to create users and upload assignments.

## `Background`

The Khyber Pakhtunkhwa Employment Program (KPYEP) is an initiative by the Khyber Pakhtunkhwa Information Technology Board (KPITB) to empower the youth in the Khyber Pakhtunkhwa (KP) province of Pakistan, particularly in the economic sphere. The program focuses on enhancing specific skills that can be used for online freelancing on various platforms like Upwork, Fiverr, and Freelancer, among others.

KPITB partners with private organizations like ECI to conduct training sessions in different districts of the KP province. The trainers are responsible for delivering these sessions and are expected to provide daily and end-of-session reports to the program managers. The current system relies on Google Sheets for managing the assignments and reporting, which poses limitations in terms of participant access and assignment uploading.

To address these challenges, the proposed Training Management System for KPYEP is designed as a web-based platform to streamline the entire process, making it more efficient and user-friendly. It will allow participants, trainers, and administrators to perform their respective tasks while also providing a centralized platform for managing and sharing all relevant data.

## `User roles`

a. Students: Can upload their daily assignments.
b. Trainers: Can view, mark assignments, provide feedback, record short videos, share updates and daily reports, and generate a list of the best participants.
c. Management: Can create, read, and update programs, sessions, and other relevant data.

## `Frontend`

 A responsive and user-friendly interface designed to work on various devices and screen sizes, catering to the needs of different user roles.

## `Backend`

A robust backend built using the MERN stack (MongoDB, Express, React, and Node.js) to store and manage data, handle user authentication, and provide API endpoints for data manipulation.

## `Database architecture`

Consists of collections like Users, Programs, Sessions, Assignments, Feedback, Videos, Updates, and Reports, each containing relevant attributes for efficient data storage and management.

# Implementation

## `Front end`

 1. Homepage
 2. Header with logo and navigation menu
 3. Welcome message and brief program description
 4. Login button or form for different user roles (Student/Participant, Trainer, Admin)

Student/Participant Dashboard
Welcome message with user name
List of active training sessions with session details
Option to select a session and access its assignments
Assignment upload form with file input and submission button

Trainer Dashboard
Welcome message with user name
List of active training sessions with session details
Option to select a session and access its assignments, feedback, videos, updates, and reports
Assignment marking interface with a list of submitted assignments, grading input, and a submit button
Feedback form for 3-5 trainees with text input and submission button
Video recording interface with start, stop, and upload buttons
Daily update form with text input, highlight and lowlight selectors, and a submit button
Report submission form with file input and submission button
Best participant list generation button

Admin Dashboard
Welcome message with user name
Program and session management interface with options to create, read, and update programs and sessions
Access to all session data, including assignments, feedback, videos, updates, and reports
User management interface with options to add, edit, and remove users

React or Angular can be used to build the actual UI. For the UI design, consider using a component library like Material-UI or Bootstrap to create a consistent and visually appealing interface.

### `Database architecture (using MongoDB)`

`Users: {_id, name, email, password, role}
Programs: {_id, name, description, start_date, end_date}
Sessions: {_id, program_id, center, start_date, end_date, trainer_id, monitor_id, participant_ids[]}
Assignments: {_id, session_id, participant_id, assignment_file, submission_date, marks}
Feedback: {_id, session_id, participant_id, feedback_message, feedback_date}
Videos: {_id, session_id, video_file, video_date}
Updates: {_id, session_id, update_message, update_date}
Reports: {_id, session_id, report_file, report_date}`

Mongoose schema and model for Users

`const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'trainer', 'admin'], required: true },
});`

const User = mongoose.model('User', userSchema);

module.exports = User;





 API route to create a new user
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/create-user', async (req, res) => {
  const { name, email, password, role } = req.body;
  
  try {
    const newUser = new User({ name, email, password, role });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }
});

module.exports = router;


API route to upload an assignment
const express = require('express');
const multer = require('multer');
const router = express.Router();
const Assignment = require('../models/Assignment');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

router.post('/upload-assignment', upload.single('assignment'), async (req, res) => {
  const { session_id, participant_id } = req.body;

  try {
    const newAssignment = new Assignment({
      session_id,
      participant_id,
      assignment_file: req.file.path,
      submission_date: Date.now(),
    });

    await newAssignment.save();
    res.status(201).json({ message: 'Assignment uploaded successfully', assignment: newAssignment });
  } catch (error) {
    res.status(400).json({ message: 'Error uploading assignment', error });
  }
});

module.exports = router;