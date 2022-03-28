const express = require("express");
const fileUpload = require("express-fileupload")
const path = require("path");
const app = express();

function getFunction(request, response){
    response.sendFile(path.join(`${__dirname}/../frontend/index.html`));
}

app.use(fileUpload());

app.get("/", getFunction);
app.use("/pub", express.static(`${__dirname}/../frontend/public`));
app.use("/upload", express.static(`${__dirname}/../frontend/upload`));

const port = 9000;
const ipAddress = `http://127.0.0.1:${port}`;
app.listen(port, () => {
    console.log(ipAddress)
});