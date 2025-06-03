const express = require('express');

const app = express();
const port = Number(process.env.PORT || 3000);
const server = app.listen(port);

// for writing our files
const fs = require('fs');
const path = require('path');

app.use(express.static('public'));

// this prevents people from spamming our server with excessively
// large images.
app.use(express.json({limit: '100mb'}));

console.log(`Server is listening on port ${port}`);

app.post('/save', (request, response) => {
  console.log("saving file");

  console.log(request.body);
  
  // need a unique name, this can technically be overwritten
  // if another request comes in at exactly the same time, but should be
  // ok if you're running the server locally and only expecting updates
  // from one place.
  let filename = `./savedImages/${Date.now()}.png`;

  // from: https://stackoverflow.com/questions/43487543/writing-binary-data-using-node-js-fs-writefile-to-create-an-image-file
  const img = request.body.img;
  const data = img.replace(/^data:image\/\w+;base64,/, "");
  const buf = Buffer.from(data, 'base64');
  fs.writeFile(filename, buf, (err) => {
    if (err) {
      console.log(err);
      response.json({
        "status": 'error',
        "error": err
      });
    } else {
      response.json({
        "status": 'success',
        "savedAs": filename
      });
    }
  });
});
