import multer from "multer";
import path from "path";
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/uploads');
    },
    filename: function(req, file, cb) {
      let ext = path.extname(file.originalname);
      cb(null,Date.now()+ext);
    },
  });
  
export const upload = multer({
  storage: storage
});
