// Activate the Express
const express = require('express');
const app = express();

// multerの準備
const multer = require('multer');
const path = require('path');

// アップロード場所を指定
const tmpDir = path.join(__dirname, 'tmp');
const pubDir = path.join(__dirname, 'pub');
const uploader = multer({ dest: tmpDir });
