const express = require('express');
const router = express.Router();
const upload = require('../configs/upload.config.js');
const fileWorker = require('../controllers/upload.controller.js');

  router.get('/api/test', fileWorker.test);
  router.post('/api/uploadfile', upload.single("uploadfile"), fileWorker.upload);

module.exports = router;