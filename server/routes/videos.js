const express = require('express');
const fs = require('fs');
const crypto = require('crypto');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

const router = express.Router();

function readData() {
    const videoData = fs.readFileSync("./data/database.json");
    const parsedData = JSON.parse(videoData);
    return parsedData
}

router.get('/', (req,res) => {
    res.json(readData());
})

router.get('/:videoID', (req,res) => {
    const videos = readData();
    const singleVideo = videos.find(vid => vid.id === req.params.videoID)
    res.json(singleVideo)
})

router.post('/', (req,res) => {
    const id = crypto.randomBytes(16).toString("hex");
    const video = {
            title: req.body.title,
            description: req.body.description,
            id: id,
            image: "http://localhost:5001/static/Upload-video-preview.jpg",
            timestamp: "1632496261000",
            channel: "Madison's cool demo channel",
            views: "47",
            likes: "25",
            comments: []
        }
        let videoList = readData();
        
        videoList.push(video)

        res.send(videoList)
        
       const allData = fs.writeFile('./data/database.json',JSON.stringify(videoList), (err) => {
           if (err) {
           console.log(err)
        };
       });
       return allData
})

router.post('/:videoID/comments', (req,res) => {

    const id = crypto.randomBytes(16).toString("hex");
    const formatMyDate = (timestamp) => {
        const date = new Date(timestamp)
        let month = date.getUTCMonth() + 1;
        let day = date.getUTCDate();
        const year = date.getUTCFullYear();
        const formattedDate = day + "/" + month + "/" + year;
        return formattedDate;
    }
    const comment = {
        id: id,
        timestamp: formatMyDate(),
        name: "User",
        comment: req.body.comment,
    }

    let currentID = req.params.videoID;
    videoList = readData();
    let ID = videoList.filter((videoList) => {
        if (videoList.id === currentID){
        let commentList = videoList.comments
        console.log(commentList)
    }
        
        
    })

    console.log(ID)

});

module.exports = router;

 
    
//     insideFile = fs.readFile('..data/database.json', 'utf8',(err,data) => {
//         videoData = JSON.parse(data);
//         currentID = req.params.videoID;
//         let iD = videoData.filter((videoList)=> {
//             if (videoList.id === currentID) {
//                 return (videoList.comments)
//             }
//         })
//         res.json(iD[comments])
//     })
// })

// router.delete('/videos/:videoId/comments/:commentID', (req,res) => {

// })
