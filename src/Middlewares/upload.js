
import multer from "multer";
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'src/uploads');
    },
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    },
  });
  
export const upload = multer({storage: storage});
