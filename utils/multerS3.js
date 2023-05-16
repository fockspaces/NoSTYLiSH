require("dotenv").config();
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { v4: uuidv4 } = require("uuid");

// store in s3
const s3Config = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  Bucket: process.env.AWS_BUCKET_NAME,
  region: process.env.AWS_BUCKET_REGION,
});

const multerS3Config = multerS3({
  s3: s3Config,
  bucket: process.env.AWS_BUCKET_NAME,
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    console.log(file);
    const ext = file.originalname.split(".").pop();
    const filename = `images/${file.fieldname}-${uuidv4()}.${ext}`;
    cb(null, filename);
  },
});

const upload = multer({
  storage: multerS3Config,
});

module.exports = upload;
