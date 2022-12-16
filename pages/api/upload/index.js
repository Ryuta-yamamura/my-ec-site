const formidable = require("formidable");

// これ必要なことに気づかなかった↓
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method !== "POST") return;

  const form = new formidable.IncomingForm();
  form.uploadDir = "./products/";
  form.keepExtensions = true;
  form.parse(req, async function (err, fields, files) {
    if (err) {
      res.statusCode = 500;
      res.json({
        method: req.method,
        error: err
      });
      res.end();
      return;
    }
    const file = files.file;
    console.log(`file is uploaded!${file.name}`);
    res.end();
    // ファイルをなんやかんやする
  });
};