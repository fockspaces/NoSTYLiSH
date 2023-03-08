require("dotenv").config();
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { v4: uuidv4 } = require("uuid");
const {S3Client} = require('@aws-sdk/client-s3')

// store in s3
const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
  region: process.env.AWS_BUCKET_REGION,
});

const multerS3Config = multerS3({
  s3,
  bucket: process.env.AWS_BUCKET_NAME,
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    console.log(file);
    const ext = file.originalname.split(".").pop();
    const filename = `${file.fieldname}-${uuidv4()}.${ext}`;
    cb(null, filename);
  },
});

const upload = multer({
  storage: multerS3Config,
});

module.exports = upload;
