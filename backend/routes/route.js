const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth');
const validation = require('../middleware/validation')
const {isStudent, isAdmin} = require('../middleware/role')

router.get("/students", auth, validation, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Student Access Granted",
    role: req.user.role,
    students: [
      {
        id: 1,
        name: "Ali",
        course: "React",
      },
      {
        id: 2,
        name: "Ahmed",
        course: "Node.js",
      },
      {
        id: 3,
        name: "Sara",
        course: "MongoDB",
      },
    ],
  });
});

// admin route 
router.get('/admin', auth, validation, isAdmin, (req, res) => {
    res.json({
        success : true,
        message : "Admin Access Granted",
        role : 'admin'
    })
})

module.exports = router

