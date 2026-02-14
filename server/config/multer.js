const multer = require("multer");
const path = require("path");

// სად და რა სახელით შეინახოს ფაილი დროებით
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

// ფაილის ტიპების შემოწმება (მხოლოდ სურათები)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("მხოლოდ სურათების ატვირთვაა ნებადართული!"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

module.exports = upload;
