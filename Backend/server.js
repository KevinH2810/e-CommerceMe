var express = require("express")
var app = express()
const cors = require('cors');
const bodyParser = require('body-parser'); 

app.use(cors())
app.use(bodyParser.json())

app.listen(10101, () => console.log(`Express server currently running on port 10101`));