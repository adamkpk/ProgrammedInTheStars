const express = require('express');
const app = express();
const port = 8080;

app.use(express.static("public")); 

app.get("/", function (req, res) {


});


app.listen(port, () => console.log(`Server has started on port: ${port}`));

