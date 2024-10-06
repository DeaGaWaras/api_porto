const express = require('express');
const router = express.Router();

// Data Project Mock
const projects = [
  {
    id: 1,
    name: 'My Portfolio Website',
    type: 'web',
    url: 'https://radea.my.id',
    imgUrl: 'https://i.postimg.cc/RhpYYHGB/Screenshot-2024-10-06-124433.png',
    keterangan: 'A personal portfolio website built using React and Tailwind CSS.',
  },
  {
    id: 2,
    name: 'Mobile Shopping App',
    type: 'mobile',
    url: 'https://play.google.com/store/apps/details?id=com.shoppingapp',
    imgUrl: 'https://i.postimg.cc/SxPy9XpH/Cosmetics-e-commerce-mobile-app-design.jpg',
    keterangan: 'A cross-platform mobile shopping app built using Flutter.',
  },
  {
    id: 3,
    name: 'AI REST API (BOT)',
    type: 'api',
    url: 'https://api.radea.my.id',
    imgUrl: 'https://i.pinimg.com/1200x/29/df/fe/29dffeb24bcbb18e567a9e96fb089211.jpg',
    keterangan: 'A RESTful API for an AI platform, built with Node.js and Express.',
  },
  {
    id: 4,
    name: 'Portofolio Class',
    type: 'web',
    url: 'https://thebelevens.vercel.app/',
    imgUrl: 'https://i.postimg.cc/FFxNZC4y/Screenshot-2024-07-30-220810.png',
    keterangan: 'A Class portfolio website built using Vue and Tailwind CSS.',
  },
  {
    id: 5,
    name: 'Artificial intelligence (AI) Whatsapp',
    type: 'mobile',
    url: 'https://calestail.shop',
    imgUrl: 'https://i.pinimg.com/1200x/fd/22/27/fd22270b02ab43eaffc61b72e3dd4010.jpg',
    keterangan: 'Whatsapp bot created using Javascript and Baileys Library.',
  },
];

// Route untuk mendapatkan daftar project
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: projects,
  });
});

module.exports = router;
