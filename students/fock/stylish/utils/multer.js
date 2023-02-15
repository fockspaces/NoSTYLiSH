const multer = require("multer");
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop();
    const filename = `${file.fieldname}-${uuidv4()}.${ext}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
