const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const videoRoutes = require('./routes/videos');

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use((req, res, next) => {
  next();
});

app.use('/static', express.static('./public/Images'))

app.use(cors())


app.use('/videos', videoRoutes)

app.use(
  express.urlencoded({
    extended: true
  })
)
  
app.use(express.json())

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())




app.listen(5001, () => {
    console.log("Running On Port 5001");
})

