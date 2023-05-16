require("dotenv").config();
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const { v4: uuidv4 } = require("uuid");
// local storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop();
    const filename = `${file.fieldname}-${uuidv4()}.${ext}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage, limits: { fileSize: 1048576 } });

module.exports = upload;
