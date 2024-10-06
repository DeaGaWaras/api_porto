const express = require('express');
const router = express.Router();

// Data Sertifikat Mock
const certificates = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    company: 'Udemy',
    type: 'Online Course',
    href: 'https://www.udemy.com/certificate/1234567',
    image: 'https://i.pinimg.com/1200x/65/00/15/650015861555389db8196b4deac90ac6.jpg',
  },
  {
    id: 2,
    title: 'Full-Stack Web Development',
    company: 'Coursera',
    type: 'Specialization',
    href: 'https://www.coursera.org/certificate/7654321',
    image: 'https://i.pinimg.com/1200x/52/19/d9/5219d9b3f4606ed553479e91b2b9b8d2.jpg',
  },
  {
    id: 3,
    title: 'React Native for Beginners',
    company: 'LinkedIn Learning',
    type: 'Online Course',
    href: 'https://www.linkedin.com/certificate/9876543',
    image: 'https://i.pinimg.com/1200x/91/0d/75/910d75fd32c0addef11ae5a24a89814a.jpg',
  },
];

// Route untuk mendapatkan daftar sertifikat
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: certificates,
  });
});

module.exports = router;
